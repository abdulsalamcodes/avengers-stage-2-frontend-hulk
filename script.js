const viewMore = document.querySelector("#view-more");
const back = document.querySelector("#back");
const firstRooms = document.querySelector(".first-rooms");
const secondRooms = document.querySelector(".second-rooms");
viewMore.addEventListener("click", showNextRooms);

function showNextRooms() {
  firstRooms.classList.add(".hide");
  secondRooms.classList.remove("hide");
}
