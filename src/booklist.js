import React from "react"



function Booklist(Props){
   // const{img,title,author}=Props
    return(
        <div style={{border:"2px solid purple"}}>
            <p >
                <img src={Props.img} style={{width:"150px",border:"2px solid black",margin:"30px"}}/>
                <p style={{margin:"30px"}}>
                title:{Props.title}<br/>
                author:{Props.author}</p>
        

            </p>

        </div>
    )
}
function Props(){
    return(
        <div>
            <Booklist img="https://cdn.downtoearth.org.in/library/large/2020-04-04/0.90443600_1586004689_book-reading.jpg"
              title="The phoenix of destiny"
            author="geronimo" /><br/>
            <Booklist img="https://cdn.downtoearth.org.in/library/large/2020-04-04/0.90443600_1586004689_book-reading.jpg"
              title="The phoenix of destiny"
            author="geronimo"/><br/>
             <Booklist img="https://cdn.downtoearth.org.in/library/large/2020-04-04/0.90443600_1586004689_book-reading.jpg"
              title="The phoenix of destiny"
            author="geronimo"/>



        </div>
    )
}
export default Props;