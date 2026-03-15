import gsap from "gsap";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Contact from './contact.jsx'
import About from '../components/about.jsx'
export default function menu() {
    function handleMenu() {
        console.log("hii")
        gsap.to('.menu-container', {
            translateY: 0,
        })
    }
    function handleClose() {
        gsap.to('.menu-container', {
            translateY: "-100%",
        })
    }

    return (
        <>
            <BrowserRouter>
                <Link to='/' className="text-decoration-none text-light">
                    <div className="d-inline-flex align-items-center Brand-name">
                        <h3 className="m-0 mx-2">S</h3>
                        <div className='red-round' style={{ width: '10px', height: "10px" }}></div>
                        <h3 className="m-0 mx-2">U</h3>
                        <div className='red-round' style={{ width: '10px', height: "10px" }}></div>
                        <h3 className="m-0 mx-2">R</h3>
                        <div className='red-round' style={{ width: '10px', height: "10px" }}></div>
                        <h3 className="m-0 mx-2">Y</h3>
                        <div className='red-round' style={{ width: '10px', height: "10px" }}></div>
                        <h3 className="m-0 mx-2">A</h3>
                    </div>
                </Link>
                <div className='menu-icon'>
                    <i className="ri-menu-2-fill" onClick={() => { handleMenu() }}></i>
                </div>
                <div className="menu-container d-flex  align-items-center ">
                    <i className="ri-close-large-line close-btn" onClick={() => { handleClose() }}></i>
                    <div className="menu-inside">
                        <div className="items">
                            <Link to="/" className="text-decoration-none text-light" onClick={() => { handleClose() }}>
                                <p>Home</p>
                            </Link>
                        </div>
                        <div className="items">
                            <Link to="/about" className="text-decoration-none text-light" onClick={() => { handleClose() }}>
                                <p>About</p>
                            </Link>
                        </div>
                        <div className="items ">
                            <a href="https://suryaportfoliodemo.netlify.app/" className="text-decoration-none text-light" >
                                <p>Portfolio</p>
                            </a>
                        </div>
                        <div className="items border-bottom border-1 border-dark">
                            <Link to="/contact" className="text-decoration-none text-light" onClick={() => { handleClose() }}>
                                <p>Contact</p>
                            </Link>
                        </div>

                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}