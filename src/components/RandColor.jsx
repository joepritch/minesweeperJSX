function randColor(){
  var r = getNumber();
  var g = getNumber();
  var b = getNumber();
  function getNumber(){
    return (Math.floor(Math.random()*256))
  }
  var color = 'rgb('+r+','+g+','+b+')';
  console.log(color);
  return color;
}

export default randColor;
