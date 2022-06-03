import React from "react"
import './App.css'
import myPhoto from './Photo.jpg'
class App extends React.Component{
  state = {
    fullName: "Wajih Belhadj",
    bio: "Sousse",
    imgSrc: myPhoto,
    profession: "Mechatronics engineer  and  front-end developer",
    show: true
  }
  handleClick = (state) => {
    this.setState({ ...state, show: !this.state.show })
    console.log('cliked!')
  }
  render(){

    if (this.state.show == true) {
      return (
        <>
          <div className="card-container">
          <button className="button-63" onClick={this.handleClick}> Hide</button>
            <img className="round" src={this.state.imgSrc} alt="user" />
            <h3>{this.state.fullName}</h3>
            <h6>{this.state.bio}</h6>
            <p>{this.state.profession}</p>
            <div className="buttons">
              <button className="primary">
                Message
              </button>
              <button className="primary ghost">
                Following
              </button>
            </div>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </div>
        
        </>
      )
    } else { return (<>
      <button className="button-63" onClick={this.handleClick}> Show</button>
      <div>none!</div>
      </>) }
  }
}
export default App