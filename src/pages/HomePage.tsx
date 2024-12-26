import React from 'react';
import BlogList from '../components/BlogList/BlogList.tsx';

const HomePage : React.FC = () =>{
    return(
        <div className="Homepage">
            <BlogList />
        </div>
    );
}

export default HomePage;
