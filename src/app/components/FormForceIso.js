"use client"

import NoteResult from "./NoteResult";

function FormForceIso({indiceThird,is3Validated, setIs3Validated,autor3,setAutor3,dynaWeight1,setDynaWeight1,dynaWeight2,setDynaWeight2,firstnameAcc,handleUpdatePat,idPatient}) {

  const handleValid =(dt)=>{

    (parseFloat(dynaWeight2)>0&&parseFloat(dynaWeight1)>0)&&handleUpdatePat(dt)
    .then(()=>{setAutor3(firstnameAcc);setIs3Validated(true)})
    .catch(error=>console.log(error))
  } 
    return (
      <div  className='collapse gap-2 items-center bg-white border border-gray-200 rounded-lg shadow p-2'>
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-md lg:text-xl font-extrabold  bg-gray-200">
        <div className=' flex flex-row justify-between'>
        <h2 className='text-md lg:text-lg font-extrabold'>Troisième test : Mesure de la force isométrique des muscles de la main et de l’avant bras ( force de préhension)</h2>
    <div className='flex flex-col items-center justify-center'>
{is3Validated&&autor3?<div className="badge badge-success gap-2 w-fit h-fit">Test réalisé par {autor3}</div>:<div className="badge badge-warning gap-2  w-fit h-fit">Test non réalisé</div> }
    </div>
</div></div>
<div className="collapse-content flex flex-col">      
        <div className="flex flex-col gap-2">
          <p>Rentrez la première valeur relevé sur le dynamomètre (en kg)</p> 
          <div className="flex flex-row gap-2">
          <input type="number" value={dynaWeight1} onChange={(e)=>{setDynaWeight1(e.target.value)}} className="input input-bordered "/><p>kg</p>
          </div>
          <p>Rentrez la deuxième valeur relevé sur le dynamomètre (en kg)</p> 
          <div className="flex flex-row gap-2">
          <input type="number" value={dynaWeight2} onChange={(e)=>{setDynaWeight2(e.target.value)}} className="input input-bordered "/><p>kg</p>
          </div>

        </div>
<div className="flex flex-col items-center justify-center gap-4">
{(dynaWeight1>0&&dynaWeight2>0)&&
<>
<NoteResult note={indiceThird}/>
{is3Validated&&autor3? <button onClick={()=>handleValid({is3Validated:true,autor3:firstnameAcc,dynaWeight2:parseFloat(dynaWeight2),dynaWeight1:parseFloat(dynaWeight1),id:idPatient,indiceThird})} className="btn btn-warning">Modifier et Valider le résultat</button>:<button onClick={()=>handleValid({is3Validated:true,autor3:firstnameAcc,dynaWeight2:parseFloat(dynaWeight2),dynaWeight1:parseFloat(dynaWeight1),id:idPatient,indiceThird})} className="btn btn-success">Valider le résultat</button>}
</>
}

</div>
</div>
  </div>
    );
  }
  
export default FormForceIso;

