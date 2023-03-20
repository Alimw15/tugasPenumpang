var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (namaPenumpang == penumpang[i]) {
        console.log(namaPenumpang + " sudah ada didalam angkot");
        return;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
      if (tambahPenumpang.length == 3) {
        penumpang.push(namaPenumpang);
        console.log("penumpang sudah penuh");
        return;
      }
    }
  }
};
