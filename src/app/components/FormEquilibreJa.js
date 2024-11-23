import NoteResult from "./NoteResult";

const FormEquilibreJa=({indiceFirst,autor1,setAutor1,setIs1Validated,handleUpdatePat,is1Validated,firstnameAcc,idPatient,timeFirst,setTimeFirst})=>{

    const handleValid =(dt)=>{

        (timeFirst>0)&&handleUpdatePat(dt)
        .then(()=>{setAutor1(firstnameAcc);setIs1Validated(true)})
        .catch(error=>console.log(error))
      } 
    return(
        <div  className='collapse gap-2 items-center bg-white border border-gray-200 rounded-lg shadow p-2'>
         <input type="checkbox" className="peer" />
         <div className="collapse-title text-md lg:text-xl font-extrabold  bg-gray-200">
        <div className=' flex flex-row justify-between'>
        <h2 className='text-md lg:text-xl font-extrabold'>Premier test : Equilibre sur une iambe (équilibre statique)</h2>
    <div className='flex flex-col items-center justify-center'>
{is1Validated&&autor1?<div className="badge badge-success gap-2 w-fit h-fit">Test réalisé par {autor1}</div>:<div className="badge badge-warning gap-2  w-fit h-fit">Test non réalisé</div> }
    </div>
</div></div>
<div className="collapse-content flex flex-col gap-4 items-center justify-center"> 
<p> Le patient a tenu: </p>
           <div className="flex flex-row gap-2 justify-center items-center">
           
           <input className="input input-bordered flex items-center gap-2" type="number" value={timeFirst} onChange={(e)=>{return setTimeFirst(e.target.value)}}/>
           <p> seconde</p>
           </div>
            {indiceFirst>0 && <NoteResult note={indiceFirst} />}
            {timeFirst>0&&<button
             onClick={()=>handleValid({is1Validated:true,autor1:firstnameAcc,timeFirst:parseFloat(timeFirst),id:idPatient,indiceFirst:parseInt(indiceFirst)})}
            className="btn btn-success">Valider le résultat</button>}
</div>
        </div>
    )
}

export default FormEquilibreJa;