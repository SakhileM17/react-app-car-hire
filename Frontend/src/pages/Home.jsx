/* ------------------------------------------------------------
 Home Component
    This is the landing page of the application.
 It serves as the user's first point of interaction.

 Features:
 - Continue as Guest
 - Login functionality
   
* ------------------------------------------------------------ */

// -------------------- Styles ---------------
import '../styles/Pages.css'

// -------------------- images ----------------

// images - cars
import AudiRs3BlackFront from '../assets/images/cars/audi_rs3_black_front.png'

// images - branding
import EKQiCarHireLogo from '../assets/branding/Logo_car_hire.svg'
import ConfirmButton from '../Components/Buttons/Buttons'

function Home() {
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
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Home Page - Footer container */}
                <div className='home-page-body-foot-container'>
                    <p>Copyright EKQiEnterprises 2025. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Home