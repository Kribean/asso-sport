import Image from "next/image";

export default function Navbar(){

    return(
        <div className="navbar bg-neutral text-neutral-content">
  <div className="flex-1">
    <p className="text-xl font-bold">Application</p>
  </div>
  <div className="flex-none">
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
        <li><button className="btn btn-error"> Déconnexion</button></li>
      </ul>
    </div>
  </div>
</div>
    )
}