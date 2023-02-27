# login-practice
- 로그인기능구현_세션과쿠키/JWT/Oauth2.0.
- webStorage와 cookie의 장단점 이해.
- 자동로그인 기능 구현.
- 미로그인상태에서 담긴 장바구니 품목을 로그인했을때 회원의 장바구니로 옮겨 지도록 구현.

## 프로젝트 개발환경
1. 코드일관성 유지
  - ESLint, Prettier, husky
  - 변수,함수명 camel case적용
2. 깃브랜치 관리
```
  main ─ develop ─┬─ feature/session   
                  ├─ feature/jwt   
                  └─ feature/oauth   
```
3. 프레임워크,빌드툴
  - React.js
  - TypeScript
  - Vite
4. 버전관리
  - npm ci로 패키지 설치
  - .npmrc파일생성, package.json에 engines 속성 추가
  
