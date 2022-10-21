import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage3 = () => {    
return (
    <div className="programsPage">
        <Header />
        <Contact1 />
        <div className="wrap">
            <Navigation higlightLine={3} />
            <div className="right">
                <div className="image_program3">
                    <div className="source">

                    </div>
                </div>
            </div>
        </div>
        <LineBanner />
        <Footer />
    </div>
);
}

export default ProgramPage3;