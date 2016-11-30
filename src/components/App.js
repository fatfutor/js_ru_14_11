import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import select from '../AC/select'
import dateRange from '../AC/dateRange'

class App extends Component {

    render() {
        const { articles } = this.props.articles
        const { selected, fromTo } = this.props.filter
        const { from, to } = fromTo

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        let filtered = articles.filter( (art) => {
            if (selected && selected.length > 0 && !selected.find((item) => item.value === art.id))
                return false

            const dt = Date.parse(art.date)

            if (from && !to)
                return dt >= from

            else if (to && !from)
                return dt <= to

            else if (from)
                return dt >= from && dt <= to

            return true
        })

        return (
            <div>
                <Counter />
                <Chart />
                <DateRange fromTo={fromTo} dateRange={this.props.dateRange} />
                <ArticleList articles={(filtered) ? filtered : articles} />
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
    select,
    dateRange
})(App)
