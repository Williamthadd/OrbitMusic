import SportifyLogo from "../Assets/Sportify.png";
import YoutubeLogo from "../Assets/youtube.png";
import InstagramLogo from "../Assets/Instagram.png";
import MailLogo from "../Assets/mail.png";

export default function Footer() {
  return (
    <div className="footer flex fd-c ai-c">
      <div className="flex fd-c ai-c">
        <p className="footer-p1">Check Us Out</p>
        <div className="socialmedia-logo flex">
          <img
            src={SportifyLogo}
            alt="Sportify"
            className="socialmedia-icons"
          ></img>
          <img
            src={YoutubeLogo}
            alt="Youtube"
            className="socialmedia-icons"
          ></img>
          <img
            src={InstagramLogo}
            alt="Instagram"
            className="socialmedia-icons"
          ></img>
        </div>
      </div>

      <div className="flex fd-c ai-c mt-4">
        <p className="">Contact us at</p>
        <div className="flex socialmedia-logo">
          <img src={MailLogo} alt="mail" className="socialmedia-icons"></img>
          <p className="footer-p2">customerservice@orbit.co.id</p>
        </div>
      </div>
    </div>
  );
}
