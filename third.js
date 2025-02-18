 
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