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
            <Route path="/scratch_ai" element={<ProgramPage1 />} />
            <Route path="/appinventor_ai" element={<ProgramPage2 />} />
            <Route path="/kaggle_ai" element={<ProgramPage3 />} />
            <Route path="/arduino_metaverse" element={<ProgramPage4 />} />
            <Route path="/python_metaverse" element={<ProgramPage5 />} />
            <Route path="/scratch_gamemaking" element={<ProgramPage6 />} />
            <Route path="/appinventor_gamemaking" element={<ProgramPage7 />} />
            <Route path="/contact" element={<ContactToRegister />} />
        </Routes>
    );
}

export default App;