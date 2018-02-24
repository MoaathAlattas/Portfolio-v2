import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Form from 'reactstrap/lib/Form'
import FormGroup from 'reactstrap/lib/FormGroup'
import Label from 'reactstrap/lib/Label'
import Input from 'reactstrap/lib/Input'
import Button from 'reactstrap/lib/Button'
import UncontrolledAlert from 'reactstrap/lib/UncontrolledAlert'
import FormFeedback from 'reactstrap/lib/FormFeedback'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import data from '@data/contact.json'

class ContactForm extends Component {
  state = {
    form: {
      name: { value: '', valid: null, errMsg: '' },
      email: { value: '', valid: null, errMsg: '' },
      message: { value: '', valid: null, errMsg: '' }
    },
    loading: false,
    success: { value: false, response: '' },
    error: { value: false, response: '' }
  }

  onInputChange = ({ target: { name, value } }) => {
    //reset validation status
    if (this.state.form[name].valid === false) {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          [name]: { ...prevState.form[name], valid: null, errMsg: '' }
        }
      }))
    }

    // update input value
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: { ...prevState.form[name], value: value }
      }
    }))
  }

  validateInput = ({ target: { name, value } }) => {
    // if any field empty
    if (isEmpty(value)) {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          [name]: { ...prevState.form[name], valid: false, errMsg: data[this.props.language].formErrors.emptyInput }
        }
      }))
      return false
    }

    // if email not valid
    if (name === 'email' && !isEmail(value)) {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          email: { ...prevState.form[name], valid: false, errMsg: data[this.props.language].formErrors.invalidEmail }
        }
      }))
      return false
    }
  }

  validateForm = () => {
    return !Object.keys(this.state.form)
      .map(name => this.validateInput({ target: { name: name, value: this.state.form[name].value } }))
      .includes(false)
  }

  onFormSubmit = e => {
    e.preventDefault()

    console.log(this.validateForm())
    if (this.validateForm()) {
      this.setState({ loading: true })
      setTimeout(() => {
        this.setState({ loading: false })
        this.formReset()
      }, 2000)
    } else {
      console.log('not valid')
    }
  }

  formReset = e => {
    e && e.preventDefault()
    this.setState({
      form: {
        name: { value: '', valid: null, errMsg: '' },
        email: { value: '', valid: null, errMsg: '' },
        message: { value: '', valid: null, errMsg: '' }
      },
      loading: false,
      success: { value: false, response: '' },
      error: { value: false, response: '' }
    })
  }

  render() {
    return (
      <Fragment>
        <UncontrolledAlert color="success">success</UncontrolledAlert>
        <UncontrolledAlert color="danger">error</UncontrolledAlert>
        <Form>
          <FormGroup>
            <Label for="name">{data[this.props.language].contactForm.name.title}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={data[this.props.language].contactForm.name.placeholder}
              value={this.state.form.name.value}
              onChange={this.onInputChange}
              onBlur={this.validateInput}
              valid={this.state.form.name.valid}
              disabled={this.state.loading}
              reqired="true"
            />
            {!this.state.form.name.valid && <FormFeedback>{this.state.form.name.errMsg}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="email">{data[this.props.language].contactForm.email.title}</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder={data[this.props.language].contactForm.email.placeholder}
              value={this.state.form.email.value}
              onChange={this.onInputChange}
              onBlur={this.validateInput}
              valid={this.state.form.email.valid}
              disabled={this.state.loading}
              reqired="true"
            />
            {!this.state.form.email.valid && <FormFeedback>{this.state.form.email.errMsg}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="message">{data[this.props.language].contactForm.message.title}</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder={data[this.props.language].contactForm.message.placeholder}
              rows="5"
              value={this.state.form.message.value}
              onChange={this.onInputChange}
              onBlur={this.validateInput}
              valid={this.state.form.message.valid}
              disabled={this.state.loading}
              reqired="true"
            />
            {!this.state.form.message.valid && <FormFeedback>{this.state.form.message.errMsg}</FormFeedback>}
          </FormGroup>
          <Button color="success" onClick={this.onFormSubmit} block disabled={this.state.loading}>
            {this.state.loading ? 'loading...' : data[this.props.language].contactForm.submit.title}
          </Button>
        </Form>
      </Fragment>
    )
  }
}

ContactForm.propTypes = {
  language: PropTypes.string
}

export default ContactForm
