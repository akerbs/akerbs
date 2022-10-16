import { MyGoogleMap } from "../components/MyGoogleMap";

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
              anker2702@gmx.de
            </a>
          </li>
          <li>
            Skype:{" "}
            <a
              href="skype:draft23"
              target="_blank"
              rel="noopener noreferrer"
            >
              draft23
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+4915207350279"
              target="_blank"
              rel="noopener noreferrer"
            >
              0152 0735 0279
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
