import { displaylist, updateTasksLeft } from "./utilities.js";

export function getAllItems(){
    var allItems = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      allItems.push(JSON.parse(localStorage.getItem(keys[i])) );
  }
  return allItems;
};


export function addToLocalStorage(){
    let item = document.getElementById("myInput").value;
  let identifier = Date.now();
  let todo = {id: identifier, content: item, completed: false};
  localStorage.setItem(identifier,JSON.stringify(todo));
  return identifier;
};

export function addItem(){
  //add to localstorage
  let identifier = addToLocalStorage();

  //add to displayed list
  displaylist(identifier);
  updateTasksLeft();
}