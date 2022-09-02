const textElement = ['Redho'];
let count =0;
let txtIndex =0;
let currentTxt ='';
let words ='';

(function writing(){
    
    if(count == textElement.length){
        count = 0;
    }
    currentTxt = textElement[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(writing, 300);
})();