function post() {
    var name = document.getElementById("name")
    var username = document.getElementById("username")
    var email = document.getElementById("email")
    var content = document.getElementById("content")
    var date = new Date().toUTCString()

    if(name.value.trim() != ""){
        if(username.value.trim() != ""){
            if(email.value.trim() != ""){
                document.getElementById("post").innerHTML += `  
                <div style="margin-bottom: 2px;" class="card-body mb-2">
                 <h5 class="card-title">${name.value}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                 <p class="card-text">${content.value}</p>
                </div>`
                
                document.getElementById("name").value = "";
                document.getElementById("username").value = "";
                document.getElementById("email").value = ""; 
                document.getElementById("content").value = ""; 
            }else{

                alert("ENTER CORRECT VALUE")
            }
        }else{
            
            alert("ENTER CORRECT VALUE")
        }
    }else{
        alert("ENTER CORRECT VALUE")
    }

}


function getImage(){
    var img1 = document.querySelector(".bg-images").style.border = "2px solid black"
    var img2 = document.querySelector(".bg-images").style.border = "2px solid black"
    var img3 = document.querySelector(".bg-images").style.border = "2px solid black"
    var img4 = document.querySelector(".bg-images").style.border = "2px solid black"
    // console.log(img1);
    
    // document.getElementById("img").innerHTML = ` 
    // <div style="border: 1px solid black; padding: 10px;">
    //     <p>APPEND</p>
    // </div>`;
    
    
    
}

