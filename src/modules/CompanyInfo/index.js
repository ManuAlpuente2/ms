import { useState, useEffect } from "react";
import "./CompanyInfo.scss";
import { getScoreClass } from "../../utils";

const CompanyInfo = ({ data, score }) => {
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    const localAssessment = localStorage.getItem(`assessment_${data?.id}`);
    if (localAssessment !== null) {
      setAssessment(JSON.parse(localAssessment));
    } else {
      setAssessment(null);
    }
  }, [data?.id]);

  useEffect(() => {
    localStorage.setItem(`assessment_${data.id}`, JSON.stringify(assessment));
  }, [assessment, data?.id]);

  const handleAssessmentChange = (value) => {
    if (value === assessment) {
      setAssessment(null);
    } else {
      setAssessment(value);
    }
  };

  return (
    <section className="company-info">
      <h1 className="page-title">{data?.name}</h1>
      <p className="company-info__description">{data?.description}</p>
      <div className="company-info__classification">
        <div className="company-info__classification-item">
          <p className="company-info__classification-item-label">Microsector</p>
          <span className={`company-info__badge ${getScoreClass(score)}`}>
            <i className="icon icon-arrow-up" />
            {data?.microsector}
          </span>
        </div>
        <div className="company-info__classification-item">
          <p className="company-info__classification-item-label">
            Assessment of the company's classification
          </p>
          <div className="company-info__classification-badges">
            <span
              className={`company-info__classification-badge ${
                assessment === true ? "classification-badge--success" : ""
              }`}
              onClick={() => handleAssessmentChange(true)}
            >
              <i className="icon icon-like" />
            </span>
            <span
              className={`company-info__classification-badge ${
                assessment === false ? "classification-badge--danger" : ""
              }`}
              onClick={() => handleAssessmentChange(false)}
            >
              <i className="icon icon-dislike" />
            </span>
          </div>
        </div>
      </div>
      <div className="company-info__details">
        <p className="company-info__details-item">
          <i className="icon icon-asterisk" />
          {data?.id}
        </p>
        <p className="company-info__details-item">
          <i className="icon icon-marker" />
          {data?.location}
        </p>
        <p className="company-info__details-item">
          <i className="icon icon-calendar" />
          {data?.founded}
        </p>
        <p className="company-info__details-item">
          <i className="icon icon-link" />
          <a href={data?.website} target="_blank" rel="noopener noreferrer">
            {data?.website}
          </a>
        </p>
      </div>
    </section>
  );
};

export default CompanyInfo;
