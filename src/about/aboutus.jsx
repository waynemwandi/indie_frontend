import React, { useState } from 'react';
import './aboutus.css';
import fundingArt from '../assets/images/logo-white-1076x1076.webp';
import Financial from '../assets/images/Screenshot 2024-07-29 093626.png';
import Transparency from '../assets/images/Screenshot 2024-07-29 093650.png';
import Organic from '../assets/images/Screenshot 2024-07-29 093718.png';
/*import Creator from '../assets/images/mbr-696x508.webp';
import Branding from '../assets/images/team3.webp'; */

const AboutUs = () => {

  // State to manage the open/closed state of the accordion
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the accordion state
  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
};

  const faqs = [
    { question: "Is this a Loan?", answer: "No. This is a partnership between Artists and an Art Club that loves art. In exchange for funding for their performance, Artists share the ticket rights to their work." },
    { question: "What happens if the event is not successful?", answer: "All the artists on INDIE have a proven track  record, so we believe all their performances can succeed. In the event the event is not successful, all available funds return to the Art Club." },
    { question: "How long before I get returns?", answer: "All returns come back within one (1) month after the close of the Funding Cycle. " },
    { question: "What kinds of artists does INDIE specialize in?", answer: "INDIE currently specializes in Performance Events with a proven track record. We work with Artists who host ticketed-events and are willing to sell Ticket Rights to their Art Club." },
    { question: "What does the Revenue Split Agreement look like?", answer: "INDIE believes in growing the independent Art industry exponentially by incentivizing Artists to outdo themselves, and growing a loyal Art Club whose rights increase in value each funding round." },
];

  
    return (
<>
        
        <section className="Funding-art">
            <div className="Container-row">
                <div className="text-wrapper">
                    <h1 className = "header"> Funding Art </h1>
                    <p> INDIE is Art-Tech.&nbsp;<br/>
                    We are a Private Art Crowdfunding Platform. <br/>
                    We connect great Artists to Art lovers to fund their work, to the mutual benefit of both. <br/><br/>
                    Fund Art with us, get returns, and grow hidden gems around the world.<br/><br/>
                    Join an INDIE Art Club today.&nbsp; </p>
                    <div className="button-group">
                <a href ="/members" className = "button-members">Membership</a>
                <a href="/events" className = "button-event">Attend an Event</a>
            </div>
                    </div>

        <div className="image-wrapper">

            <img src= {fundingArt} alt="INDIE">
            </img>
            </div>
           </div>
            </section>


        
            <section className="whyfund">
        <div className="whyfund-row">
            <div className="cardWrapper">
              <h3 className="sectionCardTitle">Why Fund Art?</h3>
              <p className="cardText">
                Art is a fundamental human need, and Independent Art is growing worldwide.<br/><br/>
                It gives us all great joy to attend performance events and see compelling art creations. <br/><br/>
                Together, as creatives and fans, we can turn the art space into a self-sustaining community of Artists and Art lovers.<br/><br/>
              </p>
            </div>
    
          <div className="column column-right">
            <h1 className="sectionTitle">
              Our Vision<br/>
              Independent Art as a bankable asset, everywhere.<br/><br/>
              Our Mission
            </h1>
            <p className= "sectiontext">
              1. A self-sustaining funding tool for Independent Artists, starting in Kenya.<br/>
              2. A brand that stands for the public respect of Art.<br/>
              3. A holistic marketplace to fund Art Events and Art Merchandise.
            </p>
            <div className="sectionButtons">
              <a className="btnmember" href="/members">Fund Event</a>
              <a className="btnevents" href="/events">Attend Event</a>
            </div>
          </div>
        </div>
    </section>



    <section className = "financial">
        
        <div className="featureRow">
        <div className="featureItem">
          <img src= {Financial} alt = ""  className = "image" />
          <h4 className="cardTitle">
                Financial Sustainability</h4>
          </div>
          <div className="featureItem">
          <img src= {Transparency} alt = "" className = "image" />
          <h4 className="cardTitle">
                Transparency</h4>
          </div>
          <div className="featureItem">
          <img src= {Organic} alt = "" className = "image" /> 
          <h4 className="cardTitle">
                Organic Growth</h4>
          </div>

        </div>
        
    </section>



   {/* <section className = "container-indie">
      
      <div className="section-head-indie">
			<h4> The INDIE Team</h4>
		</div>
    <div className = "sectionrow">

      <div className="sectioncolumn">
      <div className="item-img">
						<img src= {Creator} alt="creator" title="" />
					</div>
					<div className="item-content">
						<h5>Data Analyst</h5>
						<h6 >Marketing Lead - Stephen Mathenge</h6>
						<p>stephen@indiearts.art</p>
					</div>
        </div>

        <div className="sectioncolumn">
      <div className="item-img">
						<img src= "" alt="creator" title="" />
					</div>
					<div className="item-content">
          <h5>Business Development Curator</h5>
						<h6>Sales Lead - Meldrine Wairimu</h6>
						<p>Art-Fans Communications Lead <br/>
            meldrine@indiearts.art</p>
					</div>
        </div>

        <div className="sectioncolumn">
      <div className="item-img">
						<img src= {Branding} alt="creator" title="" />
					</div>
					<div className="item-content">
          <h5> Branding</h5>
						<h6>Product Lead - George Gathiani</h6>
						<p>Artists Communications Lead <br/> <br/> george@indiearts.art </p>
					</div>
        </div>

      </div>


    </section> */}

      <section className = "questions-container"> 
      <div className="questions-head">
						
						<h3>FAQs for Artists</h3>
      <div className = "questions-row">

      {faqs.map((faq, index) => (
                            <div key={index} className="accordion">
                                <button 
                                    className="accordion-header" 
                                    onClick={() => toggleAccordion(index)}
                                >
                                  <span className="accordion-text">{faq.question}</span>
                                    <i className={`fas ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} accordion-icon`}></i>
                                </button>
                                <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
      
					</div>


          </div>
      </section>


            </>
    );
}

    
       
        


export default AboutUs