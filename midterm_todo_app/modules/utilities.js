  //display tasks left
export function updateTasksLeft(){
    var items = [],
       keys = Object.keys(localStorage),
       i = keys.length;
 
       while ( i-- ) {
           items.push(JSON.parse(localStorage.getItem(keys[i])) );
       }
       let count = 0;
       items.forEach(index => {
         if (index.completed===false){
           count++;
         }
       })
       document.getElementById("taskleft").innerHTML = count + " Tasks Left";
 
     }
 
 //function to display when adding button
 export  function displaylist(identifier){
       var li = document.createElement("li");
       li.setAttribute("id", identifier);
       var inputValue = document.getElementById("myInput").value;
       var t = document.createTextNode(inputValue);
       li.appendChild(t);
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         document.getElementById("myUL").appendChild(li);
       }
       document.getElementById("myInput").value = "";
   
       var span = document.createElement("SPAN");
       var txt = document.createTextNode("\u00D7");
       span.className = "close";
       span.appendChild(txt);
       li.appendChild(span);
     }

export function updateCompleted(element,boolean){
       let it = element;
       let localStoreItem = JSON.parse(localStorage.getItem(it));
       localStoreItem.completed = boolean;
       localStorage.setItem(it,JSON.stringify(localStoreItem));
     }
 
 export function updateActiveStat(element){
       let btnchildren = buttons.children;
       for (var i = 0; i < btnchildren.length;i++){
         btnchildren[i].classList.remove("active");
       }
       element.classList.add("active");
     }
 
export function displayList(index){
       var li = document.createElement("li");
       li.setAttribute("id", index.id);
         if (index.completed === true){
           li.classList.add("checked");
         }
       var inputValue = index.content;
       var t = document.createTextNode(inputValue);
       li.appendChild(t);
         document.getElementById("myUL").appendChild(li);
       document.getElementById("myInput").value = "";
 
       var span = document.createElement("SPAN");
       var txt = document.createTextNode("\u00D7");
       span.className = "close";
       span.appendChild(txt);
       li.appendChild(span);
     }

export function displaylistTwo(index){
    var li = document.createElement("li");
    li.setAttribute("id", index.id);
      if (index.completed === true){
        li.classList.add("checked");
      }
    var inputValue = index.content;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  }