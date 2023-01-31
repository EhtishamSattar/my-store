import './App.css';
import Items from './Components/Items';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Top from './Components/Top';
import Cart from './Components/Cart';
import ThreeBox from './Components/ThreeBox';

function App() {
  return (
    <div>
      <Navbar/>
      <Top/>
      <ThreeBox/>
      <hr className='border border-gray-400 mt-10 ml-3 mr-3'></hr>
      <div className='mx-10 mb-3 mt-3'>
        <Items />
      </div>
      <Cart/>
      <Footer/>
    </div>

  );
}

export default App;
