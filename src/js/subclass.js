(function(namespace){

  namespace.createClass = function(properties) {
    var ComponentFactory = new namespace.ComponentFactory();

    return ComponentFactory.make(properties);
  };

})(Newton);







//
// TEST
//
var Box = Newton.createClass({

  getInitialState: function(){
    return {visible: true};
  },

  render: function(){
    return $('div', {className: 'box'});
  }

});


var Circle = Newton.createClass({

  getInitialState: function(){
    return {visible: true};
  },

  render: function(){
    return $('div', {className: 'box'});
  }

});

var box = new Box();
var circle = new Circle();

console.log(box);
console.log(box instanceof Box); //true
console.log(box instanceof Newton.Component); // true
console.log(circle);
console.log(box.getUID());
console.log(circle.getUID());


console.log(box instanceof Box); //true
console.log(box instanceof Newton.Component); // true
console.log(box.state);// box.state; // {visible: true}
box.setState({ visible: false });
box.setState({ visiblex: false });
console.log(box.state);
console.log(box.render());

// (function(namespace){

//   var self = namespace.createClass = function(properties){
//   };

//   self.prototype = Object.create(namespace.Component.prototype);


// })(Newton);


// var Box = Newton.createClass({});

// console.log(Box);
// // var box = new Box();
// // box instanceof Box; // true
// // box instanceof Newton.Component; // true
// // box.state; // {visible: true}

// (function(namespace){

//   var self = namespace.createClass = function(properties){
//     // namespace.Component.call(this, properties);

//     return new subclass();
//   };

//   var subclass = function(){
//     namespace.Component.call(this, {x: 1});

//     return new namespace.Component().constructor;
//   };

//   subclass.prototype = Object.create(namespace.Component.prototype);
//   subclass.prototype.constructor = self;
//   subclass.prototype.state = this.state;


  // var subclass = function(){
  // };


  // subclass.prototype.get = function(name){
  //   return this.components[name];
  // };


  // subclass.prototype.make = function(name){
  //   return this.components[name] = this._createConstructor();
  // };


  // subclass.prototype._createConstructor = function(){
  //   var constructor = function($element){ this.$element = $element; };
  //   return constructor;
  // };


  // namespace.createClass = subclass;

// })(Newton);

