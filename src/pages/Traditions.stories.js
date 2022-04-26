import { nanoid } from 'nanoid';
import Traditions from './Traditions';

export default {
  title: 'pages/Traditions',
  component: Traditions,
  argTypes: {},
};

const Template = args => <Traditions {...args} />;

export const Default = Template.bind({});
Default.args = {
  stories: [
    {
      _id: nanoid(),
      tradition: 'Brezeln',
      description:
        'Brezeln wurden früher traditionell an Neujahr, Epiphanias, Fastnacht und Allerseelen verzehrt, in Fastenzeiten dabei als Fastenspeise ohne Salz oder ohne Lauge. Das Backen von Fastenbrezeln war nachweislich schon im Jahr 1726 in Mannheim Bestandteil der Meisterprüfung eines Bäckermeisters.',
    },
  ],
};
