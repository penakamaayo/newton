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
