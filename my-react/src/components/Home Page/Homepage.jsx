import Footer from "../Footer";
import Navbar from "../Navbar";
import Herosection from "./Herosection";
import Second from "./Second";





const Homepage = () => {
    return (
        <div className="">
            {/*navbar*/}
            <header>
                <Navbar/>
            </header>
         <Herosection/>
         <Second/>
        

         {/*footer*/}
         <footer>
            <Footer/>
         </footer>
        </div>
    );

}

export default Homepage;