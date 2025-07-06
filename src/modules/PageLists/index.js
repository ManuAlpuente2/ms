import "./PageLists.scss";
import CompanyHistoricalFinancials from "../CompanyHistoricalFinancials";
import { useNavigate } from "react-router-dom";
import { getScoreClass } from "../../utils";

const PageLists = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="lists">
      <div className="container">
        <h1 className="page-title">Companies</h1>
      </div>
      <div className="container">
        <table className="table list_table">
          <thead>
            <tr>
              <th></th>
              <th>Location</th>
              <th>Score</th>
              <th>Turnover</th>
              <th>EBITDA</th>
              <th>Historical Financials</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr onClick={() => navigate(`/companies/${index}`)}>
                <td className="list_item_name">
                  {item.company.name}{" "}
                  <span
                    class={`company-info__badge ${getScoreClass(
                      item.financials.score
                    )}  `}
                  >
                    <i class="icon icon-arrow-up"></i>
                    {item.company.microsector}
                  </span>
                </td>
                <td className="list_item_country">
                  <span class="company-info__details-item">
                    <i class="icon icon-marker"></i>
                    {item.company.location}
                  </span>
                </td>
                <td className="list_item_score">
                  <span
                    class={`company-financials__score ${getScoreClass(
                      item.financials.score
                    )}`}
                  >
                    {item.financials.score}
                  </span>
                </td>
                <td className="list_item_turnover">
                  <span>{item.financials.turnover}</span>
                </td>
                <td className="list_item_ebitda">{item.financials.ebitda}</td>
                <td className="list_item_progress">
                  <CompanyHistoricalFinancials
                    data={item.historical_financials}
                    compact={true}
                    height={60}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageLists;
