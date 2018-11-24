function timeTableGrid(sTime, eTime, day) {
  const offsetStartTime = $(sTime).offset();
  const offsetEndTime = $(eTime).offset();
  const offsetDay = $(day).offset();

  const x1 = offsetStartTime.left;
  const y1 = offsetStartTime.top;
  const x2 = offsetEndTime.left;
  const y2 = offsetEndTime.top;

  const dx1 = offsetDay.left;
  const dy1 = offsetDay.top;
  console.log(x1);
  console.log(
    "x1: " + x1,
    "y1: " + y1,
    "x2: " + x2,
    "y2: " + y2,
    "dx1: " + dx1,
    "dy1: " + dy1
  );
  const calcHeight = y2 - y1;
  console.log("height: " + calcHeight);
  newPos = new Object();
  newPos.left = dx1;
  newPos.top = y1;
  $(".div1").offset(newPos);
  $(".div1").css("height", calcHeight);
  parentWidth = $(".day").innerWidth();
  $(".div1").css("width", parentWidth);
  $(".div1").css("z-index", "101");
  $(".div1").css("background-color", "green");
  $(".div1").css("text-align", "center");
  $(".div1").css("visibility", "visible");
}
// timeTableGrid(".12pm", ".20pm", ".thursday");
timeTableGrid(".10am", ".19pm", ".wednesday");
timeTableGrid(".10am", ".19pm", ".sunday");
// timeTableGrid(".8am", ".9am", ".monday");