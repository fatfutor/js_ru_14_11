import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

import dateRange from '../AC/dateRange'

class DateRange extends Component {

    static propTypes = {
    }

    handleDayClick = (e, day) => {
        const { fromTo } = this.props.filter
        this.props.dateRange(DateUtils.addDayToRange(day, fromTo))
    }


    render() {
        const { fromTo } = this.props.filter
        const selectedRange = fromTo.from && fromTo.to && `${fromTo.from.toDateString()} - ${fromTo.to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, fromTo) }
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