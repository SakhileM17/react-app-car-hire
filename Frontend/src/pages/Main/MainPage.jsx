/* ------------------------------------------------------------
 Home Component
    This is the landing page of the application. It serves as the user's first point of interaction.


* ------------------------------------------------------------ */

// ------------------ React Imports  ---------------------------

// ----------------------- Image Imports -----------------------

// images - branding
import EKQiCarHireLogo from '../../assets/branding/Logo_car_hire.svg'

// images - cars
import BmwM2BlackSide from '../../assets/images/cars/bmw_m2_black_side.png'

// --------------------- Icons -------------------------------
import { VscTools } from "react-icons/vsc"; 





function MainPage () {

    return (
        <div className="page-main-container">

            <div className='main-page-main-container'>

                {/* Home page header with the company logo */}
                <div className='home-page-header-main-container'>
                    <img className='home-page-header-logo' src={EKQiCarHireLogo} />
                </div>

                {/* Mobile Home page body container */}
                    <div className='home-page-body-main-container'>
                        <div className='home-page-body-car-image-main-container'>

                
                                <h2>Feature Coming Soon</h2>
                                <img className='main-page-body-car-image' src={BmwM2BlackSide} />
                            

                           
                          
                                <h2>
                                    Construction Zone. <br/>
                                </h2>

                                <p >
                                    <br/>   This app simulates a real-world service where users can explore, select, and hire top-spec cars, giving a taste of what a luxury car rental platform might offer.<br/><br/> Built with scalability and future growth in mind, with ongoing improvements planned. <br/><br/> <span className='text-secondary-color'>TechStack : React , C# and SQL.</span><br/><br/>
                                </p>
                            

                             
                                <VscTools className='construction-icon'/>
                            

                            
                        </div>
                    </div>

            </div>

        </div>
    )

}

export default MainPage;