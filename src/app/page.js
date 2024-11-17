"use client";
import { useEffect, useState } from "react";
import FormFlexion from "./components/FormFlexion";
import FormForceIso from "./components/FormForceIso";
import FormPersona from "./components/FormPersona";
import dataThird from "./data/json/third_force_iso.json";
import dataFourth from "./data/json/fourth_test_debout.json";
import dataFifth from "./data/json/fifth_6_min.json";
import FormFourthDebout from "./components/FormFourthDebout";
import FormFifthSixMin from "./components/FormFifthSixMin";
import LoginComp from "./components/LoginComp";
import Navbar from "./components/Navbar";
import CardPatient from "./components/CardPatient";
import IMCCompo from "./components/IMCCompo";

export default function Home() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [indiceThird, setIndiceThird] = useState(-1);
  const [indiceFour, setIndiceFour] = useState(-1);
  const [indiceFifth, setIndiceFifth] = useState(-1);
  const [listFourthScore, setListFourthScore] = useState([]);
  const [scoreFourth, setScoreFourth] = useState("");
  const [distanceFifth, setDistanceFifth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dynaWeight1, setDynaWeight1] = useState(0);
  const [dynaWeight2, setDynaWeight2] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [firstnameAcc, setFirstnameAcc] = useState("");
  const [lastnameAcc, setLastnameAcc] = useState("");
  const [isConnected, setIsconnected] = useState(false);
  const [isPatientChoose, setIsPatientChoose] = useState(false);
  const [description, setDescription] = useState('');
  //validation des 5 test
  const [is1Validated, setIs1Validated] = useState(false);
  const [is2Validated, setIs2Validated] = useState(false);
  const [is3Validated, setIs3Validated] = useState(false);
  const [is4Validated, setIs4Validated] = useState(false);
  const [is5Validated, setIs5Validated] = useState(false);
  const [autor1, setAutor1] = useState("");
  const [autor2, setAutor2] = useState("");
  const [autor3, setAutor3] = useState("");
  const [autor4, setAutor4] = useState("");

  const resetForm = () => {
    setAge(0);
    setWeight(0);
    setGender("");
    setIndiceThird(-1);
    setIndiceFour(-1);
    setIndiceFifth(-1);
    setListFourthScore([]);
    setScoreFourth("");
    setDistanceFifth(0);
    setHeight(0);
    setFirstname("");
    setLastname("");
    setEmail("");
    setIsPatientChoose(false);
    setDynaWeight1(-1);
    setDynaWeight2(-1);
    setIs1Validated(false);
    setIs2Validated(false);
    setIs3Validated(false);
    setIs4Validated(false);
    setIs5Validated(false);
    setAutor1("");
    setAutor2("");
    setAutor3("");
    setAutor4("");
    setDescription('');
  };
  const fillFormASAP = (
    ag,
    wg,
    hg,
    gd,
    em,
    fnam,
    lasnam,
    indT,
    indF,
    distF,
    scF
  ) => {
    setAge(ag);
    setWeight(wg);
    setGender(gd);
    setHeight(hg);
    setEmail(em);
    setFirstname(fnam);
    setLastname(lasnam);
    setIndiceThird(indT ?? -1);
    setIndiceFifth(indF ?? -1);
    setDistanceFifth(distF ?? 0);
    setScoreFourth(scF ?? "");
  };
  useEffect(() => {
    let dataSet = dataThird.filter((el) => {
      return el.gender === gender;
    });
    dataSet = dataSet.filter((el) => {
      return (el.age_min ?? -1) <= age && age <= (el.age_max ?? 1000);
    });
    const dynaWeightMean=(parseFloat(dynaWeight1)+parseFloat(dynaWeight2))/2
    console.log(dynaWeightMean,dynaWeight1,dynaWeight2)
    dataSet = dataSet.filter((el) => {
      return (
        (el.weight_min ?? -1) <= dynaWeightMean && dynaWeightMean <= (el.weight_max ?? 1000)
      );
    });
    console.log("third: ",dataSet)
    if (dataSet?.length === 1) {
      setIndiceThird(dataSet[0]?.indice);
    }

    let listSc = dataFourth.filter((el) => {
      return (el.age_min ?? -1) <= age && age <= (el.age_max ?? 1000);
    });
    listSc = listSc.filter((el) => {
      return el.gender == gender;
    });
    setListFourthScore(listSc?.map((e) => e.score));
  }, [age, weight, gender,dynaWeight1,dynaWeight2]);

  //pour le test 4 
  useEffect(()=>{
    let listCal = dataFourth.filter((el) => {
      return (el.age_min ?? -1) <= age && age <= (el.age_max ?? 1000);
    });
    listCal = listCal.filter((el) => {
      return el.gender == gender;
    });
    listCal = listCal.filter((el)=>{return el.score==scoreFourth})
    if(listCal.length===1)
    {
      setIndiceFour(listCal[0].indice)
    }
  },[scoreFourth])
  //fin pour le test 4
  useEffect(() => {
    let dataSixMin = dataFifth.filter((el) => {
      return el.gender === gender;
    });

    dataSixMin = dataSixMin.filter((el) => {
      return (el.age_min ?? -1) <= age && age <= (el.age_max ?? 1000);
    });

    dataSixMin = dataSixMin.filter((el) => {
      return (
        (el.score_min ?? -1) <= distanceFifth &&
        distanceFifth <= (el.score_max ?? 10000)
      );
    });

    if (dataSixMin?.length === 1) {
      setIndiceFifth(dataSixMin[0]?.indice);
    }else if(dataSixMin?.length === 0){
      setIndiceFifth(1);
    }
  }, [distanceFifth]);

  //regarde si l'utilisateur c'est déjà loggué
  useEffect(() => {
    const storeUsername = localStorage.getItem("apasambasa");
    if (storeUsername) {
      try {
        const userJSON = JSON.parse(storeUsername);
        setFirstnameAcc(userJSON?.firstnameAcc);
        setLastnameAcc(userJSON?.lastnameAcc);
        setIsconnected(true);
      } catch (error) {
        console.log("erreur sur: ", error);
      }

      console.log("connected");
    }
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-items-center min-h-screen gap-4 ">
      {!isConnected ? (
        <LoginComp
          firstnameAcc={firstnameAcc}
          lastnameAcc={lastnameAcc}
          setFirstnameAcc={setFirstnameAcc}
          setLastnameAcc={setLastnameAcc}
          setIsconnected={setIsconnected}
        />
      ) : (
        <>
          <Navbar lastnameAcc={lastnameAcc} firstnameAcc={firstnameAcc} />
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {isPatientChoose ? (
              <>
                <CardPatient
                  lastnamePrim={lastname}
                  firstnamePrim={firstname}
                  emailPrim={email}
                  genderPrim={gender}
                  heightPrim={height}
                  weightPrim={weight}
                  isPatientChoose={isPatientChoose}
                  setIsPatientChoose={setIsPatientChoose}
                  fillFormASAP={() => {}}
                  resetForm={resetForm}
                />
                <div className="flex flex-col items-center justify-center m-2 gap-4">
                  <IMCCompo weight={weight} height={height} />
                  <FormFlexion
                    is2Validated={is2Validated}
                    setIs2Validated={setIs2Validated}
                    autor2={autor2}
                    setAutor2={setAutor2}
                    gender={gender}
                    description={description}
                    setDescription={setDescription}
                  />
                  <FormForceIso
                    is3Validated={is3Validated}
                    setIs3Validated={setIs3Validated}
                    autor3={autor3}
                    setAutor3={setAutor3}
                    indiceThird={indiceThird}
                    dynaWeight1={dynaWeight1}
                    setDynaWeight1={setDynaWeight1}
                    dynaWeight2={dynaWeight2}
                    setDynaWeight2={setDynaWeight2}
                  />
                  <FormFourthDebout
                    listFourthScore={listFourthScore}
                    scoreFourth={scoreFourth}
                    setScoreFourth={setScoreFourth}
                    indiceFour={indiceFour}
                  />
                  <FormFifthSixMin
                    indiceFifth={indiceFifth}
                    distanceFifth={distanceFifth}
                    setDistanceFifth={setDistanceFifth}
                  />
                </div>
              </>
            ) : (
              <FormPersona
                email={email}
                lastname={lastname}
                firstname={firstname}
                setEmail={setEmail}
                setLastname={setLastname}
                setFirstname={setFirstname}
                age={age}
                weight={weight}
                gender={gender}
                setAge={setAge}
                setWeight={setWeight}
                setGender={setGender}
                setHeight={setHeight}
                height={height}
                isPatientChoose={isPatientChoose}
                setIsPatientChoose={setIsPatientChoose}
                fillFormASAP={fillFormASAP}
              />
            )}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </>
      )}
    </div>
  );
}
