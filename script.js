function BMI(){

    var berat = parseFloat(document.getElementById("Berat").value);
    var tinggi = parseFloat(document.getElementById("Tinggi").value) / 100;
    var bmi = berat / (tinggi ** 2);

    var hasil = "";
    var keterangan="";
    if (bmi >=0 && bmi<= 18.5){
        hasil = "Berat badan kurang";
        keterangan = "Anda memiliki berat badan yang kurang, utamakan hidup sehat dan perhatikan pola makan.";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        hasil = "Berat badan normal";
        keterangan = "Anda memiliki berat badan yang normal, pertahankan gaya hidup dan pola makan sehat.";
    }
    else if(bmi >= 25.0 && bmi <= 29.9){
        hasil = "Berat badan lebih";
        keterangan = "Anda memiliki berat badan berlebih, utamakan hidup sehat dan perhatikan pola makan.";
    }
    else if(bmi >= 30.0){
        hasil = "Obesitas";
        keterangan = "Anda memiliki berat badan yang masuk dalam kategori obesitas, utamakan hidup sehat dan perhatikan pola makan.";
    }
    else{
        hasil = "Mohon masukkan nilai berat badan dan tinggi Anda dengan benar";
    }

    var hasilBMI = document.getElementById("hasil");
    hasilBMI.innerHTML = hasil + "<br><br>" + bmi.toFixed(1) + "<br><br>" + keterangan;
}