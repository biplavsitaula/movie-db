import { Outlet } from "react-router"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  )
}

export default App
