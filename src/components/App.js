import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';
import PruebaRuta from './PruebaRuta';
import MainForm from '../pages/MainForm';
import WhoWeAre from '../pages/WhoWeAre';
import Suport from '../pages/Suport';
import Tutorials from '../pages/Tutorials';
import ContList from '../pages/ContList';
function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contactanos' element={<MainForm />} />
          <Route exact path='/trabaja-con-nosotros' element={<MainForm />} />
          <Route exact path='/sigem-contadores' element={<ContList />} />
          <Route exact path='/quienes-somos' element={<WhoWeAre />} />
          <Route exact path='/soporte' element={<Suport />} />
          <Route exact path='/tutoriales' element={<Tutorials />} />
          <Route exact path='/contactanos/ref/:planId' element={<MainForm />} />
          <Route exact path='/contactanos/:planId' element={<MainForm />} />
          <Route exact path='/pruebas' element={<PruebaRuta />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
