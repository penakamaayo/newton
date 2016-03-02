(function(namespace){
  var UID = 0;

  var self = namespace.Component = function(props) {
    this.props = props;
  };

  self.prototype.getUID = function(){
    return UID++;
  };

})(Newton);


// var generic = new Newton.Component({ x: 1, y: 2 });
// console.log(generic.props.x); // 1
// console.log(generic.props.y); // 2


var x = new Newton.Component(),
    y = new Newton.Component(),
    z = new Newton.Component(),
    a = new Newton.Component();

console.log(x.getUID());
console.log(y.getUID());
console.log(z.getUID());
console.log(a.getUID());
// console.log(x.getUID() == y.getUID()); // false
// console.log(x.y.getUID() == z.getUID()); // false
