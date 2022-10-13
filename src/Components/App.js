import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ProgramsPage from './ProgramsPage';
import ContactToRegister from './ContactToRegister';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ProgramsPage" element={<ProgramsPage />} />
            <Route path="/ContactToRegister" element={<ContactToRegister />} />
        </Routes>
    );
}

export default App;