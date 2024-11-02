export function Navbar() {
  return (
    <nav className="px-6 py-1 mb-6 border-b-1 border-zinc-4 flex flex-justify-between flex-items-center bg-zinc-1 shadow-md

">
      {/* logo */}
      <div className="i-gg-album text-6xl text-indigo-6"></div>


      <div>Découvrir</div>


      {/* login / profile */}
      <div className="flex flex-items-center gap-1">
        {/* <div className="i-gg-profile text-indigo"></div> */}
        <div className="i-gg-log-in text-indigo-6 text-lg"></div>
        Login
      </div>
    </nav>
  );
}
