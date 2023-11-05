import "./App.css";
import { Component } from "react";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";
import Navigation from "../components/Navigation/Navigation";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signin",
      isSignIn: false,
    };
  }

  calculateFaceBox = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.getElementById("image");
    const width = Number(img.width);
    const height = Number(img.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (data) => {
    this.setState({ box: data });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  // Change routes based on signin state
  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({ isSignIn: true });
    } else {
      this.setState({ isSignIn: false });
    }
    this.setState({ route: route });
  };

  onButtonSubmit = () => {
    let app = new Clarifai.App({
      apiKey: "33a0a7d5cf794ce29190a117491e022e",
    });
    this.setState({ imageURL: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.displayFaceBox(this.calculateFaceBox(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { isSignIn, imageURL, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#FAF9F6" num={200} bg={true} />
        <Navigation onRouteChange={this.onRouteChange} isSignIn={isSignIn} />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageURL={imageURL} box={box} />
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
