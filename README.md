# ts_playground

## typescript 실행 환경

### 1. typescript_playground (https://www.typescriptlang.org/play)

### 2. local computer

```
npm install typescript --save-dev

```

- 프로젝트 초기화

```
npx tsc --init

```

- tsconfig.json 작성

```
{
    "include": ["src"],
    "compilerOptions": {
        "outDir": "./build"
    }
}

```

- typescript compile

```
npx tsc

// typescript 파일의 변경을 실시간으로 감지하고, 컴파일하려면 다음 명령어 실행
npx tsc --watch

```
