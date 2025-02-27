import React from "react";
import incomeGraph from "../pictures/income-graph.png";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  const transactionsEls = transactionsData.map((data) => (
    <div key={data.id} className="transaction">
      <h3>${data.amount}</h3>
      <p>{data.date}</p>
    </div>
  ));

  return (
    <section className="host-income">
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2260</h2>
      <img src={incomeGraph} alt="Income graph" />
      <div className="info-div">
        <h3>Your transaction (3)</h3>
        <div>
          Last <span>30 days</span>
        </div>
      </div>
      <div className="transactions">{transactionsEls}</div>
    </section>
  );
}
