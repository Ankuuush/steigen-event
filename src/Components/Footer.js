import React from 'react'

const Footer = () => {
    return (
        <div style={{marginTop:"3rem"}}>
            <footer>
        <a href="mailto:kumarankush1709@gmail.com" className="footer__link"><h3>steigen_event@acharya.ac.in</h3></a>
        <div className="social__list">
            
           <div className="social-list__link"><i className="fas fa-map-marker-alt"></i>  Acharya Dr. Sarvepalli Radhakrishnan Road<br/>
Acharya PO, Soldevanahalli<br/>
Bangalore-560 107, India</div>
           <div className="social-list__link"><i className="fas fa-phone-square-alt"></i>  +91 1234567890</div></div>
    </footer>
        </div>
    )
}

export default Footer
