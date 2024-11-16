const FormFourthDebout = ({listFourthScore,scoreFourth,setScoreFourth})=>{

    return(
        <div className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow " >
            <h2 className='text-lg lg:text-xl font-extrabold'>Quatrième test : Test debout - assis 30 secondes (force au niveau des membres inférieurs)</h2>
            <label>
        Score:
        <select value={scoreFourth} onChange={(e)=>{setScoreFourth(e.target.value)}}>
          <option value="">Sélectionnez</option>
         {listFourthScore?.map((e,index)=>{return <option key={index} value={e}>{e}</option>}) }
        </select>
      </label>
      <button className="btn btn-success">Valider le résultat</button>
        </div>
    )
}

export default FormFourthDebout;