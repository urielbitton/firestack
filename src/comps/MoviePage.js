import React, {useState, useEffect, useContext} from 'react'
import Feature from './Feature'
import { MovieContext } from './MovieContext'

function MoviePage(props) {  

  const randnum = Math.round(Math.random() * 10000) + 1

  useEffect(() => {
    const slider = document.querySelectorAll('.imageslider');
    let isDown = false;
    let startX;
    let scrollLeft;   

    for(let item of slider) {
        item.addEventListener('mousedown', (e) => {
            isDown = true;
            item.classList.add('active');
            startX = e.pageX - item.offsetLeft;
            scrollLeft = item.scrollLeft;
        });
        item.addEventListener('mouseleave', () => {
            isDown = false;
            item.classList.remove('active');
        });
            item.addEventListener('mouseup', () => {
            isDown = false;
            item.classList.remove('active');
        });
        item.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - item.offsetLeft;
            const walk = (x - startX) * 0.8; 
            item.scrollLeft = scrollLeft - walk;
        });  
    } 
  },[])   
   
  return (  
    <div className="moviepage">
      <Feature title={props.title} year={props.year} cover={props.cover} rating={props.rating} genre={props.genre} descript={props.descript} starring={props.starring} director={props.director} trailer={props.trailer} watchlist={props.watchlist} stars={props.stars}/>
      <div className="grid"> 
        <div className="onemoviegrid">
          <div className="oneimage">
            <img src={props.image} alt="movieimg"/>
            <small>IMDB: <a href={props.imdblink} target="_target" rel="noopener noreferrer">{props.title}</a></small>
            <small>Views: {randnum}</small>
          </div> 
          <div className="onemovieinfo">  
            <h5>Synopsis<hr/></h5>
            <p>{props.descript}</p>  
            <h5>Starring<hr/></h5>
            { 
              Array.isArray(props.starring)?
             ( 
              props.starring? (
              props.starring.map(el => {
                return <h6><img src="https://i.imgur.com/t9EHxct.png" alt="actor"/>{el}</h6>
              })
              )
             : <div className="altactorimg">
                <h6><img src="https://i.imgur.com/t9EHxct.png" alt="pictures"/></h6>
                <h6><img src="https://i.imgur.com/t9EHxct.png" alt="pictures"/></h6>
                <h6><img src="https://i.imgur.com/t9EHxct.png" alt="pictures"/></h6>
              </div>
             ) :
              ( 
                <div className="altactorimg">
                  <h6><img src="https://i.imgur.com/t9EHxct.png" alt="pictures"/>{props.starring?props.starring.split(",")[0]:""}</h6>
                  <h6><img src="https://i.imgur.com/t9EHxct.png" alt="pictures"/>{props.starring?props.starring.split(",")[1]:""}</h6>
                  <h6><img src="https://i.imgur.com/t9EHxct.png" alt="pictures"/>{props.starring?props.starring.split(",")[2]:""}</h6>
                </div>
              )
            } 
            <div className="clear"></div>
            <div className="spacer"></div>
            <h5>Director</h5>
            <h6><img src={props.director?props.director.pic:"https://i.imgur.com/t9EHxct.png"} alt="director" />{props.director?props.director.name:""}</h6>
          </div>
          <div className="onemoviemedia">
            <h5>Videos<hr/></h5>
            <iframe src={"https://www.youtube.com/embed/"+props.trailer} title="trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h5>Photos<hr/></h5> 
            <div className="imageslider">
              <div className="imagesliderinner">
              {
                props.pictures? (
                props.pictures.map(el => {
                  return <img src={el} alt="pictures"/>
                })
                )
               :""
              } 
              </div>
            </div>
          </div>
        </div> 
      <br/>    
        
        
      </div>
    </div>  
  )
}

export default MoviePage