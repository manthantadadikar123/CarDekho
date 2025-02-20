import React from "react";
import HotelDashboard from "./HotelDashboard";

export default {
  title: "Components/HotelDashboard",
  component: HotelDashboard,
};

const Template = (args) => <HotelDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};