import NumberFlow from "@number-flow/react";
import { getScoreClass } from "../../utils";
import "./CompanyFinancials.scss";

const CompanyFinancials = ({ data }) => {
  return (
    <div className="company-financials">
      <h2 className="page-section-title">Company financials</h2>
      <span
        className={`company-financials__score ${getScoreClass(data.score)}`}
      >
        {data.score}
      </span>
      <p className="company-financials__label">Score</p>
      <div className="company-financials__data-items">
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            <NumberFlow value={Number(data.turnover)} suffix="M" prefix="€" />
          </span>
          <p className="company-financials__data-key">Turnover</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            <NumberFlow value={Number(data.ebitda)} suffix="M" prefix="€" />
          </span>
          <p className="company-financials__data-key">EBITDA</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            <NumberFlow value={Number(data.cagr_turnover_5y)} suffix="%" />
          </span>
          <p className="company-financials__data-key">5Y T/O CAGR</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            <NumberFlow value={Number(data.cagr_ebitda_5y)} suffix="%" />
          </span>
          <p className="company-financials__data-key">5Y EBITDA CAGR</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            <NumberFlow value={Number(data.ebitda_margin)} suffix="%" />
          </span>
          <p className="company-financials__data-key">EBITDA Margin</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            <NumberFlow value={Number(data.nfd_ebitda)} suffix="x" />
          </span>
          <p className="company-financials__data-key">NFD/EBITDA</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyFinancials;
