(function(){

  var self = Newton.Element = function(elementType, attributes, children){
    this.elementType = elementType;
    this.attributes = attributes;
    this.children = children;

    this._initializeElement();
  };


  self.prototype.render = function(){
    if ( this.children ) this._appendChildren( this.children );

    return this.element;
  };

  self.prototype.setChildren = function(children){
    this._appendChildren(children);
  };




  self.prototype._initializeElement = function(){
    this.element = this._createParentNode( this.elementType );
    this._appendAttributes();
  }

  self.prototype._createParentNode = function(){
    return document.createElement( this.elementType );
  };

  self.prototype._appendAttributes = function(){
    for ( var key in this.attributes ){
      if ( this.attributes.hasOwnProperty(key) ) {
        this.element[key] = this.attributes[key];
      }
    }
  };

  self.prototype._appendChildren = function(children){
    for ( var i = 0; i < children.length; i++ ){
      var child = children[i];
      this._appendChild(child);
    }
  };

  self.prototype._appendChild = function(child){
    var node;
    if ( typeof child === 'string' ){
      node = document.createTextNode(child);
    }
    else {
      node = child.element.cloneNode(true);
    }

    this.element.appendChild(node);
  }

})();
