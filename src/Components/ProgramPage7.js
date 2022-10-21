import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage7 = () => {
    return (
        <div className="programsPage">
            <Header />
            <Contact1 />
            <div className="wrap">
                <div className="left">
                    <Navigation higlightLine={7} />
                </div>
                <div className="right">
                    <div className="image_program7">
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

export default ProgramPage7;