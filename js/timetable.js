// function position() {
//   $(".Headline").mouseover(function() {
//     var p = $(".Headline");
//     var position = p.position();
//     alert("left: " + position.left + ", top: " + position.top);
//   });
// }
// position();

// finding the coordinates
// function position(element) {
//   $(function() {
//     $(".div1").mouseover(function() {
//       var offset = $(element).offset();
//       console.log("left: " + offset.left + ", top: " + offset.top);
//     });
//   });
// }
// position(".div1");

// placing a div according to pixel position:
// $(document).ready(function() {
//   $("button").click(function() {
//     newPos = new Object();
//     newPos.left = "103";
//     newPos.top = "125";
//     $(".div1").offset(newPos);
//   });
// });

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
var x = getOffset(document.getElementById("yourElId")).left;

function timeTableGrid(sTime, eTime, day) {
  var offsetStartTime = $(sTime).offset();
  var offsetEndTime = $(eTime).offset();
  var offsetDay = $(day).offset();
  //   console.log("left: " + offsetStart.left + ", top: " + offsetStart.top);
  //   const x1 = parseInt(offsetStartTime.left);
  //   const y1 = parseInt(offsetStartTime.top);
  //   const x2 = parseInt(offsetEndTime.left);
  //   const y2 = parseInt(offsetEndTime.top);
  //   const dx1 = parseInt(offsetDay.left);
  //   const dx2 = parseInt(offsetDay.top);

  const x1 = offsetStartTime.left;
  const y1 = offsetStartTime.top;
  const x2 = offsetEndTime.left;
  const y2 = offsetEndTime.top;
  const dx1 = offsetDay.left;
  const dx2 = offsetDay.top;
  //   console.log("this is: " + x1 + " and :" + !isNaN(x1));
  console.log(x1);

  console.log(
    "x1: " + x1,
    "y1: " + y1,
    "x2: " + x2,
    "y2: " + y2,
    "dx1: " + dx1,
    "dx2: " + dx2
  );

  var m = x1 - x2;
  console.log("i am m: " + m);

  var n = y1 - y2;
  var a = Math.pow(m, 2);
  var b = Math.pow(n, 2);

  var calcHeight = Math.sqrt(a - b);
  console.log("i am calc: " + calcHeight); // this is showing that is not a number. why??
}
timeTableGrid(".div1", ".Catalogue-Table", ".sunday");
