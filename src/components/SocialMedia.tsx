import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaItem } from "./SocialMediaItem";


export function SocialMedia() {
  return (
    <div className="sm-wrapper">
      <SocialMediaItem url="https://www.linkedin.com/in/akerbs/">
        <FontAwesomeIcon icon={faLinkedin} className='sm-icon' size="2x" />
      </SocialMediaItem>

      <SocialMediaItem url="https://github.com/akerbs">
        <FontAwesomeIcon icon={faGithub} className='sm-icon' size="2x" />
      </SocialMediaItem>
    </div>
  )
};
