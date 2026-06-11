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
    label: 'پله‌برقی و پیاده‌رو متحرک',
    link: '#mobility',
  },
  {
    id: generateFakeUUIDv4(),
    label: 'سرویس',
    link: '#service',
  },
  {
    id: generateFakeUUIDv4(),
    label: 'فرصت‌های شغلی',
    link: '#career',
  },
];
