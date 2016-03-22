exports.toPigLatin = function(word) {
  var firstVowelIndex = word.search(/[aeiouy]/);

  if(firstVowelIndex === -1) return new Error('Not a word');

  var pigLatinWord = word.substr(firstVowelIndex);
  if(firstVowelIndex !== 0) {
    pigLatinWord += '-' + word.substr(0, firstVowelIndex);
  }
  return pigLatinWord + 'ay';
}

exports.fromPigLatin = function(word) {
  return word.slice(0, -2)
    .split('-')
    .reduce(function(prev, partWord) {
      prev = partWord + prev;
      return prev;
    }, '');
}

exports.translate= function(sentence, translatorFunc) {
  return sentence.split(' ').map(translatorFunc).join(' ');
}
