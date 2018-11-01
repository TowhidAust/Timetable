/* */

function myFunction() {
    var td = document.createElement("TD");
    td.setAttribute("data-toggle", "tooltip");
    td.setAttribute("data-placement", "top");
    td.setAttribute("title", "tooltip on top");
    var t = document.createTextNode("This is a subject1.");
    td.append(t);
    document.getElementById("8am").appendChild(td);
}
myFunction();