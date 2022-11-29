//any의 문제점은 타입 체킹을 포기한다 따라서 타입스크립트를 사용하는것이 무의미 해진다.

//unknown은 타입을 직접 정해줘야 한다. (지금 당장 타입을 정확히 파악 못할때 사용)

//ex 
try {

} catch (error) {
    (error as Error).message
}