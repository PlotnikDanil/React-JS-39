import React, { Component } from "react";
import FirstLessonChild from './FirstLessonChild.jsx';

class Lesson_1 extends Component {
    constructor() {
        super();
        this.state = {
            value:'',
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('ComponentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount');
    }
    
    render() {
        console.log('render')
        return (
            <div>
                <form action="">
                    <label htmlFor="inpt" style={{display:'block', marginBottom:1+'rem'}}>Поле для ввода</label>
                    <input type="text" id="inpt" style={{marginBottom:1+'rem'}} value={this.state.value} onChange={(e) => this.setState({value: e.target.value })}/>
                    <FirstLessonChild value = {this.state.value}/>
                </form>
            </div>
        )
    }
}

export default Lesson_1;