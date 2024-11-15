const FormPersona = ({ age, weight, gender, setAge, setWeight, setGender,email,lastname,firstname,setEmail,setLastname,setFirstname }) => {
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" 
        className="grow" 
        placeholder="Nom de famille"
        value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
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
    </div>
  );
};

export default FormPersona;