const CreatePatient = ({ age, weight, gender, setAge, setWeight,setHeight,height, setGender,email,lastname,firstname,setEmail,setLastname,setFirstname })=>{
    const handleGenderChange = (e) => {
        setGender(e.target.value);
      };
    
    return(
        <div className="flex flex-col w-full gap-4 p-4 ">
                <details className="collapse bg-base-200 w-full gap-4">
      <summary className="collapse-title text-md font-medium w-full gap-4">
      Créer un nouveau patient
      </summary>
<div className="flex flex-col w-full gap-2">
<p>Email</p>
<label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </label>

        <p>Nom de famille</p>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" 
          className="grow" 
          placeholder="Nom de famille"
          value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
        </label>
        <p>Prénom</p>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" 
          className="grow" 
          placeholder="Prénom"
          value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} />
        </label>
        <p>Genre</p>
        <label>
          <select className="input input-bordered flex items-center gap-2" value={gender} onChange={handleGenderChange}>
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
          min="100" max="300"
          placeholder="Taille en centimètre"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button className="btn btn-primary m-2"> Créer patient</button>
</div>
        </details>
      </div>
    )
}

export default CreatePatient;