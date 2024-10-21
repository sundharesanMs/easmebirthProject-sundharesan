import './App.css';
// import Frog from './components/Frog';
import { Header } from './Header';

import Navbar from './Navbar'; 
import ViewPage from './ViewPage';
// import Home from './components/Home';

function App() {
  return (
    <>
      <div className='bg-container'>
        <Header />
        <Navbar />  
        <ViewPage />  
     
   
      </div>
    </>
  )
}

export default App;
