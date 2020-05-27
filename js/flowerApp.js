
var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/red-roses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloom-pink-roses.jpg",
  link: "heirloomRose"
});

var others = [
  new app.singleFlower({
    name: "Other flower 1",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-1.jpeg",
    link: "other-flower-1"
  }),
  new app.singleFlower({
    name: "Other flower 2",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-2.jpeg",
    link: "other-flower-2"
  }),
  new app.singleFlower({
    name: "Other flower 3",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-3.jpeg",
    link: "other-flower-3"
  }),
  new app.singleFlower({
    name: "Other flower 4",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-4.jpeg",
    link: "other-flower-4"
  }),
  new app.singleFlower({
    name: "Other flower 5",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-5.jpeg",
    link: "other-flower-5"
  }),
  new app.singleFlower({
    name: "Other flower 6",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-6.jpeg",
    link: "other-flower-6"
  }),
  new app.singleFlower({
    name: "Other flower 7",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-7.jpeg",
    link: "other-flower-7"
  }),
  new app.singleFlower({
    name: "Other flower 8",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-8.jpeg",
    link: "other-flower-8"
  }),
  new app.singleFlower({
    name: "Other flower 9",
    price: 28.95,
    color: "Other",
    img: "images/other-flower-9.jpeg",
    link: "other-flower-9"
  }),
];

var flowers = [
  heirloomRoses,
  rainbowRoses,
  redRoses,
  ...others
];

flowers.forEach(f => console.log(f.toJSON()));

// rainbowRoses.set('price', 20);

// collections
var flowerGroup = new app.FlowersCollection([
  ...flowers
]);

// flowerGroup.add(heirloomRoses);

// flowerGroup.remove(redRoses);

console.log(flowerGroup.toJSON());

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

$("#all-flowers").html(flowerGroupView.render().el);

// Routing
var flowerRouter = new app.Router();
Backbone.history.start();

