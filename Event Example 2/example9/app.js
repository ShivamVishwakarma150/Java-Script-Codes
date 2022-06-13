let txt = document.getElementById("mytext");
txt.onkeydown = (e) => {
  if (e.key < "0" || e.key > "9") {
    alert("Please input digits only!");
    return false;
  }
};
