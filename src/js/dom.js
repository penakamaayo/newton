(function(namespace){

  namespace.DOM = {


    _executeCallback : function(callback, components){
      for (var i = 0; i < components.length; i++) {
        if (components[i][callback]) components[i][callback]();
      }
    },


    render: function(element, htmlElement){
      var components = element.components();

      this._executeCallback('willRender', components);
      htmlElement.appendChild(element.render());
      this._executeCallback('didRender', components);
    }
  }


})(Newton);

