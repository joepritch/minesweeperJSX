function randColor(){
  var r = getNumber();
  var g = getNumber();
  var b = getNumber();
  function getNumber(){
    return (Math.floor(Math.random()*256));
  }
  var color = 'rgb('+r+','+g+','+b+')';
  return color;
}

export default randColor;
