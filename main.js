const snaps = document.querySelector("#snaps");
snaps.addEventListener("click", tjek);

const fanta = document.querySelector("#fanta");
fanta.addEventListener("click", tjek);

const cola = document.querySelector("#cola");
cola.addEventListener("click", tjek);

const øl = document.querySelector("#øl");
øl.addEventListener("click", tjek);

// funktionen tjekker alt attributten på det element der bliver klikket på
function tjek() {
  console.log(this.alt);

  //hvis alt-teksten enten er øl eller snaps så skriv -> indeholder alkohol
  if (this.alt == "øl" || this.alt == "snaps") {
    console.log("indeholder alkohol");

    //hvis alt ikke er øl eller snaps så skriv -> alkoholfri
  } else {
    console.log("alkoholfri");
  }
}
