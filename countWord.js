// Soal Nomor 2

const countWord = (sentence) => {
  const splitedSentence = sentence.split(' ');
  const specialChar = /[`~!@#$%^&*(_+={}\[\]|\\;:'"<>\/)]/;
  let totalWord = 0;
  splitedSentence.forEach((word) => {
    if (!word.match(specialChar)) {
      totalWord++;
    }
  });
  return totalWord;
};

console.log(countWord('Kemarin Shopia per[gi ke mall.'));
console.log(countWord('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'));
console.log(countWord('Berapa u(mur minimal[ untuk !mengurus ktp?'));
console.log(countWord('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'));
