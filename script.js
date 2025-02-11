function inflationCalculator(){
	let inflationRate =  document.querySelector("#inflationRate");
	inflationRate = parseFloat(inflationRate.value);
	
	let money = document.querySelector("#money");
	money = parseFloat(money.value);

	let years  = document.querySelector("#years");
	years = parseFloat(years.value);
	
	let worth = money + (money * (inflationRate / 100));

	
	for (let i = 1; i <years;i ++) {
		worth+=worth*(inflationRate/100);
	}

	let newElement = document.createElement("div");
	newElement.className = "new-value";
	newElement.innerText = `Danasnjih ${money} eura vredi isto kao ${worth.toFixed(2)} eura za ${years} godina.`;
	document.querySelector(".container").appendChild(newElement);
}