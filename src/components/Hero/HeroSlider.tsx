'use client';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from '@/components/Hero/HeroSlider.module.css';

import { heroSlides } from '@/components/Hero/data';
import AppImage from '@/components/ui/AppImage';

const AUTO_PLAY_MS = 6000;
const DOOR_CLOSE_MS = 480;
const DOOR_OPEN_MS = 520;
const PHOTO_FADE_MS = 500;

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [doorsClosed, setDoorsClosed] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [floorChanging, setFloorChanging] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const [photoFading, setPhotoFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const transitionLock = useRef(false);

  const activeSlide = heroSlides[activeIndex];
  const isPhotoSlide = activeSlide.variant === 'photo';

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (transitionLock.current || nextIndex === activeIndex) return;

      const nextSlide = heroSlides[nextIndex];
      const currentIsElevator = activeSlide.variant === 'elevator';
      const nextIsElevator = nextSlide.variant === 'elevator';

      transitionLock.current = true;

      if (!currentIsElevator || !nextIsElevator) {
        setPhotoFading(true);
        setContentVisible(false);

        window.setTimeout(() => {
          setActiveIndex(nextIndex);
          setProgressKey((key) => key + 1);

          window.setTimeout(() => {
            setPhotoFading(false);
            setContentVisible(true);
            transitionLock.current = false;
          }, 80);
        }, PHOTO_FADE_MS);

        return;
      }

      setContentVisible(false);
      setDoorsClosed(true);
      setIsMoving(true);

      window.setTimeout(() => {
        setFloorChanging(true);

        window.setTimeout(() => {
          setActiveIndex(nextIndex);
          setFloorChanging(false);
          setProgressKey((key) => key + 1);

          window.setTimeout(() => {
            setDoorsClosed(false);

            window.setTimeout(() => {
              setIsMoving(false);
              setContentVisible(true);
              transitionLock.current = false;
            }, DOOR_OPEN_MS);
          }, 120);
        }, 180);
      }, DOOR_CLOSE_MS);
    },
    [activeIndex, activeSlide.variant],
  );

  const goNext = useCallback(() => {
    goToSlide((activeIndex + 1) % heroSlides.length);
  }, [activeIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((activeIndex - 1 + heroSlides.length) % heroSlides.length);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, activeIndex]);

  return (
    <>
      <section
        className={styles.hero}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label='اسلایدر معرفی'
      >
        {isPhotoSlide ? (
          <div className={`${styles.photoScene} ${photoFading ? styles.photoFading : ''}`}>
            {activeSlide.image ? (
              <AppImage
                src={activeSlide.image}
                alt={activeSlide.imageAlt ?? activeSlide.title}
                title={activeSlide.title}
                fill
                priority
                sizes='100vw'
                className={styles.photoImage}
              />
            ) : (
              <div
                className={styles.photoGradient}
                style={{ background: activeSlide.sceneGradient }}
                aria-hidden='true'
              />
            )}
            <div className={styles.photoOverlay} aria-hidden='true' />
          </div>
        ) : (
          <div className={styles.scene}>
            <span className={styles.wallLightRight} aria-hidden='true' />
            <span className={styles.wallLightLeft} aria-hidden='true' />

            <div
              className={`${styles.elevator} ${isMoving ? styles.elevatorMoving : ''} ${
                doorsClosed ? styles.doorsClosed : ''
              }`}
              style={{ '--interior': activeSlide.interior } as React.CSSProperties}
            >
              <span
                className={`${styles.floorBadge} ${floorChanging ? styles.floorBadgeChanging : ''}`}
              >
                {activeSlide.floor}
              </span>

              <div className={styles.cabin}>
                <div
                  className={`${styles.slideVisual} ${
                    contentVisible ? styles.slideVisualVisible : ''
                  }`}
                >
                  <span>{activeSlide.kicker}</span>
                  <strong>{activeSlide.title}</strong>
                </div>
              </div>

              <span className={`${styles.door} ${styles.doorLeft}`} aria-hidden='true' />
              <span className={`${styles.door} ${styles.doorRight}`} aria-hidden='true' />
              <span className={styles.controlPanel} aria-hidden='true' />
            </div>

            <div className={styles.progressTrack} aria-hidden='true'>
              <div
                key={progressKey}
                className={`${styles.progressBar} ${isPaused ? styles.progressPaused : ''}`}
                style={{ animationDuration: `${AUTO_PLAY_MS}ms` }}
              />
            </div>
          </div>
        )}

        <div className={styles.floorButtons} role='tablist' aria-label='انتخاب اسلاید'>
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type='button'
              role='tab'
              aria-selected={index === activeIndex}
              aria-label={slide.variant === 'elevator' ? `طبقه ${slide.floor}` : slide.title}
              className={`${styles.floorButton} ${
                slide.variant === 'photo' ? styles.floorButtonPhoto : ''
              } ${index === activeIndex ? styles.floorButtonActive : ''}`}
              onClick={() => goToSlide(index)}
            >
              {slide.variant === 'elevator' ? slide.floor : '●'}
            </button>
          ))}
        </div>

        <button
          type='button'
          className={`${styles.navArrow} ${styles.navPrev}`}
          aria-label='اسلاید قبلی'
          onClick={goPrev}
        >
          <ChevronRightRoundedIcon fontSize='small' />
        </button>

        <button
          type='button'
          className={`${styles.navArrow} ${styles.navNext}`}
          aria-label='اسلاید بعدی'
          onClick={goNext}
        >
          <ChevronLeftRoundedIcon fontSize='small' />
        </button>

        {isPhotoSlide && (
          <div className={styles.photoProgressTrack} aria-hidden='true'>
            <div
              key={progressKey}
              className={`${styles.progressBar} ${isPaused ? styles.progressPaused : ''}`}
              style={{ animationDuration: `${AUTO_PLAY_MS}ms` }}
            />
          </div>
        )}

        <div
          key={activeSlide.id}
          className={`${styles.slideContent} ${
            isPhotoSlide ? styles.slideContentPhoto : styles.slideContentElevator
          } ${contentVisible ? styles.slideContentVisible : ''}`}
          aria-live='polite'
        >
          <span className={styles.kicker}>{activeSlide.kicker}</span>
          <h2>{activeSlide.title}</h2>
          <p>{activeSlide.description}</p>
          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={activeSlide.primaryLink.href}>
              {activeSlide.primaryLink.label}
            </Link>
            <Link
              className={`${styles.btnSecondary} ${isPhotoSlide ? styles.btnSecondaryOnPhoto : ''}`}
              href={activeSlide.secondaryLink.href}
            >
              {activeSlide.secondaryLink.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
