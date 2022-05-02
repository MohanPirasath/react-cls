// import userEvent from "@testing-library/user-event";
import "./App.css";


export default function App() {


  let a= [
    {
      name:"KGF",
      src:"https://static.toiimg.com/photo/msid-90725677/90725677.jpg",
      notes:"The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
      rate:4.7
    },
    {
      name:"Pursuit of Happiness",
      src:"https://fontmeme.com/images/The-Pursuit-of-Happyness-Poster.jpg",
      notes:"Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
      rate:4.6
    },
    {
      name:"Inception",
      src:"https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
      notes:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rate:3.9
    },
   
   
  
  ];
  return (
    <div className="App">
      
     <div className="flex">
       <div className="row">
       {
        a.map((a)=>(<Pro name= {a.name} src={a.src} notes={a.notes} rate={a.rate}/>))
      }
       </div>
   
     </div>
     

      {/* <Pro name="mohan" src="https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"/>
      <Pro name="mustak" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      <Pro name="ajith" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
       */}

      
    </div>
  );
}

function Pro({name,src,notes,rate}) {
  return (
    <div className="col-4-lg">
      <div className="separate">
     <img src={src} alt={name} />
   </div>
   <div className="col">
     <div className="name"> <h2>{name}</h2></div>
     <div className="rating"> <h2>⭐ {rate}</h2></div>
   </div>
   <div className="notes">
     <p>{notes}</p>
   </div>
    </div>
    
  );
}



