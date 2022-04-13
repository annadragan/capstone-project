import Traditions from './Traditions';

export default {
  title: 'pages/Traditions',
  component: Traditions,
  argTypes: {},
};

const Template = args => <Traditions {...args} />;

export const Default = Template.bind({});
Default.args = {};
