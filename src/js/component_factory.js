(function(namespace){

  var self = namespace.ComponentFactory = function(){
  };

  self.prototype.make = function(properties){
    var constructor = this._createConstructor(properties);

    constructor.prototype.__proto__ = namespace.Component.prototype;
    this._createProperties(constructor, properties);

    return constructor;
  };

  self.prototype._createConstructor = function(properties){
    return function(props){
      namespace.Component.call(this, props);
    };
  };

  self.prototype._createProperties = function(constructor, properties){
    for (var key in properties) {
      if ( properties.hasOwnProperty(key) ) {
        constructor.prototype[key] = properties[key];
      }
    }
  };


})(Newton);
