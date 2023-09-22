import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Todos from "./pages/Todos";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/todos' element={<Todos />}></Route>    
    </Routes>
    </BrowserRouter>
  )
}

export default App