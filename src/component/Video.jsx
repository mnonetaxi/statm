
import sample from "../video/Get-booted-2.mp4";

const Video = () => {
  return (
    <div className="Container">
      <video width="1200" className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;