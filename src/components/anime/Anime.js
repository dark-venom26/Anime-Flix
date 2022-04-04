import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './anime.css'

function Anime() {
    const animes = useSelector((state)=> state.allAnimes.animes);

    const renderAnimes = animes.map((anime)=>{
        const {id, title, image, description, running_time} = anime;
        return (
            <div key={id} className="cardItem">
                <Link to={`/anime/${id}`} className="card">
                    <div className="cardTop">
                    <img src={image} alt="anime img" />
                    </div>
                    <div className="cardBottom">
                    <div className="animeName">{title}</div>
                    <div className="animeDescription">
                        {description.substring(0,30)}...
                    </div>
                    <div className="duration">{running_time} min</div>
                    </div>
                </Link>
            </div>
        )
    })
    
  return (
    <>
        {renderAnimes}
    </>
  );
}

export default Anime;
