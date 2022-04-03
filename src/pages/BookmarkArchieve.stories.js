import BookmarkArchive from './BookmarkArchive';

export default {
  title: 'pages/BookmarkArchive',
  component: BookmarkArchive,
  argTypes: {},
};

const Template = args => <BookmarkArchive {...args} />;

export const Default = Template.bind({});
Default.args = {};
