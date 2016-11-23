import React, { Component }  from 'react'

export default (Component) => class Accordion extends Component {
    state = {
        //не привязывайся к названиям сущностей в декораторах, вся их суть в том, чтобы использовать с разными компонентами и данными. Сделай openItemId
        openArticleId: null
    }

    render () {
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
    }

    openArticle = id => ev => {
        const { openArticleId } = this.state

        this.setState({
            openArticleId: (openArticleId !== id) ? id : null
        })
    }
}
