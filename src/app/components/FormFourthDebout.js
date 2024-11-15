const FormFourthDebout = ({listFourthScore,scoreFourth,setScoreFourth})=>{

    return(
        <div>
            <h2 className='text-lg lg:text-xl font-extrabold'>Quatrième test : Test debout - assis 30 secondes (force au niveau des membres inférieurs)</h2>
            <label>
        Score:
        <select value={scoreFourth} onChange={(e)=>{setScoreFourth(e.target.value)}}>
          <option value="">Sélectionnez</option>
         {listFourthScore?.map((e,index)=>{return <option key={index} value={e}>{e}</option>}) }
        </select>
      </label>
        </div>
    )
}

export default FormFourthDebout;