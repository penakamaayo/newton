function ElementBuilder(){
};

ElementBuilder.prototype.build = function(elementType, attributes){
  var element;

  element = this._createParentNode(elementType);
  this._appendAttributes(element, attributes);
  this._appendChildren(element, arguments);

  return element;
};

ElementBuilder.prototype._createParentNode = function(elementType){
  return document.createElement(elementType);
}

ElementBuilder.prototype._appendAttributes = function(element, attributes){
  for ( var key in attributes ){
    if ( attributes.hasOwnProperty(key) ) {
      element[key] = attributes[key];
    }
  }
}

ElementBuilder.prototype._appendChildren = function(element, children){
  for ( var i = 2, n = children.length; i < n; i++ ){
    var child = children[i];
    this._appendChild( element, child );
  }
}

ElementBuilder.prototype._appendChild = function(element, child){
  var node;

  if ( typeof child === 'string' ){
      node = document.createTextNode(child);
  }
  else {
    node = child.cloneNode(true);
  }

  element.appendChild(node);
}

var builder = new ElementBuilder();
$ = builder.build.bind(builder);


// var hello = $('p', {className: 'hello', id: 'world'}, 'Hello', 'World');
// var world = $('p', {className: 'world'}, 'World');
// var div = $('div', null, hello, world);
// var div2 = $('div', {id: 'div2'}, hello, hello, world, world);

// document.body.appendChild(div2);
