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
  if (
    !sal.value.length ||
    !fname.value.length ||
    !lname.value.length ||
    !comment.value.length
  ) {
    alert("Fill the form properly.");
    return;
  }
  makeCard(sal, fname, lname, comment);
}
function makeCard(sal, fname, lname, comment) {
  var n = document.createElement("div");
  n.className = "card";
  var newhead = document.createElement("div");
  var newcontent = document.createElement("div");
  newhead.className = "head";
  newhead.innerHTML = sal.value + " " + fname.value + " " + lname.value;
  newcontent.className = "content";
  newcontent.innerHTML = comment.value;
  n.appendChild(newhead);
  n.appendChild(newcontent);
  document.querySelector(".heading").after(n);
  n.classList.add("fade");
  if (document.getElementsByClassName("card").length == 5) {
    document.getElementsByClassName("card")[4].remove();
  }
  setTimeout(() => n.classList.remove("fade"), 500);
}
function hasNumber(myString) {
  return /\d/.test(myString);
}
