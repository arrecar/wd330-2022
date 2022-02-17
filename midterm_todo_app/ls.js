

function readFromLS(key){
    let item = JSON.parse(localStorage.getItem(key));
    let itemarr = [];
    itemarr.push(item);
    return itemarr;
}

function writeToLS(key, data){
    localStorage.setItem(key,JSON.stringify(data))
}



