/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>i m h1 tag</h1>
 *      </div>
 * </div>
 * 
 * Reactelement (object)=>html(browser understand)
 * 
 */

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",{id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),//nested sibling
    ]),
    React.createElement(
        "div",{id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),//nested sibling
    ]),

);




/**const heading =React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},//attribute
    "hello world from react");//children
        //put in id as child as root
        */
console.log(parent);//object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);