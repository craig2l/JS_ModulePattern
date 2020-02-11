import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// The ifie is executed immediatedly and the results is assinged to foo. The
// results are the publicAPI which is being called via foo and all functions embedded in
// the api are accessible.
var foo = (function() {
  function _func1() {
    console.log("I am func1, a private function.");
  }

  function _func2() {
    console.log("I am func2, another private function.");
  }
  _func2();
  _func1();

  var publicAPI = {
    bar: function() {
      publicAPI.baz();
    },
    baz: function() {
      console.log("baz");
    }
  };
  return publicAPI;
})();

foo.bar();
foo.baz();
foo._func1(); // type error foo._func1 is not a function
