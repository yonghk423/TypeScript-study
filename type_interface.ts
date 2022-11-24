type Animal = { breath: true }
type Poyouryu = Animal & {  bread : true }
type Human = Poyouryu & { think: true }

const yonghee : Human = { bread: true, breath: true, think: true};

// interface A {
//     breath: true;
// }

// interface B extends A {
//     bread: true;
// }

// const b: B = { breath: true, bread: true };

// interface A { 
// 	talk: () => void;
// }

// interface A { 
// 	eat: () => void;
// }

// interface A { 
// 	shit: () => void;
// }

// const a: A = { talk() {}, eat() {}, shit() {}, sleep: () => {}}

// interface A { 
// 	sleep: () => void;
// }
/*
확장성 측면
인터페이스 같은 경우 같은 이름으로 여러번 선언 할 수 가 있고 선언할 때마다 합쳐지게 됩니다. 따라서 협업시에 다른 사람의 인터페이스를 확장 할 수 가 있습니다.  

type-alias는 모든 타입을 선언할 때 사용될 수 있고, interface는 객체에 대한 타입을 선언할 때 사용될 수 있다. 둘 다 객체에 대한 타입을 선언하는 데 사용될 수 있는데, 확장 측면에서 사용 용도가 달라진다. 확장이 불가능한 타입을 선언하려면 type-alias를 사용하면 되고, 확장이 가능한 타입을 선언하려면 선언 병합이 가능한 interface를 사용하면 된다.
*/