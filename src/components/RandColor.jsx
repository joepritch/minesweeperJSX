function randColor(){
  var colorNumber = Math.floor(100000 + Math.random()*900000);
  var color = '#'+colorNumber.toString();
  return color;
}

export default randColor;
