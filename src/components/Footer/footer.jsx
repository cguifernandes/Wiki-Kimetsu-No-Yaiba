import React from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faInbox } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion"

const Footer = () => {
    return (  
        <footer className="footer">
            <div className="flex-socias">
                <motion.p 
                whileHover={{ scale: 1.05}} 
                whileTap={{ scale: 0.9 }}>
                <FontAwesomeIcon className="icon" icon={faChevronRight} />
                    <a href="https://www.instagram.com/_.guiii/"><span>Instagram</span>
                    <FontAwesomeIcon className="fa-icon instagram" icon={faInstagram} /></a>
                </motion.p>
                <motion.p 
                whileHover={{ scale: 1.05}} 
                whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon className="icon" icon={faChevronRight} />
                    <a href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"><span>Linkedin</span>
                    <FontAwesomeIcon className="fa-icon linkedin" icon={faLinkedin} /></a>
                </motion.p>
                <motion.p 
                whileHover={{ scale: 1.05}} 
                whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon className="icon" icon={faChevronRight} />
                    <a href="https://github.com/cguifernandes"><span>Github</span>
                    <FontAwesomeIcon className="fa-icon github" icon={faGithub} /></a>
                </motion.p>
                <motion.p 
                whileHover={{ scale: 1.05}} 
                whileTap={{ scale: 0.9 }}>
                    <FontAwesomeIcon className="icon" icon={faChevronRight} />
                    <a href="mailto:gui.adfer@gmail.com.com "><span>E-mail</span>
                    <FontAwesomeIcon className="fa-icon email" icon={faInbox} /></a>
                </motion.p>
            </div>
            <div className="flex-text">
                <p>Feito por <a href="https://github.com/cguifernandes">Guilherme Fernandes</a></p>
            </div>
        </footer>
    );
}
 
export default Footer;