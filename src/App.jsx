import { Route, Routes } from "react-router-dom"
import Error from "./pages/error"
import Home from "./pages/home"

function App() {
 
  return (
    <>
     <Routes>
      <Route path="/error" element={<Error/>}/>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
