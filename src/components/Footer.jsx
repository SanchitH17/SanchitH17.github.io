import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/Vishalll069">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vishal-durge-745275210/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/fullstuckVishal">
              <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vishalll069/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/Vishalll069">
            Designed and built by Vishal Durge{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
          <a href="mailto: vishaldurge567@gmail.com" id="contact-email">vishaldurge567@gmail.com <hr /></a>
      </div>
    </footer>
  );
}
