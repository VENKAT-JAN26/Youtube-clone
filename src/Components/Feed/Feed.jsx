// import './Feed.css'
// import thumbnail1 from '../../assets/thumbnail1.png'
// import thumbnail2 from '../../assets/thumbnail2.png'
// import thumbnail3 from '../../assets/thumbnail3.png'
// import thumbnail4 from '../../assets/thumbnail4.png'
// import thumbnail5 from '../../assets/thumbnail5.png'
// import thumbnail6 from '../../assets/thumbnail6.png'
// import thumbnail7 from '../../assets/thumbnail7.png'
// import thumbnail8 from '../../assets/thumbnail8.png'
// import { Await, Link } from 'react-router-dom';
// import { API_KEY } from '../../data';
// import { useState, useEffect} from 'react';

// const Feed = ({category}) => {
// const [data,setData]=useState([]);

// const fetchData = async ( )=>{
//   const videoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY }`;
//   await fetch (videoList_url).then(response=>response.json()).then(data=>setData(data.items))
// }

// useEffect(()=>
//           {
//           fetchData();
// },[category])

// const Feed = () => {
//   return (
//   <>
//   <div className="feed">
//   <div className='card'>
//           <img src={thumbnail1}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>
//   <div className='card'>
//           <img src={thumbnail2}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>
//   <div className='card'>
//           <img src={thumbnail3}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>
//   <div className='card'>
//           <img src={thumbnail4}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>
//   <div className='card'>
//           <img src={thumbnail5}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>
//   <div className='card'>
//           <img src={thumbnail6}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>
//   <div className='card'>
//           <img src={thumbnail7}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>
//   <div className='card'>
//           <img src={thumbnail8}  alt=''/ >
//           <h2> Best channel to learn that help you to be a developer</h2>
//           <h3>Greatstack</h3>
//           <p>15k views & bull; 2 days ago</p>
//   </div>

//   </div>
//   </>
//   )
// }

// export default Feed;

import "./Feed.css";
//import thumbnail1 from "../../assets/thumbnail1.png";
import { useState, useEffect } from "react";
import { API_KEY } from "../../data";
import { Link } from "react-router-dom";
import { value_converter } from "../../data";
import moment from "moment";
import PropTypes from "prop-types";

const Feeds = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    
      <div className="feed">
        {data.map((item, index) => {
          return (
            <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
          );
        })}
      </div>
    
  );
};

// Add propTypes validation
Feeds.propTypes = {
  category: PropTypes.string.isRequired, // Specify that 'category' is a required string
};


export default Feeds;
