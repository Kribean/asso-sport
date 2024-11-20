"use client";
import { useState } from "react";

const CreatePatient = ({
  setIsPatientChoose,
  isPatientChoose,
  age,
  weight,
  gender,
  setAge,
  setWeight,
  setHeight,
  height,
  setGender,
  email,
  lastname,
  firstname,
  setEmail,
  setLastname,
  setFirstname,
  dataR,
  etatSante,
  setEtatSante,
  lieu,
  setLieu,
  telephone,
  setTelephone,
}) => {
  const [hypertension,setHypertension]=useState(false)
  const [diabete,setDiabete]=useState(false)
  const [douleur,setDouleur]=useState(false)
  const [pathoOuhandi,setPathoOuhandi]=useState("")
  const [etatForme,setEtatForme]=useState("0")
  const [patientExist, setPatientExist] = useState(false);

  const handleGenderChange = (e) => {
    setEtatSante({hypertension,diabete,douleur,pathoOuhandi,etatForme})
    setGender(e.target.value);
  };

  const handleCreatePat=()=>{

    if(gender&&lastname&&firstname)
    {
      fetch(`/api/patient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Toujours spécifier le content-type pour JSON
        },
        body: JSON.stringify({
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
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json(); // Parse seulement si res.ok
        })
        .then((data) => {
          setPatientExist(false);
          setIsPatientChoose(true);
        })
        .catch((error) => {
          console.error("Failed to submit patient:", error);
        });
    }

  }

  

  return (
    <div className="flex flex-col w-full gap-4 p-4 ">
      <details className="collapse bg-base-200 w-full gap-4">
        <summary className="collapse-title text-md font-medium w-full gap-4">
          Créer un nouveau patient
        </summary>
        <div className="flex flex-col w-full gap-2">
          <p>Email</p>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <p>Nom de famille</p>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Nom de famille"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </label>
          <p>Prénom</p>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Prénom"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </label>
          <p>Genre</p>
          <label>
            <select
              className="input input-bordered flex items-center gap-2"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="">Sélectionnez</option>
              <option value="Hommes">Homme</option>
              <option value="Femmes">Femme</option>
            </select>
          </label>
          <p>Age</p>
          <input
            className="input input-bordered flex items-center gap-2"
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p>Poids en kg</p>
          <input
            className="input input-bordered flex items-center gap-2"
            type="number"
            placeholder="poids"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <p>Taille en cm</p>
          <input
            className="input input-bordered flex items-center gap-2"
            type="number"
            min="100"
            max="300"
            placeholder="Taille en centimètre"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <p>Téléphone</p>
          <input
            className="input input-bordered flex items-center gap-2"
            value={telephone}
            onChange={(e)=>{setTelephone(e.target.value)}}
            type="text"/>
            <p>Lieu</p>
            <input
            className="input input-bordered flex items-center gap-2"
            value={lieu}
            onChange={(e)=>{setLieu(e.target.value)}}
            type="text"/>
            <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Hypertension</span>
    <input type="checkbox" value={hypertension} onChange={()=>{setHypertension(!hypertension)}} className="checkbox" />
  </label>
  <label className="label cursor-pointer">
    <span className="label-text">Diabète</span>
    <input type="checkbox" value={diabete} onChange={()=>{setDiabete(!diabete)}} className="checkbox" />
  </label>
  <label className="label cursor-pointer">
    <span className="label-text">Douleur</span>
    <input type="checkbox" value={douleur} onChange={()=>{console.log(!douleur);setDouleur(!douleur)}} className="checkbox" />
  </label>
  <p>Pathologies ou handicaps</p>
    <input type="text" value={pathoOuhandi} onChange={(e)=>{setPathoOuhandi(e.target.value)}} className="input input-bordered" />
  <p>Etat forme perçu: </p>
            <select
              className="input input-bordered flex items-center gap-2"
              value={etatForme}
              onChange={(e)=>{setEtatForme(e.target.value)}}
            >
              <option value="">Sélectionnez</option>
              <option value="1">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

</div>
          <button className="btn btn-primary m-2" onClick={handleCreatePat}>
            {" "}
            Créer patient
          </button>
        </div>
      </details>
    </div>
  );
};

export default CreatePatient;
