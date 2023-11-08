import express from 'express';
import axios from 'axios';
import ejs from 'ejs';

/** Pseudocode for Getting Weather for Tomorrow on Phone and Web */

// 1. [x] Start this express server
// 2. [x] Set up EJS
// 3. [] Fetch Daily Weather Data

// For Web
// 1. [] Render that Data to EJS
// To Your Phone
// 1. [] Render that Data to Phone

const app = express();
const PORT = 3000;
const weather = {
    condition: 'snowy'
};

const cambridgeWeather = {};
const somervilleWeather = {};

function repackageThreeHours(threeHours) {
    return threeHours.map((interval) => {
        return {
            date: interval.dt_txt.split(' ')[0],
            hour: interval.dt_txt.split(' ')[1],
            weatherMain: interval.weather['0'].main,
            weatherDescription: interval.weather['0'].description,
        }
    })
}

function groupThreeHoursByDate(threeHours) {
    let fiveDayInterval = [
    ]
    let prevDate = '';
    let i = 0;

    console.log('-----------------')
    threeHours.forEach(interval => {
        if (interval.date !== prevDate) {
            fiveDayInterval.push([{
                date: interval.date,
                ...interval
            }]);
            i++;
            prevDate = interval.date;
        } else {
            fiveDayInterval[i].push(interval);
        }
    })
    return fiveDayInterval;
}

function threeHoursToDays(threeHours) {
    // iterate through threeHours every 7 elements 
        // push as a new day object into a newArray called days 5
        // add the date to the object
    const threeHourIntervals = repackageThreeHours(threeHours);
    const days = groupThreeHoursByDate(threeHourIntervals);
    console.log(days);
    return days;
    /* 
    [
        {
            date,
            hour,
            weatherMain,
            weatherDescription
        }, 
        {
            date,
            hour,
            weatherMain,
            weatherDescription
        }, 
        {
            date,
            hour,
            weatherMain,
            weatherDescription
        }, 
        {
            date,
            hour,
            weatherMain,
            weatherDescription
        }, 
        {
            date,
            hour,
            weatherMain,
            weatherDescription
        }, 
    ]
    */
}

app.set('view engine', 'ejs');


app.use(async (req, res, next) => {
    let cambridge = {
        lat: 42.37500,
        lon: -71.10611
    };
    const appID = `5900817b3e2ae15215d9e5705ae1c2df`;
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cambridge.lat}&lon=${cambridge.lon}&appid=${appID}&units=imperial`;

    try {
        const resp = await axios.get(apiURL);
        cambridgeWeather.cityName = resp.data.city.name; 
        cambridgeWeather.list = threeHoursToDays(resp.data.list);
    } catch (error) {
        console.log(error);
    }
    next();
})

app.get('/', (req, res) => {
    res.render('index', { weather: cambridgeWeather });
})

app.listen(PORT, () => {
    console.log(`Server is live on PORT: ${PORT}`);
})


