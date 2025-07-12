/* App Component */

// ----------------- React Components ---------
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Suspense , lazy} from 'react'

// --------------- Application Components ------------
const Home = lazy(() => import("./pages/Home"));

// ----------------- Styling ----------------
import '../src/styles/App.css'

function App() {

  // --------------- use states --------------

  return (
   

    // Application main container 
    <div className="application-main-container"> 

      <Router>

          <Suspense>

            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>

          </Suspense>


        </Router>

      </div>
      
  )
}

export default App
