export type HeroSlide = {
  id: string;
  variant: 'elevator' | 'photo';
  floor?: number;
  image?: string;
  sceneGradient?: string;
  imageAlt?: string;
  kicker: string;
  title: string;
  description: string;
  primaryLink: { label: string; href: string };
  secondaryLink: { label: string; href: string };
  interior?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'modernization',
    variant: 'elevator',
    floor: 21,
    kicker: 'خدمات مهندسی',
    title: 'تأمین تجهیزات و اجرا',
    description:
      'در دسترس، ارزشمند و دیجیتال. نوسازی، آسانسور شما را به سطح تازه‌ای از عملکرد و آسایش می‌رساند.',
    primaryLink: { label: 'کشف راهکارها', href: '#solutions' },
    secondaryLink: { label: 'سرویس ۱۰۰٪', href: '#service' },
    interior:
      'linear-gradient(130deg, rgba(227, 6, 19, 0.12) 0%, rgba(255, 255, 255, 0.86) 32%, rgba(222, 222, 222, 0.62) 65%, #f6f6f6)',
  },
  {
    id: 'digital',
    variant: 'elevator',
    floor: 14,
    kicker: 'ارائه کننده خدمات مهندسی',
    title: 'آینده هوشمند',
    description:
      'محصولات دیجیتال برای افزایش قابلیت اطمینان، آسایش مسافر و طول عمر تجهیزات حمل‌ونقل عمودی.',
    primaryLink: { label: 'برنامه‌ریزی آنلاین', href: '#planning' },
    secondaryLink: { label: 'سرویس قابل اعتماد', href: '#service' },
    interior:
      'linear-gradient(145deg, rgba(227, 6, 19, 0.28) 0%, rgba(40, 44, 52, 0.55) 38%, rgba(255, 255, 255, 0.78) 72%, #ececec)',
  },
  {
    id: 'sustainability',
    variant: 'elevator',
    floor: 7,
    kicker: 'پایداری',
    title: 'مسیر سبز عمودی',
    description:
      'از طراحی تا بهره‌برداری، راهکارهای کم‌مصرف و مسئولانه برای ساختمان‌های آینده‌نگر.',
    primaryLink: { label: 'سرویس سبز', href: '#solutions' },
    secondaryLink: { label: 'گواهی‌های پایداری', href: '#' },
    interior:
      'linear-gradient(140deg, rgba(227, 6, 19, 0.15) 0%, rgba(210, 218, 205, 0.72) 45%, rgba(255, 255, 255, 0.82) 100%)',
  },
  {
    id: 'mobility',
    variant: 'elevator',
    floor: 3,
    kicker: 'موبیلیتی',
    title: 'جابه‌جایی بدون توقف',
    description:
      'پله‌برقی، پیاده‌رو متحرک و سیستم‌های یکپارچه برای مراکز شلوغ، ایستگاه‌ها و فضاهای عمومی.',
    primaryLink: { label: 'راهکارهای موبیلیتی', href: '#mobility' },
    secondaryLink: { label: 'پروژه‌های شاخص', href: '#' },
    interior:
      'linear-gradient(125deg, rgba(227, 6, 19, 0.18) 0%, rgba(255, 248, 235, 0.85) 40%, rgba(230, 230, 230, 0.7) 100%)',
  },
  {
    id: 'projects',
    variant: 'photo',
    image: '/images/features/digital.jpg',
    sceneGradient:
      'linear-gradient(135deg, rgba(227, 6, 19, 0.75) 0%, rgba(28, 28, 28, 0.92) 45%, rgba(60, 60, 60, 0.85) 100%)',
    imageAlt: 'پروژه آسانسور در برج بلندمرتبه',
    kicker: 'پروژه‌ها',
    title: 'نصب در برج‌های مدرن',
    description:
      'راهکارهای حمل‌ونقل عمودی برای برج‌های مسکونی و تجاری با ظرفیت بالا و طراحی هماهنگ با معماری.',
    primaryLink: { label: 'پروژه‌های شاخص', href: '#' },
    secondaryLink: { label: 'مشاوره رایگان', href: '#contact' },
  },
  {
    id: 'service-team',
    variant: 'photo',
    image: '/images/features/service.jpg',
    sceneGradient:
      'linear-gradient(160deg, rgba(40, 40, 40, 0.95) 0%, rgba(227, 6, 19, 0.55) 50%, rgba(28, 28, 28, 0.9) 100%)',
    imageAlt: 'تیم سرویس و نگهداری آسانسور',
    kicker: 'سرویس',
    title: 'پشتیبانی ۲۴ ساعته',
    description:
      'تیم‌های فنی آموزش‌دیده در سراسر کشور، آماده پاسخگویی سریع، تعمیرات و نگهداری پیشگیرانه.',
    primaryLink: { label: 'سرویس ۱۰۰٪', href: '#service' },
    secondaryLink: { label: 'درخواست تکنسین', href: '#contact' },
  },
  {
    id: 'innovation',
    variant: 'photo',
    image: '/images/features/sustainability.png',
    sceneGradient:
      'linear-gradient(120deg, rgba(227, 6, 19, 0.65) 0%, rgba(227, 6, 19, 0.25) 35%, rgba(20, 20, 20, 0.95) 100%)',
    imageAlt: 'فناوری و نوآوری در صنعت آسانسور',
    kicker: 'نوآوری',
    title: 'فناوری در خدمت ایمنی',
    description:
      'از ربات نصب تا سیستم‌های هوشمند کابین؛ هر روز یک قدم به آینده حمل‌ونقل عمودی نزدیک‌تر می‌شویم.',
    primaryLink: { label: 'اخبار فناوری', href: '#' },
    secondaryLink: { label: 'هونیا دیجیتال', href: '#planning' },
  },
];
