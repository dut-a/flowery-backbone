
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

var flowers = [
  heirloomRoses,
  rainbowRoses,
  redRoses
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

