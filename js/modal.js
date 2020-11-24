let modal = document.getElementsByClassName("modal-title");
let type = document.getElementById("hidden");
let course = document.getElementById("course-hidden");
// let course = document.getElementById("hidden-course");
function curriculum(courseName) {
  type.value = "Get Curriculum";
  course.value = courseName;
  modal[0].innerHTML = "Get Curriculum";
}

function enrollNow(courseName) {
  type.value = "Enroll Now";
  course.value = courseName;
  modal[0].innerHTML = "Enroll Now";
}
function submitRequest() {
  modal[0].innerHTML = "Submit A Request";
  type.value = "Submit A Request";
}
function getSkilled(getSkilled) {
  type.value = getSkilled;
  modal[0].innerHTML = "Get Skilled";
}
function contactUs() {
  type.value = "Contact Us";
  modal[0].innerHTML = "Contact Us";
}
function getCertificate() {
  type.value = "Get Certificate";
  modal[0].innerHTML = "Get Certificate";
}

function internWithUs() {
  type.value = "Intern With Us";
  modal[0].innerHTML = "Intern With Us";
}
function getEMI() {
  type.value = "Get EMI Options";
  modal[0].innerHTML = "Get EMI Options";
}
function getJobReady() {
  type.value = "Get Job Ready";
  modal[0].innerHTML = "Get Job Ready";
}
function joinNow() {
  type.value = "Join Now";
  modal[0].innerHTML = "Join Now";
}
function howNineGlobalWorks() {
  type.value = "How 9Globes Works";
  modal[0].innerHTML = "How 9Globes Works";
}
function scheduledemo() {
  type.value = "Schedule A Demo";
  modal[0].innerHTML = "Schedule A Demo";
}
function getCourseFee() {
  type.value = "Get Course Fee";
  modal[0].innerHTML = "Get Course Fee";
}
function requestABatch() {
  type.value = "Request A Batch";
  modal[0].innerHTML = "Request A Batch";
}
