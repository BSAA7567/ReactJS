import React, {Component} from 'react';
import {Form, ListGroup} from 'react-bootstrap';

class todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            text: ""
        }
    }

    handleInput = (e) => {
        this.setState({text: e.target.value});
        // console.log(this.state.text);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text !== "") {
            this.setState({
                list: [
                    {
                        value: this.state.text
                    },
                    ...this.state.list
                ],
                text: ""
            });
            // console.log(this.state.list);
        }
    }
    handleRemove = (e) => {
        // console.log(e.target.id);
        this
            .state
            .list
            .splice(e.target.id, 1)
        this.setState({list: this.state.list})
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Todo List</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Write down things to do"
                            onChange={this.handleInput}
                            value={this.state.text}/>
                    </Form.Group>
                </Form>
                <ListGroup>
                    {
                        this
                            .state
                            .list
                            .map((item, index) => (
                                <ListGroup.Item
                                    action
                                    id={index}
                                    onClick={this.handleRemove}
                                    variant="primary">{item.value}</ListGroup.Item>
                            ))
                    }
                </ListGroup>
            </div>

        );
    }
}
export default todo;