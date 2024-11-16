const CreatePatient = ({ age, weight, gender, setAge, setWeight,setHeight,height, setGender,email,lastname,firstname,setEmail,setLastname,setFirstname })=>{
    const handleGenderChange = (e) => {
        setGender(e.target.value);
      };
    
    return(
        <div className="flex flex-col w-full gap-4 p-4">
        <h1 className="text-xl font-extrabold">Créer un nouveau patient</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" 
          className="grow" 
          placeholder="Nom de famille"
          value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" 
          className="grow" 
          placeholder="Prénom"
          value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} />
        </label>
        <label>
          Genre:
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
        <p>Poids</p>
        <input
        className="input input-bordered flex items-center gap-2"
          type="number"
          placeholder="poids"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
        className="input input-bordered flex items-center gap-2"
          type="number"
          min="100" max="300"
          placeholder="Taille en centimètre"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
    )
}

export default CreatePatient;