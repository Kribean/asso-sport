"use client"
import { useState } from 'react';
import data from '../data/json/second_test.json'
import NoteResult from './NoteResult';


function FormFlexion({gender}) {
  const [description, setDescription] = useState('');
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
    <div className=' flex flex-col gap-2 items-center bg-white border border-gray-200 rounded-lg shadow p-2'>
      <h2 className='text-lg lg:text-xl font-extrabold'>Deuxième test : Flexion du tronc en avant (souplesse avant debout)</h2>
<div className='w-full text-xs lg:text-lg '>
{gender && (
        <label>
          Description:
          <select className=' w-full break-all border border-gray-200 rounded-lg shadow'  value={description} onChange={handleDescriptionChange}>
            <option value="">Sélectionnez</option>
            {filteredDescriptions.map((desc, index) => (
              <option className=' w-full break-all' key={index} value={desc}>
                {desc}
              </option>
            ))}
          </select>
        </label>
      )}
</div>
      <div className='w-full text-xs lg:text-lg '>
      {note !== null &&<NoteResult note={note}/>}
      </div>
    </div>
  );
}

export default FormFlexion;
