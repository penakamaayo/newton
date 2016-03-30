(function(namespace){

  var self = namespace.ElementBuilder = function(){
  };

  self.prototype.build = function(typeOrComponentClass, attributesOrProps, children){
    var element = null;

    if (typeOrComponentClass.prototype instanceof namespace.Component) {
      element = new typeOrComponentClass(attributesOrProps);
    }

    else {
      element = new namespace.Element( typeOrComponentClass, attributesOrProps );

      if (children) element.setChildren(children);
      element = element.render();
    }

    return element;
  };

})(Newton);


window.$ = function(typeOrComponentClass, attributesOrProps, ...children){
  var builder = new Newton.ElementBuilder();

  return builder.build(typeOrComponentClass, attributesOrProps, children);
};



