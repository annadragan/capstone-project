import DeleteMessageButton from './DeleteMessageButton';

export default {
  title: 'components/DeleteMessageButton',
  component: DeleteMessageButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <DeleteMessageButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const confirm = Template.bind({});
confirm.args = {
  children: 'Yes',
  variant: 'confirm',
};
export const cancel = Template.bind({});
cancel.args = {
  children: 'No',
  variant: 'cancel',
};
