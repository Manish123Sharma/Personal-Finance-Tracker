import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards';
import { Modal } from 'antd';
import AddExpense from '../components/Modals/AddExpense';
import AddIncome from '../components/Modals/AddIncome';

const Dashboard = () => {

    const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
    const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);

    const showExpenseModal = () => {
        setIsExpenseModalVisible(true);
    };

    const showIncomeModal = () => {
        setIsIncomeModalVisible(true);
    };

    const handleExpenseCancel = () => {
        setIsExpenseModalVisible(false);
    };

    const handleIncomeCancel = () => {
        setIsIncomeModalVisible(false);
    };

    const onFinish = (value, type) => {
        console.log("On Finish CLicked", value, type);
    };

    return (
        <div>
            <Header />
            <Cards
                showExpenseModal={showExpenseModal}
                showIncomeModal={showIncomeModal}
            // handleExpenseCancel={handleExpenseCancel}
            // handleIncomeCancel={handleIncomeCancel}
            />
            <AddIncome
                isIncomeModalVisible={isIncomeModalVisible}
                handleIncomeCancel={handleIncomeCancel}
                onFinish={onFinish}
            />
            <AddExpense
                isExpenseModalVisible={isExpenseModalVisible}
                handleExpenseCancel={handleExpenseCancel}
                onFinish={onFinish}
            />
        </div>
    );
};

export default Dashboard;
