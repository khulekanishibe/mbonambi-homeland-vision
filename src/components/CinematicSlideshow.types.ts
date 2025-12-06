// Type definitions for the Cinematic Slideshow

export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  animation: AnimationType;
}

export type AnimationType = 
  | 'ken-burns'
  | 'pan-right' 
  | 'pan-left'
  | 'dramatic-zoom'
  | 'aerial-descent'
  | 'zoom-out'
  | 'focus-pull';

export interface SlideContent {
  mainTitle: string;
  rotatingTexts: string[];
  subtitle: string;
}

export interface CinematicSlideshowProps {
  onSlideChange?: (slideIndex: number) => void;
  autoPlay?: boolean;
  interval?: number;
  slides?: Slide[];
  showControls?: boolean;
  showIndicators?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export interface SlideshowState {
  currentSlide: number;
  isPlaying: boolean;
  isLoading: boolean;
  hasError: boolean;
}

// Animation configuration
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

// Slideshow configuration
export interface SlideshowConfig {
  autoPlay: boolean;
  interval: number;
  pauseOnHover: boolean;
  showControls: boolean;
  showIndicators: boolean;
  enableKeyboard: boolean;
  enableTouch: boolean;
  transitionDuration: number;
}

// Hero section integration types
export interface HeroSlideshowProps {
  slideContent: SlideContent[];
  currentSlideIndex: number;
  onSlideChange: (index: number) => void;
}

// Image optimization types
export interface ImageMetadata {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  format?: 'jpg' | 'webp' | 'png';
}

// Performance monitoring
export interface PerformanceMetrics {
  slideLoadTime: number;
  animationFrameRate: number;
  memoryUsage: number;
  imageLoadErrors: string[];
}
