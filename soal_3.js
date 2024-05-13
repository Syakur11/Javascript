function hitungDanUrutkanHuruf(kalimat) {
    // Membuat objek untuk menyimpan jumlah kemunculan setiap huruf
    let hurufCount = {};
    
    // Menghitung jumlah kemunculan setiap huruf dalam kalimat
    for (let huruf of kalimat) {
        // Mengabaikan spasi
        if (huruf !== ' ') {
            // Mengonversi huruf menjadi huruf kecil untuk memperlakukan huruf kapital dan huruf kecil sama
            let hurufKecil = huruf.toLowerCase();
            // Memeriksa apakah huruf sudah ada dalam objek hurufCount
            if (hurufCount[hurufKecil]) {
                // Jika sudah ada, tambahkan jumlahnya
                hurufCount[hurufKecil]++;
            } else {
                // Jika belum ada, inisialisasi dengan jumlah 1
                hurufCount[hurufKecil] = 1;
            }
        }
    }
    
    // Mengonversi objek menjadi array of arrays untuk dapat diurutkan
    let hurufCountArray = Object.entries(hurufCount);
    
    // Mengurutkan array berdasarkan huruf dalam urutan abjad
    hurufCountArray.sort(function(a, b) {
        // Membandingkan huruf secara case-insensitive
        let hurufA = a[0].toLowerCase();
        let hurufB = b[0].toLowerCase();
        if (hurufA < hurufB) {
            return -1;
        }
        if (hurufA > hurufB) {
            return 1;
        }
        // Jika huruf sama, bandingkan huruf kapital dan huruf kecil
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });
    
    return hurufCountArray;
}

// Contoh penggunaan
let kalimat = prompt("Masukkan kalimat:");
let hasil = hitungDanUrutkanHuruf(kalimat);
console.log("Output:", hasil);