import "./filter.css"
import React from "react"
function Card(){

    const search=()=>{
        const input=document.getElementById("filter").value.toUpperCase()
        const card=document.getElementsByClassName("items")
        for(let i=0; i<card.length; i++){
            var title= card[i].querySelector(".card-title")
            if(title.innerText.toUpperCase().indexOf(input)>-1){
                card[i].style.display=""
            }
            else{
                card[i].style.display="none"
            }
        }

    }
    
    const btn=document.getElementsByTagName("button");
    const select=document.querySelector(".select");
    const n=document.querySelector("h1");
    for(var b of btn){
        b.addEventListener("click",(e)=>{
            var parent=e.target.parentNode;
            var clone=parent.cloneNode(true);
            select.appendChild(clone);
            if(clone){
                n.onClick=function(){
                    select.classListName.toogle("display")
                }
            }
        })
    }

    return(
        <div>
                        
        <input type="text" id="filter"placeholder="search...here...!"onKeyUp={search}/>
        <h1><i id="cart"class="fa fa-shopping-cart" aria-hidden="true"></i> </h1><br/>
        <br/>
        <br/>
        <section class="main">
            <div class="items">
                <img src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/e5y5ptPSFg2LXVAtEYUBr1rx" style={{width:"300px", height:"200px"}}/>
                <h3 className="card-title">HTML</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odio id non illo eius autem. Esse voluptatem delectus velit labore similique asperiores totam fugit iste est, at necessitatibus. Suscipit, debitis.</p>
                <h6>10000-12000</h6>
            
                <button id="a">Add Cart</button>
            </div>
            <div class="items">
                <img src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" style={{width:"300px", height:"200px"}}/>
                <h3 className="card-title">JAVASCRIPT</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odio id non illo eius autem. Esse voluptatem delectus velit labore similique asperiores totam fugit iste est, at necessitatibus. Suscipit, debitis.</p>
                <h6>10000-12000</h6>
                
                <button id="a">Add Cart</button>
            </div>
            <div class="items ">
                <img src="https://www.shutterstock.com/image-photo/word-react-written-on-wooden-260nw-1796452810.jpg" style={{width:"300px", height:"200px"}}/>
                <h3 className="card-title">REACT</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odio id non illo eius autem. Esse voluptatem delectus velit labore similique asperiores totam fugit iste est, at necessitatibus. Suscipit, debitis.</p>
                <h6>10000-12000</h6>
                
                <button id="a">Add Cart</button>
            </div>
            <div class="items">
                <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" style={{width:"300px", height:"200px"}}/>
                <h3 className="card-title">JAVA</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odio id non illo eius autem. Esse voluptatem delectus velit labore similique asperiores totam fugit iste est, at necessitatibus. Suscipit, debitis.</p>
                <h6>10000-12000</h6>
                
                <button id="a">Add Cart</button>
            </div>
            <div class="items">
                <img src="https://cdn.pixabay.com/photo/2017/03/30/17/42/css-2189148__340.png" style={{width:"300px", height:"200px"}}/>
                <h3 className="card-title">CSS</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odio id non illo eius autem. Esse voluptatem delectus velit labore similique asperiores totam fugit iste est, at necessitatibus. Suscipit, debitis.</p>
                <h6>10000-12000</h6>
                
                <button id="a">Add cart</button>
            </div>
            <div class="items">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4e105f96750899.5eb54f337fb8e.png " style={{width:"300px", heighi:"300px"}}/>
                <h3 className="card-title">python</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odio id non illo eius autem. Esse voluptatem delectus velit labore similique asperiores totam fugit iste est, at necessitatibus. Suscipit, debitis.</p>
                <h6>10000-12000</h6>
                
                <button id="a">Add Cart</button>
            </div>
         </section><br/><br/>
         <div className="select">

         </div>
            </div>

        
        
    )

}
export default Card;