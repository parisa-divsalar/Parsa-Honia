import { generateFakeUUIDv4 } from '@/utils/generateUUID';

import { AboutItem } from '@/types/about';
import { AboutTeamItem } from '@/types/aboutTeam';

export const AboutList: AboutItem[] = [
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/1.png',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/2.png',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/3.png',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/4.png',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/5.png',
  },
];

export const AboutTeamList: AboutTeamItem[] = [
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/test-cart.png',
    title: 'باران اکبری',
    des: 'طراح محصول',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/test-cart.png',
    title: 'باران اکبری',
    des: 'طراح محصول',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/test-cart.png',
    title: 'باران اکبری',
    des: 'طراح محصول',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/test-cart.png',
    title: 'باران اکبری',
    des: 'طراح محصول',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/test-cart.png',
    title: 'باران اکبری',
    des: 'طراح محصول',
  },
  {
    id: generateFakeUUIDv4(),
    img: '/images/about/test-cart.png',
    title: 'باران اکبری',
    des: 'طراح محصول',
  },
];
