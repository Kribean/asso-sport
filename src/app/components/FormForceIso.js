"use client"

import NoteResult from "./NoteResult";

function FormForceIso({indiceThird}) {

  
    return (
      <div  className=' flex flex-col gap-2 items-center bg-white border border-gray-200 rounded-lg shadow p-2'>
        <h2 className='text-lg lg:text-xl font-extrabold'>Troisième test : Mesure de la force isométrique des muscles de la main et de l’avant bras ( force de préhension)</h2>
        <NoteResult note={indiceThird}/>
      </div>
    );
  }
  
export default FormForceIso;

