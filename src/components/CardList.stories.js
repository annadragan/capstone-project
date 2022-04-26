import { nanoid } from 'nanoid';
import CardList from './CardList';

export default {
  title: '/CardList',
  component: CardList,
  argTypes: {
    isBookmarked: { type: 'boolean' },
    onBookmarkCard: { actions: 'bookmark' },
  },
};

const Template = args => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  vocabulary: [
    {
      _id: nanoid(),
      word: 'Aufflackern',
      example: '"Der Widerstand ist noch einmal kurz aufgeflackert"',
      explanation:
        'an Heftigkeit gewinnen, auflodern, heftiger werden. Übertragen: immer mal wieder kurz an intensität gewinnen',
    },
    {
      _id: nanoid(),
      word: 'getrost',
      example: '"Du kannst dich getrost auf mich verlassen."',
      explanation:
        'zuversichtlich, vertrauensvoll in Erwartung von Künftigem, fest, sicher im Glauben oder in einer weltbezüglichen Erwartung.',
    },
  ],
};
