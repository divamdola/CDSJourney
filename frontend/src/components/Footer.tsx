import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.svg';
import twitterIcon from '../assets/twitter-round-svgrepo-com.svg';
import linkedinIcon from '../assets/linkedin-round-svgrepo-com.svg';
import instagramIcon from '../assets/instagram-round-svgrepo-com.svg';
import youtubeIcon from '../assets/youtube-color-svgrepo-com.svg';
import telegramIcon from '../assets/telegram-svgrepo-com.svg';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Courses', path: '/courses' },
      { label: 'Blog', path: '/blog' }
    ],
    resources: [
      { label: 'Study Materials', path: '/resources' },
      { label: 'Mock Tests', path: '/mock-tests' },
      { label: 'Previous Papers', path: '/previous-papers' }
    ],
    support: [
      { label: 'Help Center', path: '/help' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQ', path: '/faq' }
    ],
    contact: [
      { label: '+91 98765 43210', path: 'tel:+919876543210' },
      { label: 'contact@cdsjourney.com', path: 'mailto:contact@cdsjourney.com' },
      { label: 'New Delhi, India', path: '#' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img
                src={logo}
                alt="CDSJourney Logo"
                className="footer__logo-image"
              />
            </Link>
            <p className="footer__description">
              Your trusted partner for defence exam preparation. Expert guidance for CDS, AFCAT, NDA, and CAPF exams.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Twitter" className="footer__social-link">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="YouTube" className="footer__social-link">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="#" aria-label="Telegram" className="footer__social-link">
                <img src={telegramIcon} alt="Telegram" />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Company</h4>
            <ul className="footer__links">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4>Resources</h4>
            <ul className="footer__links">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4>Contact</h4>
            <ul className="footer__links">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form className="footer__newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__newsletter-input"
                required
              />
              <button type="submit" className="btn btn--primary">Subscribe</button>
            </form>
          </div>

          <div className="footer__legal">
            <p>© 2025 CDSJourney. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;