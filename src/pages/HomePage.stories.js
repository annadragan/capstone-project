import HomePage from './HomePage';

export default {
  title: 'pages/HomePage',
  component: HomePage,
};

const Template = args => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
