import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {

    return (
        <div className="social-container">
            <a
                href="https://github.com/WillV1"
                className="github social" target="_blank" rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
                href="https://www.linkedin.com/in/williamvanhook/"
                className="linkedin social" target="_blank" rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
        </div>
    )

}

export default SocialFollow;