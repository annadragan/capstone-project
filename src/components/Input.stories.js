import Input from './Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {},
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { labelText: 'Label', placeholder: 'placeholder' };
