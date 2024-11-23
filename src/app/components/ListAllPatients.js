"use client";

import { useEffect, useState } from "react";
import CardPatient from "./CardPatient";

const ListAllPatients = ({isPatientChoose,setIsPatientChoose,fillFormASAP,dataR}) => {
  console.log(dataR,"dattttt")
    const [filt,setFilt]=useState("")
  const [data, setData] = useState([]);
  const [dataRaw, setDataRaw] = useState([]);
  useEffect(() => {
  
      setDataRaw(dataR)
      setData(dataR)

  }, [dataR]);

  const handleFilter = (x)=>{

    let dataNew = dataRaw.filter((e)=>{
        return e.email?.includes(x)})

    setData(dataNew)
  }

  useEffect(()=>{

    filt?.length>0&&handleFilter(filt)
  },[filt])
  return (
    <details className="collapse bg-base-200">
      <summary className="collapse-title text-md font-medium">
        Cliquer et choisisser un patient existant{" "}
      </summary>
      <div className="flex flex-col gap-4 bg-[#d9f99d]">
        <div className="flex flex-col gap-2 m-4">
          <p>Recherche par email</p>
          <div className="flex flex-row gap-4">
          <input type="text" className="input input-bordered w-full max-w-xs" value={filt} onChange={(e)=>{setFilt(e.target.value)}} />
          <button className="btn btn-warning btn-sm">Réinitialiser</button>
          </div>
        </div>
<div className=" flex flex-col gap-2 m-4">
{data.map((e, index) => {
          return (
            <CardPatient
              key={index}
              idPrim={e?.id}
              agePrim={e?.age}               
              weightPrim={e?.weight}            
              genderPrim={e?.gender}            
              indiceThirdPrim={e?.indiceThird}       
              indiceFourPrim={e?.indiceFour}        
              indiceFifthPrim={e?.indiceFifth}       
              scoreFourthPrim={e?.scoreFourth}       
              distanceFifthPrim={e?.distanceFifth}     
              heightPrim={e?.height}            
              firstnamePrim={e?.firstname}       
              lastnamePrim={e?.lastname}        
              emailPrim={e?.email}           
              dynaWeight1Prim={e?.dynaWeight1}     
              dynaWeight2Prim={e?.dynaWeight2}     
              is1ValidatedPrim={e?.is1Validated}     
              is2ValidatedPrim={e?.is2Validated}      
              is3ValidatedPrim={e?.is3Validated}      
              is4ValidatedPrim={e?.is4Validated}      
              is5ValidatedPrim={e?.is5Validated}      
              autor1Prim={e?.autor1}          
              autor2Prim={e?.autor2}          
              autor3Prim={e?.autor3}          
              autor4Prim={e?.autor4}          
              autor5Prim={e?.autor5}          
              descriptionPrim={e?.description}     
              telephonePrim={e?.telephone}       
              lieuPrim={e?.lieu}            
              hypertensionPrim={e?.hypertension}      
              diabetePrim={e?.diabete}           
              douleurPrim={e?.douleur}           
              pathoOuhandiPrim={e?.pathoOuhandi}    
              etatFormePrim={e?.etatForme}         
              createdAtPrim={e?.createdAt}         
              isPatientChoose={isPatientChoose}
              setIsPatientChoose={setIsPatientChoose}
              fillFormASAP={fillFormASAP}
              resetForm={()=>{}}
            />
          );
        })}
</div>
      </div>
    </details>
  );
};

export default ListAllPatients;
