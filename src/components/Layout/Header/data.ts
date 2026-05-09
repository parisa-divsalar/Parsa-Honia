import { PublicRoutes } from '@/config/routes';
import { generateFakeUUIDv4 } from '@/utils/generateUUID';

import { TMenuItem } from '@/types/common';

export const HeaderMenuList: TMenuItem[] = [
  {
    id: generateFakeUUIDv4(),
    label: 'خانه',
    link: PublicRoutes.landing,
  },
  {
    id: generateFakeUUIDv4(),
    label: 'بلاگ',
    // link: PublicRoutes.blog,
      link: '',


  },
  {
    id: generateFakeUUIDv4(),
    label: 'درباره ما',
    // link: PublicRoutes.about,
      link: '',

  },
];
