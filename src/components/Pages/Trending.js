import './Trending.css';

import React, { useEffect, useState } from 'react'

import Custompagination from '../Pagination/Custompagination';
import SingleContent from '../SingleContent/Singlecontent';
import axios from 'axios';

const Trending = () => {

    const [page, setPage] = useState(1);
    const [Content, setContent] = useState();

    const fetchTrending = async () =>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=60b7301de715242846997fe01f1b96fd&page=${page}`);
   
        console.log(data);
        setContent(data.results);
    };
    useEffect(() => {
        
        window.scroll(0, 0);
        fetchTrending();
    }, [page])


    return (
        <div>
        <span className="pageTitle">Trending Today</span>
        <div className="trending">
            {
                Content && Content.map((c)=>
                <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}>
             
                </SingleContent>
                )
            }
        </div>
        <Custompagination setPage={setPage} />
       </div>
    )
}

export default Trending
