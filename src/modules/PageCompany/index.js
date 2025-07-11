import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CompanyFinancials from "../CompanyFinancials";
import CompanyInfo from "../CompanyInfo";
import CompanyScore from "../CompanyScore";
import CompanyHistoricalFinancials from "../CompanyHistoricalFinancials";
import CompanyNfdCapex from "../CompanyNfdCapex";
import CompanyIncomeTable from "../CompanyIncomeTable";
import Accordion, { AccordionItem } from "../../components/Accordion";
import CompanyPageNav from "../CompanyPageNav";
import "./PageCompany.scss";

const PageCompany = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(0);
  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      )
        return;
      if (e.key === "ArrowLeft") {
        if (Number(id) > 0) navigate(`/companies/${Number(id) - 1}`);
      }
      if (e.key === "ArrowRight") {
        if (Number(id) < data.length - 1)
          navigate(`/companies/${Number(id) + 1}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [id]);

  return (
    <>
      <div className="company-fist-group">
        <div className="container">
          <div className="row company-fist-group_row">
            <div className="col col_company-info">
              <CompanyInfo
                data={data[id].company}
                score={data[id].financials.score}
              />
            </div>
            <div className="col col_company-financials">
              <CompanyFinancials data={data[id].financials} />
            </div>
            <div className="col col_company-score">
              <CompanyScore
                data={data[id].score_indicators}
                score={data[id].financials.score}
              />
            </div>
          </div>
        </div>
      </div>
      <CompanyPageNav />
      <Accordion>
        <AccordionItem
          title="Income Statement"
          active={activeAccordion === 0}
          onClick={() => handleAccordionClick(0)}
        >
          <div className="company-second-group">
            <div className="container">
              <div className="row company-second-group_row">
                <div className="col col_historical-financials">
                  <CompanyHistoricalFinancials
                    data={data[id].historical_financials}
                  />
                </div>
                <div className="col col_nfd-capex">
                  <CompanyNfdCapex data={data[id].ratios} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <CompanyIncomeTable data={data[id].income_statement} />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Balance Sheet"
          active={activeAccordion === 1}
          onClick={() => handleAccordionClick(1)}
        >
          <div className="container">
            <CompanyHistoricalFinancials
              data={data[id].historical_financials}
            />
            <CompanyIncomeTable data={data[id].income_statement} />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Cashflow"
          active={activeAccordion === 2}
          onClick={() => handleAccordionClick(2)}
        >
          <div className="container">
            <CompanyNfdCapex data={data[id].ratios} />
            <CompanyIncomeTable data={data[id].income_statement} />
          </div>
        </AccordionItem>
      </Accordion>
      <div className="paginator-links container">
        <Link
          to={`/companies/${Number(id) - 1}`}
          className={`paginator-link paginator-link--prev ${
            Number(id) === 0 ? "paginator-link--disabled" : ""
          }`}
          role="button"
          tabIndex={0}
          title="Previous company (Arrow Left)"
        >
          <i className="icon icon-chevron-prev" />
          <span className="paginator-link__text">Previous company</span>
        </Link>
        <Link
          to={`/companies/${Number(id) + 1}`}
          className={`paginator-link paginator-link--next ${
            Number(id) === data.length - 1 ? "paginator-link--disabled" : ""
          }`}
          role="button"
          tabIndex={0}
          title="Next company (Arrow Right)"
        >
          <span className="paginator-link__text">Next company</span>
          <i className="icon icon-chevron-next" />
        </Link>
      </div>
    </>
  );
};

export default PageCompany;
