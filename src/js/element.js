(function(namespace){

  var self = namespace.Element = function(elementType, attributes){
    this.elementType = elementType;
    this.attributes = attributes;
    this.children = [];
    this.element = this._createParentNode( this.elementType );
  };



  self.prototype.render = function(){
    this._appendAttributes();

    return this.element;
  };

  self.prototype.setChildren = function(children){
    this._clearChildren();
    this._setChildren(children);
  };



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

  self.prototype._clearChildren = function(){
    while ( this.element.hasChildNodes() ) {
      this.element.removeChild( this.element.lastChild );
    }
  };

  self.prototype._setChildren = function(children){
    for ( var i = 0; i < children.length; i++ ){
      var child = children[i];
      this._appendChild(child);
    }
  };

  self.prototype._appendChild = function(child){
    var node;

    if (child instanceof namespace.Element) {
      node = child.render().cloneNode(true);
    }
    else {
      node = document.createTextNode(child);
    }

    this.element.appendChild(node);
  }

})(Newton);
