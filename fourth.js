 
function isBestFriend(f1, f2) {
    if(typeof f1 !== "object" || typeof f2 !== "object"){
        return  "Invalid";
    }

    if(f1["roll"] === f2["bestFriend"] && f1["bestFriend"] === f2["roll"]){
        return true;
    }
    else{
        return false;
    }
};
