import VocabularyCards from './VocabularyCards';

export default {
  title: 'pages/VocabularyCards',
  component: VocabularyCards,
  argTypes: {},
};

const Template = args => <VocabularyCards {...args} />;

export const Default = Template.bind({});
Default.args = {};
