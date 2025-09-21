import React from "react";

const CompaniesContext = React.createContext({
  companies: {},
  setCompanies: () => {},
});

export default CompaniesContext;
