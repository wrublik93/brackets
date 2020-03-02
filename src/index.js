module.exports = function check(str, bracketsConfig) {
    /*parity check*/
  if(str.length % 2 != 0 || str.length == 0) {
      return false;
  } else {
      for(let i = 0; i < bracketsConfig.length; ){
          /*finding the kind of brackets*/
          let bracketKind = bracketsConfig[i].join('');
          if(str.includes(bracketKind)){
              str = str.replace(bracketKind, '');
              i = 0;
          } else {
              i = i + 1;
          }
      };
      if(str.length) {
          return false;
      } else {
          return true;
      }
  }
}
