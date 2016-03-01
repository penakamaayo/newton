(function(namespace){

  var self = namespace.ElementBuilder = function() {
  };

  self.prototype.build = function(type, attributes, children){
    var element = new namespace.Element( type, attributes );

    if ( children ) element.setChildren(children);

    return element;
  };

})(Newton);


window.$ = function(elementType, attributes, ...children){
  var builder = new Newton.ElementBuilder();

  return builder.build(elementType, attributes, children);
};




// var p = $('p', null, 'Hello World');

// console.log(p instanceof Newton.Element); // true
// console.log(p.render()); // <p>Hello World</p>

// var a = $('span', {id: 'a'}),
//     b = $('span', {id: 'b'});

// var div = $('div', null, a, b);

// console.log(div.render());





// var foo = $('div', {className: 'foo'});  // Returns a new Newton.Element
// var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));



// var foo = $('div', {className: 'foo'});  // Returns a new Newton.Element
// var baz = $('span', {className: 'baz'});
// var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));

// foo.setChildren([baz]);

// console.log(bar.render());
// document.body.appendChild(bar.render());

// var p = $('p', null);
// p.setChildren(['Hello world']);
// console.log(p.render());

// p.setChildren(['test']);
// console.log(p.render());


// var text = new Newton.Element('p', null);
// var div = new Newton.Element('div', {className: 'test', something: 'xxxxxxxxxx'});

// console.log(text.render());
// console.log(div.render());

// console.log(div.render() == div.render());


// var div = new Newton.Element('div', null);
// var p = new Newton.Element('p', null);
// p.setChildren(['Hello World']);
// div.setChildren([p]);

// console.log(div.render());

// var container = new Newton.Element('div', {className: 'container'});
// var a = new Newton.Element('span', {id: 'a'});
// var b = new Newton.Element('span', {id: 'b'});

// container.setChildren([a, b]);
// // console.log(container.render());

// container.setChildren([]);

// console.log(container.render()); // <div class='container'></div>
