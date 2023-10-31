//Create a mouse object that has four properties and three methods
let mouse = {
    color: 'red',
    size: 4,
    name: 'Sam',
    id: 1,
    squeek: function () { console.log('squueek!')},
    getColor: function () { console.log(this.color)},
    getSize: () => this.size
}

console.log(mouse.getColor)