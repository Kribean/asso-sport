const IMCCompo=({weight,height})=>{

    const imcVar = weight/(height*height)*10000;

    return(
        <div className="flex flex-col bg-neutral text-neutral-content w-36 h-36 rounded-lg items-center justify-center">
            <h2 className="text-lg font-bold">IMC</h2>
           {(height>100 && height<270)&&(weight>10 && weight<1000)? <p className="text-xl font-extrabold">
            {Math.round(imcVar)}
            
            </p>:
            <p>Oups! Le poids en kg ou La taille en cm est incorrecte</p>
}

        </div>
    )
}

export default IMCCompo;