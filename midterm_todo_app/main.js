import * as localS from './modules/localStorage.js';
import * as util from './modules/utilities.js';

util.updateTasksLeft();
localStorage.clear();

document.getElementById("add").onclick = localS.addItem;
//completing items and removing items
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  //if item is not checked, check it and update in localstorage
  if (ev.target.tagName === 'LI' && ev.target.classList.contains("checked") == false) {
    ev.target.classList.toggle('checked');
    let element = ev.target.id;
    util.updateCompleted(element,true);

    util.updateTasksLeft();
    //if item is checked, uncheck it and update in local storage
  } else if (ev.target.tagName === 'LI' && ev.target.classList.contains("checked") == true){
    ev.target.classList.remove("checked");
    let element = ev.target.id;
    util.updateCompleted(element,false);

    util.updateTasksLeft();
   //if item is the remove button, remove item from list and localstorage
  } else if (ev.target.tagName === "SPAN"){
    let it = ev.target.parentElement.id;
    localStorage.removeItem(it);
    ev.target.parentElement.remove();

    util.updateTasksLeft();
  }
}, false);  

//buttons
var buttons = document.querySelector("#buttons");
buttons.addEventListener('click', function(ev){
  //All button
  if (ev.target.id === "all"){
    let element = ev.target
    util.updateActiveStat(element);
    
    list.innerHTML="";
    //get all items from localstorage
    let allItems = localS.getAllItems();
    //display all elements
      allItems.forEach(index => {
      util.displaylistTwo(index);
    }) 
    //Active button
    } else if (ev.target.id === "active"){
      let element = ev.target
      util.updateActiveStat(element);
        list.innerHTML="";

        let allItems = localS.getAllItems();

        allItems.forEach(index => {
          if (index.completed === false){
          util.displaylistTwo(index);
        }
        }) 
        //Completed button
    } else if (ev.target.id === "completed"){
      let element = ev.target
      util.updateActiveStat(element);
      list.innerHTML="";

      let allItems = localS.getAllItems();

      allItems.forEach(index => {
        if (index.completed === true){
        util.displaylistTwo(index);
      }
      }) 
  }
  });


  /*function to display when adding button
    function util.displaylist(identifier){
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

    function util.updateCompleted(element,boolean){
      let it = element;
      let localStoreItem = JSON.parse(localStorage.getItem(it));
      localStoreItem.completed = boolean;
      localStorage.setItem(it,JSON.stringify(localStoreItem));
    }

    function util.updateActiveStat(element){
      let btnchildren = buttons.children;
      for (var i = 0; i < btnchildren.length;i++){
        btnchildren[i].classList.remove("active");
      }
      element.classList.add("active");
    }

    function util.displaylist(index){
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
    }*/