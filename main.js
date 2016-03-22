var translator = require('./pigLatinTranslator');
var toPigLatin = require('./pigLatinTranslator').toPigLatin;
var fromPigLatin = require('./pigLatinTranslator').fromPigLatin;

console.log(toPigLatin('eat'));
console.log(toPigLatin('omelet'));
console.log(toPigLatin('are'));

console.log(toPigLatin('pig'));
console.log(toPigLatin('banana'));
console.log(toPigLatin('trash'));
console.log(toPigLatin('happy'));
console.log(toPigLatin('duck'));
console.log(toPigLatin('glove'));

console.log(fromPigLatin('eatay'));
console.log(fromPigLatin('ove-glay'));

var translated = translator.translate('This phrase will be converted into piglatin, please insert your phrase here.', toPigLatin)
var translatedToNormal = translator.translate('is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray', fromPigLatin)

console.log(translated);
console.log(translatedToNormal);