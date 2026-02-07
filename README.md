# Snap - Recycling Game

A fun, educational web game that teaches players about recycling!

## 🎮 How to Use

1. Open `snap-game.html` in any web browser to play the game
2. All files must be in the same folder for the game to work properly

## 📁 Files Included

- `snap-game.html` - Main HTML file
- `styles.css` - All styling and animations
- `script.js` - Game logic and interactivity

## 🎨 Adding Your Own Images

Right now, the game uses emoji placeholders. To use your own PNG images:

### Step 1: Prepare Your Images
- Create a folder called `images` in the same directory as your HTML file
- Add your PNG images to this folder
- Recommended image size: 200x200px or larger (square works best)

### Step 2: Update the JavaScript

In `script.js`, find the `items` array (around line 7) and update it like this:

```javascript
const items = [
    { name: "Plastic Bottle", image: "images/plastic-bottle.png", recyclable: true },
    { name: "Pizza Box", image: "images/pizza-box.png", recyclable: false },
    { name: "Aluminum Can", image: "images/aluminum-can.png", recyclable: true },
    // Add more items...
];
```

### Step 3: Update Image Display

In `script.js`, find the `showNewCard()` function (around line 87) and change these lines:

**FROM:**
```javascript
cardImage.textContent = item.image;
cardImage.style.fontSize = '8rem';
```

**TO:**
```javascript
cardImage.src = item.image;
cardImage.style.fontSize = '';
```

## 🎯 Customizing Game Items

You can add, remove, or modify items in the `items` array. Each item needs:
- `name`: Display name (shown on card)
- `image`: Path to image file or emoji
- `recyclable`: `true` or `false`

Example:
```javascript
{ name: "Glass Bottle", image: "images/glass-bottle.png", recyclable: true }
```

## 🎨 Customizing Colors

To change the color scheme, edit `styles.css`:

- **Background gradient**: Line 8 (body background)
- **Play button**: Line 56 (circular-button background)
- **Recyclable button**: Line 299 (recyclable class)
- **Not Recyclable button**: Line 304 (not-recyclable class)

## 🚀 Deploying Your Game

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all three files
4. Go to Settings > Pages
5. Select main branch and save
6. Your game will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your folder onto Netlify
3. Your game goes live instantly

### Option 3: Local Hosting
Simply open `snap-game.html` in any browser - no server needed!

## 🎮 Game Features

- ✅ 10 rounds of gameplay
- ✅ Score tracking
- ✅ Smooth card animations
- ✅ Win/lose conditions (7+ correct = win)
- ✅ Visual feedback (checkmarks and X's)
- ✅ Responsive design
- ✅ No external dependencies needed

## 🛠️ Advanced Customization

### Change Win Threshold
In `script.js`, line 198:
```javascript
const won = score >= 7;  // Change 7 to any number
```

### Change Number of Rounds
In `script.js`, line 4:
```javascript
const totalRounds = 10;  // Change to any number
```

### Add Sound Effects
Add audio files and update the code:
```javascript
const correctSound = new Audio('sounds/correct.mp3');
correctSound.play();
```

## 📝 Tips

- Keep image files small (under 500KB) for fast loading
- Use PNG format with transparent backgrounds for best results
- Test in multiple browsers (Chrome, Firefox, Safari)
- The game works on mobile devices too!

## 🐛 Troubleshooting

**Images not showing?**
- Check that image paths are correct
- Make sure images are in the same folder or images subfolder
- Use forward slashes in paths: `images/bottle.png` not `images\bottle.png`

**Animations not working?**
- Make sure all three files are in the same folder
- Try hard-refreshing the browser (Ctrl+F5 or Cmd+Shift+R)

**Game not starting?**
- Open browser console (F12) to check for errors
- Verify JavaScript is enabled in your browser

## 📧 Need Help?

Feel free to modify any part of the code to match your vision. The code is well-commented to help you understand what each part does!

Good luck with your recycling game! 🌍♻️
