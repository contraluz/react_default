import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import About from '../about/about'
import Report from '../report/report'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component {
  render() {
    return(
      <div className="App">
      <Report university="浙江大学"></Report>
      <header className="App-header">
        <h1>台风预警信息推送</h1>
        <p className="welcome">您好，欢迎进入我们的系统！</p>
      </header>
      <About name="contraluz"/>
    </div>
    )
  }
}

export default App;