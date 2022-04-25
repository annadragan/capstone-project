import { nanoid } from 'nanoid';
import { BsFillArrowUpCircleFill, BsPatchPlusFill } from 'react-icons/bs';
import AsideButton from './AsideButton';

export default {
  title: 'components/AsideButton',
  component: AsideButton,
};

const Template = args => <AsideButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const scroll = Template.bind({});
scroll.args = {
  variant: 'scroll',
  children: (
    <BsFillArrowUpCircleFill style={{ width: '35px', height: '35px' }} />
  ),
  _id: nanoid(),
};

export const plus = Template.bind({});
plus.args = {
  variant: 'plus',
  children: <BsPatchPlusFill style={{ width: '35px', height: '35px' }} />,
  _id: nanoid(),
};
