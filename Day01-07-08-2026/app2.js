const div1 = React.createElement("div", {id:"parent"}, "");
const div2 = React.createElement("div", {id:"child"}, "");

const root = ReactDOM.createRoot(document.getElementById("root"));
div1.render(div2);
root.render(div1);