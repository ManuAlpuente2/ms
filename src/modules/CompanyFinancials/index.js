import "./CompanyFinancials.scss";
import { getScoreClass } from "../../utils";

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
            {data.turnover}
          </span>
          <p className="company-financials__data-key">Turnover</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">{data.ebitda}</span>
          <p className="company-financials__data-key">EBITDA</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            {data.cagr_turnover_5y}
          </span>
          <p className="company-financials__data-key">5Y T/O CAGR</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            {data.cagr_ebitda_5y}
          </span>
          <p className="company-financials__data-key">5Y EBITDA CAGR</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            {data.ebitda_margin}
          </span>
          <p className="company-financials__data-key">EBITDA Margin</p>
        </div>
        <div className="company-financials__data-item">
          <span className="company-financials__data-value">
            {data.nfd_ebitda}
          </span>
          <p className="company-financials__data-key">NFD/EBITDA</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyFinancials;
