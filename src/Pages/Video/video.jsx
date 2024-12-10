import { useParams } from "react-router-dom";
import Playvideo from "../../Components/PlayVideo/Playvideo";
import Recommended from "../../Components/recommended/Recommended";
import "./video.css";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  );
};

export default Video;
