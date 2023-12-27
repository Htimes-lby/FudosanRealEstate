import { Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Mainboard from './Mainboard';

function App() {
  return(
    <div>
      <Router>
        <Header />
        <Mainboard />
        <Footer />
      </Router>
    </div>
  )
}

export default App;