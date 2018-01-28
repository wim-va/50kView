'use strict';

var makes = ["fiat", "BMW", "Renault"];
var models = [];
models[makes[0]] = ["124","500", "Doblo", "Panda"];
models[makes[1]] = ["1", "2","3","5"];
models[makes[2]] = ["Clio", "Megane", "Laguna", "Scenic"];

window.onload = function(){
    fillMakesSelect();
    document.getElementById("btnRijd").onclick = ride;
    document.getElementById("txtJaar").min = 1950;
    document.getElementById("txtJaar").max = new Date().getFullYear();
    document.getElementById("txtKmstand").min = 0;
    document.getElementById("txtAfstand").min = 0;
}

function fillMakesSelect(){
    var selMakes = document.getElementById("selMerk");
    for(var i=0; i < makes.length; i++){
        var option = document.createElement("option");
        option.value = makes[i];
        option.text = makes[i];
        selMakes.options.add(option);
    }
    selMakes.onchange = fillModelsSelect;
    fillModelsSelect();
}

function fillModelsSelect(){
    var selMakes = document.getElementById("selMerk");
    var selMake =  selMakes.options[selMakes.selectedIndex].value;
    var selModels = document.getElementById("selModel");
    clearOptions(selModels);
    for(var i=0; i < models[selMake].length; i++){
        var option = document.createElement("option");
        option.value = models[selMake][i];
        option.text = models[selMake][i];
        selModels.options.add(option);
    }
}

function clearOptions(select){
    while(select.options.length > 0){
        select.remove(0);
    }
}

function ride(){
    var make = document.getElementById("selMerk").value;
    var model = document.getElementById("selModel").value;
    var color = document.getElementById("selKleur").value;
    var year = document.getElementById("txtJaar").value;
    var convertible = document.getElementById("chbCabrio").checked ? " cabrio " : " ";
    alert("zoom zoom.  Een ritje met een " + color + " "
        +  make + convertible + model + " uit "+ year);
    var afstand = parseInt(document.getElementById("txtAfstand").value);
    document.getElementById("txtKmstand").value = parseInt(document.getElementById("txtKmstand").value) + afstand;

}