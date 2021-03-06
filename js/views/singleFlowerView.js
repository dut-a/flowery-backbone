// Namespace our flowerApp
var app = app || {};

// The view for a single model view, which is one flower
app.singleFlowerView = Backbone.View.extend({
  tagName: "article",
  className: "flower-list-item",
  template: _.template( $("#flower-element").html() ),
  render: function() {
    var flowerTemplate = this.template(this.model.toJSON());
    this.$el.html(flowerTemplate);
    return this;
  },
  events: {
    'mouseover': 'addBgColor',
    'mouseout': 'removeBgColor'
  },
  addBgColor: function() {
    this.$el.addClass("bg-color-image");
  },
  removeBgColor: function() {
    this.$el.removeClass("bg-color-image");
  }
});

