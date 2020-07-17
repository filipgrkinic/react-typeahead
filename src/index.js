import React from 'react'
import ReactDOM from 'react-dom'
import Typeahead from './components/Typeahead/'
import data from './data.json'

const App = () => {
  return (
    <Typeahead
      items={data.fruits}
      placeholder="Search for healthy fruits..."
    />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
