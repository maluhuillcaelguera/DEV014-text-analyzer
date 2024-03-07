const analyzer = {

  getWordCount: (text) => {

    text = text.trim();
    if (text === '') {
      return 0;
    } else {
      const words = text.split(' ');
      return words.length;
    }
  },

  getCharacterCount: (text) => {

    let contarcaracteres = 0;

    if (typeof text === 'string') {
      contarcaracteres = text.length;
    }
    return contarcaracteres;
  },

  getCharacterCountExcludingSpaces: (text) => {


    const punctuation = [' ', ',', '.', ';', ':', '!', '?', '-', '_', '"', "'", '(', ')', '[', ']', '{', '}'];

    let count = 0;

    for (let i = 0; i < text.length; i++) {

      if (!punctuation.includes(text[i])) {
        count++;
      }
    }
    return count;
  },


  getAverageWordLength: (text) => {
    text = text.trim();
    if (text === '') {
      return 0;
    }
    const words = text.split(' ');
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    let averageLength = totalLength / words.length;
    averageLength = Math.round(averageLength * 100) / 100;

    return averageLength;
  },


  getNumberCount: (text) => {
    const numbers = text.split(' ').filter(word => {
      if (word.endsWith('.')) {
        word = word.slice(0, -1);
      }
      return !isNaN(word) && word.trim() !== '';
    }).length;
    if (numbers === null) {
      return 0;
    }
    return numbers;
  },


  getNumberSum: (text) => {

    const numbers = text.split(' ').filter(word => {
      if (word.endsWith('.')) {
        word = word.slice(0, -1);
      }
      return !isNaN(word) && word.trim() !== '';
    })
      .map(number => parseFloat(number))
      .reduce((acc, number) => acc + number, 0);
    return numbers;

  },


};

export default analyzer;
