import { orangeDark, sandDark, redDark } from '@radix-ui/colors'
import styled from 'styled-components'

const theme = {
  colors: {
    ...orangeDark,
    ...sandDark,
    ...redDark
  }
}

export const Body = styled.body`
  background-color: ${theme.colors.sand1};
  color: ${theme.colors.sand12};
  height: 100vh;
  width: 100vw;
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: ${theme.colors.orange12};
    margin-bottom: 24px;
  }
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: ${theme.colors.orange11};
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
`

export const Container = styled.div`
  width: 700px;
  margin: 0 auto;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${theme.colors.red9};
  }
`

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  input {
    width: 250px;
    height: 40px;
    padding: 8px 16px;
    border: 1px solid ${theme.colors.orange6};
    border-radius: 5px;
    background-color: ${theme.colors.sand12};
  }

  .buttons {
    margin-top: 16px;
    display: flex;
    justify-content: center;

    button {
      &:first-child {
        margin-right: 16px;
      }
    }
  }
`

export const Button = styled.button`
  padding: 6px 32px;
  height: 40px;
  border: 1px solid ${theme.colors.orange6};
  border-radius: 5px;
  color: ${theme.colors.sand12};
  background: ${theme.colors.orange3};
  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    background: ${theme.colors.orange4};
  }
`

export const CleanButton = styled(Button)`
  background: ${theme.colors.red3};
  border: 1px solid ${theme.colors.red6};

  &:hover {
    background: ${theme.colors.red4};
  }
`

export const Popup = styled.section`
  padding: 16px 32px;
  width: 60%;
  background: ${theme.colors.orange2};
  color: ${theme.colors.sand12};
  border: 1px solid ${theme.colors.orange3};
  margin-bottom: 32px;
  border-radius: 8px;
`

export const PopupFirstSection = styled.div`
  h2 {
    color: ${theme.colors.sand12};
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      text-align: center;
      color: ${theme.colors.sand11};
      padding: 16px;

      span {
        color: ${theme.colors.sand12};
      }
    }
  }
`

export const PopupCity = styled.span`
  color: ${theme.colors.sand11};
  font-size: 14px;
  margin-bottom: 8px;
`

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;
`

export const MaxMins = styled.div`
  span:first-child {
    margin-right: 16px;
  }
`
