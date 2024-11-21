import NoteResult from "./NoteResult";

const FormFourthDebout = ({listFourthScore,scoreFourth,setScoreFourth,indiceFour,is4Validated,autor4,setIs4Validated,setAutor4,handleUpdatePat,firstnameAcc,idPatient})=>{

  const handleValid =(dt)=>{

    (indiceFour>0)&&handleUpdatePat(dt)
    .then(()=>{setAutor4(firstnameAcc);setIs4Validated(true)})
    .catch(error=>console.log(error))
  } 
    return(
      <div  className='collapse gap-2 items-center bg-white border border-gray-200 rounded-lg shadow p-2'>
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-md lg:text-xl font-extrabold  bg-gray-200">
        <div className=' flex flex-row justify-between'>
        <h2 className='text-md lg:text-lg lg:text-xl font-extrabold'>Quatrième test : Test debout - assis 30 secondes (force au niveau des membres inférieurs)</h2>
    <div className='flex flex-col items-center justify-center'>
{is4Validated&&autor4?<div className="badge badge-success gap-2 w-fit h-fit">Test réalisé par {autor4}</div>:<div className="badge badge-warning gap-2  w-fit h-fit">Test non réalisé</div> }
    </div>
</div></div>
<div className="collapse-content flex flex-col gap-4 items-center justify-center">            
<p>Nombre de levées (approximatif):</p>
        
        <select className="input input-bordered" value={scoreFourth} onChange={(e)=>{setScoreFourth(e.target.value)}}>
          <option value="">Sélectionnez</option>
         {listFourthScore?.map((e,index)=>{return <option key={index} value={e}>{e}</option>}) }
        </select>
      
      {indiceFour>0 && <NoteResult note={indiceFour} />}
      {scoreFourth>1&&<button onClick={()=>handleValid({is4Validated:true,autor4:firstnameAcc,indiceFour,scoreFourth,id:idPatient})} className="btn btn-success">Valider le résultat</button>}
      </div>
        </div>
    )
}

export default FormFourthDebout;