
let count=0
let check= ()=>{

    document.getElementById("clickedcheckbox").innerText=null;
    checkbox: document.getElementById("checkbox").value="clicked";
    count++;
    if(count%2==0){
        document.getElementById("clickedcheckbox").innerText=null;
    }else{
        document.getElementById("clickedcheckbox").innerText= "Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.";
    }
    
}


let registered= JSON.parse(localStorage.getItem("successful")) || []

let register= (e)=>{
    e.preventDefault()

    
    let user_details={
        email: document.getElementById("email").value,
        first_name: document.getElementById("name").value,
        last_name: document.getElementById("last_name").value,
        password: document.getElementById("password").value,
        checkbox: document.getElementById("checkbox").value
    };


    if(user_details.email!="" && user_details.first_name!="" && user_details.last_name!="" &&
    user_details.password!="" && user_details.checkbox=="clicked"){

        registered.push(user_details);
        localStorage.setItem("successful", JSON.stringify(registered));
        alert("Sign Up successful");

        // console.log(user_details)

        document.getElementById("email").value=null
        document.getElementById("name").value= null
        document.getElementById("last_name").value= null
        document.getElementById("password").value= null
        
        window.location.href= "./signin.html";

    }else{
        
        alert("Please fill all the input");
    }
    
    
}
let privious_page= ()=>{
    window.location.href="./index.html";
}


document.getElementById("checkbox").addEventListener("click", check);
document.getElementById("button").addEventListener("click", register);
document.querySelector(".fa-solid").addEventListener("click", privious_page);