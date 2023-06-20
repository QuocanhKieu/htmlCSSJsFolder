const HES = 40,
  CVA = 45;
const inputList = document.querySelectorAll("form input");

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  let totalScore = 0;
  for (let item of inputList) {
    if (item.id !== "anh") {
      totalScore += parseFloat(item.value) * 2;
    } else totalScore += parseFloat(item.value);
  }
  const divEl = document.querySelector("form div");
  if (isNaN(totalScore)) {
    divEl.innerHTML = "Bạn chưa nhập đủ 3 chỉ số điểm.";
  } else {
    if (totalScore >= 45) {
      divEl.innerHTML = `Điểm cua bạn là: ${totalScore}: Bạn đỗ cả 2 trường.`;
    } else if (totalScore >= 40) {
      divEl.innerHTML = `Điểm cua bạn là: ${totalScore}: Bạn đỗ trường HES.`;
    } else divEl.innerHTML = `Điểm cua bạn là: ${totalScore}: Bạn trượt cả 2 .`;
  }
  console.log(`>>>>>>`, totalScore);
});
