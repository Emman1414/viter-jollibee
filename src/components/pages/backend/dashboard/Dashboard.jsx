import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardAccordion from "./DashboardAccordion";
import DashboardCard from "./DashboardCard";

import { menus } from "../menu-data";

const Dashboard = () => {
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Jollibee!" />
            <div className="px-4">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="grid grid-cols-4 gap-5">
                    <DashboardCard title="Chicken joy" filterby="Chickenjoy" />
                    <DashboardCard title="Value Meal" filterby="Valuemeal" />
                    <DashboardCard title="Burger" filterby="Burger" />
                    <DashboardCard title="Spaghetti" filterby="Spaghetti" />
                    <DashboardCard title="Palabok" filterby="Palabok" />
                    <DashboardCard title="Sides" filterby="Sides" />
                    <DashboardCard title="Desserts" filterby="Desserts" />
                    <DashboardCard title="Desserts" filterby="Desserts" />
                  </div>

                  <div className="chart mt-10">
                    <h3>Menu Prices</h3>
                    <BarChart
                      width={1200}
                      height={400}
                      data={menus.slice(0, 4)}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="menu_title" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="menu_price"
                        fill="#8884d8"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                      />
                    </BarChart>
                  </div>
                </div>

                <div className="sidebar custom-scroll h-[calc(100vh-200px)] overflow-auto">
                  <DashboardAccordion
                    title="Chicken joy"
                    filterby="Chickenjoy"
                  />
                  <DashboardAccordion title="Value Meal" filterby="Valuemeal" />
                  <DashboardAccordion title="Burger" filterby="Burger" />
                  <DashboardAccordion title="Spaghetti" filterby="Spaghetti" />
                  <DashboardAccordion title="Palabok" filterby="Palabok" />
                  <DashboardAccordion title="Sides" filterby="Sides" />
                  <DashboardAccordion title="Desserts" filterby="Desserts" />
                  <DashboardAccordion title="Desserts" filterby="Desserts" />
                </div>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
