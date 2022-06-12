// import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import "./App.css";
import * as yup from "yup";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { API } from "./goble";

import {  useFormik } from 'formik';

// let movielist1 = [
//   {
//     name: "RRR",
//     id:"101",
//     src:
//       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     rate: 8.8,
//     notes:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//     name: "Iron man 2",
//     id:"102",
//     src:
//       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     rate: 7,
//     notes:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     trailer: "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//     name: "No Country for Old Men",
//     id:"103",
//     src:
//       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rate: 8.1,
//     notes:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//     name: "Jai Bhim",
//     id:"104",
//     src:
//       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     notes:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rate: 8.8,
//     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//     name: "The Avengers",
//     id:"105",
//     rate: 8,
//     notes:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     src:
//       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//     name: "Interstellar",
//     id:"106",
//     src: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     rate: 8.6,
//     notes:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//     name: "Baahubali",
//     id:"107",
//     src: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     rate: 8,
//     notes:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//     name: "Ratatouille",
//     id:"108",
//     src:
//       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     rate: 8,
//     notes:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   }
// ];
export default function App() {
  const [mode, setmode] = useState("light");
  const navigate = useNavigate();

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <Paper elevation={8} sx={{ minHeight: "100vh", maxHeight: "100%" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/Addcolor")}>
                Addcolor
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/Addmovies")}>
                Addmovies
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: "auto" }}
                onClick={() => setmode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </Toolbar>
          </AppBar>

          <div className="flex">
            <div className="row">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id1" element={<Moviedetails />} />
                <Route path="/movies/edit/:id1" element={<Editmovie />} />
                <Route path="/movies" element={<Movielisted />} />
                <Route
                  path="/films"
                  element={<Navigate replace to="/movies" />}
                />
                <Route path="/Addcolor" element={<Addcolor />} />
                <Route path="/movies/Addmovies" element={<Addmovies />} />
                <Route path="/Notfound" element={<Notfound />} />
                <Route path="*" element={<Navigate replace to="/Notfound" />} />
              </Routes>
              {/*

      <Addcolor/>
      <Addmovies movielist={movielist} setmovielist={setmovielist} /> */}
            </div>
          </div>

          {/* <Pro name="mohan" src="https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"/>
      <Pro name="mustak" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      <Pro name="ajith" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
       */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Movielisted() {
  const navigate=useNavigate()
  const [movielist, setmovielist] = useState([]);

  const Use = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((mv) => setmovielist(mv));
  };

  useEffect(() => Use(), [movielist]);
  const Deletemovie = (id) => {
    fetch(`${API}/movies/${id}`, { method: "DELETE" })
      .then(() => Use())
      .then((res) => console.log(res));
  };

  return movielist.map((a, index) => (
    <Pro
      id={a.id}
      key={index}
      name={a.name}
      src={a.src}
      notes={a.notes}
      rate={a.rate}
      delete1={<Button onClick={() => Deletemovie(a.id)}>delete</Button>}
      editbtn={<Button onClick={()=>{
             navigate(`/movies/edit/${a.id}`)
      }} >edit</Button>}
    />
  ));
}

function Pro({ name, src, notes, rate, id, delete1 ,editbtn}) {
  const styles = {
    color: rate > 8 ? "green" : "red",
  };
  const [note, setnote] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="col-4-lg">
      <Paper elevation={2}>
        <div className="separate">
          <img src={src} alt={name} />
        </div>
        <div className="col">
          <div className="name">
            {" "}
            <h2>{name}</h2>
          </div>
          <div className="rating">
            {" "}
            <h2 style={styles}>⭐ {rate}</h2>
          </div>
        </div>
        <IconButton
          onClick={() => {
            navigate("/Movies/" + id);
          }}
        >
          <InfoIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setnote(!note);
          }}
        >
          {note ? (
            <KeyboardDoubleArrowDownIcon sx={{ marginLeft: "auto" }} />
          ) : (
            <KeyboardArrowUpIcon />
          )}
        </IconButton>

        <div className="notes">{note ? <p>{notes}</p> : ""}</div>
        <div className="like-dislike">
          <Like />
          <Dislike />
          {/* <Delete id={id} /> */}
          {delete1}
          {editbtn}
        </div>
      </Paper>
    </div>
  );
}
function Home() {
  return <div>Welcome to movie App</div>;
}

function Moviedetails() {
  const { id1 } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/movies/${id1}`)
      .then((data) => data.json())
      .then((movie) => {
        setmoviedetail(movie);
      });
  }, [id1]);

  const [Moviedetail, setmoviedetail] = useState({});

  return (
    <div>
      <div>
        <iframe
          width="1140"
          height="520"
          src={Moviedetail.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="detail">
        <div className="nameofmovie">
          <h2> {Moviedetail.name}</h2>
        </div>
        <div className="rateofmovie">
          <h2>⭐ {Moviedetail.rate}</h2>
        </div>
      </div>
      <div className="noteofmovie">
        <h3>{Moviedetail.notes}</h3>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

function Like() {
  let [Like, setLike] = useState(0);
  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setLike(Like + 1)}
        aria-label="add to shopping cart"
      >
        👍
      </IconButton>
      <Badge badgeContent={Like} color="success"></Badge>
    </div>
  );
}

function Dislike() {
  let [Dislike, setDislike] = useState(0);
  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setDislike(Dislike + 1)}
        aria-label="add to shopping cart"
      >
        👎
      </IconButton>
      <Badge badgeContent={Dislike} color="secondary"></Badge>
    </div>
  );
}

// function Delete({id,Use}){

//   return(
//     <div>
//     <Button onClick={()=>{

//       Deletemovie(id)
//     }
//   }>
//         delete
//         </Button>

//     </div>
//   )
// }

function Notfound() {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
    </div>
  );
}

function Editmovie(){
  const [movie,setmovie]=useState(null);
  const {id1}=useParams();
  useEffect(()=>{
    fetch(`${API}/movies/${id1}`)
    .then((data)=>data.json())
    .then((e)=>setmovie(e))
  },[id1])
  return(
    <div>
      
      {movie? <Edit movie={movie}/>:"Loadin..."}
    </div>
  )
}


 const formvalidate =yup.object({
   newmovie:yup.string().required("plz fill this").min(2,"plz give bigger name").max(59),
   newrate:yup.number().required("this field is required").min(5,"plz give above 5").max(10),
   newsrc:yup.string().required("this is needy").min(2),
   newnotes:yup.string().required("fill this").min(2),
   newtrailer:yup.string().required("complete it").min(2)
 })

function Edit({movie}){
  const navigate = useNavigate();

  const {handleChange,handleSubmit,values,errors,handleBlur,touched}=useFormik({
    initialValues:{newmovie:`${movie.name}`,
    newrate:`${movie.rate}`,
    newsrc:`${movie.src}`,
    newnotes:`${movie.notes}`,
    newtrailer:`${movie.trailer}`},
    validationSchema: formvalidate
  })

  // let [newmovie, setnewmovie] = useState(movie.name);

  // let [newrate, setnewrate] = useState(movie.rate);

  // let [newsrc, setnewsrc] = useState(movie.src);
  // let [newnotes, setnewnotes] = useState(movie.notes);
  // let [newtrailer, setnewtrailer] = useState(movie.trailer);
  return(
    <div>
     
  
    <div className="newmovie">
     
      <form onSubmit={handleSubmit} className="inputs">
        <TextField
          name="newmovie"
          id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Name"
          variant="outlined"
          value={values.newmovie}
          // onChange={(e) => setnewmovie(e.target.value)}
           onChange={handleChange}
           onBlur={handleBlur}
        />
        {errors.newmovie && touched.newmovie? errors.newmovie:``}
        <TextField
          name="newrate"
          id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Rating"
          variant="outlined"
          value={values.newrate}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.newrate && touched.newrate?errors.newrate:``}
        <TextField
          name="newsrc"
          id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Src"
          value={values.newsrc}
          variant="outlined"
          // onChange={(e) => setnewsrc(e.target.value)}
           onBlur={handleBlur}
           onChange={handleChange}
        />
        {errors.newsrc && touched.newsrc? errors.newsrc:""}
        <TextField
          name="newnotes"
          id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Notes"
          value={values.newnotes}

          
          variant="outlined"
          // onChange={(e) => setnewnotes(e.target.value)}
           onBlur={handleBlur}
           onChange={handleChange}
        />
        {errors.newnotes && touched.newnotes? errors.newnotes:""}
        <TextField
          name="newtrailer"
          id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Trailer"
          value={values.newtrailer}
          variant="outlined"
          // onChange={(e) => setnewtrailer(e.target.value)}
           onBlur={handleBlur}
           onChange={handleChange}
        />
        {errors.newtrailer && touched.newtrailer? errors.newtrailer:""}
      </form>
      <Button
        variant="contained"
        onClick={() => {
          const editmovie = {
            name:values.newmovie,
            rate:values.newrate,
            notes:values.newnotes,
            src:values.newsrc,
            trailer:values.newtrailer,
          };
           
          fetch(`${API}/movies/${movie.id}`,{method:"PUT",body:JSON.stringify(editmovie),
          headers:{
            "Content-type":"application/json"
          }

        }).then(()=>navigate("/movies"));
            
          // setmovielist([...movielist, newaddedmovie]);
        }
      }
      >
        save
      </Button>
    </div>
    </div>
  )
}

const addformschema=yup.object({
  newmovie:yup.string().required("Fill the name of movie").min(3,"giver bigger name"),
  newrate:yup.number().required("Rate the movie").min(5,"plz rate above 5"),
  newsrc:yup.string().required("Poster link ").min(3,"fill the link fully"),
  newnotes:yup.string().required("some details about Movie").min(3,"fill some more"),
  newtrailer:yup.string().required("Trailer link").min(3,"fill full link")
})

function Addmovies() {
  const navigate = useNavigate();
const {handleBlur,handleChange,values,touched,errors,handleSubmit}=useFormik({
  initialValues:{
    newmovie:``,
    newrate:``,
    newsrc:``,
    newnotes:``,
    newtrailer:""
  },
  validationSchema: addformschema
})

  // let [newmovie, setnewmovie] = useState("");
  // let [newrate, setnewrate] = useState("");
  // let [newsrc, setnewsrc] = useState("");
  // let [newnotes, setnewnotes] = useState("");
  // let [newtrailer, setnewtrailer] = useState("");
  return (
    <div className="newmovie">
      <div>
        {/* {templist.map((a,index)=><Pro key={index} name={a.name} src={a.src} notes={a.notes} rate={a.rate}/>)} */}
      </div>
      <form  onSubmit={handleSubmit} className="inputs">
        <TextField
        name="newmovie"
          id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Name"
          variant="outlined"
          // onChange={(e) => setnewmovie(e.target.value)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.newmovie && touched.newmovie? errors.newmovie:""}
        <TextField
        name="newrate"

          id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Rating"
          variant="outlined"
          // onChange={(e) => setnewrate(e.target.value)}
          onChange={handleChange}
          onBlur={handleBlur}

        />
        {errors.newrate && touched.newrate?errors.newrate:""}
        <TextField
        name="newsrc"
        id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Src"
          variant="outlined"
          // onChange={(e) => setnewsrc(e.target.value)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.newsrc && touched.newsrc? errors.newsrc:""}
        <TextField
        name="newnotes"
        id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Notes"
          variant="outlined"
          // onChange={(e) => setnewnotes(e.target.value)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.newnotes && touched.newnotes? errors.newnotes:""}
        <TextField
        name="newtrailer"
        id="outlined-basic"
          sx={{ marginTop: "30px" }}
          label="Trailer"
          variant="outlined"
          // onChange={(e) => setnewtrailer(e.target.value)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.newtrailer && touched.newtrailer? errors.newtrailer:""}
      <Button
      name="submit"
        variant="text"
        onClick={() => {
          const newaddedmovie = {
            name:values.newmovie,
            rate:values.newrate,
            notes:values.newnotes,
            src:values.newsrc,
            trailer:values.newtrailer,
          };
           
          fetch(`${API}/movies`,{method:"POST",body:JSON.stringify(newaddedmovie),
          headers:{
            "Content-type":"application/json"
          }

        }).then(()=>navigate("/movies"));
            
          // setmovielist([...movielist, newaddedmovie]);
        }}
      >
        Add movie
      </Button>
      </form>

    </div>
  );
}

function Addcolor() {
  const [addto, setaddto] = useState(["red", "green", "black"]);
  const [color, setcolor] = useState("blue");
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="addcolor">
        <input
          onChange={(e) => {
            setcolor(e.target.value);
          }}
          placeholder="enter the color"
          style={styles}
          type={"text"}
        />
        <button onClick={() => setaddto([...addto, color])}>Addcolor</button>
      </div>

      <div>
        {addto.map((clr) => (
          <Colorbox color={clr} />
        ))}
      </div>
    </div>
  );
}

function Colorbox({ color }) {
  const styles = {
    height: "25px",
    width: "250px",
    backgroundColor: color,
  };
  return (
    <div className="colorbox" style={styles}>
      {/* <p>hi</p> */}
    </div>
  );
}
