import React from "react";
import './login.css';
import wave from "./img/wave.png";
import tool from "./img/bg.svg";
import avatar from "./img/avatar.svg"; 

function Login(){
const inputs = document.querySelectorAll(".input");
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}
function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
    return(
        <div>
        <img class="wave" src={wave}/>
        <div class="acon">
            <div class="img">
                <img src={tool}/>
            </div>
            <div class="login-content">
                <form action="index.html">
                    <img src={avatar}/>
                    <h2 class="title">Welcome</h2>
                       <div class="input-div one">
                          <div class="i">
                                  <i class="fas fa-user"></i>
                          </div>
                          <div class="div">
                                  <input type="text" class="input" placeholder="Username"/>
                          </div>
                       </div>
                       <div class="input-div pass">
                          <div class="i"> 
                               <i class="fas fa-lock"></i>
                          </div>
                          <div class="div">
                               <input type="password" class="input" placeholder="Password"/>
                       </div>
                    </div>
                    <a href="#">Forgot Password?</a>
                    <input type="submit" class="btn" value="Login"/>
                </form>
            </div>
        </div>
        </div>
    );
}
export default Login;