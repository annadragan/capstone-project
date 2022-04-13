import ImageCardList from './ImageCardList';

export default {
  title: '/ImageCardList',
  component: ImageCardList,
};

const Template = args => <ImageCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tradition:
    '1931 kam die Tradition aus den Vereinigten Staaten nach Schweden und wurde zunächst auch im Juni gefeiert.',
};
