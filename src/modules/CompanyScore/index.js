import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts";
import "./CompanyScore.scss";

const COLORS = {
  company: "#209464",
  microsector: "var(--color-charting-15)",
  sme: "var(--color-charting-14)",
};

const CompanyScore = ({ data }) => {
  if (!data) return null;

  const chartData = data.categories.map((cat, i) => ({
    category: cat,
    company: data.company[i],
    microsector: data.microsector[i],
    sme: data.sme_index[i],
  }));

  return (
    <div className="company-score">
      <h2 class="page-section-title">Mscope score indicators</h2>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        width={300}
        height={270}
        data={chartData}
      >
        <PolarGrid stroke="#e6e6e6" />
        <PolarAngleAxis
          dataKey="category"
          tick={{ fill: "#626266", fontSize: 16 }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 10]}
          tick={false}
          axisLine={false}
        />
        <Radar
          name="Company"
          dataKey="company"
          stroke={COLORS.company}
          fill={COLORS.company}
          fillOpacity={0.3}
          strokeOpacity={1}
          dot={{ r: 2.5, fill: COLORS.company, fillOpacity: 1 }}
        />
        <Radar
          name="Microsector"
          dataKey="microsector"
          stroke={COLORS.microsector}
          strokeOpacity={0.3}
          strokeWidth={0}
          fill={COLORS.microsector}
          fillOpacity={0.3}
          dot={{
            r: 2.5,
            fill: COLORS.microsector,
            fillOpacity: 1,
          }}
        />
        <Radar
          name="High growth SME index"
          dataKey="sme"
          stroke={COLORS.sme}
          strokeWidth={0}
          fill={COLORS.sme}
          fillOpacity={0.3}
          dot={{ r: 2.5, fill: COLORS.sme, fillOpacity: 1 }}
        />
        <Tooltip />
        <Legend
          iconType="square"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{ paddingTop: 20 }}
        />
      </RadarChart>
    </div>
  );
};

export default CompanyScore;
