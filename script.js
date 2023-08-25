//*** appends close button and checkbox for each element in list
var myNodelist = document.getElementsByTagName("LI");
for(let i = 0; i < myNodelist.length; i++){
    const span = document.createElement("span");
    const cross = document.createTextNode("\u00D7") // cross symbol
    span.className = "close";
    span.appendChild(cross);
    myNodelist[i].appendChild(span);

    const input = document.createElement("input")
    input.className = "form-check-input";
    input.type = "checkbox";
    myNodelist[i].appendChild(input);
}

// hides (close) element
var close = document.getElementsByClassName("close");   
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// if checkbox checked, text crossed
let checkboxEl = document.getElementsByClassName("form-check-input");
for (let i = 0; i < checkboxEl.length; i++){
    console.log("number of checkboxes = " + checkboxEl.length);
    checkboxEl[i].addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
            console.log("checked!");
            myNodelist[i].id = "checked"
        }else {
            console.log("unchenked!"); 
            myNodelist[i].id = "none";
        }
    })
}

// adds new element to the list
function newElement(){
    var li = document.createElement("LI");
    var inputValue = document.getElementById("myInput").value;
    t = document.createTextNode(inputValue);
    li.className = "list-group-item";
    li.appendChild(t);
    (inputValue !== '') ? document.getElementById("myUL").appendChild(li):console.log("empty");
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    const input = document.createElement("input")
    input.className = "form-check-input";
    input.type = "checkbox";
    li.appendChild(input);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }    
    }

    input.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
            console.log("checked!");
            li.id = "checked"
        }else {
            console.log("unchenked!"); 
            li.id = "none";
        }
    })
}

function readData(){
    /*  Example of loading data from server
    fetch("http://example.com/data.json")  //need of http/s request not file:\\\
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    */

    data = [
        {"inputValue": "First item", "checked": false},
        {"inputValue": "Second item", "checked": false},
        {"inputValue": "Third item", "checked": false}
    ]
    console.log(data);

    //var obj = JSON.parse(data);
    console.log(data.inputValue)
}
