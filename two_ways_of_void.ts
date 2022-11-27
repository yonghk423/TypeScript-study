/* function에서는 void를 세가지로 기억하는 것이 중요하다. */

//1. return 값이 void가 들어간 경우
// return 값 존재 불가능
function a(): void {

}

//2. 매개변수 함수가 void가 들어간 경우
// return 값 존재 가능
function b(callback: () => void): void {

}

b(() => {
    return '3';
})

//3. 메서드가 void가 들어간 경우
// return 값 존재 가능
interface Human {
    talk: () => void;
}

const human: Human = {
    talk() { return 'abc'}
}

//2번 3번의 return 값이 존재 가능한 이유는 실제 return 값이 무엇이든 상관하지 않기 때문에 에러가 발생하지 않는다.
//1번은 직접적으로 return 값이 없다는 의미이다.

//예시
declare function forEach(arr: number[], callback: (el:number) => void ): void;
// body 없이 선언할 수 있지만 바로 밑에 실제 구현부를 만들어 줘야 한다.
// function forEach() {}
// or 만들기 싫은 경우는 declare를 함수 선언 앞에 사용하면 된다. 대신 declare로 선언하게 되면 실제 자바스크립트 파일에서는 사라지게 된다.

let target: number[] = [];
forEach([1,2,3],el => target.push(el));
//매개변수에서 사용하는 void는 실제 return 값이 무엇이든 상관하지 않기 때문에 에러가 발생하지 않는다.