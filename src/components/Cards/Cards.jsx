import React from 'react'
import './Cards.css';
import { Card, Row } from 'antd';
import Button from '../Buttons/Button';
import PropTypes from 'prop-types';

const Cards = ({ showExpenseModal, showIncomeModal, currentBalance, income, expenses }) => {
    return (
        <div>
            <Row className='my_row'>
                {/* <Card hoverable className='my_card' title="Current Balance">
                    <p>₹0.00</p>
                    <Button blue={true} text={'Reset Balance'} />
                </Card>
                <Card hoverable className='my_card' title="Current Balance">
                    <p>₹0.00</p>
                    <Button blue={true} text={'Reset Balance'} />
                </Card>
                <Card hoverable className='my_card' title="Current Balance">
                    <p>₹0.00</p>
                    <Button blue={true} text={'Reset Balance'} />
                </Card> */}
                <Card  className='my_card'>
                    <h2>Current Balance</h2>
                    <p>₹ {currentBalance}</p>
                    <Button blue={true} text={'Reset Balance'} />
                </Card>

                <Card  className='my_card'>
                    <h2>Total Income</h2>
                    <p>₹ {income}</p>
                    <Button blue={true} text={'Add Income'} onClick={showIncomeModal} />
                </Card>

                <Card  className='my_card'>
                    <h2>Total Expenses</h2>
                    <p>₹ {expenses}</p>
                    <Button blue={true} text={'Add Expense'} onClick={showExpenseModal} />
                </Card>
            </Row>
        </div>
    );
};
Cards.propTypes = {
    showExpenseModal: PropTypes.func.isRequired,
    showIncomeModal: PropTypes.func.isRequired,
    currentBalance: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
    expenses: PropTypes.number.isRequired,
};

export default Cards;
