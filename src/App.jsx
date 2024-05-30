import Footer from './components/Footer/Footer';

//2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  )
}

export default App;
