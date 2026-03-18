import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
export default function home() {

    const rf = useRef();

    useGSAP(() => {
        const sp_text = document.querySelector(".h1-main").textContent;
        const splited_text = sp_text.split("");
        console.log(splited_text)
        var final_text = ""
        splited_text.forEach((val) => {
            final_text += `<span>${val}</span>`
        })
        document.querySelector(".h1-main").innerHTML = final_text;
        console.log(sp_text)

        const tl = gsap.timeline();
        tl.from('.h1-main span', {
            opacity: 0,
            duration: 0.5,
            stagger: 0.20,
            translateX: "505px",
        })
        tl.to('.banner', {
            y: "-100%",
            duration: 1,

        })
        tl.from(".text-container .sadi-text", {
            x: -50,
            duration: 0.5,
            opacity: 0,
        })
        tl.from(".main-text h2", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
        })
        tl.from(".main-text h1", {
            y: 100,
            opacity: 0,
            duration: 0.5,
        })
        tl.from(".white-scroll", {
            opacity: 0,
            x: 100,
        })
        tl.from(".black-scroll", {
            y: 200,
            opacity: 0,
        })
        tl.from('.img-div img,.img2 img', {
            opacity: 0,
        })
        gsap.to('.img-div img,.img2 img', {
            rotate: 360,
            repeat: -1,
            duration: 6,
            ease: 'none',
        })
    }, [])
    function handelMouseMover(e) {
        gsap.to('.ball-curser', {
            x: e.pageX,
            y: e.pageY,
        })
    }
    function handlemouseLeave() {
        gsap.to('.ball-curser', {
            x: "-100%",
            y: "-100%",
            ease: 'back.inOut'
        })
    }
    function handleTextAnimation() {
        console.log("hello world")
        gsap.to(".main-text h1", {
            x: -50,
            rotate: -10,
        }
        )
    }
    function handleTextAnimationLeave() {
        gsap.to(".main-text h1", {
            x: 0,
            rotate: 0,
        })
    }
    // setInterval(()=>{
    //     console.log("hiiii")
    // },1000)
    return (
        <>
            <div className="main-container" onMouseMove={(e) => { handelMouseMover(e) }} onMouseLeave={() => { handlemouseLeave() }}>
                <div className='banner'>
                    <h1 className='h1-main'>Surya</h1>
                </div>
                <div className='ball-curser' ></div>
                <div>
                    <div className='img-div'>
                        <img src={img1} alt="" />
                    </div>
                    <div className=' text-container'>
                        <div className='sadi-text'>
                            <p>
                                DEVELOPMENT DESIGN DIGITALMAARKETING
                            </p>
                        </div>
                        <div className='main-text position-relative' style={{width:'80vw'}} >
                            <h1 >S</h1>
                            <div onMouseEnter={() => { handleTextAnimation() }} onMouseLeave={() => { handleTextAnimationLeave() }} className='s-text-div'></div>
                            <h2>Brand.<span style={{ color: 'rgb(144, 144, 144)' }}>Design.Product</span>.</h2>
                            <h2>In-House Development.</h2>
                            <h2>&More</h2>
                        </div>
                    </div>
                    <div className='white-scroll'>
                        <div className='group'>
                            <div className='red-round'></div>

                            <p>CREATIVE DESIGN</p>
                            <div className='red-round'></div>
                            <p>MARKETING</p>
                            <div className='red-round'></div>

                            <p>MOTION</p>
                            <div className='red-round'></div>

                            <p>ANIMATION</p>
                            <div className='red-round'></div>

                            <p>BRANDING</p>
                        </div>
                        <div className='group'>
                            <div className='red-round'></div>

                            <p>CREATIVE DESIGN</p>
                            <div className='red-round'></div>
                            <p>MARKETING</p>
                            <div className='red-round'></div>

                            <p>MOTION</p>
                            <div className='red-round'></div>

                            <p>ANIMATION</p>
                            <div className='red-round'></div>

                            <p>BRANDING</p>
                        </div>
                    </div>
                    <div className='black-scroll'>
                        <div className='group'>
                            <div className='red-round'></div>

                            <p>CREATIVE DESIGN</p>
                            <div className='red-round'></div>
                            <p>MARKETING</p>
                            <div className='red-round'></div>

                            <p>MOTION</p>
                            <div className='red-round'></div>

                            <p>ANIMATION</p>
                            <div className='red-round'></div>

                            <p>BRANDING</p>
                        </div>
                        <div className='group'>
                            <div className='red-round'></div>

                            <p>CREATIVE DESIGN</p>
                            <div className='red-round'></div>
                            <p>MARKETING</p>
                            <div className='red-round'></div>

                            <p>MOTION</p>
                            <div className='red-round'></div>

                            <p>ANIMATION</p>
                            <div className='red-round'></div>

                            <p>BRANDING</p>
                        </div>
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}