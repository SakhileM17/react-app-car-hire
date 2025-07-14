/* ------------------------------------------------------------
 Home Component
    This is the landing page of the application. It serves as the user's first point of interaction.


* ------------------------------------------------------------ */

// ------------------ React Imports  ----------------------
import { useState  , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


// -------------------- Icons ------------------------
import { VscTools } from "react-icons/vsc";

// -------------------- Styles ---------------
import '../../styles/App.css'
import '../../styles/Pages.css'

// -------------------- images ----------------

// images - cars
import AudiRs3BlackFront from '../../assets/images/cars/audi_rs3_black_front.png'

// images - branding
import EKQiCarHireLogo from '../../assets/branding/Logo_car_hire.svg'
import ConfirmButton from '../../Components/Buttons/Buttons'


function Home() {
    // State to track mobile screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // function - Navigation hook
    const navigate = useNavigate();

    // Use Effect to handle screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // --------------------- Functions ------------------

    

    // Handle button click to navigate to services
    const handleExploreClick = () => {
        navigate('/services');
        console.log("Clicked")
    };

    // Mobile Layout
    if (isMobile) {
        return (
            <div className="page-main-container">
                <div className='home-page-main-container'>
                    {/* Mobile Home page header with the company logo */}
                    <div className='home-page-header-main-container'>
                        <img className='home-page-header-logo' src={EKQiCarHireLogo} />
                    </div>
                    
                    {/* Mobile Home page body container */}
                    <div className='home-page-body-main-container'>
                        <div className='mobile-home-page-body-car-image-main-container'>
                            <div>
                                <img className='mobile-home-page-body-car-image' src={AudiRs3BlackFront} />
                            </div>
                            
                            <div className='mobile-home-page-body-foot-container'>
                                <div>
                                    <p>Click the "Explore" button to start your journey...</p>
                                </div>
                                
                                <div>
                                    <ConfirmButton
                                        ButtonName='Explore'
                                        onClick={handleExploreClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Mobile Home Page - Footer container */}
                    <div className='home-page-body-foot-container'>
                      <p>Copyright EKQiEnterprises 2025. All rights reserved. <br/><br/> <a target='blank' href='https://www.mkhalele.co.za'> Designed & Developed By Sakhile Mkhalele</a></p>
                    </div>
                </div>
            </div>
        )
    }

    // Desktop Layout (Original)
    return (
        <div className="page-main-container">
            <div className='home-page-main-container'>
                {/* Home page header with the company logo */}
                <div className='home-page-header-main-container'>
                    <img className='home-page-header-logo' src={EKQiCarHireLogo} />
                </div>
                
                {/* Home page body container */}
                <div className='home-page-body-main-container'>
                    <div className='home-page-body-car-image-main-container'>
                        <div>
                            <img className='home-page-body-car-image' src={AudiRs3BlackFront} />
                        </div>
                        
                        <div className='home-page-body-button-container'>
                            <div>
                                <p>Click the "Explore" button to start your journey...</p>
                            </div>
                            
                            <div>
                                <ConfirmButton
                                    ButtonName='Explore'
                                    onClick={handleExploreClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Home Page - Footer container */}
                <div className='home-page-body-foot-container'>
                     <p>Copyright EKQiEnterprises 2025. All rights reserved. <br/><br/> <a target='blank' href='https://www.mkhalele.co.za'> Designed & Developed By Sakhile Mkhalele</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home