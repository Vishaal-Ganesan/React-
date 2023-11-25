
const parent = React.createElement("div",{},React.createElement("h4",{},"Let's go"));


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);