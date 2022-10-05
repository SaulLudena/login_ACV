import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

/* paginas admin */
import EmpresaAdmin from './pages/admin/EmpresaAdmin';





function Main() {
  return (
   <div>
    <Sidebar/>
    <div>
      <Navbar/>

      <main>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/empresa' element={<EmpresaAdmin/>} />

          <Route path='/main' element={<Main/>} />

        </Routes>
      </main>
    </div>
   </div>
  );
}