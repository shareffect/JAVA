// let, const  는 호이스팅 안됨.

const ogj = {
name: '전현우',
age: 50,
hello: function () {
    console.log('hello');
},
hobby: ['운동', '게임', '독서'],
score: {
    수학: 100,
    영어: 100
}, // 이걸 왜 객체라고 하는지 객체가 뭐죠?
parent: parent
};
var parent = {
    name: '홍길동'
};


const object1 = {};
object1.name = "전현우";
object1.age=99;

const objedt2 = new object1();
object2.name = "전현우";
object2.age = 99 ;

console.log(boject2);


const person = {
    name: '홍길동',
    age: 99,
    hobby: ['운동', '게임'],
    hello: function(){
        console.log("hello");
    },
    children: {
        name: '전현우',
    },
};

person.hobby[1];
person.hello();


// 점 표기법 ( 보통 이걸 쓰기는 하는데 )

// 괄호 표기법. 인식은 같은데 점 대신 괄호를 쓰는 것.
//[] 대괄호. 안에 있는 건 문자로 받아야 함.

// 글자 블록 처리 후 문자열로 바꿔주는 것. 어떻케 함요


// 구조분해할당. 객채의 속성을 개별 변수에 담을 때.


const [name, age, job] = temp;
// 키 값의 명칭만 맞으면 됨 . 순서 상관 없음. 배열을 구조분해할당으로 매치시키는 것과 이런 점이 다른 점임.


function temPerson ({ name, age, job}) {
    console.log('이름: '+ name + '나이: ' + age + '직업: ' + job)
}
// {} 로써 하나로 넘겨져서, 그 안에 프로미터들이 나뉘어서 쓰이는 것.

/*
팩토리 함수
- 객체를 반환하는 함수이다.
- 같은 유형의 객체를 여러번 생성해야 하는 경우에 사용한다.
- 같은 유형의 객체를 여러번 생성하면 번거롭고 가독성이 떨어지는데
  팩테로 함수를 사용하여 해결할 수 있다.
*/

// 같은 유형의 객체를 여러번 생성 : 하드코딩 한거 같고 초보 티가 난다. 


/*
 참조 타입 (객체타입)

기본 타입(원시 타입, 프리미티브 타입) 복사
기본 타입은 복사할 때 값 자체를 넘겨주기 때무에 값의 원형이 바뀌지 않는다.


참조 타입(객체 타입) 복사
객체를 다른 변수에 할당하면 참조값이 할당되기 때문에 할당 받은 변수에서 속성을 변겨앟면 원형이 변경됩니다.

//참조값. 주소임. 주소에 해당되는 값들이 다 바뀌는 것.//
 */


ogj = { name: history, age: and}
//이라고 하면,
//oxo1  [name, age]//
// 식으로 참조값 주소에 name, age 값이 들어간다고 보면 된다 //



// call by value: 기본 타입(원시 타입, 프리미티브 타입) 호출
function change(username) {
    username = '홍길동';
}
let callName = '전현우';
change(callName);
console.log(callName)

// Call By Reference: 참조 타입(객체 타입) 호출
// 값을 가르키는 참조값을 people에 할당 했기 때문에 people의 속성을 
// 변경하면 callName의 속성 값도 함께 변경이 된다.


/*
전개 구문
- 객체 안의 프로퍼티를 펼친은 방식으로 할당할 수 있다.
배열이랑 똑같은 느낌
- ... 표기법을 사용한다.
*/

const obj3 = {
    name: '전현우',
    age: 20
};
const obj4 = {
    ...boj3,
    hobby: '운동'
}


//참조값에 의해 원 값이 변경되는 얕은 복사

//사실 이렇게 연동되어 쓰려면 굳이 복사할 필요가 있을 까염 ㅎㅎㅎ
//

/*
객체 복사
- 다른 참조값을 가지는 객체를 완전히 복사한다.
- 전개 구문을 이용하는 복사, object.assign()를 사용하는 복사
*/

const obj5 = {
    name : '전현우',
};

const obj6 = { ...obj5 };
obj6.name = '홍길동';

// Object.assign() 사용


// 실무에서 이런거 보시면, 복사 했구나 라고 생가하시면 됨 //




/*
객체를 반복하신다
*/

/*
for ... in
- 객체의 항목들을 반복하여 반환한다.
*/

const obj9 = {
    name: '홍길동',
    age: 20,
    job: '개발자'
};



for(let key in obj9){
    console.log(key + ',' + obj9.[key])
    //  key 와 값이 나오겠져? //
}


/*
키 존재 여부 확인
- key in object, object.hasOwn(), obj.jasOwnProperty(), if문 사용
*/

const obj10 = {
    name: '홍길동'
};

// key in object
console.log('name' in obj10); // true & false  // booln 값은 if 문을 사용한다는 생각을 하면 좋아염.

console.log(Object.hasOwn(obj10,'name')) // true & false

console.log(obj10.jasOwnProperty('name'))


if(obj10.name) {
    console.log("프로퍼티가 있습니다.");
} else {
    console.log('프로퍼티가 없습니다.                      ')
}



