import ImageCard from './ImageCard';

export default {
  title: 'components/ImageCard',
  component: ImageCard,
  argTypes: {},
};

const Template = args => <ImageCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  userStories: [
    {
      tradition:
        '1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert.',
    },
  ],
};
