import styled from 'styled-components'
import LoginForm from './commons/LoginForm'

function Session() {
  return (
    <SessionContainer>
      <h1>session-cookie로그인</h1>
      <LoginForm />
    </SessionContainer>
  )
}

const SessionContainer = styled.div`
  text-align: center;
`

export default Session
