import "./CompanyIncomeTable.scss";
import Skeleton from "../../components/Skeleton";
import Button from "../../components/Button";

const CompanyIncomeTable = ({ data, loading }) => {
  if (!data) return null;

  const { cagr_5y, entries, values } = data;
  const years = Object.keys(values);

  return (
    <>
      <div className="company-income-table__actions">
        {!loading ? (
          <Button>
            <i className="icon icon-download"></i> Export
          </Button>
        ) : null}
      </div>
      <div className="company-income-table">
        <table className="company-income-table__table table">
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
          {loading ? (
            <tbody>
              <tr key={1} className={`company-income-table__row`}>
                <td
                  className={`company-income-table__td company-income-table__td--label`}
                >
                  <Skeleton width="100%" />
                </td>
                <td className="company-income-table__td">
                  <Skeleton width="4em" />
                </td>
                <td className="company-income-table__td">
                  <Skeleton width="4em" />
                </td>
                {years.map((year) => (
                  <td className="company-income-table__td" key={year + 1}>
                    <Skeleton width="4em" />
                  </td>
                ))}
              </tr>
              <tr key={2} className={`company-income-table__row`}>
                <td
                  className={`company-income-table__td company-income-table__td--label`}
                >
                  <Skeleton width="100%" />
                </td>
                <td className="company-income-table__td">
                  <Skeleton width="4em" />
                </td>
                <td className="company-income-table__td">
                  <Skeleton width="4em" />
                </td>
                {years.map((year) => (
                  <td className="company-income-table__td" key={year + 1}>
                    <Skeleton width="4em" />
                  </td>
                ))}
              </tr>
              <tr key={3} className={`company-income-table__row`}>
                <td
                  className={`company-income-table__td company-income-table__td--label`}
                >
                  <Skeleton width="100%" />
                </td>
                <td className="company-income-table__td">
                  <Skeleton width="4em" />
                </td>
                <td className="company-income-table__td">
                  <Skeleton width="4em" />
                </td>
                {years.map((year) => (
                  <td className="company-income-table__td" key={year + 1}>
                    <Skeleton width="4em" />
                  </td>
                ))}
              </tr>
            </tbody>
          ) : (
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
          )}
        </table>
      </div>
    </>
  );
};

export default CompanyIncomeTable;
