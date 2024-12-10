import Link from 'next/link';

export default function Footer() {
    return (
<footer>
<div className="max-width footer-container">
  <i className="fa-solid fa-fish footer-logo"></i>
  <ul className="footer-link">
    <li>
      <a href="#">Instagram </a>
    </li>
    <li><a href="#">Facebook</a></li>
    <li><a href="#">Twitter</a></li>
  </ul>
</div>
</footer>

    );
  }