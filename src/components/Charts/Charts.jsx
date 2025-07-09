import React from 'react'
import PropTypes from 'prop-types';
import { Line, Pie } from '@ant-design/charts';
import './Charts.css'

const Charts = ({ sortedTranscation }) => {

    const data = sortedTranscation.map((item) => {
        return {
            date: item.date,
            amount: item.amount
        };
    });

    // const spendData = sortedTranscation.filter((transcation) => {
    //     if (transcation.type == 'expense') {
    //         return {
    //             tag: transcation.tag,
    //             amount: transcation.amount
    //         };
    //     }
    // });

    const spendData = sortedTranscation
        .filter((transcation) => transcation.type === 'expense')
        .map((transcation) => ({
            tag: transcation.tag,
            amount: transcation.amount,
        }));

    const config = {
        data: data,
        // width: 800,
        // height: 400,
        autoFit: false,
        xField: 'date',
        yField: 'amount',
        // point: {
        //     size: 5,
        //     shape: 'diamond',
        //     style: {
        //         stroke: '#5B8FF9',
        //         lineWidth: 0.4,
        //     },
        // },
        // label: {
        //     style: {
        //         fill: '#aaa',
        //     },
        // },
    };



    let finalSpenidng = spendData.reduce((acc, obj) => {
        let key = obj.tag;
        if (!acc[key]) {
            acc[key] = {
                tag: obj.tag,
                amount: obj.amount
            };
            // console.log('Acc', acc);

        } else {
            acc[key].amount += obj.amount;
        }
        // console.log('Final Acc', acc);

        return acc;
    }, {});

    // console.log('Final Spends', Object.values(finalSpenidng));


    let spendconfig = {
        // height: 500,
        // width: 500,
        autoFit: true,
        // padding: 10,
        data: Object.values(finalSpenidng),
        angleField: 'amount',
        colorField: 'tag',
    };

    // eslint-disable-next-line no-unused-vars
    let chart;
    // eslint-disable-next-line no-unused-vars
    let piechart;
    // console.log(chart);

    return (
        <div className="charts_wrapper">
            <div>
                <h2 style={{ textAlign: 'center', marginTop: 0, marginBottom: '15px' }}>Financial Statistics</h2>
                <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
            </div>
            <div>
                <h2 style={{ textAlign: 'center', marginTop: 0, marginBottom: '15px' }}>Total Spending</h2>
                <Pie {...spendconfig} onReady={(chartInstance) => (piechart = chartInstance)} />
            </div>
        </div>
    );
};
Charts.propTypes = {
    sortedTranscation: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
            amount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Charts;
