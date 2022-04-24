import ImageForm from './ImageForm';

export default {
  title: '/ImageForm',
  component: ImageForm,
  argTypes: {
    onCreateTradition: 'onSubmit',
  },
};

const Template = args => <ImageForm {...args} />;
export const Default = Template.blind({});
Default.args = {};
