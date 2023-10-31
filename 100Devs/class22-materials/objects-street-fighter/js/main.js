//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, style, color, hp) {
    this.name = name;
    this.style = style;
    this.color = color;
    this.hp = hp;
    this.jump = function () {
        console.log('jump');
    }
    this.punch = function () {
        console.log('punch');
    } 
    this.crouch = function () {
        console.log('crouch');
    }
}

let chunLi = new StreetFighter('Chun Li', 'Wing Chun', 'Yellow', 500);
let ryu = new StreetFighter('Ryu', 'Hyurushu', 700);
let alex = new StreetFighter('Alex', 'French', 800);
chunLi.crouch()
