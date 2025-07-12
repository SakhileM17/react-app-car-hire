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
 import BmwM2WhiteSideCut from '../assets/images/cars/bmw_m2_white_side_cut.png'
 import EKQiCarHireLogo from '../assets/branding/Logo_car_hire.svg'

function Home() {

    return (
      
        
        <div className="page-main-container">
            
            <div className='home-page-main-container'>

                {/* Left side of the page */}
                <div className='home-page-left-side-main-container'>
                    
                    <div className='home-page-left-side-logo-container'>
                        <img className='home-page-left-side-logo' src={EKQiCarHireLogo} />
                    </div>

                    <div className='home-page-left-side-image-container'>
                        <img className='home-page-left-side-image' src={BmwM2WhiteSideCut}/>
                    </div>

                    <div className='home-page-left-side-text-container'>
                        <p>Top of the range cars  with premium specifications and every available option selected.</p>
                    </div>
                    
                </div>

                {/* Right side of the page */}
                <div className='home-page-right-side-main-container'>

                    <div className='home-page-right-side-container'>
                        
                        {/* Header */}
                        <div className='home-page-right-side-header-container'>
                            <h2>Welcome to EKQi Car Hire</h2>
                        </div>

                        {/* Body */}
                        <div className='home-page-right-side-body-container'>
                            <p>Cick here to browser our catalogue</p>

                        </div>

                        {/* footer */}
                        <div className='home-page-right-side-footer-container'>
                            <p>Not Part of out community yet , click join to be part of our growing community. </p>
                        </div>

                    </div>
                    
                </div>

            </div>

        </div>
            
      
    )

} 

export default Home