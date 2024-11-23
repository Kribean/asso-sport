import CreatePatient from "./CreatePatient";
import ListAllPatients from "./ListAllPatients";

const FormPersona = ({
  height,
  setHeight,
  age,
  weight,
  gender,
  setAge,
  setWeight,
  setGender,
  email,
  lastname,
  firstname,
  setEmail,
  setLastname,
  setFirstname,
  isPatientChoose,
  setIsPatientChoose,
  fillFormASAP,
  hypertension,
  diabete,
  douleur,
  pathoOuhandi,
  etatForme,
  setHypertension,
  setDiabete,
  setDouleur,
  setPathoOuhandi,
  setEtatForme,
  lieu,
  setLieu,
  telephone,
  setTelephone,
  dataR,
  setIdPatient
}) => {

  return (
    <div className="flex flex-col w-full">
      <ListAllPatients
        isPatientChoose={isPatientChoose}
        setIsPatientChoose={setIsPatientChoose}
        fillFormASAP={fillFormASAP}
        dataR={dataR}
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
        height={height}
        dataR={dataR}
        isPatientChoose={isPatientChoose}
        setIsPatientChoose={setIsPatientChoose}
        hypertension={hypertension}
        diabete={diabete}
        douleur={douleur}
        pathoOuhandi={pathoOuhandi}
        etatForme={etatForme}
        setHypertension={setHypertension}
        setDiabete={setDiabete}
        setDouleur={setDouleur}
        setPathoOuhandi={setPathoOuhandi}
        setEtatForme={setEtatForme}
        lieu={lieu}
        setLieu={setLieu}
        telephone={telephone}
        setTelephone={setTelephone}
        setIdPatient={setIdPatient}
      />
    </div>
  );
};

export default FormPersona;
