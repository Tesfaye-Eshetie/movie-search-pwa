import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <article className="contact">
        <h3 id="contact" className="contact__title">
          Contact
        </h3>
        <div className="contact__info">
          <div>
            <p>
              <span>E-Mail:</span> tesfayeeshetie19@gmail.com
            </p>
            <p>
              <span>Phone:</span> +1 804-968-9428
            </p>
            <p>
              <span>Residence:</span> North Carolina, USA
            </p>
            <p>
              <span>Portfolio URL:</span>{" "}
              <a href="https://www.tesfayeeshetie.com/" target="blank">
                tesfayeeshetie.com
              </a>
            </p>
          </div>
          <ul className="social__icons">
            <li>
              <a
                href="https://www.linkedin.com/in/tesfaye-eshetie-0945a1204/"
                target="blank"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TesfayeEshetie1" target="blank">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Tesfaye-Eshetie" target="blank">
                <i className="fab fa-brands fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </article>
      <h3 className="footer__text">Copyright, Tesfaye Eshetie, 2022</h3>
    </footer>
  );
}
