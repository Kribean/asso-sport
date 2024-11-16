import CreatePatient from "./CreatePatient";
import IMCCompo from "./IMCCompo";

const FormPersona = ({height,setHeight, age, weight, gender, setAge, setWeight, setGender,email,lastname,firstname,setEmail,setLastname,setFirstname }) => {

  return (
  <div>
<CreatePatient
age={age}
weight={weight}
gender={gender}
setAge={setAge}
setWeight={setWeight}
setGender={setGender}
email={email}
lastname={lastname}
firstname={firstname}
setEmail={setEmail}
setLastname={setLastname}
setFirstname={setFirstname}
setHeight={setHeight}
height={height}/>
<IMCCompo weight={weight} height={height} />
</div>
  );
};

export default FormPersona;
