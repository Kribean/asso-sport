const NoteResult=({note})=>{

    return(
<div className={`flex flex-col justify-center items-center  rounded-full w-28 h-28 ${note==5?" bg-[#15803d] ":" "} ${note==4?" bg-[#22c55e] ":" "} ${note==3?" bg-[#ecfccb] ":" "} ${note==2?" bg-[#eab308] ":" "} ${note==1?" bg-[#dc2626] ":" "} `}>
<p className="text-2xl font-extrabold">{note}</p>
</div>
    )
}

export default NoteResult;