const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) 
        return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) 
        return true
    }
    return false
}
const transpose = function(letters) {
    let result = [];
    for (let i = 0; i < letters[0].length; i++) {
      result.push([]);
    }
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        result[j].push(letters[i][j]);
      }
    }
    return result;
};

module.exports = wordSearch