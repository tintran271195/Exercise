//làm các hiển thị nút bấm
function dis(val) {
  document.getElementById("result").value += val;
}
//hàm hiển thị giá trị trả về
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
//xóa hiển thị
function clr() {
  document.getElementById("result").value = "";
}
