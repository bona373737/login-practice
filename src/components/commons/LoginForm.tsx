import styled from 'styled-components'

function LoginForm() {
  return (
    <LoginFormContainer>
      <form>
        <div className="input_wrap">
          <label htmlFor="userid">ID</label>
          <input type="text" id="userid" placeholder="ID" />
        </div>
        <div className="input_wrap">
          <label htmlFor="password">PW</label>
          <input type="password" id="password" placeholder="PASSWORD" />
        </div>
        <button>Sign In</button>
      </form>
    </LoginFormContainer>
  )
}

const LoginFormContainer = styled.div`
  /* background-color: #bbd6b8; */
  background-color: #ecf2ff;
  border-radius: 3px;
  width: 300px;
  height: 400px;
`

export default LoginForm
