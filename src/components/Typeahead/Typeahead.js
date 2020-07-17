import React, { useState, useEffect } from 'react'
import { Widget, WidgetItem, InputStyled, TypeaheadWrapper, ButtonStyled, FormStyled } from './TypeaheadStyled'

const initialState = {
  activeItem: 0,
  filteredItems: [],
  userInput: ''
}

const Typeahead = ({ items, placeholder }) => {
  const [state, setState] = useState(initialState)

  const { activeItem, filteredItems, userInput } = state

  // if user highlights all characters then hits return, reset to initial state
  useEffect(() => {
    if (userInput === '') {
      setState(initialState)
    }
  }, [userInput])

  const handleUserInput = (e) => {
    // filter out terms based on user's input
    const termsToShow = items.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()))

    setState({
      ...state,
      filteredItems: termsToShow,
      userInput: e.target.value
    })
  }

  const handleItemClick = (e) => {
    setState({
      ...initialState,
      userInput: e.currentTarget.innerText
    })
  }

  const handleItemHover = (e) => {
    setState({
      ...state,
      userInput: e.target.innerText
    })
  }

  const handleKeyDown = (e) => {
    // enter key, update the input, close the widget
    if (e.keyCode === 13) {
      e.preventDefault()

      setState({
        ...initialState,
        userInput: filteredItems[activeItem]
      })
    }

    // escape, clear all, close widget
    else if (e.keyCode === 27) {
      setState(initialState)
    }

    // up arrow, decrement active item, go up the list
    else if (e.keyCode === 38) {
      // check if we are at the top of the list
      if (activeItem === 0) {
        return
      }

      setState({ ...state, activeItem: activeItem - 1 })
    }

    // down arrow, increment active item, go down the list
    else if (e.keyCode === 40) {
      // check if we reached the bottom of the list
      if (activeItem - 1 === filteredItems.length) {
        return
      }

      setState({ ...state, activeItem: activeItem + 1 })
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('submit the form')
    setState(initialState)
  }

  const renderResults = () => {
    return (
      <Widget>
        {filteredItems.map((term, index) => {
          return (
            <WidgetItem
              key={index}
              isActive={(index === activeItem)}
              onClick={handleItemClick}
              onMouseEnter={handleItemHover}
            >
              {term}
            </WidgetItem>
          )
        })}
      </Widget>
    )
  }

  return (
    <>
      <TypeaheadWrapper>
        <FormStyled onSubmit={handleFormSubmit}>
          <InputStyled
            placeholder={placeholder}
            type="text"
            onChange={handleUserInput}
            onKeyDown={handleKeyDown}
            value={userInput}
          />
          <ButtonStyled type="submit">
            Search
          </ButtonStyled>
        </FormStyled>

        {renderResults()}
      </TypeaheadWrapper>
    </>
  )
}

export default Typeahead