function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price +".")
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung", 1800, "black");
var OnePlusOne = new Phone("One", 2500, "white");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();