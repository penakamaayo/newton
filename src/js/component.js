(function(namespace){
  var UID = 0;

  var self = namespace.Component = function(props) {
    this.props = props;
  };

  self.prototype.getUID = function(){
    return UID++;
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
  };


})(Newton);
