import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/addComment'

class NewCommentForm extends Component {

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('---', 'adding comment')
        let comment = {
            text: this.refs.text.value,
            user: this.refs.user.value
        }

        this.props.addComment(this.props.articleId, comment)
        this.refs.text.value = ''
        this.refs.user.value = ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" ref="text"/>
                user: <input type="text" ref="user"/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, {
    addComment
})(NewCommentForm)
