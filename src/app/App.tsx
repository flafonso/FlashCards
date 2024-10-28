import { Outlet } from "react-router-dom";
import { Navbar } from "../common/navbar";

function App({ children }: { children?: JSX.Element }) {
  return (
    <>
      <Navbar />
      <div className="page-container">{children ?? <Outlet />}</div>
    </>
  );
}

export default App;
