import Footer from "../../Footer/Footer";
import Advantages from "../Advantages/Advantages";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-display">
            <NavBar></NavBar>
            <Banner></Banner>
            <Features></Features>
            <Advantages></Advantages>
            <Footer></Footer>
        </div>
    );
};

export default Home;