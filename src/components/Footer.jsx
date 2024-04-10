import React from 'react';

const date=new Date();
const currentYear=date.getFullYear();
function Footer(){
    return(
    <footer>
     <p className="footer">copyright {currentYear}</p>
    </footer>
    )
}

export default Footer;