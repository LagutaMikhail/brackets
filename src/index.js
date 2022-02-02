module.exports = function check(str, bracketsConfig) {
  let openBrackets =[];
  for (let i=0; i<bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0])
  };
  let closeBrackets =[];
  for (let i=0; i<bracketsConfig.length; i++){
    closeBrackets.push(bracketsConfig[i][1])
  };

  let s = [];
  for (let i = 0; i<str.length; i++){
    if (s.length==0&&closeBrackets.includes(str[i])){
      return false;
      break;
    }
    else if (openBrackets.includes(str[i])){
      s.push(str[i]);
    }
    else if (closeBrackets.includes(str[i])&&s.length!==0){
      bracketsConfig.forEach(function (item,index) {
        if (item[1] == str[i]&&item[0]==s[s.length-1]){
          s.pop();
        };
      });
      }
    else {
      return false;
      break;
    }
    }
    return s.length==0;
}
