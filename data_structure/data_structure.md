## data structure study space



### 웹 브라우저 동작원리 

1+1하고 1초 쉬고 2+2 실행 하고 싶음.

Python
```
print(1+1)
time.sleep
print(2+2)
```

Javascript 
```
console.log(1+1)
setTimeout(function(){}, 1000) 
console.log(2+2)
```

-> 안됨

```
console.log(1+1)
setTimeout(function(){console.log(2+2)},1000);
```

-> 됨


```
console.log(1+1); -> 먼저 실행
setTimeout(function(){console.log(2+2)}, 1000);
-> 마지막 실행
console.log(3+3) -> 두번째 실행
```

stack = 코드를 실행해주는곳 (특징: 1개) 한번에 코드 한줄 - 싱글스래드 랭귀지

처리가 오래걸리는 코드는 대기실로 (setTimeout , ajax, 이벤트 리스너 등)

queue(대기중인 코드 저장) -> 대기중인 코드를 stack으로 (stack 이 비엇을때만)



##### 반복문이 가끔 오래걸리는 경우가 있음. 

-> 어려운 수학계산을 하는 부분은 브라우저 동작원리상 힘들 수 잇음. 

-> webassembly 해결 , webgpu 개선

stack을 바쁘게 하면 안됨.
queue 를 바쁘게 하면 안됨.

-> 브라우저 동작 시간을 오래걸리게 하는 원인

