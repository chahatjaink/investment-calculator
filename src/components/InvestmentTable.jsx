import { calculateInvestmentResults, formatter } from "../util/investment";

export default function InvestmentTable({ investment }) {
  const result = calculateInvestmentResults(investment);
  const headings = [
    "Annual Investment",
    "Interest",
    "Value at End of Year",
    "Year",
  ];
  console.log("TCL: InvestmentTable -> headings", headings);
  return (
    <table id="result">
      <thead>
        <tr>
          {headings.map((heading, headingIndex) => (
            <th key={headingIndex}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.map((res, resIndex) => {
          const totalInterest =
            (res.valueEndOfYear - res.annualInvestment) * res.year;
          return (
            <tr key={resIndex}>
              <td>{res.annualInvestment}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{res.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
