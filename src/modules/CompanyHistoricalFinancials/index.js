import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import "./CompanyHistoricalFinancials.scss";

const COLORS = {
  turnover: "var(--color-charting-13)",
  ebitda: "var(--color-charting-14)",
  margin: "var(--color-charting-15)",
};

const CompanyHistoricalFinancials = ({ data }) => {
  if (!data) return null;

  const chartData = data.years.map((year, i) => ({
    year,
    turnover: data.turnover[i],
    ebitda: data.ebitda[i],
    ebitdaMargin: data.ebitda_margin[i],
  }));

  return (
    <div className="company-historical-financials">
      <h2 class="page-section-title">Historical Financials</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barGap={16}
          barCategoryGap={16}
        >
          <XAxis
            dataKey="year"
            tick={{ fill: "var(--color-content-low)", fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            tick={{ fill: "var(--color-content-low)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => (v == null ? "" : `${v}€M`)}
            allowDecimals={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "var(--color-content-low)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => (v == null ? "" : `${v}%`)}
            allowDecimals={false}
            domain={[0, 100]}
          />
          <Tooltip
            formatter={(value, name) =>
              name === "ebitdaMargin" ? `${value}%` : value
            }
            labelFormatter={(label) => `Year: ${label}`}
            cursor={true}
          />
          <Legend
            iconType="square"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: 0 }}
            payload={[
              { value: "Turnover", type: "square", color: COLORS.turnover },
              { value: "EBITDA", type: "square", color: COLORS.ebitda },
              { value: "EBITDA Margin", type: "line", color: COLORS.margin },
            ]}
          />
          <CartesianGrid
            stroke="var(--color-background-low)"
            vertical={false}
            horizontal={true}
            strokeWidth={1}
            yAxisId="left"
          />
          <Bar
            yAxisId="left"
            dataKey="turnover"
            name="Turnover"
            fill={COLORS.turnover}
            radius={[24, 24, 0, 0]}
            barSize={16}
            isAnimationActive={true}
          />
          <Bar
            yAxisId="left"
            dataKey="ebitda"
            name="EBITDA"
            fill={COLORS.ebitda}
            radius={[24, 24, 0, 0]}
            barSize={16}
            isAnimationActive={true}
          />
          <Line
            yAxisId="right"
            type="linear"
            dataKey="ebitdaMargin"
            name="EBITDA Margin"
            stroke={COLORS.margin}
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanyHistoricalFinancials;
