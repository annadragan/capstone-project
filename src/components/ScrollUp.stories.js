import ScrollUp from './ScrollUp';

export default {
  title: 'components/ScrollUp',
  component: ScrollUp,
};

const Template = args => <ScrollUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  backToTop: false,
};
