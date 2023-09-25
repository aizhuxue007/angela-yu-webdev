let data = {
    fullname: "Jennifer Smith",
    position: "UI / UX Designer",
    socials: [
      {
        id: "fb",
        service: "Facebook",
        url: "https://www.facebook.com/jsmith25",
        icon: "fab fa-facebook-f",
      },
      {
        id: "ig",
        service: "Instagram",
        url: "https://www.instagram.com/jsmith25",
        icon: "fab fa-instagram",
      },
      {
        id: "db",
        service: "Dribbble",
        url: "https://www.dribbble.com/jsmith25",
        icon: "fab fa-dribbble",
      },
      {
        id: "gl",
        service: "Google",
        url: "https://www.google.com/jsmith24",
        icon: "fab fa-google",
      },
    ],
  },
  body = document.getElementsByTagName("body")[0],
  root = document.createElement("div"),
  style = document.createElement("style"),
  card = document.createElement("section"),
  cardSocials = document.createElement("div"),
  html = `
    <div class="card-wrapper">
        <img src=" https://m.media-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg" alt="user-image" class="card-img">
        <span class="card-name">${data.fullname}</span>
        <span class="card-info">${data.position}</span>
    </div>
`,
  cssStyles = `* {
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
}
body{
    background-image: url('https://wallpaperaccess.com/full/636909.jpg');
    background-size: cover;
    background-position: center;
}
.card{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(25px);
}
.card-wrapper{
    max-width: 400px;
    max-height: 540px;
    width: 100%;
    height: 100%;
    border-radius: 5%;
    box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.52);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    font-family: 'Noto Sans';
}
.card-img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 30px 0px 15px 0px;
    object-fit: cover;
    object-position: center;
    border: 2px solid rgba(31, 71, 106);
}
.card-name{
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
}
.card-info{
    font-size: .8rem;
    margin-bottom: 30px;
}
.card-socials{
    width: 75%;
    display: flex;
    flex-direction: column;
}
.card__icon{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 5%;
    cursor: pointer;
}
.card__icon-title{
    width: 100%;
    text-align: center;
}
.card__icon--fb{
    border: 1px solid rgba(66, 115, 241, 1);
    color: rgba(66, 115, 241, 1);
}
.card__icon--fb:hover{
    border: 1px solid rgba(66, 115, 241, 1);
    background-color: rgba(66, 115, 241, 1);;
    color: white;
}
.card__icon--ig{
    border: 1px solid rgb(157, 102, 244);
    color: rgba(157, 102, 244, 1);
}
.card__icon--ig:hover{
    border: 1px solid rgb(157, 102, 244);
    background-color: rgb(157, 102, 244);
    color: white;
}
.card__icon--db{
    border: 1px solid rgba(238, 149, 186, 1);
    color: rgb(238, 149, 186);
}
.card__icon--db:hover{
    border: 1px solid rgba(238, 149, 186, 1);
    background-color: rgba(238, 149, 186, 1);
    color: white;
}
.card__icon--gl {
    border: 1px solid rgba(32, 33, 36, 1);
    color: rgba(32, 33, 36, 1);
}
.card__icon--gl:hover {
    border: 1px solid rgba(32, 33, 36, 1);
    background: rgba(32, 33, 36, 1);
    color: white;
}
`;
body.prepend(root);
root.prepend(card);
root.classList.add("root");
card.classList.add("card");
card.innerHTML = html;

root.prepend(style);
style.innerHTML = cssStyles;

cardSocials.classList.add("card-socials");
let cardWrapper = document.getElementsByClassName("card-wrapper")[0];
cardWrapper.append(cardSocials);

data.socials.forEach((social) => {
  console.log(social);
  templateNode = document.createElement("div");
  templateNode.classList.add("card__icon", `card__icon--${social.id}`);
  templateNode.innerHTML = `
        <span class="card__icon-box">
            <i class="${social.icon}"></i>
        </span>
        <span class="card__icon-title">
            ${social.service}
        </span>
    `;
  cardSocials.append(templateNode);
});
