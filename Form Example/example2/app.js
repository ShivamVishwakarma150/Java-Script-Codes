let myform = document.myfrm;
let btnadd = myform.btnadd;
let btnclear = myform.btnclear;
let txtfno = myform.txtfno;
let txtsno = myform.txtsno;
let txtresult = myform.txtresult;

btnadd.addEventListener("click", () => {
  let fnum = Number(txtfno.value);
  let snum = Number(txtsno.value);
  let sum = fnum + snum;
  txtresult.value = sum;
});

btnclear.addEventListener("click", () => {
  txtfno.value = txtsno.value = txtresult.value = "";
});
