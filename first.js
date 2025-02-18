 
function cashOut( money ) {
    if(typeof money !== "number" || money <= 0){
        return "Invalid";
    }
     const perThousandCharge = 1.75;
     const perCentage = 100;
     
     let totalCharge = (money* perThousandCharge) / 100;
     return totalCharge;
};