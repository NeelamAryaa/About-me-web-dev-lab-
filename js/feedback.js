var x = document.querySelector("#btn1");
x.addEventListener("click", checkvalues);
function checkvalues() {
  var sal = document.getElementById("salutation");
  if (sal.value == "Select") {
    alert("Please choose appropriate salutation");
    return;
  }
  var fname = document.getElementById("firstName");
  var lname = document.getElementById("lastName");
  if (hasNumber(fname.value) || hasNumber(lname.value)) {
    alert("Invalid name !");
    return;
  }

  var comment = document.getElementById("comment");
  if (!fname.value.length || !comment.value.length) {
    alert("First name and comment are mandetory.");
    return;
  }

  makeCard(sal, fname, lname, comment);
}
let array = [];
function makeCard(sal, fname, lname, comment) {
  head = sal.value + " " + fname.value + " " + lname.value + " says...";
  comment = comment.value;

  var n = document.createElement("div");
  n.className = "card";
  var newhead = document.createElement("div");
  var newcontent = document.createElement("div");
  newhead.className = "head";
  newhead.innerHTML = head;
  newcontent.className = "content";
  newcontent.innerHTML = comment;
  n.appendChild(newhead);
  n.appendChild(newcontent);
  document.querySelector(".heading").after(n);

  let obj = {
    name: head,
    comment: comment,
  };

  let array1 = JSON.parse(localStorage.getItem("array"));
  array.push(obj);
  console.log(array);
  localStorage.setItem("array", JSON.stringify(array));
}
function hasNumber(myString) {
  return /\d/.test(myString);
}

function fun() {
  var sal = document.getElementById("salutation");
  var fname = document.getElementById("firstName");
  var lname = document.getElementById("lastName");
  var comment = document.getElementById("comment");

  sal.value = localStorage.getItem("sal");
  fname.value = localStorage.getItem("fname");
  lname.value = localStorage.getItem("lname");
  comment.value = localStorage.getItem("comment");

  getarray = JSON.parse(localStorage.getItem("array"));
  console.log(getarray);

  getarray
    ? getarray.forEach((item) => {
        var n = document.createElement("div");
        n.className = "card";
        var newhead = document.createElement("div");
        var newcontent = document.createElement("div");
        newhead.className = "head";
        newhead.innerHTML = item.name;
        newcontent.className = "content";
        newcontent.innerHTML = item.comment;
        n.appendChild(newhead);
        n.appendChild(newcontent);
        document.querySelector(".heading").after(n);
      })
    : null;
}

function reset() {
  document.getElementById("form1").reset();
}

var form = document.querySelector("form");
form.addEventListener("change", function () {
  var sal = document.getElementById("salutation");
  var fname = document.getElementById("firstName");
  var lname = document.getElementById("lastName");
  var comment = document.getElementById("comment");

  localStorage.setItem("sal", sal.value);
  localStorage.setItem("fname", fname.value);
  localStorage.setItem("lname", lname.value);
  localStorage.setItem("comment", comment.value);
});
