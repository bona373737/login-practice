import styled from 'styled-components'

import Oauth from './components/Oauth'
import Jwt from './components/Jwt'
import Session from './components/Session'

function App() {
  return (
    <AppContainer>
      <div className="title_wrap">
        <h1 className="title">3가지 로그인구현방법</h1>
        <p className="description">
          로그인 구현방식을 실습해보며 각 방식의 구현원리와 장단점을 체감해 보자
        </p>
      </div>
      <div className="content_wrap">
        <Session />
        <Jwt />
        <Oauth />
      </div>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  width: 1200px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title_wrap {
    text-align: center;
    margin-bottom: 40px;
    .title {
      font-size: 30px;
      color: #a084dc;
    }
    .description {
      margin: 8px 0;
    }
  }

  .content_wrap {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`

export default App
