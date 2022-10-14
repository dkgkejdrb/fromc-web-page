import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ProgramPage1 from './ProgramPage1';
import ProgramPage2 from './ProgramPage2';
import ProgramPage3 from './ProgramPage3';
import ProgramPage4 from './ProgramPage4';
import ProgramPage5 from './ProgramPage5';
import ProgramPage6 from './ProgramPage6';
import ProgramPage7 from './ProgramPage7';
import ContactToRegister from './ContactToRegister';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ProgramPage1" element={<ProgramPage1 />} />
            <Route path="/ProgramPage2" element={<ProgramPage2 />} />
            <Route path="/ProgramPage3" element={<ProgramPage3 />} />
            <Route path="/ProgramPage4" element={<ProgramPage4 />} />
            <Route path="/ProgramPage5" element={<ProgramPage5 />} />
            <Route path="/ProgramPage6" element={<ProgramPage6 />} />
            <Route path="/ProgramPage7" element={<ProgramPage7 />} />
            <Route path="/ContactToRegister" element={<ContactToRegister />} />
        </Routes>
    );
}

export default App;