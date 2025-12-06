# Cinematic Slideshow Setup Instructions

## Overview
This cinematic slideshow replaces the video background in your hero section with a dynamic image slideshow featuring professional cinematic effects like Ken Burns, pan, zoom, and focus pull animations.

## Image Setup

### Step 1: Add Your Images
Place your 7 images in the following location with these exact names:

```
public/images/hero-slideshow/
├── housing-development.jpg     (Image 1 - Housing development)
├── rural-landscape.jpg         (Image 2 - Rural landscape)
├── plant-growth.jpg           (Image 3 - Plant in hands)
├── town-aerial.jpg            (Image 4 - Town aerial view)
├── city-aerial.jpg            (Image 5 - City aerial view)
├── child-globe.jpg            (Image 6 - Child with globe)
└── community-water.jpg        (Image 7 - Community water access)
```

### Step 2: Image Specifications
- **Format**: JPG or PNG (JPG recommended for better performance)
- **Dimensions**: Minimum 1920x1080 (Full HD), 4K preferred
- **Aspect Ratio**: 16:9 or similar landscape format
- **File Size**: Optimize for web (200KB - 1MB per image)
- **Quality**: High quality but compressed for web delivery

## Features Implemented

### Cinematic Effects
1. **Ken Burns Effect** - Slow zoom with subtle pan movement
2. **Pan Right/Left** - Horizontal movement across the image
3. **Dramatic Zoom** - Intense zoom-in effect for emotional impact
4. **Aerial Descent** - Simulates descending from aerial view
5. **Zoom Out** - Reveals more of the scene with slight rotation
6. **Focus Pull** - Simulates camera focus change with blur effects

### Interactive Elements
- **Auto-advance**: 8 seconds per slide
- **Progress indicators**: Visual bars showing slide progress
- **Navigation arrows**: Manual slide navigation
- **Pause on hover**: Slideshow pauses when mouse hovers
- **Responsive design**: Optimized for mobile and desktop

### Content Synchronization
The slideshow content changes dynamically with each slide:
- Main title updates
- Rotating text words change
- Subtitle description changes
- All synchronized with the visual narrative

## Slide Sequence & Narrative

1. **Building Our Future** (Housing) - Community development focus
2. **Our Sacred Land** (Rural) - Agricultural heritage emphasis
3. **Seeds of Hope** (Plant) - Growth and potential theme
4. **Community Rising** (Town) - Urban development progress
5. **Connected Future** (City) - Modern infrastructure vision
6. **Next Generation** (Child) - Youth leadership and hope
7. **Life Flows** (Water) - Essential resources and community care

## Technical Implementation

### New Files Created
- `src/components/CinematicSlideshow.tsx` - Main slideshow component
- `src/components/CinematicSlideshow.css` - Animation styles (integrated into index.css)
- Updated `src/components/HeroSection.tsx` - Integration with existing hero

### Animation Performance
- Uses CSS transforms and opacity for smooth performance
- GPU-accelerated animations with `will-change` properties
- Responsive animations scale down on mobile devices
- Fallback to video background if images fail to load

### Customization Options

#### Timing Adjustments
```typescript
// In HeroSection.tsx
<CinematicSlideshow 
  autoPlay={true}
  interval={8000}  // Change slide duration (milliseconds)
/>
```

#### Content Customization
Edit the `slideContent` array in `HeroSection.tsx` to change:
- Main titles
- Rotating text options
- Subtitle descriptions

#### Animation Styles
Modify animations in `index.css` under the cinematic slideshow section.

## Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Optimized animations

## Performance Optimization
- Images should be optimized and compressed
- Consider using WebP format for better compression
- Lazy loading implemented for better initial page load
- Animations optimized for 60fps performance

## Troubleshooting

### Images Not Loading
1. Check file paths match exactly (case-sensitive)
2. Verify images are in `/public/images/hero-slideshow/`
3. Check browser console for 404 errors
4. Ensure image file formats are supported

### Animation Performance Issues
1. Reduce image file sizes
2. Check browser performance tools
3. Consider reducing animation complexity on older devices

### Content Not Updating
1. Verify `slideContent` array has 7 entries
2. Check `currentSlideIndex` state updates
3. Ensure `handleSlideChange` function is called

## Future Enhancements
- Add touch/swipe gestures for mobile
- Implement lazy loading for images
- Add transition effects between slides
- Include video slide options
- Add accessibility features (ARIA labels, keyboard navigation)

## Support
For technical issues or customization requests, check the component documentation or modify the configuration as needed.
