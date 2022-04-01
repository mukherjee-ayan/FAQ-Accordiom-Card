
var faqHeading = document.querySelectorAll(".question");

for (var i = 0; i < faqHeading.length; i++) {
  faqHeading[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.classList.toggle("answer")
  });
}
