import { SiKakaotalk } from 'react-icons/si'
import { ImGoogle2 } from 'react-icons/im'
import styled from 'styled-components'

function Oauth() {
  return (
    <OauthContainer>
      <h1>Oauth 로그인</h1>
      <SiKakaotalk />
      <ImGoogle2 />
    </OauthContainer>
  )
}

const OauthContainer = styled.div`
  text-align: center;
  background-color: #ecf2ff;
  border-radius: 3px;
  width: 300px;
  height: 400px;
`

export default Oauth
