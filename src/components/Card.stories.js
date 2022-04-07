import Card from './Card';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    showMessage: { type: 'boolean' },
    isEditing: { type: 'boolean' },
  },
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  userVocabulary: [
    {
      _id: 'c2hvcHBpbmcuaXRlbTox',
      word: 'Aufflackern',
      example: '"Der Widerstand ist noch einmal kurz aufgeflackert"',
      explanation:
        'an Heftigkeit gewinnen, auflodern, heftiger werden. Übertragen: immer mal wieder kurz an intensität gewinnen',
    },
  ],
};
