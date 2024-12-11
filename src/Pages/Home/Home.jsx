import { useState } from 'react';



import Sidebar from '../../Components/Sidebar/sidebar';
import './Home.css';
import PropTypes from 'prop-types';
import Feeds from '../../Components/Feed/feed';

const Home = ({sidebar}) => {

   const [category , setCategory] = useState(0);

  return (
    <>
      {/* Passing the sidebar prop to the Sidebar component */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

      <div className={`container ${sidebar?"":'largecontainer'}`}>
        <Feeds category={category} setCategory={setCategory}/>
      </div>
    </>
  );
};


// Add propTypes validation
Home.propTypes = {
  sidebar: PropTypes.bool.isRequired, // Validate 'sidebar' as a required boolean prop
};

export default Home;