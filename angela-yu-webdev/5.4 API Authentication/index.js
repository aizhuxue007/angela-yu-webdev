import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Aizhu2";
const yourPassword = "chinatown";
const yourAPIKey = "d2381978-7ea6-434b-a74c-ff2d4bfd8e24";
const yourBearerToken = "547c3b6c-8f23-4bfd-9d7d-bba7cb09eaff";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  const resp = await axios.get(API_URL + 'random')
  const content = JSON.stringify(resp.data)
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  res.render('index.ejs', {content: content})
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  const resp = await axios({
    method: 'get',
    url: API_URL + 'all',
    params: {
      page: 2,
    },
    auth: {
      username: yourUsername,
      password: yourPassword
    }
  });

  const content = JSON.stringify(resp.data);  
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 res.render('index.ejs', {content: content})
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  const resp = await axios.get(API_URL + `filter?score=5&apiKey=${yourAPIKey}`);
  const content = JSON.stringify(resp.data)
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  res.render('index.ejs', {content: content})
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  const id = '42'
  const resp = await axios.get(API_URL + `secrets/${id}`, {
    headers: {
      'Authorization': `Bearer ${yourBearerToken}`
    }
   })
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 const content = JSON.stringify(resp.data)
 res.render('index.ejs', {content: content})
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
