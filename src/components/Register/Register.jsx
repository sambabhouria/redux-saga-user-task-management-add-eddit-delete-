import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col, Button } from 'reactstrap'

import FormControl from '../Login/FormControl'
import { registerUserAction } from '../../actions/userActions'

class Register extends Component {

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    validate = () => {
        const { data } = this.state
        const errors = {}

        if (data.username === '') errors.username = 'Username cannot be blank.'
        if (data.password === '') errors.password = 'Password cannot be blank.'

        return errors
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { data } = this.state
        const errors = this.validate()

        if (Object.keys(errors).length === 0) {
            this.props.registration(data)

            this.setState({
                data: {
                    username: '',
                    password: ''
                },
                errors: {}
            })
        } else {
            this.setState({
                errors
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.id]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.id]: ''
            }
        })
    }

    render() {
        const { data, errors } = this.state
        return (
            <Row>
                <Col md={4}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormControl
                            label="Username"
                            type="text"
                            value={data.username}
                            handleChange={this.handleChange}
                            error={errors.username}
                        />

                        <FormControl
                            label="Password"
                            type="password"
                            value={data.password}
                            handleChange={this.handleChange}
                            error={errors.password}
                        />

                        <Button color="primary">Register</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registration: (creds) => {
            dispatch(registerUserAction(creds))
        }
    }
}

export default connect(null, mapDispatchToProps)(Register)
