import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import select from '../AC/select'

class App extends Component {

    render() {
        const { articles } = this.props.articles
        const { selected } = this.props.filter
        // console.log('App', articles, selected)
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
                <Select options = {options} value = {selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => this.props.select(selected)
}

export default connect(state => ({
    articles: state.articles,
    filter: state.filter
}), {
  select
})(App)