import { useState } from "react";
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
  const [activeAccordion, setActiveAccordion] = useState(0);
  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
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
                    data={data.historical_financials}
                  />
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
        </AccordionItem>
        <AccordionItem
          title="Balance Sheet"
          active={activeAccordion === 1}
          onClick={() => handleAccordionClick(1)}
        >
          <div className="container">
            <CompanyHistoricalFinancials data={data.historical_financials} />
            <CompanyIncomeTable data={data.income_statement} />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Cashflow"
          active={activeAccordion === 2}
          onClick={() => handleAccordionClick(2)}
        >
          <div className="container">
            <CompanyNfdCapex data={data.ratios} />
            <CompanyIncomeTable data={data.income_statement} />
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PageCompany;
