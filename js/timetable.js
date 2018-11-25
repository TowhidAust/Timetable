function timeTableGrid(sTime, eTime, day, batchName, color_) {

  var className = sTime.split(".")[1] + eTime.split(".")[1] + day.split(".")[1] + batchName;


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

  $("body").append(`<div class="${className}" style="position: absolute; visibility: hidden;color:white;">
  <div style="position: relative; top:43%; left:50%; transform: translate(-50%, -50%);"><span style="font-size: 12px;">${sTime.split(".")[1]} - ${eTime.split(".")[1]}</span> <br>  <span style="font-size: 30px;">${batchName}</span>   </div>
 </div>`);
  const calcHeight = y2 - y1;
  console.log("height: " + calcHeight);
  newPos = new Object();
  newPos.left = dx1;
  newPos.top = y1;
  $("." + className).offset(newPos);
  $("." + className).css("height", calcHeight);
  parentWidth = $(".day").innerWidth();
  console.log("this is inner width: " + parentWidth);
  $("." + className).css("width", parentWidth);
  $("." + className).css("z-index", "101");
  $("." + className).css("background-color", color_);
  $("." + className).css("text-align", "center");
  $("." + className).css("visibility", "visible");
}
timeTableGrid(".8am", ".12pm", ".sunday", "2ELI1_C1", "black");
timeTableGrid(".8am", ".9am", ".monday", "2ELI1_C1", "red");
timeTableGrid(".8am", ".9am", ".tuesday", "2ELI1_C1", "green");
timeTableGrid(".7am", ".9am", ".wednesday", "2ELI1_C1", "blue");

// timeTableGrid(".8am", ".12pm", ".friday");
// timeTableGrid(".8am", ".9am", ".friday");
// timeTableGrid(".8am", ".9am", ".friday");