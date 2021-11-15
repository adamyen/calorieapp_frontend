import React from "react";
import { connect } from 'react-redux';
import { SimpleBar } from '../components';

function History(props) {
    const dates = getDatesOfThisWeek();
    const data = dates.map((date, i) => {
        const cal = props.calories[i];
        return {
            ...cal,
            total: cal.consumed - cal.burned,
            name: date,
        };
    });
    return (
        <div className="container-col">
            <h2>Track my calories</h2>
            <SimpleBar
                data={data}
                dataKey1="consumed"
                dataKey2="burned"
                dataKey3="total"
            />
        </div>
    );
}

const mapStateToProps = state => ({
    calories: state.calories,
});

const getDatesOfThisWeek = () => {
    let curr = new Date();
    let week = [];
    for (let i = 0; i < 7; i++) {
        let first = curr.getDate() - curr.getDay() + i;
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
        week.push(day);
    }
    return week;
}

export default connect(mapStateToProps)(History);
