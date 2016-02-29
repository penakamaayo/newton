window.$ = function(elementType, attributes, ...children){
  return new Newton.Element(elementType, attributes, children);
};

// var foo = $('div', {className: 'foo'});  // Returns a new Newton.Element
// var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));



var foo = $('div', {className: 'foo'});  // Returns a new Newton.Element
var baz = $('span', {className: 'baz'});
var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));

foo.setChildren([baz]);

console.log(bar.render());
// document.body.appendChild(bar.render());
