import { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-red-500 mb-6">
        Fraud Detection Dashboard
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-left">
            <th className="p-4">ID</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Flagged</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className={`border-b border-gray-700 ${t.flagged ? "bg-red-900" : "bg-gray-800"}`}>
              <td className="p-4">{t.id}</td>
              <td className="p-4">${t.amount}</td>
              <td className="p-4">{t.flagged ? "Flagged" : "Clear"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;