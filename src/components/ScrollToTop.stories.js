import ScrollToTop from './ScrollToTop';

export default {
  title: 'components/ScrollToTop',
  component: ScrollToTop,
};

const Template = args => <ScrollToTop {...args} />;

export const Default = Template.bind({});
Default.args = {
  backToTop: false,
};
