import Footer from "../../Footer/Footer";
import Advantages from "../Advantages/Advantages";
import Banner from "../Banner/Banner";
import Customize from "../Customize/Customize";
import Features from "../Features/Features";
import NavBar from "../NavBar/NavBar";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-display">
            <NavBar></NavBar>
            <Banner></Banner>
            <Features></Features>
            <Advantages></Advantages>
            <Customize></Customize>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;