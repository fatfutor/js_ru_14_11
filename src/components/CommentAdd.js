import React from 'react'

class CommentAdd extends React.Component {
  state = {
    inputNameValue: null,
    inputTextValue: null
  }

  render() {
    const { handleChangeForm } = this.props

    return (
      <form action="#">
        <fieldset>
          <legend>Добавить комментарий</legend>
          <label htmlFor="userName">Имя пользователя</label>
          <input id="userName" type="text" ref="userName" onChange={handleChangeForm('inputNameValue')}/>

          <label htmlFor="commentMessage">Текст сообщения</label>
          <input id="commentMessage" type="text" ref="commentMessage" onChange={handleChangeForm('inputTextValue')}/>
          <button type="button" onClick={this.handleClickForm}>Добавить</button>
        </fieldset>
      </form>
    )
  }

  handleClickForm = () => this.setState({})

  handleChangeForm = key => e => {
    this.setState({
      [key]: e.target.value
    })
  }
}

export default CommentAdd