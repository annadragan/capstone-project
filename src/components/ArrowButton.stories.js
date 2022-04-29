import ArrowButton from './ArrowButton';

export default {
  title: 'components/ArrowButton',
  component: ArrowButton,
};

const Template = args => <ArrowButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  backToTop: false,
};
