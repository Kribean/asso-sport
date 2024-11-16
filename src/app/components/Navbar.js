import Image from "next/image";

export default function Navbar({firstnameAcc,lastnameAcc}){

const handleDeconnect =()=>{

    localStorage.removeItem("apasambasa")
    window.location.reload();

}

    return(
        <div className="flex flex-col w-full bg-neutral text-neutral-content p-4">

<div className="flex flex-row justify-between items-between">
<div className="flex flex-row">
    <p className="text-xl font-bold">Application</p>
  </div>
  <div className="flex flex-row">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
          width={50}
          height={50}
            alt="logo"
            src="/apabasa.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button className="btn btn-error" onClick={handleDeconnect}> Déconnexion</button></li>
      </ul>
    </div>
  </div>
</div>
{(lastnameAcc&&firstnameAcc) &&<p>Bienvenue,{lastnameAcc} {firstnameAcc}  </p>}
</div>
    )
}