import CompanyFinancials from "../CompanyFinancials";
import CompanyInfo from "../CompanyInfo";
import CompanyScore from "../CompanyScore";
import CompanyHistoricalFinancials from "../CompanyHistoricalFinancials";
import CompanyNfdCapex from "../CompanyNfdCapex";
import CompanyIncomeTable from "../CompanyIncomeTable";
import "./PageCompany.scss";

const PageCompany = ({ data }) => {
  console.log("PageCompany", { data });
  return (
    <>
      <div className="company-fist-group">
        <div className="container">
          <div className="row company-fist-group_row">
            <div className="col col_company-info">
              <CompanyInfo data={data.company} />
            </div>
            <div className="col col_company-financials">
              <CompanyFinancials data={data.financials} />
            </div>
            <div className="col col_company-score">
              <CompanyScore data={data.score_indicators} />
            </div>
          </div>
        </div>
      </div>
      <div className="company-second-group">
        <div className="container">
          <div className="row company-second-group_row">
            <div className="col col_historical-financials">
              <CompanyHistoricalFinancials data={data.historical_financials} />
            </div>
            <div className="col col_nfd-capex">
              <CompanyNfdCapex data={data.ratios} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CompanyIncomeTable data={data.income_statement} />
      </div>
    </>
  );
};

export default PageCompany;
