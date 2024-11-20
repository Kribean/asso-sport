const CardPatient = ({id,lastnamePrim,firstnamePrim,heightPrim,genderP,weightPrim,emailPrim
    
    ,isPatientChoose,setIsPatientChoose,fillFormASAP,resetForm})=>{
const handleChooseUser=()=>{
    console.log("hellooooo")
    //ag,wg,hg,gd,em,fnam,lasnam,indT,indF,distF
    const ag=25 // âge
    const wg=84 // poids
    const gd="hommes"
    const ind3=1
    const ind4=1
    const ind5=1
    const sc4=15 //Nombre de levées
    const dist5=154
    const hg=187
    const fnam="dfg"
    const lnam="df"
    const ema="do@gg"
    const isptch=true
    const dynW1=50
    const dynW2=50
    const is1V=true
    const is2V=true
    const is3V=true
    const is4V=true
    const is5V=true
    const aut1="iiii"
    const aut2="xaa"
    const aut3="Edouar"
    const aut4="David"
    const aut5="Jhon"
    const descp=""
    const etatSan={hypertension:false,diabete:false,douleur:false,pathoOuhandi:false,etatForme:0}
    const lieu="trois Ilets"
    const tel="065325"


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
        id
      )
    setIsPatientChoose(true)
}
const handleChangeUser=()=>{
    resetForm()
    setIsPatientChoose(false)
}
    return(
        <div className="flex flex-row w-full text-xs bg-neutral text-neutral-content justify-between p-4 items-center">
            <div className="flex flex-col gap-2">
            <p>Nom: {lastnamePrim}</p>
            <p>Prénom:{firstnamePrim}</p>
           {isPatientChoose ?<button className="btn btn-error btn-xs" onClick={handleChangeUser}>Changer d'utilisateur</button>:
            <button className="btn btn-success btn-xs" onClick={()=>{handleChooseUser()}}>Choisir cet utilisateur</button>}
            </div>
<div className="flex flex-col w-fit">
<p>Email: {emailPrim}</p>
            <p>Poids: {weightPrim} kg</p>
            <p>Taille: {heightPrim} cm</p>
            <p>{genderP}</p>
</div>
        </div>

    )
}

export default CardPatient;