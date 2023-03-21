//import { useNavigate } from "react-router-dom";
function About(){

    //const navigate=useNavigate()
    //const change=()=>{
        //navigate("./Home")

   // }
    return(
        <div >
            <div style={{display:"grid",gridTemplateColumns:"70% 30%"}}>
                <h2>Enriching and fun Early Years Matter preschool Curriculam</h2><hr/>                
                <p>Our Curriculam Focuses on the holistic development of the child and is suitably mapped to age appropriate objectives 
                    and outcomes.
                </p>
                <div>
                <img src="https://as2.ftcdn.net/v2/jpg/03/28/10/15/1000_F_328101522_ezzWWm1FylxgfdUj6tnVskLgszJBUWsz.jpg"style={{height:"300px",width:"300px"}}></img>
                </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"50% 50%"}}>

            <img src="https://static.vecteezy.com/system/resources/previews/002/539/226/original/cartoon-kids-playing-vector.jpg"style={{height:"300px",width:"300px"}}></img>
                <div>
                <h2>Socio-emotional & physical Development</h2><hr/>
                <p>A multi-sensory environment that includes group activities ,role playd amd story timeand dama that have been curated to
                    meet the child's social
                </p>
               </div> 
                
            </div>
            <div style={{display:"grid",gridTemplateColumns:"70% 30%"}}>
                <h2>Milestone Trackinh and Regular Assessments</h2><hr/>
                <p>180 degree evolution,milestone tracking and regular assessment every</p>
                <div>
                    <img src="https://www.pngitem.com/pimgs/m/4-43198_cartoon-school-royalty-free-cartoon-school-kids-hd.png"style={{height:"300px",width:"300px"}}></img>
                </div>
            </div>
        
        </div>
    )
}
export default About;