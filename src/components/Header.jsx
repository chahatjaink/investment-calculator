import investement_image from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investement_image} height={70} alt="investement_image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
