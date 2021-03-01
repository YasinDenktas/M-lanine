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
<<<<<<< HEAD
};



var shippingMethodName = 'shipping-method-choice',
shippingMethods = {
  clickCollect:"5f959a32bfe781ac186fa662",
  pointRelai:"5f95bb6f62f66df93f243601",
  domicile:"5f95bb6f62f66d021f243603",
},
pointRelaiInfo = "#TargetDisplayInfoPR_Widget";


var lat = document.getElementById('cb_Lat');
var shippingMethodButton = document.getElementsByName(shippingMethodName);
var paypal = document.getElementById('paypal');

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
function checkedButtonValue(buttons){
  for (var i = 0; i < buttons.length; i++) {
    button = buttons[i];
        if (button.checked) {
            return button.value;
        }};
        return false;
}
function getShippingMethod(buttons, shippingMethods){
  var key = checkedButtonValue(buttons);
  var shippingMethod = getKeyByValue(shippingMethods, key);
  return shippingMethod;
};

var i = shippingMethodButton.length;
while(i--)
  console.log(shippingMethodButton[i])
  shippingMethodButton[i].addEventListener('change', function(){
    var method = getShippingMethod(shippingMethodButton, shippingMethods);
    var pointRelai = $(pointRelaiInfo);
    console.log(method);
    console.log(pointRelai);
    if(method == 'pointRelai' && lat.innerHTML == 'This is some text inside of a div block.'){
        paypal.style.display = 'none' //hide
      } else {
        paypal.style.display = 'block'; //show
      }
  });

// montrer paypal si un point relai est sélectionné
lat.addEventListener('change',function(){
  paypal.style.display = 'block'; //show
})

/*
lat.bind('DOMSubtreeModified', function(){
  paypal.style.display = 'block'; //show
});
*/


/*
shippingMethodButton.on('click', function(e){
  console.log(e.currentTarget.name);
  console.log(e.currentTarget.value);
});
*/


  /*
  shippingMethod[pointRelayIndex].addEventListener('change', (event) => {
    var shippingMethodchecked = this.checked;
    console.log(1);
  });
*/
