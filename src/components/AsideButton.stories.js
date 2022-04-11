import AsideButton from './AsideButton';

export default {
  title: 'components/AsideButton',
  component: AsideButton,
};

const Template = args => <AsideButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const scroll = Template.bind({});
scroll.args = {
  variant: 'scroll',
};

export const plus = Template.bind({});
plus.args = {
  variant: 'plus',
};
