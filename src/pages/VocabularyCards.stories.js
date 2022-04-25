import VocabularyCards from './VocabularyCards';

export default {
  title: 'pages/VocabularyCards',
  component: VocabularyCards,
  argTypes: {},
};

const Template = args => <VocabularyCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  vocabulary: [
    {
      _id: 'c2hvcHBpbmcuaXRlbTox',
      word: 'Aufflackern',
      example: '"Der Widerstand ist noch einmal kurz aufgeflackert"',
      explanation:
        'an Heftigkeit gewinnen, auflodern, heftiger werden. Übertragen: immer mal wieder kurz an intensität gewinnen',
    },
  ],
};
