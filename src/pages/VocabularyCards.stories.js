import VocabularyCards from './VocabularyCards';

export default {
  title: 'components/VocabularyCards',
  component: VocabularyCards,
  argTypes: {},
};

const Template = args => <VocabularyCards {...args} />;

export const Default = Template.bind({});
Default.args = {};
