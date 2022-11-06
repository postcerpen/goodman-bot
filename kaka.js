// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    const nama = message.notifyName;
    //laip
    const angka = message.body;
    let arr = angka.split('/');
    if (message.body === 'Hai' || message.body === "hai" && message.isGroupMsg === false) {
      client
        .sendText(message.from, `Hai ` + nama + `
Selamat Datang di *Goodman Bot*

_____Layanan_____

*/laip* Laporan Akhir Indostation (BETA)`)
    }
    if (message.body === '/laip' || message.body === "/Laip" && message.isGroupMsg === false) {
        client
          .sendText(message.from, `Gunakan Rumus #laip/hasil1/hasil2`)
    }
    if (arr[0] === `#laip` || arr[0] === `#laip` && message.isGroupMsg === false) {
    //per liter
    const rp = 14150;
    //harga
    let h1 = arr[1];
    let h2 = arr[2];
    let fh1 = parseInt(h1);
    let fh2 = parseInt(h2);
    let harga1 = fh1.toFixed(0)
    let harga2 = fh2.toFixed(0)
    // console.log(harga1);
    //membuat angka biar readable
    let hg1 = harga1.toString();
    console.log(hg1.length);
    if(hg1.length === 5){
        let n = hg1.split('');
        console.log(n);
        n.splice(2, 0, ".");
        let u = n.toString();
        const finalhg1 = u.replaceAll(',', '')
         //total harga
            let totalharga = harga1 + harga2;
            let final = parseInt(totalharga);
            //liter
            let shift1 = harga1 / rp;
            let shift2 = harga2 / rp;
            //total liter
            let totalLiter = shift1 + shift2;
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
                client
                .sendText(message.from, ``+ day +`, ` + tanggal +` ` + month +` ` + tahun +`
=== MOGAS ===

=== Shift 01 === 
Liter keluar : `+shift1.toFixed(2)+`
Uang Tunai   : Rp `+finalhg1+`
Voucher      : -
Total Uang   : Rp `+finalhg1+`
                                    
=== Shift 02 ===
Liter keluar : `+shift2.toFixed(2)+`
Uang Tunai   : Rp `+harga2+`
Voucher      : -
Total Uang   : Rp `+harga2+`
                                    
TOTAL LITER KELUAR  : `+totalLiter.toFixed(2)+` Liter
TOTAL UANG MOGAS    : Rp `+final.toFixed(0)+`
                                    
=== Sparepart ===
Uang Tunai    : Rp -
Voucher       : -
Total Uang    : Rp -
                                    
TOTAL UANG KESELURUHAN : Rp `+final.toFixed(0)+``)
    }

    }
  })
  
}
