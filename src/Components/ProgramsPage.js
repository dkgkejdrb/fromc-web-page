import InfiniteSlider from "./InfiniteSlider";
import Header from "./Header";
import './InfiniteSlider.css'

const ProgramsPage = () => {

    return (
        <div className="programsPage">
            <Header />
            <div className="wrap">
                <InfiniteSlider sliderWidth='1800px' />
            </div>
        </div>
    );
}

export default ProgramsPage;