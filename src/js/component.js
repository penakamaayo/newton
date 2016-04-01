(function(namespace){
  var uid = 0;

  var self = namespace.Component = function(props) {
    this.props = props || {};
    this.uid = uid++;
    this.state = this.getInitialState();
  };

  self.prototype.getUID = function(){
    return this.uid;
  };

  self.prototype.render = function(){
    return null;
  };

  self.prototype.getInitialState = function(){
    return {};
  };

  self.prototype.setState = function(newState){
    for ( var key in newState ){
      if ( (newState.hasOwnProperty(key)) && (key in this.state) ) {
        this.state[key] = newState[key];
      }
    }

    namespace.DOM.update(this);
  };


})(Newton);
