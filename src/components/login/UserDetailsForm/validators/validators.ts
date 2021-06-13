
const validators = {

	numberRegex: /\d/g,
	specialRegex: /[\s~`!@#$£%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g,  //eslint-disable-line

	usernameIsValid(username: string): boolean { return (username.length >= 6); },

	passwordIsValid(password: string): boolean {
		return (
			this.passwordLength(password) &&
			this.passwordContainsUpper(password) &&
			this.passwordContainsNumber(password) &&
			this.passwordContainsSpecial(password));
	},

	passwordLength(password: string): boolean { return (password.length >= 6); },

	passwordContainsNumber(password: string): boolean {
		return this.numberRegex.test(password);
	},

	passwordContainsSpecial(password: string): boolean {
		return this.specialRegex.test(password);
	},

	passwordContainsUpper(password: string): boolean {
		const characters = password.split("");
		let upperIsPresent = false;

		characters.forEach(character => {
			if (!this.numberRegex.test(character) &&
				!this.specialRegex.test(character)) {

				if (character === character.toUpperCase()) {
					upperIsPresent = true;
				}
			}
		});
		return upperIsPresent;
	}
};

export { validators };