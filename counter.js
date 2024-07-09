function getWordCount(str) {
  let splited = str.trim().split(/\s+/);
  if (splited == "") {
    return 0;
  }
  return splited.length;
}

function counter(str) {
  let specialCharCount = 0;
  let numberCount = 0;
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " && str[i] != "\n") {
      charCount++;
    }
    if (str[i] !== " " && str[i] !== "\n") {
      specialCharCount++;
    }
    if (str[i] >= "0" && str[i] <= "9") {
      numberCount++;
    }
  }
  document.getElementById("chars").value = charCount;
  document.getElementById("numbers").value = numberCount;
  document.getElementById("specialCharacters").value = specialCharCount;
}

function wordCounter() {
  let inputTxt = document.getElementById("inputBox");
  let words = getWordCount(inputTxt.value);
  document.getElementById("words").value = words;
  counter(inputTxt.value);
}
