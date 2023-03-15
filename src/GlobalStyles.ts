import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
     ${reset};

    :root{
      --titleColor : "#94af9f",
      --contentColor : "#bbd6b8",
    }

    html,body{
      height: 100%;
    }

`
export default GlobalStyles
