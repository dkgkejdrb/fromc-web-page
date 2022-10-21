import Footer from "./Footer";
import Header from "./Header3";
import LineBanner from "./lineBanner";
import Contact1 from "./Contact1";
import Navigation from "./Navigation";

const ProgramPage5 = () => {
    return (
        <div className="programsPage">
            <Header />
            <Contact1 />
            <div className="wrap">
                <div className="left">
                    <Navigation higlightLine={5} />
                </div>
                <div className="right">
                    <div className="image_program5">
                        <div className="gifWrap">
                            <div className="gif">

                            </div>
                        </div>
                        <div className="gifWrap1">
                            <div className="gif1">

                            </div>
                        </div>
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

export default ProgramPage5;