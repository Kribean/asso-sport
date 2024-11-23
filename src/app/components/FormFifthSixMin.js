import NoteResult from "./NoteResult";

const FormFifthSixMin= ({distanceFifth,setDistanceFifth,indiceFifth,is5Validated,autor5,setAutor5,handleUpdatePat,firstnameAcc,idPatient,setIs5Validated})=>{
  
    const handleValid =(dt)=>{

        (distanceFifth>1)&&handleUpdatePat(dt)
        .then(()=>{setAutor5(firstnameAcc);setIs5Validated(true)})
        .catch(error=>console.log(error))
      } 
    return(
        <div  className='collapse gap-2 items-center bg-white border border-gray-200 rounded-lg shadow p-2'>
         <input type="checkbox" className="peer" />
         <div className="collapse-title text-md lg:text-xl font-extrabold  bg-gray-200">
        <div className=' flex flex-row justify-between'>
        <h2 className='text-md lg:text-xl font-extrabold'>Cinquième test : Test 6 minutes marche (permet une évaluation de l’aptitude d’endurance)</h2>
    <div className='flex flex-col items-center justify-center'>
{is5Validated&&autor5?<div className="badge badge-success gap-2 w-fit h-fit">Test réalisé par {autor5}</div>:<div className="badge badge-warning gap-2  w-fit h-fit">Test non réalisé</div> }
    </div>
</div></div>
<div className="collapse-content flex flex-col gap-4 items-center justify-center"> 
<p> Le patient a marché: </p>
           <div className="flex flex-row gap-2 justify-center items-center">
           
           <input className="input input-bordered flex items-center gap-2" type="number" value={distanceFifth} onChange={(e)=>{return setDistanceFifth(e.target.value)}}/>
           <p> mètre</p>
           </div>
            {indiceFifth>0 && <NoteResult note={indiceFifth} />}
            {distanceFifth>1&&<button
             onClick={()=>handleValid({is5Validated:true,autor5:firstnameAcc,distanceFifth:parseFloat(distanceFifth),id:idPatient})}
            className="btn btn-success">Valider le résultat</button>}
</div>
        </div>
    )
}


export default FormFifthSixMin;