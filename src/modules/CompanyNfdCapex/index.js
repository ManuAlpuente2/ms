import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./CompanyNfdCapex.scss";

const COLORS = {
  nfdEbitda: "var(--color-charting-13)",
  capexEbitda: "var(--color-charting-15)",
};

const CompanyNfdCapex = ({ data }) => {
  if (!data) return null;

  const chartData = data.years.map((year, i) => ({
    year,
    nfdEbitda: data.nfd_ebitda[i],
    capexEbitda: data.capex_ebitda[i],
  }));

  return (
    <div className="company-nfd-capex">
      <h2 class="page-section-title">NFD/EBITDA and CAPEX/EBITDA</h2>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            stroke="var(--color-background-low)"
            vertical={false}
          />
          <XAxis
            dataKey="year"
            tick={{ fill: "var(--color-content-low)", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            padding={{ left: 8, right: 8 }}
            interval={0}
          />
          <YAxis
            tick={{ fill: "var(--color-content-low)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => (v == null ? "" : `${v}x`)}
            allowDecimals={true}
            domain={[0, "auto"]}
          />
          <Tooltip
            formatter={(value) => `${value}x`}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Legend
            iconType="square"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: 0 }}
            payload={[
              {
                value: "NFD/EBITDA",
                type: "plainline",
                color: COLORS.nfdEbitda,
              },
              {
                value: "CAPEX/EBITDA",
                type: "plainline",
                color: COLORS.capexEbitda,
              },
            ]}
          />
          <Line
            type="linear"
            dataKey="nfdEbitda"
            name="NFD/EBITDA"
            stroke={COLORS.nfdEbitda}
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
          <Line
            type="linear"
            dataKey="capexEbitda"
            name="CAPEX/EBITDA"
            stroke={COLORS.capexEbitda}
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanyNfdCapex;
