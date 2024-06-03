import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-display">
            <NavBar></NavBar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;