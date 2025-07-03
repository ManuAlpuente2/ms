import CompanyInfo from "../CompanyInfo";

const PageCompany = ({ data }) => {
  return (
    <div className="container">
      <div className="row row_company-page">
        <div className="col">
          <CompanyInfo data={data.company} />
        </div>
      </div>
    </div>
  );
};

export default PageCompany;
