 
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