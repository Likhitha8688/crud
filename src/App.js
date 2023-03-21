import "./App.css"
function App(){
  return(
    <div>
      <table style={{width:"50%"}}>
        <thead style={{color:"pink",backgroundColor:"orange"}}>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>city</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>1</td>
          <td>likhitha</td>
          <td>chittoor</td>
          <td>AP</td>
          </tr>
          <tr>
          <td>1</td>
          <td>likhitha</td>
          <td>chittoor</td>
          <td>AP</td>
          </tr>
          <tr>
          <td>1</td>
          <td>likhitha</td>
          <td>chittoor</td>
          <td>AP</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default App;

 export function Hi(){
  return(
    <div>
      <label>Fullname :</label>
      <input type="text"/>
      <br></br>
      <label>email</label>
      <input type="text"/>
      <br></br>
      <label>password</label>
      <input type="password"/>
    </div>
  )
}
<br></br>

export function Book(){
  return(
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gridColumnGap:"30px",gridRowGap:"30px"}}>
    <div style={{backgroundColor:"wheat",width:"300px",height:"300px",border:"3px solid black",textAlign:"center"}}>
      <img src="https://i.pinimg.com/236x/6a/0c/87/6a0c87ef50ed89f841c9e45f581d4817.jpg" style={{width:"200px",height:"200px"}}/>
      <h3> secret garden</h3>
      <p>frances hodgson burnett</p>
    </div>
    <div style={{backgroundColor:"wheat",width:"300px",height:"300px",border:"3px solid black",textAlign:"center"}}>
      <img src="https://i.pinimg.com/236x/6a/0c/87/6a0c87ef50ed89f841c9e45f581d4817.jpg"  style={{width:"200px",height:"200px"}}/>
      <h3> secret garden</h3>
      <p>frances hodgson burnett</p>
    </div>
    <div style={{backgroundColor:"wheat",width:"300px",height:"300px",border:"3px solid black",textAlign:"center"}}>
      <img src="https://i.pinimg.com/236x/6a/0c/87/6a0c87ef50ed89f841c9e45f581d4817.jpg" style={{width:"200px",height:"200px"}}/>
      <h3> secret garden</h3>
      <p>frances hodgson burnett</p>
    </div>
    <div style={{backgroundColor:"wheat",width:"300px",height:"300px",border:"3px solid black",textAlign:"center"}}>
      <img src="https://i.pinimg.com/236x/6a/0c/87/6a0c87ef50ed89f841c9e45f581d4817.jpg" style={{width:"200px",height:"200px"}}/>
      <h3> secret garden</h3>
      <p>frances hodgson burnett</p>
    </div>
    <div style={{backgroundColor:"wheat",width:"300px",height:"300px",border:"3px solid black",textAlign:"center"}}>
      <img src="https://i.pinimg.com/236x/6a/0c/87/6a0c87ef50ed89f841c9e45f581d4817.jpg" style={{width:"200px",height:"200px"}}/>
      <h3> secret garden</h3>
      <p>frances hodgson burnett</p>
    </div>
    <div style={{backgroundColor:"wheat",width:"300px",height:"300px",border:"3px solid black",textAlign:"center"}}>
      <img src="https://i.pinimg.com/236x/6a/0c/87/6a0c87ef50ed89f841c9e45f581d4817.jpg" style={{width:"200px",height:"200px"}}/>
      <h3> secret garden</h3>
      <p>frances hodgson burnett</p>
    </div>
    </div>
    
    
  )
}
