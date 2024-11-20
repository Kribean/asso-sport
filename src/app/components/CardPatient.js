const CardPatient = ({
  idPrim,
  agePrim,
  weightPrim,
  genderPrim,
  indiceThirdPrim,
  indiceFourPrim,
  indiceFifthPrim,
  scoreFourthPrim,
  distanceFifthPrim,
  heightPrim,
  firstnamePrim,
  lastnamePrim,
  emailPrim,
  dynaWeight1Prim,
  dynaWeight2Prim,
  is1ValidatedPrim,
  is2ValidatedPrim,
  is3ValidatedPrim,
  is4ValidatedPrim,
  is5ValidatedPrim,
  autor1Prim,
  autor2Prim,
  autor3Prim,
  autor4Prim,
  autor5Prim,
  descriptionPrim,
  telephonePrim,
  lieuPrim,
  hypertensionPrim,
  diabetePrim,
  douleurPrim,
  pathoOuhandiPrim,
  etatFormePrim,
  createdAtPrim,
  isPatientChoose,
  setIsPatientChoose,
  fillFormASAP,
  resetForm,
}) => {
  const handleChooseUser = () => {
    //ag,wg,hg,gd,em,fnam,lasnam,indT,indF,distF
    const id = idPrim;
    const ag = agePrim; // âge
    const wg = weightPrim;
    const gd = genderPrim;
    const ind3 = indiceThirdPrim;
    const ind4 = indiceFourPrim;
    const ind5 = indiceFifthPrim;
    const sc4 = scoreFourthPrim; //Nombre de levées
    const dist5 = distanceFifthPrim;
    const hg = heightPrim;
    const fnam = firstnamePrim;
    const lnam = lastnamePrim;
    const ema = emailPrim;
    const isptch = true;
    const dynW1 = dynaWeight1Prim;
    const dynW2 = dynaWeight2Prim;
    const is1V = is1ValidatedPrim;
    const is2V = is2ValidatedPrim;
    const is3V = is3ValidatedPrim;
    const is4V = is4ValidatedPrim;
    const is5V = is5ValidatedPrim;
    const aut1 = autor1Prim;
    const aut2 = autor2Prim;
    const aut3 = autor3Prim;
    const aut4 = autor4Prim;
    const aut5 = autor5Prim;
    const descp = descriptionPrim;
    const etatSan = {
      hypertension: hypertensionPrim,
      diabete: diabetePrim,
      douleur: douleurPrim,
      pathoOuhandi: pathoOuhandiPrim,
      etatForme: etatFormePrim,
    };
    const lieu = lieuPrim;
    const tel = telephonePrim;
    const createdat = createdAtPrim



    fillFormASAP(
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
    );
    setIsPatientChoose(true);
  };
      // Conversion en objet Date
const date = new Date(createdAtPrim);

// Extraction des composants de la date
const jour = String(date.getDate()).padStart(2, '0'); // Ajoute un zéro au début si nécessaire
const mois = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
const annee = date.getFullYear();

// Formatage au format jj/mm/yyyy
const dateFormatee = `${jour}/${mois}/${annee}`;
  const handleChangeUser = () => {
    resetForm();
    setIsPatientChoose(false);
  };
  return (
    <div className="flex flex-col w-full text-xs bg-neutral text-neutral-content justify-between p-4 items-center">
<div className="flex flex-row">Créé le: {dateFormatee}</div>
<div className="flex flex-row w-full">
<div className="flex flex-col gap-2">
        <p>Nom: {lastnamePrim}</p>
        <p>Prénom:{firstnamePrim}</p>
        {isPatientChoose ? (
          <button className="btn btn-error btn-xs" onClick={handleChangeUser}>
            Changer d'utilisateur
          </button>
        ) : (
          <button
            className="btn btn-success btn-xs"
            onClick={() => {
              handleChooseUser();
            }}
          >
            Choisir cet utilisateur
          </button>
        )}
      </div>
      <div className="flex flex-col w-fit">
        <p>Email: {emailPrim}</p>
        <p>Poids: {weightPrim} kg</p>
        <p>Taille: {heightPrim} cm</p>
        <p>{genderPrim}</p>
        <p>Age: {agePrim}</p>
      </div>
</div>
    </div>
  );
};

export default CardPatient;
