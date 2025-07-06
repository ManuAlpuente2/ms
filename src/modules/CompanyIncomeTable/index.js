import "./CompanyIncomeTable.scss";
import Button from "../../components/Button";

const CompanyIncomeTable = ({ data }) => {
  if (!data) return null;

  const { cagr_5y, entries, values } = data;
  const years = Object.keys(values);

  return (
    <>
      <div className="company-income-table__actions">
        <Button>
          <i className="icon icon-download"></i> Download
        </Button>
      </div>
      <div className="company-income-table">
        <table className="company-income-table__table">
          <thead>
            <tr>
              <th className="company-income-table__th" rowSpan="2">
                Income Statement (€M)
              </th>
              <th className="company-income-table__th" rowSpan="2">
                5Y CAGR (%)
              </th>
              <th className="company-income-table__th" rowSpan="2">
                Turnover (%)
              </th>
              {years.map((year) => (
                <th className="company-income-table__th" key={year}>
                  {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr
                key={entry}
                className={`company-income-table__row ${
                  [1, 4, 7, 10].includes(i)
                    ? " company-income-table__row--separator"
                    : ""
                } ${
                  [0, 2, 5, 8, 11, 13].includes(i)
                    ? " company-income-table__row--bold"
                    : ""
                }`}
              >
                <td
                  className={`company-income-table__td company-income-table__td--label`}
                >
                  {entry}
                </td>
                <td className="company-income-table__td">{cagr_5y}</td>
                <td className="company-income-table__td">100</td>
                {years.map((year) => (
                  <td className="company-income-table__td" key={year + entry}>
                    {values[year][i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompanyIncomeTable;
