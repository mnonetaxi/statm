
import sample from "../video/Get-booted-2.mp4";
import Button from "react-bootstrap/Button";

const Video = () => {
  return (
    <div>
    <div className="Container">
      <video width="1300" className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>

    <div>
        <div className="mb-2">
          <Button variant="primary" size="lg">
            BROWSE ALL
          </Button>{" "}
          <Button variant="secondary" size="lg">
            BROWSE BRANDS
          </Button>
        </div>
      </div>
    </div>
    
  );
};

export default Video;