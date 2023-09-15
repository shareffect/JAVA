/*

if 문 프로그림에서 엄청 쓰죠 ^^

if 문의 작성이 무궁 무진 합니다 ^^...ㅎ

*/

let passwordCheck = true;
let userRole = '냥냥';
if(passwordCheck) {
    if(userRole==='admin') {
        console.log('관리자로 로그인 합니다.')
    } else if (userRole === 'user') {
        console.log("사용자로 로그인 합니다.")
    } else {
        console.log("페이지 접근이 제한되었습니다.")
    }
} else {
    console.log('비밀번호를 잘못 입력했거나 없는 아이디입니다.')
}

// 실제로 개발하게 되면 이거보다 몇배는 복잡한 if 문이 있겠쪄...? ^^..


let a = 10;

switch (a) {
    case 11:
        console.log('11이야');
        break;
    case 10:
        console.log("10이야");
        break;
    case 9:
        console.log("9야")
        break;
    defalult:
        console.log("hi")
}