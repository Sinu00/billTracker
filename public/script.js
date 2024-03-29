function filterMonths() {
    var monthInput, unpaidInput, container, boxes, text, status, i;
    monthInput = document.getElementById("monthFilter");
    unpaidInput = document.getElementById("unpaidFilter");
    container = document.getElementById("dataContainer");
    boxes = container.getElementsByClassName("data-box");

    for (i = 0; i < boxes.length; i++) {
      text = boxes[i].getAttribute("data-month");
      status = boxes[i].getAttribute("data-status");

      var monthMatch = text.toUpperCase().indexOf(monthInput.value.toUpperCase()) > -1;
      var unpaidMatch = !unpaidInput.checked || (status.toUpperCase() === "NOT PAID");

      if (monthMatch && unpaidMatch) {
        boxes[i].style.display = "";
      } else {
        boxes[i].style.display = "none";
      }
    }
  }