import Arrow from "../Arrow/arrow";
import Flex from "../Flex/flex";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Phone from "../Phone/phone";
import Simple from "../Simple/simple";
import Text from "../Text/text";
import TwoPhone from "../TwoPhone/twophone";
import Zero from "../Zero/zero";

const Home = () => {
    return ( 
        <div className="Home">
            <Header/>
            <Phone/>
            <Flex/>
            <Text/>
            <Zero/>
            <Simple/>
            <TwoPhone/>
            <Arrow/>
            <Footer/>

        </div>
     );
}
 
export default Home;