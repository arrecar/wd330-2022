function getAnime(){
let value3 = Math.floor(Math.random() * 25);

fetch('https://api.jikan.moe/v4/anime?page='+value3+'')
	.then(response => response.json())
    .then(response => {
        //assign info of the anime to variables
        var img = response.data[value3].images.jpg.large_image_url;
        var name = response.data[value3].title;
        var synopsis = response.data[value3].synopsis;
        var genres = response.data[value3].genres;
        var genText = "";
        for (const key in genres){
            genText += genres[key].name+" ";
        }
        //store the info in the local storage for later use
        localStorage.setItem("name",name);
        localStorage.setItem("synopsis",synopsis);
        localStorage.setItem("image",img);
        localStorage.setItem("genres",genText);
        localStorage.setItem("count",3);
        console.log(response);

    } )
    .then(() => {
        displayGame();
    });
}

function displayGame(){
       //add the image and text to the screen for user to start guessing.
      var imagen =  document.getElementById("myimage");
       imagen.src = localStorage.getItem("image");
       imagen.style.filter = "blur(10px)";

    var nombre = document.getElementById("name");
        nombre.style.filter = "blur(3px)";
        nombre.innerHTML = localStorage.getItem("name");

       //show the form and hints buttons
       document.getElementById("form").style.visibility = "visible";

       //clean input
       document.getElementById("fname").value="";
       document.getElementById("message").innerHTML = "";
       document.getElementById("hint").style.visibility = "hidden";
       document.getElementById("disHint").style.visibility = "hidden";
       document.getElementById("message").classList.remove("success");

}

function checkAnime(){
    if(checkName()){
        document.getElementById("myimage").style.filter = "blur(0px)";
        document.getElementById("name").style.filter = "blur(0px)";
        document.getElementById("hint").style.visibility = "hidden";
        document.getElementById("message").innerHTML = "That is correct you guessed the name right!!!"
        document.getElementById("message").classList.add("success");
        document.getElementById("form").style.visibility = "hidden";
        document.getElementById("hints").innerHTML = "";
        document.getElementById("disHint").style.visibility = "hidden";
    }else{
        var count = parseInt(localStorage.getItem("count")) - 1;
        localStorage.setItem("count",count);
        switch (count){
            case 2:
                document.getElementById("message").innerHTML = "Incorrect. You have "+count+" tries left. Want a hint?";
                document.getElementById("hint").style.visibility = "visible";
                break;
            case 1:
                document.getElementById("message").innerHTML = "Incorrect. You have "+count+" try left. Want another hint?";
                document.getElementById("hint").style.visibility = "visible";
                break;
            case 0:
                document.getElementById("message").classList.add("fail");
                document.getElementById("message").innerHTML = "Incorrect. No more tries. Look above to the left!!";
                document.getElementById("myimage").style.filter = "blur(0px)";
                document.getElementById("name").style.filter = "blur(0px)";
                document.getElementById("hint").style.visibility = "hidden";
                document.getElementById("form").style.visibility = "hidden";
                document.getElementById("hints").innerHTML = "";
        }

    }

}

function checkName(){
   var input = document.getElementById("fname").value;
   var animeName = localStorage.getItem("name");
   if (input == animeName){
       return true;
   }else{
       return false;
   }
}

function displayHint(){
    var count = parseInt(localStorage.getItem("count"));

    switch (count){
        case 2:
            document.getElementById("hints").style.visibility = "visible";
            var gen = localStorage.getItem("genres");
            document.getElementById("hints").innerHTML = "Genres: "+gen;
            break;
        case 1:
            document.getElementById("hints").style.visibility = "visible";
        var syn = localStorage.getItem("synopsis");
        document.getElementById("hints").innerHTML = "Synopsis: "+syn;
    }
   /* if (clue = 1){
        document.getElementById("hints").style.visibility = "visible";
        localStorage.setItem("hintcount",clue+1);
        var gen = localStorage.getItem("genres");
        document.getElementById("hints").innerHTML = "Genres: "+gen;
    } else if (clue=2){
        document.getElementById("hints").style.visibility = "visible";
        var syn = localStorage.getItem("synopsis");
        document.getElementById("hints").innerHTML = "Synopsis: "+syn;
    }*/
}

