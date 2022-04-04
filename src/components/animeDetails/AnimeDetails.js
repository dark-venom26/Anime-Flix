import "./animeDetails.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedAnime,
  removeSelectedAnime,
} from "../../redux/actions/animeActions";
import { useEffect } from "react";

function AnimeDetails() {
  const anime = useSelector((state)=> state.anime)
  const {animeId} = useParams()
  const dispatch = useDispatch()
  const {title, original_title, image, movie_banner, description, director, producer, release_date, running_time, rt_score} = anime;

  
  useEffect(() => {
    const fetchAnimeDetails = async () =>{
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${animeId}`).catch((err)=>console.log(err))
      dispatch(selectedAnime(res.data))
    }
    if(animeId && animeId !== ""){    
      fetchAnimeDetails()
    }
  
    return () => {
      dispatch(removeSelectedAnime())
    }
  }, [animeId, dispatch])
  

  return (
    <section className="detailSection">
      <div className="animeCover">
        <img src={movie_banner} alt="" />
        <div className="backgroundColor"></div>
      </div>
      <div className="animeDetails">
        <article className="animeView">
          <div className="animeCard">
            <div className="animeImage">
              <img src={image} alt="anime img" />
              <div className="trending cardPrimaryData">Rating {rt_score}%</div>
              <div className="animeDuration cardPrimaryData">{running_time} min</div>
            </div>
            <button className="watchNow">Watch Now</button>
          </div>
        <div className="animeAbout">
          <div className="aboutBlock">
            <span className="blockHeading">Title:</span>
            <span className="blockContent">{title}</span>
          </div>
          <div className="aboutBlock">
            <span className="blockHeading">Original Title:</span>
            <span className="blockContent">{original_title}</span>
          </div>
          <div className="aboutBlock">
            <span className="blockHeading">Description:</span>
            <span className="blockContent">{description}</span>
          </div>
          <div className="aboutBlock">
            <span className="blockHeading">Director:</span>
            <span className="blockContent">{director}</span>
          </div>
          <div className="aboutBlock">
            <span className="blockHeading">Producer:</span>
            <span className="blockContent">{producer}</span>
          </div>
          <div className="aboutBlock">
            <span className="blockHeading">Release date:</span>
            <span className="blockContent">{release_date}</span>
          </div>
        </div>
        </article>
      </div>
    </section>
  );
}

export default AnimeDetails;
