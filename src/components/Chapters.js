import './Chapters.css';
import { Link } from "react-router-dom";

function Chapters() {
    return (<> <div className="container">
        <div className='c1'><Link to="/content">  Chapter 1 </Link></div>
        <div className='c1'><Link to="/content">  Chapter 2 </Link></div>
        <div className='c1'><Link to="/content">  Chapter 3 </Link> </div>
        <div className='c1'><Link to="/content">  Chapter 4 </Link> </div>
        <div className='c1'><Link to="/content">  Chapter 5 </Link> </div>
        <div className="c1">
            <Link to="/"> Back to Library </Link>
        </div>
    </div>
    </>
    )
}

export default Chapters
