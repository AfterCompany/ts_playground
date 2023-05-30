// let 이름 :string = "kim";
// let 이름 :string[] = ["kim", 'park'];
// let 이름 :{ name?: string } = { name: "kim"};
// let 이름 :string[] | number = 123;

// type 내타입 = string | number;
// type Name = string | number;
// let 이름 :Name = 123;


// number 가 들어오고 number 가 return 
// function 함수(x:number) :number {
//     return x * 2
// }

// 튜플 타입 1: number 2: t/f
// type Member = [number, boolean];
// let john:Member = [123, true];


// type Member = {
//     // 모든 속성들을 한번에 지정
//     [key :string] : string 
//     // name:  string,
    
// }

// let john : Member =  {name: 'kim'}

class User {
    name :string;

    constructor(name :string) {
        this.name = name;
    }
}