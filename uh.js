// soal no 2
function myFunction() {
  return angka1 + angka2;
}

let angka1 = 20;
let angka2 = 7;

let output = myFunction(angka1, angka2);

console.log(output);

// soal no 3

let Hello = () => {
  return Hello;
};
console.log("Hello");

// soal no 4

let obj = {
  nama: "john",
  umur: 22,
  bahasa: "indonesia",
};

console.log(obj.bahasa);

// soal no 5

let array = ["John Doe", "laki laki", "baca buku", 1992];

let objek = {
  nama: array[0],
  kelamin: array[1],
  hobi: array[2],
  lahir: array[3],
};

console.log(objek);

// soal no 6

let buah = [
  {
    nama: "nanas",
    warna: "kuning",
    adaBijinya: "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    adaBijinya: "ada",
    harga: 8000,
  },
  {
    nama: "semangka",
    warna: "hijau & merah",
    adaBijinya: "ada",
    harga: 7000,
  },
  {
    nama: "pisang",
    warna: "kuning",
    adaBijinya: "tidak",
    harga: 6000,
  },
  {
    nama: "apel",
    warna: "merah",
    adaBijinya: "ada",
    harga: 5000,
  },
  {
    nama: "kelapa",
    warna: "coklat",
    adaBijinya: "tidak",
    harga: 10000,
  },
];

sortNama = ["semangka", "jeruk", "pisang", "nanas", "apel", "kelapa"];

let berbiji = buah.filter((buah) => buah.adaBijinya === "tidak");

console.log(berbiji);
console.log(sortNama.sort());
