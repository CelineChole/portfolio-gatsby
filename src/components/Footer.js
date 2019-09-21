import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url, label } = social;
          return (
            <li key={url}>
              <a href={url} aria-label={label} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Built by Céline Cholé</li>
        <li>
          Design:{' '}
          <a href="https://html5up.net" rel="noopener noreferrer" target="_blank">
            HTML5 UP
          </a>
        </li>
      </ul>
    </footer>
  );
}
