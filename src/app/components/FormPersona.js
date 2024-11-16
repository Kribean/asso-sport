import CreatePatient from "./CreatePatient";
import ListAllPatients from "./ListAllPatients";

const FormPersona = ({height,setHeight, age, weight, gender, setAge, setWeight, setGender,email,lastname,firstname,setEmail,setLastname,setFirstname,isPatientChoose,setIsPatientChoose,fillFormASAP }) => {

  return (
  <div className="flex flex-col w-full">
    <ListAllPatients
                            isPatientChoose={isPatientChoose}
                            setIsPatientChoose={setIsPatientChoose}
                            fillFormASAP={fillFormASAP}
    />
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

</div>
  );
};

export default FormPersona;
