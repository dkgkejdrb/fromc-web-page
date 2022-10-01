import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ProgramsPage from './ProgramsPage';
import Program1 from './Program1';
import Program2 from './Program2';
import Program3 from './Program3';
import Program4 from './Program4';
import ContactToRegister from './ContactToRegister';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ProgramsPage" element={<ProgramsPage />} />
            <Route path="/Program1" element={<Program1 />} />
            <Route path="/Program2" element={<Program2 />} />
            <Route path="/Program3" element={<Program3 />} />
            <Route path="/Program4" element={<Program4 />} />
            <Route path="/ContactToRegister" element={<ContactToRegister />} />
        </Routes>
    );
}

export default App;