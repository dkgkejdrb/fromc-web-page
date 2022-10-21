import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage2 = () => {    
    return (
        <div className="programsPage">
            <Header />
            <Contact1 />
            <div className="wrap">
                <Navigation higlightLine={2} />
                <div className="right">
                    <div className="image_program2">
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

export default ProgramPage2;