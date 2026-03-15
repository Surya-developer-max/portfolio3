import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
export default function about() {
    const rf = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.h1-main ', {
            opacity: 0,
            duration: 1,
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
                    <div className='About-text'>About us</div>
                    <div className=' text-container'>
                        <div className='sadi-text2'>
                            <p>
                                DEVELOPMENT DESIGN DIGITALMAARKETING
                            </p>
                        </div>
                        <div className='main-text'>
                            <h1 className='about-h1'>A</h1>
                            <div onMouseEnter={() => { handleTextAnimation() }} onMouseLeave={() => { handleTextAnimationLeave() }} className='s-text-div'></div>
                            <h3>WE ARE A DIGITAL PRODUCTION TEAM.</h3>
                            <p>Hello, my name is Surya. I am a Java full-stack developer, i'm a Fresher, i know Java and Spring Boot on the backend, and have a strong proficiency in JavaScript, React, and HTML/CSS for the frontend</p>
                        </div>
                    </div>
                </div>
                <div className='img2'>
                    <img src={img2} alt="" />
                </div>
            </div>

        </>
    )
}