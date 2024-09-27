import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './members.css';
import event from '../assets/images/mbr-1076x717.webp';
import EventA from '../assets/images/screenshot-2024-05-13-at-06.06.03-715x714.webp';
import EventB from '../assets/images/queens-of-jazz-2020-785x785.webp';
import EventC from '../assets/images/screenshot-2024-05-13-at-06.13.11-600x601.webp';
import EventD from '../assets/images/mbr-600x400.webp';

const AboutArtClub = () => {


    const slides = [
        {
            src: EventA,
            alt: 'Event A',
            text: 'Event A',
            description: 'Manage Event'
        },
        {
            src: EventB,
            alt: 'Event B',
            text: 'Event B',
            description: 'Manage Event'
        },
        {
            src: EventC,
            alt: 'Event C',
            text: 'Event C',
            description: 'Manage Event'
        },
        {
        src: EventD,
        alt: 'Event D',
        text: 'Event D',
        description: 'Manage Event'
    }
    ];


    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 3000 milliseconds (3 seconds)

        return () => clearInterval(timer); // Clear the timer when the component unmounts
    }, [slides.length]);

    const handleNext = () => {
        setCurrentSlide((currentSlide + 1) % slides.length); // Loop back to the first slide
    };

    const handlePrev = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length); // Loop back to the last slide
    };

    const handleButtonClick = (url) => {
        navigate('/events');
    };

    return (
        <>

        <section className="header-section">
                <div className="row">
                    <div className="imagewrapper">
                        <img src={event} alt="event" />
                    </div>
                    <div className="textwrapper">
                        <h1 className="title">Welcome, Member!</h1>
                        <p className="description">
                            - Earn profits from your events, <br />
                            - Manage your Art Club Portfolio <br />
                            - Get Artist-specific perks and access to a community of fellow Art lovers.<br />
                        </p>
                        <div className="button-group">
                            <a className="btn explore-btn" href="/events">Explore all Events</a>
                            <a className="btn performance-btn" href="/attend">Performance&gt;</a>
                        </div>
                    </div>
                </div>
            
        </section>


        <section className="fund">
        <div className="art-container">
           
                <div className="art-col">
                    <p className="art-text">
                        1. Artists Pitch through an Application Form, giving you details of their craft and the performances they would like to create.
                        <br />
                        <br />2. You Join their Art Club using the INDIE platform to buy a stake in their ticket sales.
                        <br />
                        <br />3. Artists Host their Art Event according to the details they pitched.
                        <br />
                        <br />4. You and the Artists Share the ticket revenue from their successful event.&nbsp;
                    </p>
                </div>
                <div className="art-col2">
                    <h5 className="section-title">Privately Fund Art You Love</h5>
                    <h6 className="section-subtitle">Artists Pitch, You Join the Club, Artists Host their Event, Everyone Shares<br />&nbsp;</h6>
                </div> 
            </div>
    

            </section>


            <section className = "events-portfolio">

            <div className="portfolio-container">

            <div className = "portfolio-text"> 
            <h4>My Events Portfolio</h4>
            <h5>Click on the "Manage Event" button to view the event and manage it. You can view ticket sales, buy more shares, or transfer your shares.</h5><br /><br />
            </div>
            
            <div className="slider-container2">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide2 ${index === currentSlide ? 'active' : ''}`}>
                    <div className="slide-image" style={{ backgroundImage: `url(${slide.src})` }}> </div>
                
                    <div className="slide-content">
                        <h2>{slide.text}</h2>
                        <button onClick={() => handleButtonClick()}>Manage Event</button>
                    </div>
                </div>
            ))}
            <button className="control prev" onClick={handlePrev}>❮</button>
            <button className="control next" onClick={handleNext}>❯</button>
        </div>
            

</div>

        
            </section>



        </>
    );
}
export default AboutArtClub;