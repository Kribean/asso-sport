const CardPatient = ({id,nom,prenom,email})=>{

    return(
        <div className="flex flex-row text-sm bg-neutral text-neutral-content justify-between p-4 items-center">
            <div className="flex flex-col gap-4">
            <p>Nom: {nom}</p>
            <p>Prénom:{prenom}</p>
            </div>
            <p>Email: {email}</p>
        </div>

    )
}

export default CardPatient;