import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (

        <div className=" footer  bottom-0 w-100 " >
            <div className="row">
                <div className="col-md-4">
                    <h2>Student welfare </h2>
                    <p>Stay with us</p>
                    authority©. ALl rights reseves.
                </div>
                <div className="col-md-4">
                    <h2>Our Services</h2>
                    <ul className=" mx-auto">
                        <li>Education</li>
                        <li>Madok Mukto</li>
                        <li>Welfare</li>
                        <li>PohelaBoishakj</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Contact with us</h3>
                    <p> Email:b@yahoo.com</p>
                    <p> Phone number: 8989-7878-9090</p>
                    <div className="font-icon w-25 d-flex justify-content-center mx-auto justify-content-evenly">
                        <a href="https://github.com/bipro-b" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/bipro-barai-419381179/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/channel/UChekLTEIdsGpPY3JnC38Udw/featured" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a>
                        <a href="https://web.facebook.com/profile.php?id=100062495514493" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Footer; 