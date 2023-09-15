let a = false ? 
console.log("맞아") : console.log("아니야");


let frute = [ "사과", "바나나", "딸기"];

// 값, index, 배열

frute.forEach(function( 아무, 거나, 쓰면) {
    console.log(아무, 거나, 쓰면)
})

// splice
// ( 여기부터, 몇개를 제거해라)

frute.splice(0, 2);
console.log(frute);

/*
메서드 : () 안에 값을 입력하면 뭐가 나오는 형태인 느낌
속성 : () 에 값을 입력할 것 없이 그냥 글자만 딱 써주는. 그런거?
*/

//구조분해 할당 


frute = [ "사과", "바나나", "딸기"];

//let [ apple, banana, strawberry] = frute;
//console.log(apple, banana, strawberry)

let [ apple, ...other] = frute;
console.log(apple)
console.log(other)

/*
객체 . 주소값 이라던가
눈에 보이지 않는 참조값이 있는데요

배열을 복사를 하면 이런 참조값까지 같이 복사가 됩니다.

그래서, 한 배열에서 값을 변경하면 
다른 배열도 함께 변경이 된다. (얕은 복사)
*/


