import "./CompanyInfo.scss";
import { getScoreClass } from "../../utils";

const CompanyInfo = ({ data, score }) => {
  return (
    <section className="company-info">
      <h1 className="page-title">{data.name}</h1>
      <p className="company-info__description">{data.description}</p>
      <div className="company-info__classification">
        <div className="company-info__classification-item">
          <p className="company-info__classification-item-label">Microsector</p>
          <span className={`company-info__badge ${getScoreClass(score)}`}>
            <i className="icon icon-arrow-up" />
            {data.microsector}
          </span>
        </div>
        <div className="company-info__classification-item">
          <p className="company-info__classification-item-label">
            Assessment of the company's classification
          </p>
          <div className="company-info__classification-badges">
            <span className="company-info__classification-badge">
              <i className="icon icon-like" />
            </span>
            <span className="company-info__classification-badge">
              <i className="icon icon-dislike" />
            </span>
          </div>
        </div>
      </div>
      <div className="company-info__details">
        <p className="company-info__details-item">
          <i className="icon icon-asterisk" />
          {data.id}
        </p>
        <p className="company-info__details-item">
          <i className="icon icon-marker" />
          {data.location}
        </p>
        <p className="company-info__details-item">
          <i className="icon icon-calendar" />
          {data.founded}
        </p>
        <p className="company-info__details-item">
          <i className="icon icon-link" />
          <a href={data.website} target="_blank" rel="noopener noreferrer">
            {data.website}
          </a>
        </p>
      </div>
    </section>
  );
};

export default CompanyInfo;
