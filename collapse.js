var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log('hej')
    var cont = this.nextElementSibling;
    if (cont.style.maxHeight) {
      cont.style.maxHeight = null;
    } else {
      cont.style.maxHeight = cont.scrollHeight + "px";
    }
  });
}
