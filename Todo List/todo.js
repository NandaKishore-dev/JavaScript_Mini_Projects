const input = document.getElementById("input");
const tasks = document.getElementById("tasks");

function addtask() {
    if(input.value == ""){
        alert("Please Enter a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10060";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}
tasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("Data",tasks.innerHTML);
}

function showData() {
    tasks.innerHTML = localStorage.getItem("Data");
}
showData();