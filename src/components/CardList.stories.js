import CardList from './CardList';

export default {
  title: '/CardList',
  component: CardList,
};

const Template = args => <CardList {...args} />;

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
