import React, { useState } from "react";
import "./Transcation_Table.css";
import { Radio, Select, Table } from "antd";
import PropTypes from "prop-types";
import searchImg from '../../assets/search.svg'
import { parse, unparse } from "papaparse";
import { toast } from "react-toastify";

// import Input from 'antd/es/input/Input';

const TranscationTable = ({ transcation, addTransaction,
    fetchTransactions, }) => {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const { Option } = Select;
    const [sortKey, setSortKey] = useState("");
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Tag",
            dataIndex: "tag",
            key: "tag",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
    ];

    let filteredTranscation = transcation.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            item.type.includes(typeFilter)
    );

    let sortedTranscation = filteredTranscation.sort((a, b) => {
        if (sortKey === "date") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortKey === "amount") {
            return a.amount - b.amount;
        } else {
            return 0;
        }
    });

    let exportToCsv = () => {
        const csv = unparse({
            fields: ["name", "type", "date", "amount", "tag"],
            data: transcation
        });
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "transactions.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    let importFromCsv = (e) => {
        e.preventDefault();
        try {
            parse(e.target.files[0], {
                header: true,
                complete: async function (results) {
                    // Now results.data is an array of objects representing your CSV rows
                    for (const transaction of results.data) {
                        // Write each transaction to Firebase, you can use the addTransaction function here
                        console.log("Transactions", transaction);
                        const newTransaction = {
                            ...transaction,
                            amount: parseFloat(transaction.amount),
                        };
                        await addTransaction(newTransaction, true);
                    }
                },
            });
            toast.success("All Transactions Added");
            fetchTransactions();
            e.target.files = null;
        } catch (e) {
            toast.error(e.message);
        }
    }

    return (
        <div
            style={{
                // width: "100%",
                padding: "0rem 2rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    alignItems: "center",
                    marginBottom: "1rem",
                }}
            >
                {/* <Input></Input> */}
                <div className="input-flex">
                    <img alt="" src={searchImg} width="16" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by Name"
                    />
                </div>

                <Select
                    className="select-input"
                    onChange={(value) => setTypeFilter(value)}
                    value={typeFilter}
                    placeholder="Filter"
                    allowClear
                >
                    <Option value="">All</Option>
                    <Option value="income">Income</Option>
                    <Option value="expense">Expense</Option>
                </Select>
            </div>
            {/* <Radio.Group
                className="input-radio"
                onChange={(e) => setSortKey(e.target.value)}
                value={sortKey}
            >
                <Radio.Button value="">No Sort</Radio.Button>
                <Radio.Button value="date">Sort by Date</Radio.Button>
                <Radio.Button value="amount">Sort by Amount</Radio.Button>
            </Radio.Group> */}
            <div className="my-table">
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "1rem",
                }}>
                    <h2>My Transactions</h2>

                    <Radio.Group
                        className="input-radio"
                        onChange={(e) => setSortKey(e.target.value)}
                        value={sortKey}
                    >
                        <Radio.Button value="">No Sort</Radio.Button>
                        <Radio.Button value="date">Sort by Date</Radio.Button>
                        <Radio.Button value="amount">Sort by Amount</Radio.Button>
                    </Radio.Group>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                        width: "400px",
                    }}>
                        <button className="btn"
                            onClick={exportToCsv}
                        >
                            Export to CSV
                        </button>
                        <label htmlFor="file-csv" className="btn btn-blue">
                            Import from CSV
                        </label>
                        <input
                            onChange={importFromCsv}
                            id="file-csv"
                            type="file"
                            accept=".csv"
                            required
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
                <Table dataSource={sortedTranscation} columns={columns} />
            </div>
            {/* <Table dataSource={sortedTranscation} columns={columns} /> */}
        </div>
    );
};

TranscationTable.propTypes = {
    transcation: PropTypes.array.isRequired,
    addTransaction: PropTypes.array.isRequired,
    fetchTransactions: PropTypes.array.isRequired
};

export default TranscationTable;
