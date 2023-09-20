import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Admin from './component/admin/admin'
import Edit from './component/edit/edit.js'
import Details from './component/details/details'
import Listcreat from './component/listcreat/listcreat'


function App() {
 
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin/>}></Route>
      <Route path="/listcreat" element={<Listcreat/>}></Route>
      <Route path="/details/:listed" element={<Details/>}></Route>
      <Route path="/edit/:listed" element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>

  );
}

export default App;
