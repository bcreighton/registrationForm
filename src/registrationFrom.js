import React, { Component } from 'react'

class RegistrationForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form
        className='registration'
        onSubmit={e => this.handleSubmit(e)}
      >
        <h2>Register</h2>
        <div className='registration__hint'>* required field</div>
        <div className='form-group'>
          <label htmlFor='text'>Name *</label>
          <imput type='text' className='registration__control' name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password *</label>
          <input type='password' className='registeration__control' name='password' id='password' />
          <div className='registation__hint'>6 to 72 characters, must include a number</div>
        </div>
        <div className='form-group'>
          <label htmlFor='repeatPassword'>Repeat Password *</label>
          <input type='password' className='registration__control' name='repeatPassword' id='repeatPassword' />
        </div>
        <div className='registation__button__group'>
          <button type='reset' className='registration__button'>
            Cancel
          </button>
          <button type='submit' className='registration__button'>
            Save
          </button>
        </div>
      </form>
    )
  }
}

export default RegistrationForm