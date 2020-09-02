import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';

class life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        console.log("Constructor Method 호출");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps 호출");
    }

    shouldComponentUpdate(nextprops, nextState) {
        console.log("sholudComponetUpdate 호출")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate 호출")
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate 호출");
    }

    handleOnChange = (e) => {
        this.setState({name: e.target.value})
    }
    
    render() {
        console.log("render 호출")
        return (
            <div>
                <FormControl placeholder="write something" onChange={this.handleOnChange}></FormControl>
                <h1 className="pt-3">Rendering Text : {this.state.name}</h1>
            </div>
        )
    }
}
export default life;