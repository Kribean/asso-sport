import NoteResult from "./NoteResult";

const FormFifthSixMin= ({distanceFifth,setDistanceFifth,indiceFifth})=>{

    return(
        <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 rounded-lg shadow p-2 ">
         <h2 className='text-lg lg:text-xl font-extrabold'>Cinquième test : Test 6 minutes marche (permet une évaluation de l’aptitude d’endurance)</h2>

            <input className="input input-bordered flex items-center gap-2" type="number" value={distanceFifth} onChange={(e)=>{return setDistanceFifth(e.target.value)}}/>
        <NoteResult note={indiceFifth}/>
        <button className="btn btn-success">Valider le résultat</button>
        </div>
    )
}

export default FormFifthSixMin;