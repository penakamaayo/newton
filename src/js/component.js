(function(namespace){

  var self = namespace.Component = function(props) {
    this.props = props;
  };

})(Newton);


var generic = new Newton.Component({ x: 1, y: 2 });
console.log(generic.props.x); // 1
console.log(generic.props.y); // 2
