


let clickbox= ()=>{
    let tick= document.getElementById("checkbox").checked

    return tick

}



        let users_data= JSON.parse(localStorage.getItem("successful"))
        console.log(users_data)

        let verify= ()=>{

                let x= clickbox()
                console.log(x)

                let email= document.getElementById("user_email").value
                let password= document.getElementById("user_password").value
                // console.log(email,password)
                let flag= true; 
                let click= true
            for(let i=0;i<users_data.length;i++){
                if(users_data[i].email==email && users_data[i].password== password && x== true){
                    flag=false
                    //    console.log(users_data[i].email,users_data[i].password)
                    break;
                }
                else if(users_data[i].email==email && users_data[i].password== password && x== false){

                    click= false
                }
            }
            if(flag==false){
                alert("Sign in successful")
                window.location.href= "./navbar.html"
            }
            else if(click== false){
                alert("Please click on checkbox")
            }
            else{
                alert("Confidential doesn't match")
            }


        }
        



document.getElementById("checkbox").addEventListener("click", clickbox)
document.getElementById("button").addEventListener("click", verify)