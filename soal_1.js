let arr = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

// Pisahkan huruf dan angka
let huruf = arr.filter(item => typeof item === 'string').sort();
let angka = arr.filter(item => typeof item === 'number').sort((a, b) => a - b);

// Gabungkan kembali dengan huruf di depan dan angka di belakang
let hasil = huruf.concat(angka);

console.log(hasil);