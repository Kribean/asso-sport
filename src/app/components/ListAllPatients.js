"use client";

import { useEffect, useState } from "react";
import CardPatient from "./CardPatient";

const ListAllPatients = ({isPatientChoose,setIsPatientChoose,fillFormASAP,dataR}) => {
    const [filt,setFilt]=useState("")
  const [data, setData] = useState([]);
  const [dataRaw, setDataRaw] = useState([]);
  useEffect(() => {
  
      setDataRaw(dataR)
      setData(dataR)
      console.log("oooo",data)

  }, []);

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
              lastnamePrim={e?.lastname}
              firstname={e?.firstname}
              emailPrim={e?.email}
              genderPrim={e?.gender}
              heightPrim={e?.height}
              weightPrim={e?.weight}
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
