import CompanyFinancials from "../CompanyFinancials";
import CompanyInfo from "../CompanyInfo";
import CompanyScore from "../CompanyScore";
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
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCompany;
