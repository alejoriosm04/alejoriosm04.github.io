function openWebsite(){

	// Thanks to this person: https://stackoverflow.com/a/35263718
	// Let's hope Stack Overflow doesn't get bou-

	// Calls the id of the button
	switch (event.srcElement.id) {
		case 'domotica':
		window.open("https://thedomotics.com/");
		console.log("Opening site: https://thedomotics.com/");
		break;

		case 'inteligencia-artificial':
		window.open("https://openai.com/");
		console.log("Opening site: https://openai.com/");
		break;

		case 'sonido':
		window.open("https://existential.audio/");
		console.log("Opening site: https://existential.audio/");
		break;

		default:
		console.log("Did not do anything LOL");
		// Because LOL never gets old. Am I right, Molina?
		break;
	}

}