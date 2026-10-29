import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  const chessProject = config.projects.find((p) =>
    p.title.toLowerCase().includes("grandfish")
  );
  const chessUrl = chessProject?.link || "https://grand-fish.vercel.app/";

  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href={chessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Play with Me
        </a>
        <a
          href={config.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Hire Me →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
