import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { useState } from "react";

export default function UserInput({handleChange, investment}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={investment.initialInvestment}
            onChange={(event) => handleChange(event,"initialInvestment")}
          />
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={investment.annualInvestment}
            onChange={(event) => handleChange(event,"annualInvestment")}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={investment.expectedReturn}
            onChange={(event) => handleChange(event,"expectedReturn")}
          />
          <label>Duration</label>
          <input
            type="number"
            required
            value={investment.duration}
            onChange={(event) => handleChange(event,"duration")}
          />
        </p>
      </div>
    </section>
  );
}
