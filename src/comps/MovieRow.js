import React, { useEffect } from 'react'

function MovieRow(props) {
    
    useEffect(() => {
        const slider = document.querySelectorAll('.movierow');
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
                const walk = (x - startX) * 0.6; 
                item.scrollLeft = scrollLeft - walk;
            }); 
        }
    },[])
    
    return (
        <>
        <h5 className="sectiontitle">{props.rowtitle}<hr/></h5>
         <div className="movierow">   
            <div className="innerrow">
                
                {props.films}
            </div>   
        </div>
        </>
    ) 
}   

export default MovieRow