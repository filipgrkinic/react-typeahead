import styled from 'styled-components'

const TypeaheadWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding-top: 5vh;
`

const Widget = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  max-width: 100%;
  overflow-y: auto;
  max-height: 200px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
`

const WidgetItem = styled.li`
  padding: 5px 10px;
  transition: color 0.15s, background-color 0.15s;
  font-size: 20px;
  background-color: ${props => props.isActive ? '#f1d185' : '#305f72'};
  color: ${props => props.isActive ? '#305f72' : '#ffffff'};
`

const InputStyled = styled.input`
  font-size: 22px;
  padding: 10px 10px;
  color: #424242;
  box-shadow: none;
  background-color: #f7f7f7;
  border: none;
  border-bottom: 1px solid #305f72;
  width: 100%;
  display: block;
  box-sizing:border-box;
  transition: color 0.15s;

  ::placeholder {
    color: #424242;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`

const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #305f72;
  padding: 0 15px;
  color: #ffffff;
  background-color: #305f72;
  transition: background-color 0.15s;

  &:hover {
    background-color: #ef7d7f;
  }
`

const FormStyled = styled.form`
  display: flex;
`

export { TypeaheadWrapper, Widget, WidgetItem, InputStyled, ButtonStyled, FormStyled }
