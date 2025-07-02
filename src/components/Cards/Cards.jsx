import React from 'react'
import './Cards.css';
import { Card, Row } from 'antd';
import Button from '../Buttons/Button';

const Cards = ({ showExpenseModal, showIncomeModal }) => {
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
                    <p>₹0</p>
                    <Button blue={true} text={'Reset Balance'} />
                </Card>

                <Card  className='my_card'>
                    <h2>Total Income</h2>
                    <p>₹0</p>
                    <Button blue={true} text={'Add Income'} onClick={showIncomeModal} />
                </Card>

                <Card  className='my_card'>
                    <h2>Total Expenses</h2>
                    <p>₹0</p>
                    <Button blue={true} text={'Add Expense'} onClick={showExpenseModal} />
                </Card>
            </Row>
        </div>
    );
};

export default Cards;
