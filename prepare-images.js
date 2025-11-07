#!/usr/bin/env node

/**
 * Image Preparation Utility for Cinematic Slideshow
 * 
 * This script helps you prepare and optimize images for the slideshow.
 * Run with: node prepare-images.js
 */

const fs = require('fs');
const path = require('path');

const imageDirectory = path.join(__dirname, 'public', 'images', 'hero-slideshow');
const requiredImages = [
  'housing-development.jpg',
  'rural-landscape.jpg', 
  'plant-growth.jpg',
  'town-aerial.jpg',
  'city-aerial.jpg',
  'child-globe.jpg',
  'community-water.jpg'
];

console.log('🎬 Cinematic Slideshow Image Checker\n');

// Check if directory exists
if (!fs.existsSync(imageDirectory)) {
  console.log('❌ Error: Image directory does not exist');
  console.log(`   Expected: ${imageDirectory}`);
  console.log('   Please create the directory and add your images.\n');
  
  console.log('📁 To create the directory:');
  console.log(`   mkdir -p "${imageDirectory}"`);
  console.log('\n📋 Required images:');
  requiredImages.forEach((img, index) => {
    console.log(`   ${index + 1}. ${img}`);
  });
  process.exit(1);
}

// Check each required image
console.log('🔍 Checking for required images...\n');

const missing = [];
const present = [];

requiredImages.forEach((imageName, index) => {
  const imagePath = path.join(imageDirectory, imageName);
  
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    const sizeKB = Math.round(stats.size / 1024);
    
    console.log(`✅ ${index + 1}. ${imageName} (${sizeKB}KB)`);
    present.push({ name: imageName, size: sizeKB });
  } else {
    console.log(`❌ ${index + 1}. ${imageName} - MISSING`);
    missing.push(imageName);
  }
});

console.log('\n📊 Summary:');
console.log(`   Found: ${present.length}/${requiredImages.length} images`);

if (missing.length > 0) {
  console.log(`   Missing: ${missing.length} images`);
  console.log('\n❌ Missing images:');
  missing.forEach(img => console.log(`      • ${img}`));
}

if (present.length > 0) {
  const totalSize = present.reduce((sum, img) => sum + img.size, 0);
  console.log(`   Total size: ${Math.round(totalSize / 1024 * 100) / 100}MB`);
  
  // Check for large files
  const largeFiles = present.filter(img => img.size > 1000);
  if (largeFiles.length > 0) {
    console.log('\n⚠️  Large files detected (>1MB):');
    largeFiles.forEach(img => {
      console.log(`      • ${img.name} (${Math.round(img.size / 1024 * 100) / 100}MB)`);
    });
    console.log('   Consider optimizing these images for better performance.');
  }
}

console.log('\n🎯 Image Guidelines:');
console.log('   • Format: JPG preferred (better compression)');
console.log('   • Dimensions: 1920x1080 minimum, 4K preferred');
console.log('   • File size: 200KB - 1MB per image');
console.log('   • Aspect ratio: 16:9 landscape');
console.log('   • Quality: High but web-optimized');

if (missing.length === 0) {
  console.log('\n🎉 All images are ready! Your cinematic slideshow should work perfectly.');
  console.log('\n🚀 Next steps:');
  console.log('   1. Start your development server: npm run dev');
  console.log('   2. Navigate to your hero section');
  console.log('   3. Enjoy the cinematic slideshow!');
} else {
  console.log('\n📝 To fix missing images:');
  console.log('   1. Add the missing image files to:');
  console.log(`      ${imageDirectory}`);
  console.log('   2. Use the exact filenames listed above');
  console.log('   3. Run this script again to verify');
}

console.log('\n📖 For more details, see SLIDESHOW_SETUP.md\n');
