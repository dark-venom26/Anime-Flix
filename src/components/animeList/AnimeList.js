import './animeList.css'
import {useDispatch} from "react-redux";
import { setAnimes } from '../../redux/actions/animeActions';
import { useEffect } from 'react';
import axios from 'axios';
import Anime from '../anime/Anime';

function AnimeList() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const fetchAnimes = async () => {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films/`).catch(err=>{
        console.log(err)
      })
      dispatch(setAnimes(res.data))
    }
    fetchAnimes()
  },[dispatch])
  
  return (
    <section className='mainSection'>
        <div className="heading">Animes Collections</div>
        <article className='movieBlock'>
          <div className="cardLists collections">
            <Anime />
          </div>
        </article>
    </section>
    
  )
}

export default AnimeList