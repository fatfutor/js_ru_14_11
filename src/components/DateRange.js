import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

import dateRange from '../AC/dateRange'

class DateRange extends Component {

    static propTypes = {
    }

    handleDayClick = (e, day) => {
        const { from, to } = this.props.filter
        const fromTO = {
            from,
            to
        }
        this.props.dateRange(DateUtils.addDayToRange(day, fromTO))
    }


    render() {
        const { from, to } = this.props.filter
        const fromTO = {
            from,
            to
        }
        // console.log(fromTO, this.state)
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, fromTO) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    filter: state.filter
}), {
    dateRange
})(DateRange)