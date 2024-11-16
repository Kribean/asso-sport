import Image from "next/image";

const LoginComp = ({
  firstnameAcc,
  lastnameAcc,
  setFirstnameAcc,
  setLastnameAcc,
  setIsconnected,
}) => {
  const handleConnexion = () => {
    localStorage.setItem("apasambasa",JSON.stringify({ firstnameAcc,lastnameAcc}))
    setIsconnected(true)
  };

  return (
    <>
    
    <div className="navbar bg-neutral text-neutral-content">
  <p className="text-xl">Bienvenue</p>
</div>
      <div className="flex flex-col lg:flex-row-reverse w-full">

        <div className="flex flex-col items-center w-full text-center lg:text-left ">
          <h1 className="text-2xl lg:text-5xl font-bold break-words ">
            Connecter vous à votre compte accompagnateur
          </h1>
          <p className="py-6">Remplisser votre nom et prénom</p>
          <Image src="/apabasa.png" width="200" height="200" alt="logo" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Prénom</span>
              </label>
              <input
                type="text"
                value={firstnameAcc}
                onChange={(e) => {
                  setFirstnameAcc(e.target.value);
                }}
                placeholder="prénom"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <input
                type="text"
                value={lastnameAcc}
                onChange={(e) => {
                  setLastnameAcc(e.target.value);
                }}
                placeholder="prénom"
                className="input input-bordered"
                required
              />
            </div>
            {firstnameAcc && lastnameAcc && (
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleConnexion}>
                  Se connecter
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      </>

  );
};
export default LoginComp;