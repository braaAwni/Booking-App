import Feature from "../feature/Feature";
import FeatureProprety from "../featureProprety/FeatureProprety";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Mail from "../mail/Mail";
import Navbar from "../Navbar/Navbar";
import PropretyList from "../propretyList/PropretyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle"> Browser By Any Type</h1>
        <PropretyList />
        <h1 className="homeTitle"> Homes guests love</h1>
        <FeatureProprety />
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
