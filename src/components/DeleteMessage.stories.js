import DeleteMessage from './DeleteMessage';

export default {
  title: '/DeleteMessage',
  component: DeleteMessage,
};

const Template = args => <DeleteMessage {...args} />;

export const Default = Template.bind({});
Default.args = {};
