import { useState } from "react";
import { placeOrder } from "../lib/trading";

const OrderForm = () => {
  const [amount, setAmount] = useState("");
  const [limitPrice, setLimitPrice] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await placeOrder({
      username: "testUser",
      type: "limit",
      amount: parseFloat(amount),
      limitPrice: parseFloat(limitPrice),
      stopLoss: parseFloat(stopLoss),
      takeProfit: parseFloat(takeProfit),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-emerald-900 text-white rounded-lg"
    >
      <label>
        Amount:{" "}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Limit Price:{" "}
        <input
          type="number"
          value={limitPrice}
          onChange={(e) => setLimitPrice(e.target.value)}
        />
      </label>
      <label>
        Stop Loss:{" "}
        <input
          type="number"
          value={stopLoss}
          onChange={(e) => setStopLoss(e.target.value)}
        />
      </label>
      <label>
        Take Profit:{" "}
        <input
          type="number"
          value={takeProfit}
          onChange={(e) => setTakeProfit(e.target.value)}
        />
      </label>
      <button type="submit" className="mt-4 p-2 bg-emerald-500 rounded">
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
