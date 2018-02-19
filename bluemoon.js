// Initialize counters
var blueMoons = 0;
var skippedFebs = 0;
var skippedLeapYearFebs = 0;
// Date info for first full moon of 2000 (Jan 20 11:40 pm)
var firstFullMoon = new Date(2000,0,20,23,40,0,0);
var endYear = 2999;
// Values for complete moon phase
var phaseDays = 29;
var phaseHours = 12;
var phaseMinutes = 44;
// Sets cash variables to values of first full moon in 2000
var checkDate = firstFullMoon;
var previousMoonMonth = firstFullMoon.getMonth();
while(checkDate.getFullYear() <= endYear){
    // updates date values to advance one lunation
    checkDate = new Date(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate()+phaseDays, checkDate.getHours()+phaseHours, checkDate.getMinutes()+phaseMinutes, 0, 0);
    // checks if current month is the same as the month for previous full moon
    
    if(checkDate.getMonth() == previousMoonMonth){
        blueMoons++;
    }
    else{
        // checks if the previous full moon occured in January and the current full moon occured in March
        if((previousMoonMonth==0) && (checkDate.getMonth()==2)){
            skippedFebs++;
            // checks if current year is a leap year
            if(((checkDate.getFullYear() % 4 == 0) && (checkDate.getFullYear() % 100 != 0)) || (checkDate.getFullYear() & 400 ==0)){
                skippedLeapYearFebs++;
            }
        }
        // resets prev month value so will be correct for next iteration
        previousMoonMonth = checkDate.getMonth();
    }
    
}
console.log(blueMoons);
console.log(skippedFebs);
console.log(skippedLeapYearFebs);