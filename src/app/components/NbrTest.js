const NbrTest=({nbrTestVal,handleSendFormToClient})=>{

    return(
        <div className="flex flex-col bg-neutral text-neutral-content h-fit w-fit rounded-lg items-center justify-center p-4">
            <h2 className="text-lg font-bold">Nombre de tests réalisés</h2>
            {
                nbrTestVal!==5?<p>Il vous manque {5-nbrTestVal} avant d'envoyer les résultats au patient</p>:
                <div className="flex flex-col justify-center items-center p-4">
<p> Les {nbrTestVal} tests sont réalisés</p>
<button className="btn btn-success" onClick={handleSendFormToClient}>Plus qu'une étape! Envoyer les données au patient</button>
                    </div>
            }

        </div>
    )
}

export default NbrTest;