(function(namespace){

  var self = namespace.ElementBuilder = function() {
  };

  self.prototype.build = function(type, attributes, children){
    var element = new namespace.Element( type, attributes );

    if ( children ) element.setChildren(children);

    return element;
  };

})(Newton);


window.$ = function(elementType, attributes, ...children){
  var builder = new Newton.ElementBuilder();

  return builder.build(elementType, attributes, children);
};

