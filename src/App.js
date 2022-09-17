import './App.css';
import { Link } from "react-router-dom";
// import Chapters from './components/Chapters';

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Chapters />
//       </>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <div className="parent"><div className="title">
        <h1>WELCOME TO OUR LIBRARY</h1>
      </div>
        <p>Select the Subject you want to read </p>
        <div className="subContainer"><Link to="physics">
          <div className=" subs "> PHYSICS </div>
        </Link>
          <Link to="maths">
            <div className=" subs "> MATHS </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default App;
