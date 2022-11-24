/*
메인 룰: typescript는 최종적으로 javascript로 변환된다. 순전한 typescript 코드를 돌릴 수 있는 것은 deno이나 대중화되지가 않았음. 브라우저, 노드는 모두 js 파일을 실행한다.
typescript는 언어이자 컴파일러(tsc)이다. 컴파일러는 ts 코드를 js로 바꿔준다.
tsc는 tsconfig.json(tsc --init 시 생성)에 따라 ts 코드를 js(tsc 시 생성)로 바꿔준다. 인풋인 ts와 아웃풋인 js 모두에 영향을 끼치므로 tsconfig.json 설정을 반드시 봐야한다.
단순히 타입 검사만 하고싶다면 tsc --noEmit 하면 된다.
개인 의견: tsconfig.json에서 esModuleInterop: true, strict: true 두 개만 주로 켜놓는 편. strict: true가 핵심임.
ts 파일을 실행하는 게 아니라 결과물인 js를 실행해야 한다.
타입스크립트를 사용하기위한 환경 구성

> npm init -y
node 환경을 조성하기 위한 명령어 : node 환경으로 구성된 파일들을 전부 모아둔 곳이 package.json이다. -> 이제 npm 명령어를 사용할 수 있다.
*npm은 패키지 매니저

> npm i typescript

> npx tsc 타입스크립트 컴파일러 
타입스크립트에서 자바스크립트로 컴파일 해준다.

> npx tsx --init
tsconfig.json 파일이 생긴다.
tsconfig.json에서 esModuleInterop: true, strict: true 두 개만 주로 켜놓는 편. strict: true가 핵심임.

> tsc --noEmit
타입 검사를 해준다.

*/