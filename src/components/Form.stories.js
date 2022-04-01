import Form from './Form';

export default {
  title: '/Form',
  component: Form,
  argTypes: {
    onCreateTerm: 'onSubmit',
  },
};

const Template = args => <Form {...args} />;
export const Default = Template.blind({});
Default.args = {};
