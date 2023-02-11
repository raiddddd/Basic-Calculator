const input=document.querySelector('.input');
const result=document.querySelector('.result');
const toateButoanele=document.querySelectorAll('.pressButton');

toateButoanele.forEach((button) => {
  button.addEventListener('click', () => {

    if(button.classList.contains('clear')) {
      input.textContent='Here is the input';
      result.textContent='Here is the result';
    }
    
    if(button.classList.contains('digits') || (button.classList.contains('add'))) {
      if(input.textContent.includes('Here is the input') || input.textContent.includes('First add a number')) {
        input.textContent ='';
        input.textContent +=button.textContent;
        result.textContent='';
      } else {
        input.textContent+=button.textContent;
      }
    }

    if(button.classList.contains('rest')) {
      if(input.textContent.includes('Here is the input')) {
        input.textContent='First add a number';
      } else {
      input.textContent='('+input.textContent+')%';
      }
    }

    if(button.classList.contains('square-root')) {
      if(input.textContent.includes('Here is the input')) {
        input.textContent='First add a number';
      } else {
      result.textContent=eval(`Math.sqrt(${input.textContent})`);
      input.textContent=result.textContent;
      }
    }

    if(button.classList.contains('power')) {
      input.textContent=input.textContent+'**';
    }

    if(button.classList.contains('equals')) {
      let regexVar =/[-+*%/]/;
      let regexVarSecond=/[*%/]/;
      if(regexVar.test(input.textContent[input.textContent.length - 1]) || regexVarSecond.test(input.textContent[0]) || input.textContent[1]===')') {
        result.textContent='I can not calculate that!';
        input.textContent='';
      } else {
        result.textContent=eval(input.textContent);
        input.textContent=result.textContent;
      }
    }
  })
})