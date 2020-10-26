function updateCP(elementID, eventType, elementClassName, validationClassName){
  var selectElement = document.getElementById(elementID);
  selectElement.addEventListener(eventType, (event) => {
  var MondialCP = document.getElementsByClassName(elementClassName)[0];
    var result = selectElement.value;
  MondialCP.value = result;
  if(result.length == 5){
  document.getElementsByClassName(validationClassName)[0].click();
  }
  });
};
