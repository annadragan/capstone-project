import { nanoid } from 'nanoid';
import { BsShieldFillCheck, BsTrash } from 'react-icons/bs';
import { FaFeatherAlt } from 'react-icons/fa';
import IconButton from './IconButton';

export default {
  title: 'components/IconButton',
  component: IconButton,
  argTypes: { onClick: { actions: 'click' } },
};

const Template = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const trash = Template.bind({});
trash.args = {
  variant: 'trash',
  children: <BsTrash style={{ width: '25px', height: '25px' }} />,
  _id: nanoid(),
};

export const bookmark = Template.bind({});
bookmark.args = {
  variant: 'bookmark',
  children: <BsShieldFillCheck style={{ width: '25px', height: '25px' }} />,
  _id: nanoid(),
};

export const pen = Template.bind({});
pen.args = {
  variant: 'pen',
  _id: nanoid(),
  children: <FaFeatherAlt style={{ width: '25px', height: '25px' }} />,
};
