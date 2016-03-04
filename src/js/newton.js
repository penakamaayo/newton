window.Newton = window.Newton || {};

(function(namespace){

  namespace.createClass = function(properties) {
    var ComponentFactory = new namespace.ComponentFactory();

    return ComponentFactory.make(properties);
  };

})(Newton);


