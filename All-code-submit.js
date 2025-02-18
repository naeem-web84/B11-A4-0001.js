 
function cashOut( money ) {
    if(typeof money !== "number" || money <= 0){
        return "Invalid";
    }
     const perThousandCharge = 1.75;
     const perCentage = 100;
     
     let totalCharge = (money* perThousandCharge) / 100;
     return totalCharge;
};


function validEmail(email) {
    const specialChar = [".", "-", "_", "+", "@"];

    if (typeof email !== "string") {
        return "Invalid";
    }

    if (specialChar.includes(email[0]) || !email.includes("@") || email.includes(" ")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    return true;
};

 
function electionResult(votes) {
    if(!Array.isArray(votes)){
        return "Invalid";
    }

    let mangoCount = 0;
    let bananaCount = 0;

    for (let i = 0; i < votes.length; i++) {
        let oneManVote = votes[i];

        if (oneManVote === "mango") {
            mangoCount = mangoCount + 1;
        }
        else if (oneManVote === "banana") {
            bananaCount = bananaCount + 1;
        }
    }

    if(mangoCount > bananaCount){
        return "Mango";
    }
    else if(bananaCount > mangoCount){
        return "Banana";
    }
    else if(mangoCount === bananaCount){
        return "Draw";
    }
};

 
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

 
function calculateWatchTime(times) {
    if(!Array.isArray(times)){
       return "Invalid";
    }

    let totalSecond = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid"
        }

        let partOfTimes = times[i];
        totalSecond = totalSecond + partOfTimes;
    }

    const oneHour = 3600;
    const oneMinute = 60;
    const oneSecond = 60;

    let totalHour = parseInt(totalSecond / oneHour);
    let totalMinute = parseInt((totalSecond % oneHour) / oneMinute);
    let realSecond = totalSecond % oneSecond;

    return  {hour: totalHour, minute: totalMinute, second: realSecond};
};