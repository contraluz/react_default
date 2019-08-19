import React from 'react';
import './report.css';
// import * as api from '../api/home';
import {getJson1} from '../api/mock';
class report extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            university: props.university,
            id: 0,
            sessionId: 'HF93DK38DUe8k329dk3d',
            timeNow: new Date().toLocaleTimeString(),
            movieList: []
        }
        this.handleClickUniversity = this.handleClickUniversity.bind(this)
        this.handleClickMovie = this.handleClickMovie.bind(this)
    }
    handleClickUniversity() {
        let university;
        if (this.state.university !== '浙江大学') {
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
            id: +state.id + 1
        }))
        // api.default.getMovieList().then(res => {
        //     console.log(res)
        // })
    }
    handleClickMovie(url, e) {
        window.open(url)
        // e.preventDefault()
    }
    componentDidMount() {
        var json1 = getJson1()
        console.log('json1:', json1)
        this.setState({
            movieList: json1
        })
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
        let ulData = state.movieList.map(item => {
            return (<li className="li" key={item.n_member} onClick={e => this.handleClickMovie(item.url, e)}>
                <img width="100" height="100" src={item.picture} alt={item.name}></img>
                <div className="iBlock">片名：{item.name}</div>
            </li>)
        })
        return (
            <div className="report">
                <p onClick={this.handleClickUniversity}>{state.university} <span>{state.timeNow}</span></p>
                <p>{state.sessionId}</p>
                <p onClick={() => this.handleClickId()}>{state.id}</p>
                <ul>{ulData}</ul>
            </div>
        )
    }
}

export default report;
