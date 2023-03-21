function Contacts(){
    return(
        <div>
        <main style={{display:"grid",gridTemplateColumns:"50% 50%",backgroundColor:"lightgreen",height:"320px",fontStyle:"italic",fontSize:"18px"}}>
            <div>
                <h3>Full Stack Developer Training & Placement</h3><hr/>
                <p>
                A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser 
                (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node).<br/><br/>
                The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms.
                 Particular responsibilities often include: Developing front end website architecture.<hr/>
                </p>
                <button>Learn More</button>
            </div>
            <div style={{marginLeft:"200px",backgroundColor:"green",border:"3px solid purple",textAlign:"center",width:"300px",height:"300px",borderRadius:"10px"}}>
                <form>
                    <h3>
                        Fill & get upto 25% OFF<br/> in Courese Fees
                    </h3>
                    <input type="text"placeholder="Name*"/><br/><br/>
                    <input type="text"placeholder="Mobile Number*"/><br/><br/>
                    <input type="text" placeholder="Email*"/><br/><br/>
                    <input type="text" placeholder="Message*"/><br/><br/>
                    <button>I am intrested,Tell me more.. </button>
                </form>
            </div>
        </main>
        </div>
    )
}
export default Contacts;