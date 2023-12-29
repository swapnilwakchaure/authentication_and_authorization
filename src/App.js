import './App.css';
import Navbar from './pages/Navbar';
import AllRoutes from './pages/AllRoutes';

export default function App() {

  console.log('hello world');

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
