"use client"

import CardPatient from "./CardPatient"



const ListAllPatients = ()=>{
const data=[{lastname:"jjj",firstname:"pppp",email:"oooooo"}]
    return(
        <details className="collapse bg-base-200">
  <summary className="collapse-title text-xl font-medium">Utiliser un patient existant</summary>
  <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <p>Recherche par email</p>
                <input type="text"/>
            </div>
{data.map((e,index)=>{
    return <CardPatient
    key={index}
nom={e.lastname}
prenom={e.firstname}
email={e.email}
/>
})

}
        </div>
</details>
    )
}

export default ListAllPatients