import PaymentForm from "./PaymentForm";

export default {
  title: "Payment/PaymentForm",
  component: PaymentForm,
};

const Template = (args) => <PaymentForm {...args} />;

export const Default = Template.bind({});
Default.args = {};