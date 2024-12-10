import { useState } from 'react';
import Feed from '../../Components/Feed/feed';
import Sidebar from '../../Components/Sidebar/sidebar';
import './Home.css';

const Home = ({sidebar}) => {

   const [category , setCategory] = useState(0);

  return (
    <>
      {/* Passing the sidebar prop to the Sidebar component */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

      <div className={`container ${sidebar?"":'largecontainer'}`}>
        <Feed category={category} setCategory={setCategory} />
      </div>
    </>
  );
};

export default Home;