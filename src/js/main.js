const listUpdate = () => {
  document.querySelector("#list").innerHTML = `[ ${length.toString()} ]`;
};

const random = () => {
  // Check Value Length
  if (length.length > 0) {
    randomAnimation();

    let result = Math.floor(Math.random() * length.length);

    document.querySelector("#result").innerHTML = length[result];

    length.splice(result, 1);
    localStorage.setItem("res_list", JSON.stringify(length));

    listUpdate();
  } else {
    do_alert("Error", "รายการว่างเปล่า ไม่มีรายการให้สุ่มแล้ว กรุณารีเซ็ต");
  }
};

const reset = () => {
  localStorage.setItem("res_list", JSON.stringify([1, 2, 3, 4, 5, 6]));
  length = [1, 2, 3, 4, 5, 6];

  listUpdate();
};

listUpdate();
