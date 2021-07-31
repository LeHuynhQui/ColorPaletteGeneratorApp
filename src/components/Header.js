import React from 'react'

export default function Header() {
    return (
        <header>
            <a href="/">
                <div className="logo">
                    <img src="./img/logoCyberColor.svg" alt="logo" />
                </div>
            </a>
            <div className="social">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter" />
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-dribbble" />
                </a>
            </div>
        </header>

    )
}
