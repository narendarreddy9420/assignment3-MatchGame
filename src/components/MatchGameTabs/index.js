const MatchGameTabs = props => {
  const {eachTab} = props
  const {tabId, displayText} = eachTab

  const changeTab = () => {
    changeTab1(tabId)
  }

  return (
    <li>
      <button onClick={changeTab}>{displayText}</button>
    </li>
  )
}

export default MatchGameTabs
