import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  const c ='I love God';
  return (
   <>
   <BrowserRouter>
   <Navbar/>
<Routes>

  <Route exact path='/' element={<News pageSize={6} country="us" category="sports"/>}/>
  <Route exact path='/general' element={<News pageSize={6} country="us" category="general"/>}/>
  <Route exact path='/health' element={<News pageSize={6} country="us" category="health"/>}/>
  <Route exact path='/science' element={<News pageSize={6} country="us" category="science"/>}/>
  <Route exact path='/tech' element={<News pageSize={6} country="us" category="technology"/>}/>
  <Route exact path='/business' element={<News pageSize={6} country="us" category="business"/>}/>
  <Route exact path='/entertainment' element={<News pageSize={6} country="us" category="entertainment"/>}/>
</Routes>
   
   
   
   </BrowserRouter>
   
   
   
   </>
  );
}

export default App;
