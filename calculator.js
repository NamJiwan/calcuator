// let num1=parseInt(prompt("계산할 숫자를 입력하세요"))
// /* let num2=parseInt(prompt("계산할 숫자 입력"))
// let oper=prompt("사직연산을 입력하세요"); */

// function cheeck(num1){
//     if(isNaN(num1)||num1<=0){
//         num1=parseInt(prompt("계산할 숫자를 입력하세요"))
//     }
//     /* if(isNaN(num2)){
//         num2=parseInt(prompt("계산할 숫자를 입력하세요"))
//     } */
// }

// cheeck(num1);

function Num() {
  num1 = parseInt(prompt('계산할 숫자를 입력하세요'));
  oper = prompt('사칙연산을 입력하세요');
  if (!isNaN(oper)) {
    alert('잘못된 입력입니다.');
    Num();
  }
  num2 = parseInt(prompt('계산할 숫자를 입력하세요'));
  if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 <= 0) {
    alert('잘못된 입력입니다.');
    Num();
  }
}

function calcu(oper) {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default: {
      alert('사칙연산을 다시 입력하세요');
      Num();
    }
  }
}
Num();
calcu(oper);
DOCUMENT.WRITE('결과는 :' + CALCU(OPER));
