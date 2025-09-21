import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CompanyFinancials from "../CompanyFinancials";
import CompanyInfo from "../CompanyInfo";
import CompanyScore from "../CompanyScore";
import CompanyHistoricalFinancials from "../CompanyHistoricalFinancials";
import CompanyNfdCapex from "../CompanyNfdCapex";
import CompanyIncomeTable from "../CompanyIncomeTable";
import Accordion, { AccordionItem } from "../../components/Accordion";
import CompanyPageNav from "../CompanyPageNav";
import CompaniesContext from "../../contexts/CompaniesContext";
import "./PageCompany.scss";

const PageCompany = ({ data }) => {
  const { companies, setCompanies } = useContext(CompaniesContext);
  const { id } = useParams();
  const [isLoadingCompanyInfo, setIsLoadingCompanyInfo] = useState(true);
  const [isLoadingCompanyFinancials, setIsLoadingCompanyFinancials] =
    useState(true);
  const [isLoadingCompanyScore, setIsLoadingCompanyScore] = useState(true);
  const [isLoadingTable, setIsLoadingTable] = useState(true);
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
    setTimeout(() => {
      setIsLoadingCompanyInfo(false);
    }, 1000);
    setTimeout(() => {}, 3000);
    setTimeout(() => {
      setIsLoadingCompanyScore(false);
    }, 2000);
    setTimeout(() => {
      setIsLoadingCompanyFinancials(false);
      setIsLoadingTable(false);
    }, 4000);
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
                data={companies?.[id]?.company}
                score={companies?.[id]?.financials.score}
                loading={isLoadingCompanyInfo}
              />
            </div>
            <div className="col col_company-financials">
              <CompanyFinancials
                data={companies?.[id]?.financials}
                loading={isLoadingCompanyFinancials}
              />
            </div>
            <div className="col col_company-score">
              <CompanyScore
                data={companies?.[id]?.score_indicators}
                score={companies?.[id]?.financials.score}
                loading={isLoadingCompanyScore}
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
                    data={companies?.[id]?.historical_financials}
                    loading={isLoadingTable}
                  />
                </div>
                <div className="col col_nfd-capex">
                  <CompanyNfdCapex
                    data={companies?.[id]?.ratios}
                    loading={isLoadingTable}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <CompanyIncomeTable
              data={companies?.[id]?.income_statement}
              loading={isLoadingTable}
            />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Balance Sheet"
          active={activeAccordion === 1}
          onClick={() => handleAccordionClick(1)}
        >
          <div className="container">
            <CompanyHistoricalFinancials
              data={companies?.[id]?.historical_financials}
            />
            <CompanyIncomeTable data={companies?.[id]?.income_statement} />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Cashflow"
          active={activeAccordion === 2}
          onClick={() => handleAccordionClick(2)}
        >
          <div className="container">
            <CompanyNfdCapex data={companies?.[id]?.ratios} />
            <CompanyIncomeTable data={companies?.[id]?.income_statement} />
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
            Number(id) === companies?.length - 1
              ? "paginator-link--disabled"
              : ""
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
