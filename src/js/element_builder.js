(function(namespace){

  var self = namespace.ElementBuilder = function(){
  };

  self.prototype.build = function(typeOrComponentClass, attributesOrProps, children){
    var element = null;

    if (typeOrComponentClass.prototype instanceof namespace.Component) {
      var component = new typeOrComponentClass(attributesOrProps);

      element = component.render();
      element.attributes['data-newtonid'] = component.getUID();
      element.setMainComponent(component);
    }

    else {
      element = new namespace.Element( typeOrComponentClass, attributesOrProps );
      if (children) element.setChildren(children);
      element.setSubComponents(children);
    }

    return element;
  };


  window.$ = function(typeOrComponentClass, attributesOrProps, ...children){
    var builder = new Newton.ElementBuilder();

    return builder.build(typeOrComponentClass, attributesOrProps, children);
  };


})(Newton);




