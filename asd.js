const { replace } = require("estraverse");

//tanggal bahasa Indonesia
let hari = ["Ahad", 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus',
'September', 'Oktober', 'November', 'Desember'];

let tanggal = new Date().getDate();
let _hari = new Date().getDay();
let _bulan = new Date().getMonth();
let _tahun= new Date().getFullYear();

let day = hari[_hari];
let month = bulan[_bulan]; 

let tahun = (_tahun < 1000) ? _tahun + 1900 : _tahun;

console.log(tanggal-1)
if(day == "Ahad"){
    let t1 = tanggal - 1;
    let t2 = tanggal - 2;
    let t3 = tanggal - 3;
    let asd = [t3, t2, t1];
    asd.splice(1, 1);
    let d = asd.toString();
    let a = d.replace(',', '-')
    console.log(a)
}
console.log(day)