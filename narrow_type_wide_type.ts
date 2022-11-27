// type A = { name: string };
// type B = { age: number };
// type AB = A | B; 
// 넓은 타입

// type C = A & B;
// 객체는 상세할수록 좁은 개념이다.

// const ab: AB = { name: 'yonghee'}
// --> 결론적으로 좁은 타입을 넓은 타입에 넣는 것은 가능하지만 반대인 경우는 가능하지 않다.

// const c: C = {name: 'yonghee', age: 29, married: false};
// 타입이 넓냐 좁냐와는 별개로 잉여 속성을 검사하기 때문에 타입에러가 발생한다.
// 해결방법
// const obj = {name: 'yonghee', age: 29, married: false};
// const c: C = obj;