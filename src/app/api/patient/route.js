import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
    try{
        const patients = await prisma.Patient.findMany()
        /**const patientsTab = patients?.map((e)=>{
            const { etatForme,hypertension,diabete,douleur, pathoOuhandi,...elements}=e
            return {...elements,etatSante:{hypertension,diabete,douleur,pathoOuhandi,etatForme}}
        })*/
        return NextResponse.json(patients, { status: 200 });
    }catch(error)
    {
       return NextResponse.json(
            { error:error,hello: "An issue occurred while fetching patients" },
            { status: 500 }
          );
    }

}

export async function POST(req) {
    try {
  
      const body = await req.json();

      const {
        age,
        weight,
        gender,
        email,
        lastname,
        firstname,
        height,
        etatSante,
        lieu,
        telephone,
      } = body;
      const {hypertension,diabete,douleur,pathoOuhandi,etatForme} = etatSante
      // Vérifier si les champs requis sont présents
      if (
        !age||
        !weight||
        !gender||
        !lastname||
        !firstname||
        !height
      ){
        return NextResponse.json(
            { error: "Tous les champs requis doivent être remplis." },
            { status: 400 }
          );
      }
  
      // Créer un nouvel article
      const newPatient = await prisma.Patient.create({
        data: {
            age:parseInt(age),
            weight:parseFloat(weight),
            gender,
            email,
            lastname,
            firstname,
            height:parseFloat(height),
            lieu,
            telephone,
            hypertension,
            diabete,
            douleur,
            pathoOuhandi,
            etatForme:parseInt(etatForme)
        },
      });
  
      return NextResponse.json({idPatient:newPatient.id}, { status: 201 });
    } catch (error) {

      return NextResponse.json(
        { error: error },
        { status: 500 }
      );
    }
  };

  export async function PUT(req) {
    try {
      const body = await req.json();
  
      const { id, ...updateData } = body;
  
      // Vérifie si un ID est fourni
      if (!id) {
        return NextResponse.json(
          { error: "ID du patient requis pour la mise à jour." },
          { status: 400 }
        );
      }
      // Si aucun champ valide n'est fourni
      if (Object.keys(updateData).length === 0) {
        return NextResponse.json(
          { error: "Aucun champ valide à mettre à jour." },
          { status: 400 }
        );
      }
  
      // Mise à jour dans la base de données
      const updatedPatient = await prisma.Patient.update({
        where: { id },
        data: updateData,
      });
  
      return NextResponse.json(updatedPatient, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Erreur lors de la mise à jour du patient." },
        { status: 500 }
      );
    }
  }