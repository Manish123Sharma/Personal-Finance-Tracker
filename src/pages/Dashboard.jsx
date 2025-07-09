import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards';
// import { Modal } from 'antd';
import AddExpense from '../components/Modals/AddExpense';
import AddIncome from '../components/Modals/AddIncome';
// import moment from 'moment';
import { toast } from 'react-toastify';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../components/Loader/Loader';
import TranscationTable from '../components/Transcation Table/Transcation_Table';
import Charts from '../components/Charts/Charts';
import NoTranscation from '../components/Charts/NoTranscation';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [transcation, setTranscation] = useState([]);
    const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

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

    async function fetchTranscation() {
        setLoading(true);
        console.log(transcation);

        if (user) {
            const q = query(collection(db, `users/${user.uid}/transactions`));
            const querySnapshot = await getDocs(q);
            let transactionsArray = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                transactionsArray.push(doc.data());
                // console.log(doc.data());

            });
            setTranscation(transactionsArray);
            console.log(transactionsArray);
            toast.success("Transactions Fetched!");
        }
        setLoading(false);
    }

    useEffect(() => {
        // Get all the Docs from firestore
        fetchTranscation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const onFinish = (values, type) => {
        const newTransaction = {
            type: type,
            date: values.date.format("YYYY-MM-DD"),
            amount: parseFloat(values.amount),
            tag: values.tag,
            name: values.name,
        };

        setTranscation([...transcation, newTransaction]);
        // setIsExpenseModalVisible(false);
        // setIsIncomeModalVisible(false);
        addTransaction(newTransaction);
        calculateBalance();
    };

    const addTransaction = async (transaction, many) => {
        // Add transcation to Doc in firestore
        try {
            const docRef = await addDoc(
                collection(db, `users/${user.uid}/transactions`),
                transaction
            );
            console.log("Document written with ID: ", docRef.id);
            if(!many) toast.success("Transaction Added!");
        } catch (e) {
            console.error("Error adding document: ", e);
            if(!many) toast.error("Couldn't add transaction");
        }
    }

    const calculateBalance = () => {
        let incomeTotal = 0;
        let expensesTotal = 0;

        transcation.forEach((transaction) => {
            if (transaction.type === "income") {
                incomeTotal += transaction.amount;
            } else {
                expensesTotal += transaction.amount;
            }
        });

        setIncome(incomeTotal);
        setExpenses(expensesTotal);
        setCurrentBalance(incomeTotal - expensesTotal);
    };

    // Calculate the initial balance, income, and expenses
    useEffect(() => {
        calculateBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transcation]);

    let sortedTranscation = transcation.toSorted((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });


    return (
        <div>
            <Header />
            {loading
                ? (
                    <Loader />
                )
                : (
                    <>
                        <Cards
                            showExpenseModal={showExpenseModal}
                            showIncomeModal={showIncomeModal}
                            currentBalance={currentBalance}
                            income={income}
                            expenses={expenses}
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
                    </>
                )
            }
            {transcation && transcation.length != 0 ? <Charts sortedTranscation={sortedTranscation} /> : <NoTranscation />}
            <TranscationTable addTransaction={addTransaction} fetchTransactions={fetchTranscation} transcation={transcation} />
        </div>
    );
};

export default Dashboard;
