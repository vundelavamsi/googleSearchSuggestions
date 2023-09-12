// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, selectedInput} = props
  const {suggestion} = suggestionItem
  const onSelectedInput = () => {
    selectedInput(suggestion)
  }

  return (
    <li className="list-container" onClick={onSelectedInput}>
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
