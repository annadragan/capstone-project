import IconButton from './IconButton';

export default {
  title: 'components/IconButton',
  component: IconButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const trash = Template.bind({});
trash.args = {
  variant: 'trash',
};

export const bookmark = Template.bind({});
bookmark.args = {
  variant: 'bookmark',
};

export const pen = Template.bind({});
pen.args = {
  variant: 'pen',
};
