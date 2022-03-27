import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    num: 2,
  },
  {
    name: "Feb",
    num: 18,
  },
  {
    name: "Mar",
    num: 48,
  },
  {
    name: "Apr",
    num: 20,
  },
  {
    name: "May",
    num: 30,
  },
  {
    name: "Jun",
    num: 10,
  },
  {
    name: "Jul",
    num: 38,
  },
  {
    name: "Aug",
    num: 20,
  },
];

export const Chart = () => {
  return (
    <div className="chart">
      <div className="chart__box">
        <div className="chart__graph">
          <div className="box__header">
            <div className="box__title">
              <p>Average resolution time</p>
              <span className="av">+4.14%</span>
            </div>
            <div className="selection">
              <div className="high">
                <i className="icon">
                  <div></div>
                </i>
                <span>High Priority</span>
              </div>
              <div className="month">
                <label htmlFor="month">
                  <i className="month__icon">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3334 1.66656V0.999949C11.3334 0.631759 11.6319 0.333282 12.0001 0.333282C12.3683 0.333282 12.6668 0.631759 12.6668 0.999949V1.66656H13.3334C14.438 1.66656 15.3334 2.56199 15.3334 3.66656V5.66656V6.99989V10.3332C15.3334 12.5424 13.5425 14.3332 11.3334 14.3332H4.66672C2.45758 14.3332 0.666718 12.5424 0.666718 10.3332V6.99989V5.66656V3.66656C0.666718 2.56199 1.56215 1.66656 2.66672 1.66656H3.99999V0.999949C3.99999 0.631759 4.29847 0.333282 4.66666 0.333282C5.03485 0.333282 5.33333 0.631759 5.33333 0.999949V1.66656H11.3334ZM1.99999 6.99989V10.3332C1.99999 11.8059 3.1939 12.9998 4.66666 12.9998H11.3333C12.8061 12.9998 14 11.8059 14 10.3332V6.99989H1.99999ZM2.66666 2.99983H3.99999V2.99995C3.99999 3.36814 4.29847 3.66662 4.66666 3.66662C5.03485 3.66662 5.33333 3.36814 5.33333 2.99995V2.99983H11.3334V2.99995C11.3334 3.36814 11.6319 3.66662 12.0001 3.66662C12.3683 3.66662 12.6668 3.36814 12.6668 2.99995V2.99983H13.3333C13.7015 2.99983 14 3.29831 14 3.6665V5.6665H1.99999V3.6665C1.99999 3.29831 2.29847 2.99983 2.66666 2.99983Z"
                        fill="#060213"
                      />
                    </svg>
                  </i>
                </label>
                <select name="" id="">
                  <option value="">This month</option>
                </select>
              </div>
            </div>
          </div>
          <ResponsiveContainer className="graph">
            <LineChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="none" />
              <XAxis dataKey="name" type="category" />
              <YAxis type="number" />
              <Tooltip />
              <Line dataKey="num" stroke="#FB6491" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">30 Mins</span>
          </div>
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">1 Hour 30 Mins</span>
          </div>
        </div>
      </div>
      <div className="chart__box">
        <div className="chart__graph">
          <div className="box__header">
            <div className="box__title">
              <p>Average resolution time</p>
              <span className="av">+4.14%</span>
            </div>
            <div className="selection">
              <div className="high">
                <i className="icon">
                  <div></div>
                </i>
                <span>High Priority</span>
              </div>
              <div className="month">
                <label htmlFor="month">
                  <i className="month__icon">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3334 1.66656V0.999949C11.3334 0.631759 11.6319 0.333282 12.0001 0.333282C12.3683 0.333282 12.6668 0.631759 12.6668 0.999949V1.66656H13.3334C14.438 1.66656 15.3334 2.56199 15.3334 3.66656V5.66656V6.99989V10.3332C15.3334 12.5424 13.5425 14.3332 11.3334 14.3332H4.66672C2.45758 14.3332 0.666718 12.5424 0.666718 10.3332V6.99989V5.66656V3.66656C0.666718 2.56199 1.56215 1.66656 2.66672 1.66656H3.99999V0.999949C3.99999 0.631759 4.29847 0.333282 4.66666 0.333282C5.03485 0.333282 5.33333 0.631759 5.33333 0.999949V1.66656H11.3334ZM1.99999 6.99989V10.3332C1.99999 11.8059 3.1939 12.9998 4.66666 12.9998H11.3333C12.8061 12.9998 14 11.8059 14 10.3332V6.99989H1.99999ZM2.66666 2.99983H3.99999V2.99995C3.99999 3.36814 4.29847 3.66662 4.66666 3.66662C5.03485 3.66662 5.33333 3.36814 5.33333 2.99995V2.99983H11.3334V2.99995C11.3334 3.36814 11.6319 3.66662 12.0001 3.66662C12.3683 3.66662 12.6668 3.36814 12.6668 2.99995V2.99983H13.3333C13.7015 2.99983 14 3.29831 14 3.6665V5.6665H1.99999V3.6665C1.99999 3.29831 2.29847 2.99983 2.66666 2.99983Z"
                        fill="#060213"
                      />
                    </svg>
                  </i>
                </label>
                <select name="" id="">
                  <option value="">This month</option>
                </select>
              </div>
            </div>
          </div>
          <ResponsiveContainer className="graph">
            <LineChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="none" />
              <XAxis dataKey="name" type="category" />
              <YAxis type="number" />
              <Tooltip />
              <Line dataKey="num" stroke="#3E68FF" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">30 Mins</span>
          </div>
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">1 Hour 30 Mins</span>
          </div>
        </div>
      </div>
      <div className="chart__box">
        <div className="chart__graph">
          <div className="box__header">
            <div className="box__title">
              <p>Average resolution time</p>
              <span className="av">+4.14%</span>
            </div>
            <div className="selection">
              <div className="high">
                <i className="icon">
                  <div></div>
                </i>
                <span>High Priority</span>
              </div>
              <div className="month">
                <label htmlFor="month">
                  <i className="month__icon">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3334 1.66656V0.999949C11.3334 0.631759 11.6319 0.333282 12.0001 0.333282C12.3683 0.333282 12.6668 0.631759 12.6668 0.999949V1.66656H13.3334C14.438 1.66656 15.3334 2.56199 15.3334 3.66656V5.66656V6.99989V10.3332C15.3334 12.5424 13.5425 14.3332 11.3334 14.3332H4.66672C2.45758 14.3332 0.666718 12.5424 0.666718 10.3332V6.99989V5.66656V3.66656C0.666718 2.56199 1.56215 1.66656 2.66672 1.66656H3.99999V0.999949C3.99999 0.631759 4.29847 0.333282 4.66666 0.333282C5.03485 0.333282 5.33333 0.631759 5.33333 0.999949V1.66656H11.3334ZM1.99999 6.99989V10.3332C1.99999 11.8059 3.1939 12.9998 4.66666 12.9998H11.3333C12.8061 12.9998 14 11.8059 14 10.3332V6.99989H1.99999ZM2.66666 2.99983H3.99999V2.99995C3.99999 3.36814 4.29847 3.66662 4.66666 3.66662C5.03485 3.66662 5.33333 3.36814 5.33333 2.99995V2.99983H11.3334V2.99995C11.3334 3.36814 11.6319 3.66662 12.0001 3.66662C12.3683 3.66662 12.6668 3.36814 12.6668 2.99995V2.99983H13.3333C13.7015 2.99983 14 3.29831 14 3.6665V5.6665H1.99999V3.6665C1.99999 3.29831 2.29847 2.99983 2.66666 2.99983Z"
                        fill="#060213"
                      />
                    </svg>
                  </i>
                </label>
                <select name="" id="">
                  <option value="">This month</option>
                </select>
              </div>
            </div>
          </div>
          <ResponsiveContainer className="graph">
            <LineChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="none" />
              <XAxis dataKey="name" type="category" />
              <YAxis type="number" />
              <Tooltip />
              <Line dataKey="num" stroke="#FB6491" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">30 Mins</span>
          </div>
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">1 Hour 30 Mins</span>
          </div>
        </div>
      </div>
      <div className="chart__box">
        <div className="chart__graph">
          <div className="box__header">
            <div className="box__title">
              <p>Average resolution time</p>
              <span className="av">+4.14%</span>
            </div>
            <div className="selection">
              <div className="high">
                <i className="icon">
                  <div></div>
                </i>
                <span>High Priority</span>
              </div>
              <div className="month">
                <label htmlFor="month">
                  <i className="month__icon">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3334 1.66656V0.999949C11.3334 0.631759 11.6319 0.333282 12.0001 0.333282C12.3683 0.333282 12.6668 0.631759 12.6668 0.999949V1.66656H13.3334C14.438 1.66656 15.3334 2.56199 15.3334 3.66656V5.66656V6.99989V10.3332C15.3334 12.5424 13.5425 14.3332 11.3334 14.3332H4.66672C2.45758 14.3332 0.666718 12.5424 0.666718 10.3332V6.99989V5.66656V3.66656C0.666718 2.56199 1.56215 1.66656 2.66672 1.66656H3.99999V0.999949C3.99999 0.631759 4.29847 0.333282 4.66666 0.333282C5.03485 0.333282 5.33333 0.631759 5.33333 0.999949V1.66656H11.3334ZM1.99999 6.99989V10.3332C1.99999 11.8059 3.1939 12.9998 4.66666 12.9998H11.3333C12.8061 12.9998 14 11.8059 14 10.3332V6.99989H1.99999ZM2.66666 2.99983H3.99999V2.99995C3.99999 3.36814 4.29847 3.66662 4.66666 3.66662C5.03485 3.66662 5.33333 3.36814 5.33333 2.99995V2.99983H11.3334V2.99995C11.3334 3.36814 11.6319 3.66662 12.0001 3.66662C12.3683 3.66662 12.6668 3.36814 12.6668 2.99995V2.99983H13.3333C13.7015 2.99983 14 3.29831 14 3.6665V5.6665H1.99999V3.6665C1.99999 3.29831 2.29847 2.99983 2.66666 2.99983Z"
                        fill="#060213"
                      />
                    </svg>
                  </i>
                </label>
                <select name="" id="month">
                  <option value="">This month</option>
                </select>
              </div>
            </div>
          </div>
          <ResponsiveContainer className="graph">
            <LineChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="none" />
              <XAxis dataKey="name" type="category" />
              <YAxis type="number" />
              <Tooltip />
              <Line dataKey="num" stroke="#07C9E2" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">30 Mins</span>
          </div>
          <div className="card__child">
            <span>Average Response Time</span>
            <span className="time">1 Hour 30 Mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
