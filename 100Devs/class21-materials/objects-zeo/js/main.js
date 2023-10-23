//Create a stopwatch object that has four properties and three methods

const stopwatch = {}

stopwatch.color = 'green';
stopwatch.brand = 'Swatchelli';
stopwatch.time = '5:38:39';
stopwatch.minutes = 58;

stopwatch.tellTime = () => console.log(stopwatch.time)
stopwatch.tellMinutes  = () => console.log(stopwatch.minutes);
stopwatch.tellColor = () => console.log(stopwatch.color);

stopwatch.tellTime();
stopwatch.tellColor();
stopwatch.tellMinutes();