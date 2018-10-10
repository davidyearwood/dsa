// Drawing an english ruler using recursion
function drawRuler(nInches, majorLength) {
  drawLine(majorLength, 0);
  for(var j = 1; j <= nInches; j++) {
    drawInterval(majorLength - 1);
    drawLine(majorLength, j);
  }
}

function drawInterval(centralLength) {
  if (centralLength >= 1) {
    drawInterval(centralLength - 1); 
    drawLine(centralLength);
    drawInterval(centralLength - 1);
  }
}

function drawLine(tickLength, tickLabel) {
    var ticks = "";
    
    for(var j = 0; j < tickLength; j++) {
      ticks += "-";
    }
    
    if(tickLabel >= 0) {
      console.log(ticks + " " + tickLabel);
    } else {
        console.log(ticks);
    }

}

drawRuler(2, 4);