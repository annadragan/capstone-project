import IdiomaticExpressions from './IdiomaticExpressions';

export default {
  title: 'pages/IdiomaticExpressions',
  component: IdiomaticExpressions,
  argTypes: {},
};

const Template = args => <IdiomaticExpressions {...args} />;

export const Default = Template.bind({});
Default.args = {};
