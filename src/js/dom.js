(function(namespace){

  namespace.DOM = {


    _executeCallback : function(callback, components){
      for (var i = 0; i < components.length; i++) {
        if (components[i][callback]) components[i][callback]();
      }
    },


    update: function(component){
      var updatedElement = component.render(),
              uid = component.getUID();
            selector = "[data-newtonid='" + uid + "']"
              node = document.querySelectorAll(selector)[0];

      updatedElement.attributes['data-newtonid'] = uid;
      node.parentNode.replaceChild(updatedElement.render(), node);
    },


    render: function(element, htmlElement){
      var components = element.components();

      this._executeCallback('willRender', components);
      htmlElement.appendChild(element.render());
      this._executeCallback('didRender', components);
    }
  }


})(Newton);

