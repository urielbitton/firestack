import React, {createContext, useState} from 'react'

export const MovieContext = createContext()

const MovieContextProvider = (props) => {
  
  const [populars, setPopulars] = useState([
    {
      id: 1,
      title: "Avengers: Infinity War",
      year: 2019,
      image: "https://imgur.com/IdUrFXz.jpg",
      genre: "Action, Superhero",
      runtime: "2:30"
  }, 
  {
      id: 2, 
      title: "Bad Boys For Life",
      year: 2020,
      image: "https://imgur.com/65HpXJ2.jpg",
      genre: "Action, Crime",
      runtime: "1:40"
  },
  {
      id: 3,
      title: "Black Panther",
      year: 2018,
      image: "https://imgur.com/8YvAuK0.jpg",
      genre: "Action, Superhero",
      runtime: "1:55"
  },
  {
      id: 4,
      title: "Captain Marvel",
      year: 2019,
      image: "https://imgur.com/VC37AJR.jpg",
      genre: "Action, Superhero",
      runtime: "1:45"
  },
  {
      id: 5,
      title: "Moonlight",
      year: 2016,
      image: "https://imgur.com/VlketGj.jpg",
      genre: "Drama",
      runtime: "1:40"
  },
  {
      id: 6,
      title: "Thor Ragnarok",
      year: 2017,
      image: "https://imgur.com/R2g3fBM.jpg",
      genre: "Action, Superhero",
      runtime: "2:10"
  },
  {
      id: 7,
      title: "Jurassic World 2",
      year: 2018,
      image: "https://imgur.com/TbbK0f7.jpg",
      genre: "Sci-fi",
      rating: 4337,
      runtime: "1:37"
  } 
  ])

  const [trendings, setTrendings] = useState([
    {
      id: 1,
      title: "Star Wars: The Rise Of Skywalker",
      year: 2019,
      image: "https://imgur.com/ZXAUvS2.jpg",
      cover: "https://i.imgur.com/pOJwXBR.jpg?1",
      genre: "Action, Sci-fi",
      rating: 4181,
      descript: "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",
      runtime: "2:15"
  },
  {
      id: 2,
      title: "Wonder Woman: 1984",
      year: 2021,
      image: "https://imgur.com/PA3xwJA.jpg",
      cover: "https://i.imgur.com/dc8WQFN.jpg",
      descript: "Fast forward to the 1980s as Wonder Woman's next big screen adventure finds her facing two all-new foes: Max Lord and The Cheetah.",
      rating: 4187,
      genre: "Action, Superhero",
      runtime: "2:10"
  },
  {
      id: 9,
      title: "Interstellar",
      year: 2014,
      image: "https://i.imgur.com/d22l87W.jpg",
      cover: "https://i.imgur.com/qkDLVqu.jpg",
      descript: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: 12187,
      genre: "Sci-fi, Adventure",
      runtime: "2:49"
  },
  {
      id: 3,
      title: "Joker",
      year: 2019,
      rating: 5187,
      image: "https://imgur.com/G8yYxE2.jpg",
      cover: "https://i.imgur.com/mMklHTg.jpg",
      genre: "Crime",
      descript: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      runtime: "1:43"
  },
  {
      id: 4,
      title: "Black Is King",
      year: 2020,
      rating: 1122,
      image: "https://imgur.com/YQtej7q.jpg",
      cover: "https://i.imgur.com/NHt9H2U.jpg",
      genre: "Drama",
      descript: "Visual album from Beyoncé inspired by 'The Lion King'.",
      runtime: "1:20"
  },
  {
      id: 5,
      title: "The Lion King",
      year: 2019,
      rating: 4337,
      image: "https://imgur.com/nOjZI3b.jpg",
      cover: "https://i.imgur.com/duFebko.jpg",
      genre: "Action, Animation",
      descript: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
      runtime: "1:39"
  },
  {
      id: 6,
      title: "Alladin",
      year: 2019,
      rating: 4322,
      image: "https://imgur.com/C7zqxPc.jpg",
      cover: "https://i.imgur.com/hct9HmK.jpg",
      genre: "Action, Drama",
      descript: "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
      runtime: "2:05"
  },
  { 
      id: 7,
      title: "Artemis Fowl", 
      year: 2020,
      image: "https://imgur.com/CawfaoH.jpg",
      cover: "https://financerewind.com/wp-content/uploads/2020/06/artemisfowlreviewsocial.jpg",
      descript: "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
      rating: 1290,
      genre: "Action, Crime",
      runtime: "1:32"
  }, 
  {
      id: 8,
      title: "Aquaman",
      year: 2018,
      rating: 3221,
      image: "https://imgur.com/bYqJWR6.jpg",
      cover: "https://i.imgur.com/SjlBIOM.jpg",
      genre: "Action, Superhero",
      descript: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
      runtime: "2:12"
  }
  ])

  const [classics, setClassics] = useState([
    {
        id: 1,
        title: 'The Dark Knight',
        year: 2008,
        image: "https://imgur.com/UmVuDT4.jpg",
        genre: "Drama, Superhero, Thriller",
        runtime: "2:20"
    }, 
    {
        id: 2,
        title: "Shutter Island",
        year: 2010, 
        image: "https://imgur.com/8kRzl5X.jpg",
        genre: "Psychological Thriller",
        runtime: "2:00"
    },
    {
        id: 3,
        title: "The Matrix",
        year: 1999,
        image: "https://imgur.com/htUqljV.jpg",
        genre: "Psychological Thriller",
        runtime: "1:45"
    },
    {
        id: 4,
        title: "The Count Of Monte Cristo",
        year: 2004,
        image: "https://imgur.com/7qxnpFf.jpg",
        genre: "Action, Adventure",
        runtime: "1:40"
    },
    {
        id: 5,
        title: "The Dark Knight Rises",
        year: 2012,
        image: "https://imgur.com/Haii2xZ.jpg",
        genre: "Drama, Superhero, Thriller",
        runtime: "2:30"
    },
    { 
        id: 6,
        title: "Spider Man",
        year: 2002,
        image: "https://imgur.com/LdDVlpx.jpg",
        genre: "Action, Superhero",
        runtime: "1:46"
    },
    {
        id: 7,
        title: "Back To The Future",
        year: 1986,
        image: "https://imgur.com/VGkrtRv.jpg",
        genre: "Sci-fi, Adventure",
        runtime: "1:40"
    },
    {
        id: 8, 
        title: "Pirates of The Carribean",
        year: 2005,
        image: "https://imgur.com/DPVzeX3.jpg",
        genre: "Adventure",
        runtime: "2:40"
    },
    {
        id: 9,
        title: "The Mummy",
        year: 2002,
        image: "https://imgur.com/QXN9zCP.jpg",
        genre: "Adventure",
        runtime: "2:11"
    },
    {
        id: 10,
        title: "Troy",
        year: 2004,
        image: "https://imgur.com/upCRXCJ.jpg",
        genre: "Adventure, War",
        runtime: "1:40"
    },
  ])
  
  return (
    <MovieContext.Provider value={{populars, trendings, classics}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider