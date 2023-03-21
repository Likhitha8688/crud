//use navigate----it is hook method
import { useNavigate } from "react-router-dom";
function Home(){

   // const navigate=useNavigate()
   // const change=()=>{
    //    navigate("./About")

   // }
   //<button onClick={change}>go back</button>
    return(
        <div >

            <main style={{display:"grid",gridTemplateColumns:"50% 50%",backgroundColor:"cyan"}}>
            <div>
            <h3>Kids Learning Center</h3>
            <hr/>
            <h1>New Approch to kids Education</h1>
            <p>Make education possible for every child.join hands with an NGOand serve the poor.Donate for education and help children
                attain age appropriate learning.

            </p>
            <hr/>
            <br/>
            <button>Learn More</button>
            </div>
            <div>
            <img src="https://static.vecteezy.com/system/resources/previews/005/147/510/original/kids-using-laptop-with-education-icons-free-vector.jpg"style={{borderRadius:"150px", width:"300px",height:"300px",marginLeft:"300px"}}></img>
            </div>
            </main>
            
        </div>
    )
}
export default Home;