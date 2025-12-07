import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Servicio1 from './pages/servicios/Servicio1';
import Servicio2 from './pages/servicios/Servicio2';
import Servicio3 from './pages/servicios/Servicio3';

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ paddingTop: "80px" }}>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/servicios" element={<Servicios />}>
                        {/* Sub-rutas dentro de Servicios */}
                        <Route index element={<Navigate to="servicio1" />} /> {/* Redirige al primer servicio */}
                        <Route path="servicio1" element={<Servicio1 />} />
                        <Route path="servicio2" element={<Servicio2 />} />
                        <Route path="servicio3" element={<Servicio3 />} />
                    </Route>
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
