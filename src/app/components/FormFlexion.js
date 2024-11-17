"use client"
import { useState } from 'react';
import data from '../data/json/second_test.json'
import NoteResult from './NoteResult';


function FormFlexion({gender,is2Validated, setIs2Validated,autor2,setAutor2,description, setDescription}) {
  const [note, setNote] = useState(null);

  const filteredDescriptions = data
    .filter(item => item.gender === gender)
    .map(item => item.description);


  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    const selectedNote = data.find(item => item.gender === gender && item.description === e.target.value)?.note;
    setNote(selectedNote);
  };

  return (
<div className="collapse gap-2 items-center bg-white border border-gray-200 rounded-lg shadow p-2">
  <input type="checkbox" className="peer" />
  <div className="collapse-title text-md lg:text-xl font-extrabold  bg-gray-200">
<div className=' flex flex-row justify-between'>
<h2 className='text-md lg:text-lg'>
    Deuxième test : Flexion du tronc en avant (souplesse avant debout)
    </h2>
    <div className='flex flex-col items-center justify-center'>
{is2Validated&&autor2?<div className="badge badge-success gap-2 w-fit h-fit">Test réalisé par {autor2}</div>:<div className="badge badge-warning gap-2 w-fit h-fit">Test non réalisé</div> }
    </div>
</div>
  </div>
  <div className="collapse-content flex flex-col">
    <div className="w-full text-xs lg:text-lg">
      {gender && (
<div className='flex flex-col gap-2'>
<p className='text-lg font-bold'>
          Description:
          </p>
          <select
            className="input input-bordered w-full break-all border border-gray-200 rounded-lg shadow"
            value={description}
            onChange={handleDescriptionChange}
          >
            <option value="">Sélectionnez</option>
            {filteredDescriptions.map((desc, index) => (
              <option className="w-full break-all" key={index} value={desc}>
                {desc}
              </option>
            ))}
          </select>
</div>
      )}
    </div>
    {description&&<>
      <div className="flex flex-col items-center justify-center w-full text-xs lg:text-lg my-4">
      {note !== null && <NoteResult note={note} />}
    </div>
   {is2Validated&&autor2? <button className="btn btn-warning">Modifier et Valider le résultat</button>:<button className="btn btn-success">Valider le résultat</button>}  
    </>}

  </div>
</div>

  );
}

export default FormFlexion;
