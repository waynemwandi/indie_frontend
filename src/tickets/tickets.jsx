import React, { useState } from 'react';
import './tickets.css';

const Tickets = () => { 

    
        const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data here or send it to a server
        console.log('Submitted:', { name, email });
        // For instance, you might want to redirect or update the UI here
    };

    return (
        <>

        <div className="tickets-container">
            <div className="tickets-wrapper">
                <div className="tickets-col">
                    <form 
                        action="https://mobirise.eu/" 
                        method="POST" 
                        className="mbr-form form-with-styler" 
                        data-verified="" 
                        onSubmit={handleSubmit}
                    >
                        <div className="tickets-row">
                            <div hidden data-form-alert-danger className="alert alert-danger col-12">
                                Oops...! some problem!
                            </div>
                        </div>
                        <div className="dragArea row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h1 className="mbr-section-title mb-4 align-center mbr-fonts-style display-2">
                                    <strong>Buy Ticket Now!</strong>
                                </h1>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p className="mbr-text mbr-fonts-style mb-5 align-center display-7">
                                    Fill the form below to get started.
                                </p>
                            </div>
                            <div className="col-lg col-md col-12 form-group mb-3" data-for="name">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    data-form-field="name" 
                                    className="form-control" 
                                    id="name-form2-18"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-lg col-md col-12 form-group mb-3" data-for="email">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    data-form-field="email" 
                                    className="form-control" 
                                    id="email-form2-18"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mbr-section-btn col-md-auto col">
                                <button type="submit" className="btn btn-secondary display-4">Buy Now!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        </>

    );
}

export default Tickets;