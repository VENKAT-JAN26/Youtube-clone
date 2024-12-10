import "./Playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";

import moment from "moment";
import { useParams } from "react-router-dom";

const Playvideo = () => {

  const{ videoId } =useParams();

  const [apiData, SetApiData] = useState(null);
  const [chennalData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);


  //fetching video data
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => SetApiData(data.items[0]));
      //console.log(data.items[0]);
  };


  
  //fetching Chennal otherdata
  const fetchChannelData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId} &key=${API_KEY} `;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));
      //console.log(data.items[0]);
  };

    //fetching Comment data
    // const fetchCommentData = async () => {
    //   const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY} `;
    //   await fetch(commentData_url)
    //     .then((response) => response.json())
    //     .then((data) => setChannelData(data.items[0]));
    //     //console.log(data.items[0]);
    // };

  


  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData ();
  }, [apiData]);

  // useEffect(() => {
  //   fetchCommentData();
  // }, [apiData]);
  

  return (
    <>
      <div className="play-video">
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>

        {/* {apiData ? (
                   <h3>{apiData.snippet.title}</h3> // Show title from API response
                    ) : (
                   <h3>Loading...</h3> // Show loading text while data is being fetched
                    )} */}

        <div className="play-video-info">
          <p>
            {apiData
              ? `${value_converter(apiData.statistics.viewCount) } views • ${moment(
                  apiData.snippet.publishedAt
                ).fromNow()}`
              : "Loading..."}
          </p>
          
          <div>
           <span><img src={like} alt="" /> {apiData? value_converter(apiData.statistics.likeCount):155}</span>
           <span><img src={dislike} alt="" /> 2</span>
           <span><img src={share} alt="" /> Share</span>
           <span><img src={save} alt="" /> Save</span>
          </div>

        </div>
        <hr />
        <div className="publisher">
        <img src={chennalData?chennalData.snippet.thumbnails.default.url:"jack"} alt="" />
       

          <div>
            <p> {apiData?apiData.snippet.channelTitle:"Channel Name  Loading..."}</p>
            <span> {chennalData?value_converter(chennalData.statistics.subscriberCount):'1M'} subscribers</span>
          </div>
          <button> Subscribe</button>
        </div>
        <div className="vid-description">
          <p>{apiData?apiData.snippet.description.slice(0,300):'Description Here Loading...'}</p>
         
          <hr />
          <h4> {apiData? value_converter(apiData.statistics.commentCount):102} comment </h4>
          {/* {commentData.map((item,index)=>{return(

<div  key={index} className="comment">
<img src={user_profile} alt="" />
<div>
  <h3>
  
    Jack Nickolson <span>1 day ago</span>
  </h3>
  <p>
   venkat jidcjnowjnwojnojn
  </p>
  <div className="comment-action">
    <img src={like} alt=""></img>
    <span>244</span>
    <img src={dislike} alt="" />
  </div>
</div>
</div>

          )})} */}

          


          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                {" "}
                Jack Nickolson <span>1 day ago</span>
              </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis quidem fugiat quas maiores ut illo deserunt
                voluptatibus iste, quisquam, voluptatem sit quasi magni
                similique consectetur debitis nulla, nostrum obcaecati
                recusandae!
              </p>
              <div className="comment-action">
                <img src={like} alt=""></img>
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                {" "}
                Jack Nickolson <span>1 day ago</span>
              </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis quidem fugiat quas maiores ut illo deserunt
                voluptatibus iste, quisquam, voluptatem sit quasi magni
                similique consectetur debitis nulla, nostrum obcaecati
                recusandae!
              </p>
              <div className="comment-action">
                <img src={like} alt=""></img>
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                {" "}
                Jack Nickolson <span>1 day ago</span>
              </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis quidem fugiat quas maiores ut illo deserunt
                voluptatibus iste, quisquam, voluptatem sit quasi magni
                similique consectetur debitis nulla, nostrum obcaecati
                recusandae!
              </p>
              <div className="comment-action">
                <img src={like} alt=""></img>
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playvideo;
