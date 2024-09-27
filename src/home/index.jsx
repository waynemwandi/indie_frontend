import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Festival from '../assets/images/nairobi-mega-festival-1200x1600.webp';
import Queens from '../assets/images/queens-of-jazz-2020-785x785.webp';
import Hiphop from '../assets/images/screenshot-2024-05-13-at-06.06.03-715x714.webp';
import Walking from '../assets/images/screenshot-2024-05-13-at-06.13.11-710x711.webp';
import Nairobi from '../assets/images/screenshot-2024-05-13-at-06.14.05-712x707.webp';
import Music from '../assets/images/screenshot-2024-05-13-at-06.15.31-657x658.webp';
import Wander from '../assets/images/screenshot-2024-05-13-at-06.21.18-585x714.webp';
import logoColor from '../assets/images/logo-color-1200x1200.webp';
import logoWhite from '../assets/images/logo-white-1200x1200.webp';
import logoBlack from '../assets/images/logo-black-1200x1200.webp';
import aboutLogo from '../assets/images/logo-white-1076x1076.webp';
import Photos from '../assets/images/Screenshot 2024-07-29 133540.png';
import Photos2 from '../assets/images/Screenshot 2024-07-29 135549.png';
import Piano from '../assets/images/screenshot-2024-05-13-at-06.13.11-600x601.webp';
import Wanderlust from '../assets/images/screenshot-2024-05-13-at-06.14.05-600x596.webp';
import Laugh from '../assets/images/screenshot-2024-05-13-at-06.06.03-600x599.webp';
import Electro from '../assets/images/screenshot-2024-05-13-at-06.15.31-600x601.webp';
import instagram from '../assets/images/icons8-instagram-50.png';
import './index.css';

const Home = () => {

       
        const slides = [
            {
              src: logoColor,
              alt: 'Indie-Logo',
              text: 'ARTISTS AND FUNDERS BUILDING THE ECOSYSTEM, TOGETHER',
              description: 'INDIE is a Private Art Crowdfunding Platform.'
            },
            {
              src: logoWhite,
              alt: 'Indie-Logo',
              text: 'Promote art you love from the country you live in, getting returns whenever the artists host events.',
              description: 'For Art Funders'
            },
            {
              src: logoBlack,
              alt: 'Indie-Logo',
              text: 'Raise capital for your work by selling rights to your event tickets, turning your work into a bankable asset.',
              description: 'For Artists'
            }
          ];

          const slides2 = [
            {
                title: "PIANO HOUSE SUPREME",
                role: "JUNE - JULY ROUND",
                description: "About: An Afro-Centric Electronic and Amapiano Music Events Community",
                budget: "Kes. 96,000",
                eventDate: "July 2024",
                image: Piano
            },
            {
                title: "THE WANDERLUST PARTY",
                role: "JULY - AUGUST ROUND",
                description: "About: Progressive city party celebrating diverse youth identities",
                budget: "Kes. 600,000",
                eventDate: "August 2024",
                image: Wanderlust
            },
            {
              title: "NAIROBI LAUGH NIGHT",
              role: "AUGUST - SEPTEMBER ROUND",
              description: "About: Standup Comedy Night featuring popular comics from Nairobi City.",
            budget: "Kes. 75,000",
            eventDate: "September 2024",
              image: Laugh
          },
          {
            title: "INDIE ELECTRO PARTY",
            role: "SEPTEMBER - OCTOBER ROUND",
            description: "Template for autogenerating Indie events cards.",
            budget: "",
            eventDate: "",
            image: Electro
        }
        ];

      

        const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true, containScroll: 'keepSnaps' }, [Autoplay(3000)])
        const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true, containScroll: 'keepSnaps' }, [Autoplay(3000)])
        

  // Control functions for carousels
  const scrollPrev1 = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollPrev();
}, [emblaApi1]);

const scrollNext1 = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollNext();
}, [emblaApi1]);

const scrollPrev2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollPrev();
}, [emblaApi2]);

const scrollNext2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollNext();
}, [emblaApi2]);


  const [currentSlide, setCurrentSlide] = useState(0);
        
          const handleNext = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          };
        
          const handlePrev = () => {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
          };
        
          return (
            <>
            
            <section className="slider-wrapper">
                <div className="slider-container">
                  <div className="slider">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                      >
                        <div className="slide-image-container">
                          <img src={slide.src} alt={slide.alt} className="slideimage" />
                        </div>
                        <div className="slide-text">
                          <p className="slide-heading">{slide.text}</p>
                          <div className="slide-description">{slide.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="slider-button prev" onClick={handlePrev}>
                    <span className="icon">❮</span>
                    <span className="sr-only">Previous</span>
                  </button>
                  <button className="slider-button next" onClick={handleNext}>
                    <span className="icon">❯</span>
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              
            </section>
            
            
            <section className="artclub">

                <div className="art-club-container">
                  <div className="art-club-row">
                    <div className="art-club-card">
                      <div className="art-club-card-wrapper">
                        <div className="art-club-card-box">
                          <h1 className="art-club-card-title"> Join The Art Club </h1>
                          <p className="art-club-text">
                            Join an Art Club and get returns from the most promising Creatives in Kenya.&nbsp;<br />
                            Promote art you love from the country you live in, sharing the profits from their performance events.<br />
                          </p>
                          <div className="art-club-section-btn">
                            <a className="artclub-btn" href="/members">Fund Now &gt;</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              

              <section className="about-us-container">
      <div className="about-us-row">
        <div className="about-us-card">
          <div className="about-us-card-wrapper">
            <h6 className="about-us-title">
              About Us
            </h6>
            <p className="about-us-text">
              We connect independent artists to independent art funders. <br />
              As a funder, you get your funds back and a share of profits for every event on our platform. <br />
              As an artist, you get a pool of art lovers who believe in your work and want to support your vision.
            </p>
            <div className="about-us-button-container">
              <a className="about-us-button" href="/about-us">Learn More</a>
            </div>
          </div>
        </div>
        <div className="about-us-image-container">
          <div className="about-us-image-wrapper">
            <img src={aboutLogo} alt="Indie-Logo" />
          </div>
        </div>
      </div>
    </section>


    <section className= "slider2">

      <div className= "slider2-header">
            <h3>Attend Our Events</h3>
            <p>Besides funding an Artist, <br/> You can Purchase Tickets to attend Our Events</p>
        </div>
        <div className="slider2-container">

          <div className="embla" ref={emblaRef1}>
                      <div className="embla__viewport">
                      {slides2.map((slide2, index) => (
          <div key={index} className="embla__slide event-card">  {/* If slide.id is always unique, use it instead of index */}
              <div className="event-card__image-wrap">
                  <img src={slide2.image} alt={slide2.title} />  {/* Ensuring alt text is descriptive */}
                           </div>
                                <div className="event-card__content-wrap">
                                    <h5 className="event-card__title">{slide2.title}</h5>
                                    <h6 className="event-card__role">{slide2.role}</h6>
                                    <p className="event-card__text">
                                        {slide2.description}<br /><br />
                                        Total Budget: {slide2.budget}<br /><br />
                                        Event Date: {slide2.eventDate}
                                    </p>
                                    <div className= "button-insta">
                                    <a href="https://www.instagram.com/indie.artske?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" target="_blank" rel="noopener noreferrer"> 
                                <img src={instagram} alt="Instagram" className="insta-icon" />
                            </a>
                                    <a className="events-button" href="/events">Attend</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        </div>
                        <button className="carousel-button-prev" onClick={scrollPrev1} aria-label="Previous slide">
                          ❮
                          </button>
                          <button className="carousel-button-next" onClick={scrollNext1} aria-label="Next slide">
                          ❯
                          </button>
                        </div>
              

                      </section> 




    <section className= "attendfund-section">
      <div className = "attendfund">
      <div className = "attendfund-row">
      <div className="attendfund-column">
                    <div className="attend-fund-card">
                        
                        <h5>Attend an Event</h5>
                        <p>
                            Browse our list of events, book tickets and print your receipts, all on one platform.</p>
                        <div className="attend-fund-btn1"><a href="/events">Buy Ticket</a></div>
                    </div>
                    <div className="attendfundimg">
                        <img src = {Photos} alt = ""/>
                    </div>
                </div>

                <div className="attendfund-column">
                    <div className="attend-fund-card">
                        
                    <h5>Fund an Event</h5>
                        <p>
                            Pick an event that is happening near you, create an Account to support it by buying shares during a funding round.</p>
                        <div className="attend-fund-btn2"><a href="/members">Fund Event</a></div>
                    </div>
                    <div className="attendfundimg2">
                        <img src = {Photos2} alt = "" />
                    </div>
                </div>                   
      </div>
      </div>

    </section>



    <section className= "slider3">

            <div className="slider3-container">
                <div className="slider3-container-row">
                    <div className="col-12">
                        <h3>Past Events</h3>
                        <h5>Since May 2024...</h5>
                    </div>
                    <div className="embla3">
      <div className="embla__viewport3" ref={emblaRef2}>
        <div className="embla__container3">
            <div className="embla__slide3"><img src={Festival} alt="Nairobi Mega Festival" /></div>
            <div className="embla__slide3"><img src={Queens} alt="Queens of Jazz 2020" /></div>
            <div className="embla__slide3"><img src={Hiphop} alt="Hip Hop Event" /></div>
            <div className="embla__slide3"><img src={Walking} alt="Walking Event" /></div>
            <div className="embla__slide3"><img src={Nairobi} alt="Nairobi Event" /></div>
            <div className="embla__slide3"><img src={Music} alt="Music Event" /></div>
            <div className="embla__slide3"><img src={Wander} alt="Wander Event" /></div>

        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev2}>
      ❮
      </button>
      <button className="embla__next" onClick={scrollNext2}>
      ❯
      </button>
    </div>

                </div>
                </div>
    </section>
              
              </>
        
    );
}
export default Home;