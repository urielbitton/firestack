import React, {useEffect} from 'react' 

function Search() {
   
  useEffect(() => {
    document.querySelector('.searchcont .close').addEventListener("click", closeSearch)
    function closeSearch() {
        document.querySelector('.searchcont').style.opacity = "0"
        document.querySelector('.searchcont').style.transform = "scale(0.9)"
        setTimeout(() => {
          document.querySelector('.searchcont').style.display = "none"
        }, 100);
        setTimeout(() => {
          document.body.style.overflowY = "scroll"
        }, 200);
    }
  },[])  
  
  return (
    <div className="searchcont">
      <i className="close"></i>
      <input type="text" className="mainsearch" placeholder="Find a title..."/>
      <div className="spacerl"></div>

    </div>
  )
}

export default Search