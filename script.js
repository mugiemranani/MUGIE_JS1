// if, else, nested if
let nilai = 75;

if (nilai >= 80) {
  console.log("Selamat, Anda mendapat nilai A");
} else if (nilai >= 70) {
  console.log("Anda mendapat nilai B");
} else {
  console.log("Anda mendapat nilai C");
  
  if (nilai >= 50) {
    console.log("Tetapi Anda lulus.");
  } else {
    console.log("Anda harus mengulang.");
  }
}


// Switch Case
let hari = "Selasa";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu.");
    break;
  default:
    console.log("Hari ini bukan hari kerja.");
}


// For Statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
  }


// While, Do While
// Contoh While Loop
let angka = 1;
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// Contoh Do While Loop
let counter = 1;
do {
  console.log("Counter: " + counter);
  counter++;
} while (counter <= 5);


// Function
function tambahkan(a, b) {
    return a + b;
  }
  
  let hasil = tambahkan(5, 3);
  console.log("Hasil penambahan: " + hasil);
  