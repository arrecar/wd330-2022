const links = [
    {
      label: "Week1",
      url: "https://arrecar.github.io/wdd330-2022/week1/"
    },
    {
      label: "Week2",
      url: "https://arrecar.github.io/wdd330-2022/week2/"
    },
    {
      label: "Week3",
      url: "https://arrecar.github.io/wdd330-2022/week3/"
    },
    {
      label: "Week4",
      url: "https://arrecar.github.io/wdd330-2022/week4/"
    },
    {
      label: "Week5",
      url: "https://arrecar.github.io/wdd330-2022/week5/"
    },
    {
      label: "Midterm",
      url: "https://arrecar.github.io/wdd330-2022/midterm_todo_app/"
    },
    {
      label: "Week7",
      url: "https://arrecar.github.io/wdd330-2022/week7/"
    },
    {
      label: "Week8",
      url: "https://arrecar.github.io/wdd330-2022/week8/"
    },
    {
      label: "Week9",
      url: "https://arrecar.github.io/wdd330-2022/week9/"
    }
]

  var arrayLength = links.length;
  //loop through array above
  for (var i = 0; i < arrayLength; i++){
        //create li element, to add an item to the list
          var x = document.createElement("LI");
          //create an a tag, to add a hyperlink
          var a = document.createElement("a");
          //grab the value of the first property of the object and add it as text
          var y = document.createTextNode(links[i].label);
          //append the text to the li
          x.appendChild(y);
          //set the link to the hyperlink
          a.setAttribute("href",links[i].url);
          //insert the item n the list with the lnk
          document.getElementById("list").appendChild(a).appendChild(x);
  }