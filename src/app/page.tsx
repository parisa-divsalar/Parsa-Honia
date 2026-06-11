import Image from 'next/image';
import Link from 'next/link';

import classes from '@/app/page.module.css';

import AnimateOnView from '@/components/AnimateOnView';
import ElevatorProducts from '@/components/ElevatorProducts';
import HeroSlider from '@/components/Hero';

const featureCards = [
  {
    id: 'mobility',
    title: 'پله‌برقی و پیاده‌رو متحرک',
    description:
      'تمام خدمات نگهداری، تعمیرات، پشتیبانی و راهکارهای دیجیتال برای آسانسورها و پله‌برقی‌ها.تمام خدمات نگهداری، تعمیرات، پشتیبانی و راهکارهای دیجیتال برای آسانسورها و پله‌برقی‌ها',
    image: '/images/features/escalator.jpg',
    links: [{ label: 'بیشتر بدانید', href: '#contact', variant: 'primary' as const }],
  },
  {
    id: 'service',
    title: 'سرویس',
    description:
      'تمام خدمات نگهداری، تعمیرات، پشتیبانی و راهکارهای دیجیتال برای آسانسورها و پله‌برقی‌ها.تمام خدمات نگهداری، تعمیرات، پشتیبانی و راهکارهای دیجیتال برای آسانسورها و پله‌برقی‌ها',
    image: '/images/features/service.jpg',
    links: [
      { label: 'بیشتر بدانید', href: '#contact', variant: 'primary' as const },
      { label: 'ارتقای سیستم اضطراری', href: '#contact', variant: 'secondary' as const },
    ],
  },
  {
    id: 'career',
    title: 'شغل و مسیر حرفه‌ای',
    description:
      'تمام خدمات نگهداری، تعمیرات، پشتیبانی و راهکارهای دیجیتال برای آسانسورها و پله‌برقی‌ها.تمام خدمات نگهداری، تعمیرات، پشتیبانی و راهکارهای دیجیتال برای آسانسورها و پله‌برقی‌ها',
    image: '/images/features/career.jpg',
    links: [
      { label: 'بیشتر بدانید', href: '#contact', variant: 'primary' as const },
      { label: 'درخواست سریع تکنسین‌ها', href: '#contact', variant: 'secondary' as const },
    ],
  },
];

const featuredNews = {
  title: 'آغاز به‌کار ربات نصب آسانسور هونیا در یک پروژه بلندمرتبه تهران',
  text: 'سیستم رباتیک نوآورانه نصب را در کارگاه ساختمان ۱۳۰ متری سریع‌تر، دقیق‌تر و ایمن‌تر می‌کند.',
  image: '/images/features/service.jpg',
  href: '#',
};

const secondaryNews = [
  {
    title: 'ساختمان‌های پایدار با فناوری حمل‌ونقل عمودی هوشمند',
    image: '/images/features/sustainability.png',
    href: '#',
  },
  {
    title: 'برنامه‌ریزی بهتر برای مدیریت ترافیک ساختمان‌ها',
    image: '/images/features/escalator.jpg',
    href: '#',
  },
  {
    title: 'استفاده خودکار ربات نظافت از آسانسورهای هوشمند',
    image: '/images/features/service.jpg',
    href: '#',
  },
  {
    title: 'انتخاب دوباره به‌عنوان کارفرمای برتر صنعت',
    image: '/images/features/career.jpg',
    href: '#',
  },
];

const footerColumns = [
  ['ساختمان مسکونی', 'ساختمان اداری', 'هتل‌ها', 'مراکز خرید', 'حمل‌ونقل عمومی', 'مراکز درمانی'],
  ['نمای کلی', 'سرویس سبز', 'آسانسور در شفت چوبی', 'گواهی‌های پایداری', 'موبیلیتی آینده‌نگر'],
  ['خبرها و رسانه', 'خبرنامه', 'پروژه‌های شاخص', 'پادکست', 'مجله', 'دانلودها'],
  ['راهنما', 'وظایف بهره‌بردار', 'بهره‌وری انرژی', 'استانداردها', 'واژه‌نامه'],
  ['درباره ما', 'رویدادها', 'ایمنی', 'کیفیت و گواهی‌ها', 'مسئولیت اجتماعی', 'مدیریت'],
];

const AppHome = () => {
  return (
    <main className={classes.page}>
      <HeroSlider />

      <section id='solutions' className={classes.featureGrid}>
        {featureCards.map((card, index) => (
          <AnimateOnView className={classes.featureCardWrap} delay={index * 150} key={card.id}>
            <article className={classes.featureCard} id={card.id}>
              <div className={classes.cardImage}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes='(max-width: 767px) 100vw, 33vw'
                  className={classes.cardImageEl}
                />
              </div>
              <div className={classes.cardBody}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className={classes.cardActions}>
                  {card.links.map((link) => (
                    <Link
                      className={
                        link.variant === 'primary' ? classes.btnPrimary : classes.btnSecondary
                      }
                      href={link.href}
                      key={link.label}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </AnimateOnView>
        ))}
      </section>

      <section className={classes.sustainability}>
        <Image
          src='/images/features/sustainability.png'
          alt=''
          fill
          sizes='100vw'
          className={classes.sustainabilityBg}
          priority={false}
        />
        <div className={classes.sustainabilityOverlay} aria-hidden='true' />
        <div className={classes.sustainabilityContent}>
          <h2>برای اقلیم و محیط‌زیست، از طراحی تا بهره‌برداری مسئولانه حرکت می‌کنیم.</h2>
          <div className={classes.sustainabilityActions}>
            <Link className={classes.sustainabilityBtnPrimary} href='#'>
              پایداری در هونیا
            </Link>
            <Link className={classes.sustainabilityBtnGhost} href='#'>
              سرویس سبز
            </Link>
            <Link className={classes.sustainabilityBtnGhost} href='#'>
              آسانسور در شفت چوبی
            </Link>
          </div>
        </div>
      </section>

      <ElevatorProducts />

      <section className={classes.newsMedia}>
        <div className={classes.newsMediaHeader}>
          <h2>خبرها و رسانه</h2>
          <Link className={classes.newsMediaViewAll} href='#'>
            مشاهده همه خبرها
            <span className={classes.newsArrow} aria-hidden='true' />
          </Link>
        </div>

        <AnimateOnView className={classes.featuredNewsWrap}>
          <Link className={classes.featuredNewsCard} href={featuredNews.href}>
            <div className={classes.featuredNewsImage}>
              <Image
                src={featuredNews.image}
                alt=''
                fill
                sizes='(max-width: 767px) 100vw, 50vw'
                className={classes.newsImageEl}
              />
            </div>
            <div className={classes.featuredNewsBody}>
              <h3>{featuredNews.title}</h3>
              <p>{featuredNews.text}</p>
              <p>{featuredNews.text}</p>
              <p>{featuredNews.text}</p>
              <p>{featuredNews.text}</p>
              <span className={classes.newsArrow} aria-hidden='true' />
            </div>
          </Link>
        </AnimateOnView>

        <div className={classes.secondaryNewsGrid}>
          {secondaryNews.map((item, index) => (
            <AnimateOnView
              className={classes.secondaryNewsWrap}
              delay={index * 100}
              key={item.title}
            >
              <Link className={classes.secondaryNewsCard} href={item.href}>
                <div className={classes.secondaryNewsImage}>
                  <Image
                    src={item.image}
                    alt=''
                    fill
                    sizes='(max-width: 767px) 100vw, 25vw'
                    className={classes.newsImageEl}
                  />
                </div>
                <div className={classes.secondaryNewsBody}>
                  <h3>{item.title}</h3>
                  <p>{featuredNews.text}</p>
                  <p>{featuredNews.text}</p>

                  <span className={classes.newsArrow} aria-hidden='true' />
                </div>
              </Link>
            </AnimateOnView>
          ))}
        </div>

        <div className={classes.newsMediaFooter}>
          <Link className={classes.showMoreBtn} href='#'>
            بیشتر نمایش
          </Link>
        </div>
      </section>

      <section className={classes.digital}>
        <div className={classes.digitalMedia}>
          <Image
            src='/images/features/digital.jpg'
            alt=''
            fill
            sizes='(max-width: 767px) 100vw, 50vw'
            className={classes.digitalImageEl}
          />
          <div className={classes.digitalOverlay} aria-hidden='true' />
        </div>
        <div className={classes.digitalPanel}>
          <span className={classes.digitalKicker}>هونیا دیجیتال</span>
          <h2>محصولات هوشمند برای افزایش قابلیت اطمینان، آسایش و طول عمر آسانسور.</h2>
          <div className={classes.digitalActions}>
            <Link className={classes.digitalBtnPrimary} href='#planning'>
              برنامه‌ریزی آنلاین آسانسور
            </Link>
            <Link className={classes.digitalBtnGhost} href='#service'>
              سرویس قابل اعتماد
            </Link>
            <Link className={classes.digitalBtnGhost} href='#'>
              رسانه و نمایشگر کابین
            </Link>
          </div>
        </div>
      </section>
      <footer id='contact' className={classes.footer}>
        <div className={classes.footerTop}>
          <div>
            <span className={classes.footerBrand}>هونیا</span>
            <p>دفتر مرکزی: تهران، خیابان ولیعصر، پلاک ۱۲۱۰</p>
            <p>شماره سرویس: ۰۲۱ ۸۶۶ ۱۱ ۰۰</p>
            <Link href='#'>تماس بگیرید</Link>
          </div>
          {footerColumns.map((column) => (
            <ul key={column[0]}>
              {column.map((item) => (
                <li key={item}>
                  <Link href='#'>{item}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className={classes.footerBottom}>
          <span>© هونیا ۱۴۰۵</span>
          <span>شرایط استفاده</span>
          <span>حریم خصوصی</span>
          <span>تنظیمات کوکی</span>
        </div>
      </footer>
    </main>
  );
};

// @ts-ignore
export default AppHome;
