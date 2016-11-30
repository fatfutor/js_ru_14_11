import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    // static propTypes = {
    //     articles: PropTypes.array.isRequired,
    //     //from accordion decorator
    //     isOpen: PropTypes.func.isRequired,
    //     toggleOpenItem: PropTypes.func.isRequired
    // }

    getContainerRef = ref => {
        this.containerRef = ref
    }


    render() {
        const { isOpen, toggleOpenItem } = this.props
        const { articles } = this.props.articles

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen(article.id)}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(accordion(ArticleList))