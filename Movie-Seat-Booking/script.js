const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice =+movieSelect.value;

//save selected movie index and price
function setMovieData(movieIndex,moviePrice){
  localStorage.setItem('selectedMovieIndex',movieIndex);
  localStorage.setItem('selectedMoviePrice',moviePrice);
}

//update total and count
function updateSelectedCount(){
  const selectedSeats =document.querySelectorAll('.row .seat.selected');
  //copy selected seats into arr
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  console.log(seatsIndex);
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
  //Map through array
  //return a new array indexes
  const selectedSeatsCount = selectedSeats.length;
  count.innerText =  selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  console.log(selectedSeatsCount);
}
//Get Data from localstorage and populateUI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index) =>{
            if(selectedSeats.indexOf(index) > -1){
                  seat.classList.add('selected');
            }
        });
    }
    console.log(selectedSeats);

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null ){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}
//Movie select event
movieSelect.addEventListener('change',e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    console.log(e.target.selectedIndex,e.target.value)
    updateSelectedCount();
});
//seat  click event
container.addEventListener('click',(e) => {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');  
    updateSelectedCount();
    console.log(e.target)
   }
})
console.log(typeof ticketPrice)

//Initial count and total set
updateSelectedCount();