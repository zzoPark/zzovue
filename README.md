# zzovue
zzovlog's frontend side

## 개발환경
* [Vue CLI](https://cli.vuejs.org/)를 이용해 프로젝트 생성
* .vue 확장자의 [싱글 파일 컴포넌트](https://kr.vuejs.org/v2/guide/single-file-components.html) 구조로 개발
* HTTP server로 [express](https://expressjs.com/ko/) 이용
  * 원래 NGINX를 이용하려고 했는데 node image 위에 nginx 설치하려고 하니까 하드 용량 초과로 강종됨(프리티어라 용량이 얼마 안됨)
  * 어차피 node image 쓸 바에야 서버도 node로 가는게 좋을 것 같아서 가장 대표적인 express를 선택
  * express에 미들웨어로 [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback) 추가
    * [HTML5 History Mode](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)가 동작하도록 해주는 SPA(Single Page Application)을 위한 미들웨어

## Project setup
```
npm install
```

### Set environment variables
in .env file
```javascript
VUE_APP_BACKEND_HOST=your_backend_host  // 127.0.0.1, localhost, yourhostname.com
VUE_APP_BACKEND_PORT=your_backend_port
```
in .env.production file
```javascript
VUE_APP_BACKEND_HOST=your_production_backend_host
VUE_APP_BACKEND_PORT=your_production_backend_port
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
