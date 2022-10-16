// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SocialMedia } from "./SocialMedia";

export function Header() {
  return (
    <header className="App-header">
      <Logo />
      <Navigation />
      <SocialMedia />
    </header>
  );
}
