/* Button Component 

This component consisits of all the buttons that are used by the applicaiton

*/

// ----------------- Styling ----------------
import '../../styles/App.css'


// Confirm Button - Used for when the user is submitting or proceeding to the next page
function ConfirmButton({ ButtonName }) {
    return (
        <div>
            <button className='confirm-button'>{ButtonName}</button>
        </div>
    )
}

export default ConfirmButton;