import { generateFakeUUIDv4 } from '@/utils/generateUUID';

import { LastPostItem } from '@/types/lastPost';

export const AllBlogList: LastPostItem[] = [
  {
    id: generateFakeUUIDv4(),
    title: 'هوش مصنوعی (به انگلیسی: Artificial intelligence)',
    time: 'عادل گلدست • ۱۰ اسفند ۱۴۰۳',
    img: '/images/blog/a-1.png',
    des: 'خدمات جامع در زمینه کامپیوتر، نرم‌افزار و سخت‌افزار را با بالاترین سطح کیفیت به مشتریان ارائه می‌دهد. این شرکت با به‌کارگیری جدیدترین فناوری‌ها و ارائه راهکارهای نوین',
  },
  {
    id: generateFakeUUIDv4(),
    title: 'هوش مصنوعی (به انگلیسی: Artificial intelligence)',
    time: 'عادل گلدست • ۱۰ اسفند ۱۴۰۳',
    img: '/images/blog/a-2.png',
    des: 'خدمات جامع در زمینه کامپیوتر، نرم‌افزار و سخت‌افزار را با بالاترین سطح کیفیت به مشتریان ارائه می‌دهد. این شرکت با به‌کارگیری جدیدترین فناوری‌ها و ارائه راهکارهای نوین',
  },
  {
    id: generateFakeUUIDv4(),
    title: 'هوشمصنوعی(به انگلیسی: Artificial intelligence)',
    time: 'عادل گلدست • ۱۰ اسفند ۱۴۰۳',
    img: '/images/blog/a-1.png',
    des: '',
  },
  {
    id: generateFakeUUIDv4(),
    title: 'هوشمصنوعی(به انگلیسی: Artificial intelligence)',
    time: 'عادل گلدست • ۱۰ اسفند ۱۴۰۳',
    img: '/images/blog/a-2.png',
    des: '',
  },
  {
    id: generateFakeUUIDv4(),
    title: 'هوشمصنوعی(به انگلیسی: Artificial intelligence)',
    time: 'عادل گلدست • ۱۰ اسفند ۱۴۰۳',
    img: '/images/blog/a-1.png',
    des: '',
  },
];
