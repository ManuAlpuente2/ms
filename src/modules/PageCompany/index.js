import CompanyFinancials from "../CompanyFinancials";
import CompanyInfo from "../CompanyInfo";
import "./PageCompany.scss";

const PageCompany = ({ data }) => {
  console.log("PageCompany", { data });
  return (
    <div className="container">
      <div className="row row_company-page">
        <div className="col">
          <CompanyInfo data={data.company} />
        </div>
        <div className="col">
          <CompanyFinancials data={data.financials} />
        </div>
      </div>
    </div>
  );
};

export default PageCompany;
