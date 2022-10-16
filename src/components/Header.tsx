import { Navigation } from "./Navigation";
import { SocialMedia } from "./SocialMedia";

export function Header() {
  return (
    <header className="App-header">
      
      <div className="App-logo-container">
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="App-logo" alt="logo" />
      </div>
      
      <Navigation />
      <SocialMedia />
      
    </header>
  );
}
