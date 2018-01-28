var cookies = {
	instructions: "Preheat oven to 350...",
	bake: function(time) {
			console.log("Baking the cookies.");
            setTimeout(function (){
            	console.log("Cookies are ready, take them out to cool.");
            	console.log("Cooling the cookies.");
            	setTimeout(function() {
            		console.log("Cookies are cool, time to eat!");
            	}, 1000);
            }, time);
	}
};

console.log("Time to bake the cookies.");
cookies.bake(2500);