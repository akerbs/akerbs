import MyGoogleMap from "../components/MyGoogleMap";

export default function ContactPage() {
  return (
    <div className="Contact-content">
      <div className="Contact-content-my-contacts">
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:anker2702@gmx.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              anker2702@gmail.com
            </a>
          </li>
          <li>
            Telegram:{" "}
            <a
              href="https://telegram.me/anker27"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://t.me/anker27
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+79951950725"
              target="_blank"
              rel="noopener noreferrer"
            >
              +7 995 195 07 25
            </a>
          </li>
        </ul>
      </div>
      <div className="Contact-content-google-map">
        <MyGoogleMap />
      </div>
    </div>
  );
}
