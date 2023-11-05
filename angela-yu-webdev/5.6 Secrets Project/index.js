// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const PORT = 3000;
const SECRETS_URL = "https://secrets-api.appbrewery.com/";
// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
  try {
    const resp = await axios.get(SECRETS_URL + "random");
    console.log(resp.data.user)
    res.render("index.ejs", {
      secret: JSON.stringify(resp.data.secret),
      user: JSON.stringify(resp.data.username)
    });
  } catch (error) {
    console.error(error.response.data)
    res.status(500);
  }
});
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(PORT, () => {
    console.log(`Server is opened on ${PORT}!`)
})