import { useState } from "react";
import Header from "./components/Header";
import InvestmentTable from "./components/InvestmentTable";
import UserInput from "./components/UserInput";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleChange = (e, identifier) => {
    setInvestment({
      ...investment,
      [identifier]: +e.target.value,
    });
  };

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} investment={investment} />
      <InvestmentTable investment={investment} />
    </>
  );
}

export default App;
