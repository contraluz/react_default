import React from 'react';
import './report.css';

class report extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            university: props.university,
            id: 0,
            sessionId: 'HF93DK38DUe8k329dk3d',
            timeNow: new Date().toLocaleTimeString()
        }
        this.handleClickUniversity = this.handleClickUniversity.bind(this)
    }
    handleClickUniversity() {
        let university;
        if(this.state.university !== '浙江大学') {
            university = '浙江大学'
        } else {
            university = '复旦大学'
        }
        this.setState({
            university: university
        })
    }
    handleClickId() {
        // let id = this.state.id;
        // id++;
        // this.setState({
        //     id: id
        // })
        this.setState(state => ({
            id: ++state.id
        }))
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                timeNow: new Date().toLocaleTimeString()
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        const state = this.state
        return (
            <div className="report">
                <p onClick={this.handleClickUniversity}>{state.university}</p>
                <p>{state.sessionId}</p>
                <p onClick={()=>this.handleClickId()}>{state.id}</p>
                <p>{state.timeNow}</p>
            </div>
        )
    }
}

export default report;
