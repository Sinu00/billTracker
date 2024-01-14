function filterMonths() {
    var monthInput, unpaidInput, container, boxes, text, status, i;
    monthInput = document.getElementById("monthFilter");
    unpaidInput = document.getElementById("unpaidFilter");
    container = document.getElementById("dataContainer");
    boxes = container.getElementsByClassName("data-box");

    for (i = 0; i < boxes.length; i++) {
      text = boxes[i].getAttribute("data-month");
      status = boxes[i].getAttribute("data-status");

      // Check if the month matches the input
      var monthMatch = text.toUpperCase().indexOf(monthInput.value.toUpperCase()) > -1;

      // Check if the status matches the filter (only show unpaid bills)
      var unpaidMatch = !unpaidInput.checked || (status.toUpperCase() === "NOT PAID");

      // Show or hide the box based on both conditions
      if (monthMatch && unpaidMatch) {
        boxes[i].style.display = "";
      } else {
        boxes[i].style.display = "none";
      }
    }
  }