import { Router } from 'react-router-dom';
import { history } from './Utils/history';
import { useCookies } from 'react-cookie';

import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './Layout';

import initializeApp from './redux/utils/init';

initializeApp();

function App() {

  const [cookies, setCookies] = useCookies();
  return (
    <div>
      <Router history={history}>
        
        <Header />
        <Layout />
        <Footer />
      </Router>
    </div>
  )
}

export default App;