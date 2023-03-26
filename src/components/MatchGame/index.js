import {Component} from 'react'
import MatchGameImages from './components/MatchGameImages'
import MatchGameTabs from './components/MatchGameTabs'
import './index.css'

class MatchGame extends Component {
    const {imagesList,tabsList}=this.props 
  state = {
    score: 0,
    timer: 60,
    randomImage: imagesList[0].imageUrl,
    activeTabId: tabsList[0].tabId,
    
  }

  getInterval=()=>{
      this.setState(prevState=>({timer:prevState.timer-1}))
  }
  this.intervalId=setInterval(this.getInterval,1000)

  onClickImageButton = id => {
    const {imagesList, tabsList} = this.props
    const length = imagesList.Length
    const randomImage1 = Math.ceil(Math.random() * length) - 1
    const image = imagesList[randomImage1].imageUrl
     

    const image1 = imagesList.find(each => each.id === id)
    if (randomImage === image1) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({randomImage: image})
    }
  }

  changeTab1 = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredList = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state
    const filteredList = imagesList.filter(
      each => each.category === activeTabId,
    )
    return filteredList
  }
  playAgain=()=>{
    clearInterval(intervalId)
    this.setState({score: 0,
    timer: 60,
    randomImage: imagesList[0].imageUrl,
    activeTabId: tabsList[0].tabId,
  })
  }

  renderTimeOver=()=>{
      if(timer===0){

        return(
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"/>
                <p>your score {score}</p>
                <button onClick={this.playAgain}>Play again</button>
            </div>
        )
    }
  }

  render() {
    const filteredList1 = this.getFilteredList()
    const {timer,score,randomImage}=this.state 
    

    return (
      <div>
      {timer&&
        (<div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <p>Score:{score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
        <p>{timer}</p>
        </div>
        <img src={randomImage} />

        <ul>
          {tabsList.map(each => (
            <MatchGameTabs eachTab={each} key={each.tabId} onClickImageButton={this.onClickImageButton} />
          ))}
        </ul>
        <ul>
          {filteredList1.map(each => (
            <MatchGameImages eachImage={each} key={each.id} changeTab1={this.changeTab1} />
          ))}
        </ul>)

      }
      <div>
          {!timer&&this.renderTimeOver()}
      </div>
      </div>
    )
  }
}

export default MatchGame
