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
import NbrTest from "./components/NbrTest";

export default function Home() {
  const [idPatient, setIdPatient] = useState("");
  const [dataR, setDataR] = useState([]);
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
  const [createdAt, setCreatedAt] = useState();
  const [firstnameAcc, setFirstnameAcc] = useState("");
  const [lastnameAcc, setLastnameAcc] = useState("");
  const [isConnected, setIsconnected] = useState(false);
  const [isPatientChoose, setIsPatientChoose] = useState(false);
  const [description, setDescription] = useState("");
  //param santé
  const [etatSante, setEtatSante] = useState({
    hypertension: false,
    diabete: false,
    douleur: false,
    pathoOuhandi: false,
    etatForme: 0,
  });
  const [lieu, setLieu] = useState("");
  const [telephone, setTelephone] = useState("");
  //validation des 5 test
  const [is1Validated, setIs1Validated] = useState(true);
  const [is2Validated, setIs2Validated] = useState(true);
  const [is3Validated, setIs3Validated] = useState(true);
  const [is4Validated, setIs4Validated] = useState(true);
  const [is5Validated, setIs5Validated] = useState(true);
  const [autor1, setAutor1] = useState("");
  const [autor2, setAutor2] = useState("");
  const [autor3, setAutor3] = useState("");
  const [autor4, setAutor4] = useState("");
  const [autor5, setAutor5] = useState("");
  const [nbrTestVal, setNbrTestVal] = useState(0);

  useEffect(() => {
    fetch("/api/patient")
      .then((data) => {
        if (!data.ok) {
          throw Error("cannot fetch");
        }
        return data.json();
      })
      .then((res) => {
        console.log("ya: ", res);
        setDataR(res);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const convertFct = (x) => {
      return x ? 1 : 0;
    };
    const val =
      convertFct(is1Validated) +
      convertFct(is2Validated) +
      convertFct(is3Validated) +
      convertFct(is4Validated) +
      convertFct(is5Validated);
    setNbrTestVal(val);
  }, [is1Validated, is2Validated, is3Validated, is4Validated, is5Validated]);

  const handleSendFormToClient = () => {};
  //reset le formulaire
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
    setAutor5("");
    setDescription("");
    setEtatSante({
      hypertension: false,
      diabete: false,
      douleur: false,
      pathoOuhandi: false,
      etatForme: 0,
    });
    setLieu("");
    setTelephone("");
    setIdPatient("");
    setCreatedAt(null);
  };
  const fillFormASAP = (
    ag, // âge
    wg, // poids
    gd,
    ind3,
    ind4,
    ind5,
    sc4,
    dist5,
    hg,
    fnam,
    lnam,
    ema,
    isptch,
    dynW1,
    dynW2,
    is1V,
    is2V,
    is3V,
    is4V,
    is5V,
    aut1,
    aut2,
    aut3,
    aut4,
    aut5,
    descp,
    etatSan,
    lieu,
    tel,
    id,
    createdat
  ) => {
    setAge(ag ?? 0);
    setWeight(wg ?? 0);
    setGender(gd ?? "");
    setIndiceThird(ind3 ?? -1);
    setIndiceFour(ind4 ?? -1);
    setIndiceFifth(ind5 ?? -1);
    setScoreFourth(sc4 ?? "");
    setDistanceFifth(dist5 ?? 0);
    setHeight(hg ?? 0);
    setFirstname(fnam ?? "");
    setLastname(lnam ?? "");
    setEmail(ema ?? "");
    setIsPatientChoose(isptch ?? false);
    setDynaWeight1(dynW1 ?? -1);
    setDynaWeight2(dynW2 ?? -1);
    setIs1Validated(is1V ?? false);
    setIs2Validated(is2V ?? false);
    setIs3Validated(is3V ?? false);
    setIs4Validated(is4V ?? false);
    setIs5Validated(is5V ?? false);
    setAutor1(aut1 ?? "");
    setAutor2(aut2 ?? "");
    setAutor3(aut3 ?? "");
    setAutor4(aut4 ?? "");
    setAutor5(aut5 ?? "");
    setDescription(descp ?? "");
    setEtatSante(
      etatSan ?? {
        hypertension: false,
        diabete: false,
        douleur: false,
        pathoOuhandi: false,
        etatForme: 0,
      }
    );
    setLieu(lieu ?? "");
    setTelephone(tel ?? "");
    setIdPatient(id ?? "");
    setCreatedAt(createdat ?? null);
  };
  useEffect(() => {
    let dataSet = dataThird.filter((el) => {
      return el.gender === gender;
    });
    console.log(dataSet,"faya bun")
    dataSet = dataSet.filter((el) => {
      return (el.age_min ?? -1) <= age && age <= (el.age_max ?? 1000);
    });
    const dynaWeightMean =
      (parseFloat(dynaWeight1) + parseFloat(dynaWeight2)) / 2;
    console.log(dataSet,dynaWeightMean, dynaWeight1, dynaWeight2,"badama",age,gender);
    dataSet = dataSet.filter((el) => {
      return (
        (el.weight_min ?? -1) <= dynaWeightMean &&
        dynaWeightMean <= (el.weight_max ?? 1000)
      );
    });
    console.log("third: ", dataSet);
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
  }, [age, weight, gender, dynaWeight1, dynaWeight2]);

  //pour le test 4
  useEffect(() => {
    let listCal = dataFourth.filter((el) => {
      return (el.age_min ?? -1) <= age && age <= (el.age_max ?? 1000);
    });
    listCal = listCal.filter((el) => {
      return el.gender == gender;
    });
    listCal = listCal.filter((el) => {
      return el.score == scoreFourth;
    });
    if (listCal.length === 1) {
      setIndiceFour(listCal[0].indice);
    }
  }, [scoreFourth]);
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
    } else if (dataSixMin?.length === 0) {
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

  const handleUpdatePat = async (myUpdt) => {
    if (myUpdt?.id) {
      fetch("/api/patient", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id:myUpdt?.id,
          ...myUpdt,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update patient");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Patient updated successfully:", data);
        })
        .catch((error) => console.error("Error updating patient:", error));
    }
  };
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
                  idPrim={idPatient}
                  agePrim={age}
                  weightPrim={weight}
                  genderPrim={gender}
                  indiceThirdPrim={indiceThird}
                  indiceFourPrim={indiceFour}
                  indiceFifthPrim={indiceFifth}
                  scoreFourthPrim={scoreFourth}
                  distanceFifthPrim={distanceFifth}
                  heightPrim={height}
                  firstnamePrim={firstname}
                  lastnamePrim={lastname}
                  emailPrim={email}
                  dynaWeight1Prim={dynaWeight1}
                  dynaWeight2Prim={dynaWeight2}
                  is1ValidatedPrim={is1Validated}
                  is2ValidatedPrim={is2Validated}
                  is3ValidatedPrim={is3Validated}
                  is4ValidatedPrim={is4Validated}
                  is5ValidatedPrim={is5Validated}
                  autor1Prim={autor1}
                  autor2Prim={autor2}
                  autor3Prim={autor3}
                  autor4Prim={autor4}
                  autor5Prim={autor5}
                  descriptionPrim={description}
                  telephonePrim={telephone}
                  lieuPrim={lieu}
                  hypertensionPrim={etatSante?.hypertension}
                  diabetePrim={etatSante?.diabete}
                  douleurPrim={etatSante?.douleur}
                  pathoOuhandiPrim={etatSante?.pathoOuhandi}
                  etatFormePrim={etatSante?.etatForme}
                  createdAtPrim={createdAt}
                  isPatientChoose={isPatientChoose}
                  setIsPatientChoose={setIsPatientChoose}
                  fillFormASAP={() => {}}
                  resetForm={resetForm}
                />
                <div className="flex flex-col items-center justify-center m-2 gap-4">
                  <NbrTest
                    handleSendFormToClient={handleSendFormToClient}
                    nbrTestVal={nbrTestVal}
                  />
                  <IMCCompo weight={weight} height={height} />
                  <FormFlexion
                    is2Validated={is2Validated}
                    setIs2Validated={setIs2Validated}
                    autor2={autor2}
                    setAutor2={setAutor2}
                    gender={gender}
                    description={description}
                    setDescription={setDescription}
                    handleUpdatePat={handleUpdatePat}
                    idPatient={idPatient}
                    firstnameAcc={firstnameAcc}
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
                    firstnameAcc={firstnameAcc}
                    handleUpdatePat={handleUpdatePat}
                    idPatient={idPatient}
                  />
                  <FormFourthDebout
                    listFourthScore={listFourthScore}
                    scoreFourth={scoreFourth}
                    setScoreFourth={setScoreFourth}
                    indiceFour={indiceFour}
                    is4Validated={is4Validated}
                    autor4={autor4}
                  />
                  <FormFifthSixMin
                    is5Validated={is5Validated}
                    autor5={autor5}
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
                etatSante={etatSante}
                setEtatSante={setEtatSante}
                lieu={lieu}
                setLieu={setLieu}
                telephone={telephone}
                setTelephone={setTelephone}
                dataR={dataR}
                setIdPatient={setIdPatient}
              />
            )}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </>
      )}
    </div>
  );
}
