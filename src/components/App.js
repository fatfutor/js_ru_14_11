import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import selectId from '../AC/selectId'
import { bindActionCreators } from 'redux'

class App extends Component {

    // state = {
    //     selected: null
    // }

    render() {
        const { articles, selectedArticle } = this.props
        console.log('App', selectedArticle.selected)
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select options = {options} value = {selectedArticle.selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => this.props.selectId(selected)
}

export default connect(state => ({
    articles: state.articles,
    selectedArticle: state.selectedArticle
}), {
  selectId
})(App)