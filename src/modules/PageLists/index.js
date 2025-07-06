import "./PageLists.scss";
import CompanyHistoricalFinancials from "../CompanyHistoricalFinancials";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { getScoreClass } from "../../utils";

const PageLists = ({ data }) => {
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      let aValue, bValue;

      switch (sortConfig.key) {
        case "name":
          aValue = a.company.name.toLowerCase();
          bValue = b.company.name.toLowerCase();
          break;
        case "location":
          aValue = a.company.location.toLowerCase();
          bValue = b.company.location.toLowerCase();
          break;
        case "score":
          aValue = a.financials.score;
          bValue = b.financials.score;
          break;
        case "turnover":
          aValue = b.financials.turnover;
          bValue = a.financials.turnover;
          break;
        case "ebitda":
          aValue = b.financials.ebitda;
          bValue = a.financials.ebitda;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((c) => {
      if (c.key === key) {
        return {
          key,
          direction: c.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const getSortIcon = (key, invert = false) => {
    if (sortConfig.key !== key) {
      return <i className="icon icon-chevron-selector"></i>;
    }
    const dir = invert ? "desc" : "asc";
    return sortConfig.direction === dir ? (
      <i className="icon icon-chevron-up"></i>
    ) : (
      <i className="icon icon-chevron-down"></i>
    );
  };

  return (
    <div className="lists">
      <div className="container">
        <h1 className="page-title">Companies</h1>
      </div>
      <div className="container">
        <table className="table list_table">
          <thead>
            <tr>
              <th
                className={`list_item_name sortable ${
                  sortConfig.key === "name" ? "active" : ""
                }`}
                onClick={() => handleSort("name")}
              >
                <span className="sort-header">
                  Name
                  {getSortIcon("name")}
                </span>
              </th>
              <th
                className={`list_item_location sortable ${
                  sortConfig.key === "location" ? "active" : ""
                }`}
                onClick={() => handleSort("location")}
              >
                <span className="sort-header">
                  Location
                  {getSortIcon("location")}
                </span>
              </th>
              <th
                className={`list_item_score sortable ${
                  sortConfig.key === "score" ? "active" : ""
                }`}
                onClick={() => handleSort("score")}
              >
                <span className="sort-header">
                  Score
                  {getSortIcon("score", true)}
                </span>
              </th>
              <th
                className={`list_item_turnover sortable ${
                  sortConfig.key === "turnover" ? "active" : ""
                }`}
                onClick={() => handleSort("turnover")}
              >
                <span className="sort-header">
                  Turnover
                  {getSortIcon("turnover", true)}
                </span>
              </th>
              <th
                className={`list_item_ebitda sortable ${
                  sortConfig.key === "ebitda" ? "active" : ""
                }`}
                onClick={() => handleSort("ebitda")}
              >
                <span className="sort-header">
                  EBITDA
                  {getSortIcon("ebitda", true)}
                </span>
              </th>
              <th className="list_item_historical-financials">
                Historical Financials
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={index}
                onClick={() => navigate(`/companies/${data.indexOf(item)}`)}
              >
                <td className="list_item_name">
                  {item.company.name}{" "}
                  <span
                    className={`company-info__badge ${getScoreClass(
                      item.financials.score
                    )} ${getScoreClass(item.financials.score)}`}
                  >
                    <i className="icon icon-arrow-up"></i>
                    {item.company.microsector}
                  </span>
                </td>
                <td className="list_item_country">
                  <span className="company-info__details-item">
                    <i className="icon icon-marker"></i>
                    {item.company.location}
                  </span>
                </td>
                <td className="list_item_score">
                  <span
                    className={`company-financials__score ${getScoreClass(
                      item.financials.score
                    )}`}
                  >
                    {item.financials.score}
                    {localStorage.getItem(`assessment_${item.company?.id}`) ===
                    "true" ? (
                      <span className={`company-info__classification-badge`}>
                        <i className="icon icon-like" />
                      </span>
                    ) : localStorage.getItem(
                        `assessment_${item.company?.id}`
                      ) === "false" ? (
                      <span className={`company-info__classification-badge`}>
                        <i className="icon icon-dislike" />
                      </span>
                    ) : null}
                  </span>
                </td>
                <td className="list_item_turnover">
                  <span>€{item.financials.turnover}M</span>
                </td>
                <td className="list_item_ebitda">€{item.financials.ebitda}M</td>
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
