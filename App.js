
// HTML Stucture
/**  
*
*
*
<div id='heading' class="text-3xl font-bold text-gray-900">
    <h1>Hello React World!</h1>
</div>
*
*
*
*
**/
const heading = React.createElement("h1", {
    className: "text-3xl font-bold text-gray-900",
    id: 'heading',
}, 'Hello React World!');
console.log(heading);// object with properties and methods of react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // This render metod basically takes the react element(Object) and convert it into html and put it in the root element(DOM)

// Nested Stucture
/**  
*
*
*
<div id='parent'>
    <div id='child'>
        <h1>I am an H1 Tag</h1>
    </div>
</div>
*
*
*
*
**/
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I am an H1 Tag")
    )
);

console.log(parent); // Object
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

// Nested Stucture
/**  
*
*
*
<div id='parent'>
    <div id='child'>
        <h1>I am an H1 Tag</h1>
        <h2>I am an H2 Tag</h2>
    </div>
</div>
*
*
*
*
**/

const parent2 = React.createElement(
    "div",
    { id: "parent2" },
    React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement("h1", {}, "I am an H1 Tag"), 
            React.createElement("h2", {}, "I am an H2 Tag")
        ]
    )
);

console.log(parent2); // Object
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent2);


// Nested Stucture
/**  
*
*
*
<div id='parent'>
    <div id='child'>
        <h1>I am an H1 Tag</h1>
        <h2>I am an H2 Tag</h2>
    </div>
    <div id='child'>
        <h1>I am an H1 Tag</h1>
        <h2>I am an H2 Tag</h2>
    </div>
</div>
*
*
*
*
**/

const parent3 = React.createElement( "div", { id: "parent3" }, 
    [
    React.createElement(
        "div",
        { id: "child22" },
        [
            React.createElement("h1", {}, "I am an H1 Tag from Child 1"), 
            React.createElement("h2", {}, "I am an H2 Tag from Child 1")
        ]
    ),
    React.createElement(
        "div",
        { id: "child33" },
        [
            React.createElement("h1", {}, "I am an H1 Tag from Child 2"), 
            React.createElement("h2", {}, "I am an H23 Tag from Child 2")
        ]
    ),
    ]
);

console.log(parent3); // Object
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(parent3);

