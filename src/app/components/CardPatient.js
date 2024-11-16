const CardPatient = ({id,lastnamePrim,firstnamePrim,heightPrim,genderP,weightPrim,emailPrim,isPatientChoose,setIsPatientChoose,fillFormASAP,resetForm})=>{
const handleChooseUser=()=>{
    //ag,wg,hg,gd,em,fnam,lasnam,indT,indF,distF
    fillFormASAP(58,80,158,"Hommes","Leo","Lagran",1,1,600,"")
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
            <button className="btn btn-success btn-xs" onClick={handleChooseUser}>Choisir cet utilisateur</button>}
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