# Snap! - Recycling Education Game 

An interactive web-based game that teaches players about recycling through an engaging card-sorting experience.

##  Play the Game

**Live Demo:** [https://redvelvetfan.github.io/UGAHACKS11-Recycle-Game](https://redvelvetfan.github.io/UGAHACKS11-Recycle-Game)

**Repository:** [https://github.com/redvelvetfan/UGAHACKS11-Recycle-Game](https://github.com/redvelvetfan/UGAHACKS11-Recycle-Game)

##  About

Snap! is an educational game where players test their recycling knowledge by determining whether items are recyclable or not. With 10 rounds of gameplay, smooth animations, and instant feedback, players learn about proper recycling practices while having fun!

Built for UGA Hacks 11, this project combines education with entertainment to promote environmental awareness.

##  Features

-  **Interactive card-based gameplay** - Cards rise from a magic hat for each round
-  **Smooth CSS animations** - Card rising, sliding transitions, and visual feedback
-  **Real-time score tracking** - Track your progress throughout the game
-  **Win/lose conditions** - Score 7+ correct answers to win
-  **Instant feedback** - Green checkmarks for correct, red X for incorrect
-  **Responsive design** - Works seamlessly on desktop and mobile devices
-  **Educational content** - Learn which common items are recyclable
-  **10 rounds of challenge** - Test your knowledge across multiple items

##  Technologies Used

- **HTML5** - Game structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6)** - Game logic, state management, and DOM manipulation
- **Git/GitHub** - Version control and team collaboration
- **GitHub Pages** - Free hosting and deployment

##  How to Play

1. Click **"Start Adventure"** on the title screen
2. A card will rise from the magic hat showing an item
3. Read the item and decide: Is it recyclable?
4. Click the **green "Recyclable"** button or the **red "Not Recyclable"** button
5. See instant feedback with a ✓ (correct) or ✗ (incorrect)
6. Click the **"SNAP!"** button to reveal the next item
7. Complete all 10 rounds
8. **Win by scoring 7 or more correct answers!**

##  Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your computer
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/redvelvetfan/UGAHACKS11-Recycle-Game.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd UGAHACKS11-Recycle-Game
   ```

3. **Open the game**
   - Simply double-click `index.html` to open in your browser
   - Or use VS Code Live Server extension for live development

### Running Locally

**Option 1: Direct Open**
- Double-click `index.html` in your file explorer

**Option 2: VS Code Live Server (Recommended for Development)**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` in VS Code
3. Select "Open with Live Server"
4. Changes will auto-refresh in your browser

##  Project Structure

```
UGAHACKS11-Recycle-Game/
├── index.html          # Main HTML file with game structure
├── styles.css          # All styling, animations, and responsive design
├── script.js           # Game logic, state management, and interactivity
├── README.md           # Project documentation (you are here!)
└── images/             # Game images and visual assets
    └── [recyclable item images]
```

##  Customization Guide

### Adding New Recyclable Items

Edit the `items` array in `script.js` (around line 7):

```javascript
const items = [
    { name: "Plastic Bottle", image: "images/plastic-bottle.png", recyclable: true },
    { name: "Pizza Box", image: "images/pizza-box.png", recyclable: false },
    // Add your new items here
];
```

### Changing Game Colors

Edit values in `styles.css`:

- **Background gradient:** Line 8 (body background)
- **Play button:** Line 56 (circular-button)
- **Recyclable button (green):** Line 299
- **Not recyclable button (red):** Line 304
- **Card background:** Search for `.card` background

### Adjusting Game Difficulty

**Change win threshold** in `script.js` (around line 198):
```javascript
const won = score >= 7;  // Change 7 to make it easier/harder
```

**Change number of rounds** (line 4):
```javascript
const totalRounds = 10;  // Increase for longer gameplay
```

### Modifying Animations

All animations are in `styles.css`:

- **Card rise speed:** `@keyframes cardRise` (line 143)
- **Card slide speed:** `@keyframes slideLeft/slideRight` (lines 149-160)
- **Button pulse:** `@keyframes pulse` (line 316)

##  Team Members

- **Treasure A.** - Lead Developer
- **Ryan F.** - Developer
- **Eden M.** - Developer
- **Emma K.** - Developer

##  Contributing

We welcome contributions from the team! Here's how to contribute:

### For Team Members

1. **Pull the latest changes before starting work**
   ```bash
   git pull origin main
   ```

2. **Create a new branch for your feature**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   Examples: `feature/add-sound-effects`, `feature/new-items`, `feature/improve-animations`

3. **Make your changes**
   - Edit files in VS Code
   - Test thoroughly in your browser
   - Make sure nothing breaks

4. **Commit with a clear, descriptive message**
   ```bash
   git add .
   git commit -m "Add: description of what you changed"
   ```
   
   **Good commit messages:**
   -  "Add 10 new recyclable items with images"
   -  "Fix card animation timing issue"
   -  "Update button colors for better contrast"
   
   **Bad commit messages:**
   -  "updates"
   -  "fixed stuff"
   -  "changes"

5. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the GitHub repository
   - Click "Pull Requests" → "New Pull Request"
   - Select your branch
   - Describe what you changed and why
   - Request review from a team member

### Contribution Guidelines

 **DO:**
- Pull latest changes before starting work (`git pull`)
- Write clear, descriptive commit messages
- Test your changes in multiple browsers
- Comment your code for complex logic
- Keep code style consistent with existing files
- Communicate with team about what you're working on

 **DON'T:**
- Push directly to main without testing
- Work on the same file as someone else simultaneously
- Use vague commit messages
- Break existing functionality
- Forget to add new image files to the repo

### Avoiding Merge Conflicts

- **Communicate:** Let the team know what files you're editing
- **Pull often:** Run `git pull` frequently to stay up-to-date
- **Small commits:** Commit and push smaller changes more frequently
- **Branch strategy:** Use feature branches, don't all work on main

### If You Get a Merge Conflict

```bash
# Pull the latest changes
git pull

# Git will tell you which files have conflicts
# Open those files in VS Code
# Look for conflict markers: <<<<<<<, =======, >>>>>>>
# Choose which version to keep or combine both
# Remove the conflict markers

# After resolving:
git add .
git commit -m "Resolve merge conflict in [filename]"
git push
```

##  Known Issues

- Animation may lag slightly on older mobile devices
- Some emojis may render differently across browsers/platforms
- Card images need to be optimized for faster loading

##  Future Enhancements

### Planned Features
- [ ] **Sound effects** - Add audio feedback for correct/incorrect answers
- [ ] **Difficulty levels** - Easy, Medium, Hard modes with different items
- [ ] **Expanded item library** - 50+ recyclable items with real images
- [ ] **Educational facts** - Show recycling tips after each round
- [ ] **High score system** - Track best scores using localStorage
- [ ] **Timer mode** - Add time pressure for advanced players
- [ ] **Multiplayer** - Challenge friends to beat your score
- [ ] **Achievement system** - Unlock badges for milestones

### Potential Improvements
- [ ] Add loading screen for better UX
- [ ] Implement progressive web app (PWA) features
- [ ] Add accessibility features (screen reader support, keyboard navigation)
- [ ] Multi-language support (Spanish, French, etc.)
- [ ] Dark mode option
- [ ] Statistics page showing performance over time
- [ ] Social sharing features

##  What We Learned

### Technical Skills
- **CSS Animations:** Learned how to create smooth transitions and coordinate timing
- **JavaScript DOM Manipulation:** Understanding how to dynamically update content
- **State Management:** Tracking game state across multiple screens
- **Git Collaboration:** Working as a team using version control
- **Responsive Design:** Making the game work on different screen sizes

### Challenges Overcome
- **Animation Timing:** Coordinating CSS animations with JavaScript logic using `setTimeout()`
- **Language Integration:** Understanding how HTML structure, CSS styling, and JavaScript behavior work together
- **Git Workflows:** Learning to handle merge conflicts and collaborate effectively
- **User Experience:** Balancing educational content with engaging gameplay

## UGA Hacks 11

This project was created for UGA Hacks 11, demonstrating how technology can be used to educate and promote environmental awareness.

**Theme:** Education & Sustainability  
**Built in:** [Time period of hackathon]  
**Category:** Web Development / Education

## License

This project is open source and available under the MIT License.

##  Acknowledgments

- UGA Hacks 11 organizers for the opportunity
- Environmental education resources for recycling information
- The open-source community for inspiration and tools

##  Contact

Have questions, suggestions, or want to contribute?

- **GitHub:** [@redvelvetfan](https://github.com/redvelvetfan)
- **Repository Issues:** [Report a bug or request a feature](https://github.com/redvelvetfan/UGAHACKS11-Recycle-Game/issues)

##  Project Stats

- **Lines of Code:** ~500+
- **Languages:** HTML, CSS, JavaScript
- **Files:** 4 core files (HTML, CSS, JS, README)
- **Team Size:** 4 developers
- **Development Time:** UGA Hacks 11 duration

---

**Made with 💚 for a greener planet | UGA Hacks 11 2026**

*Play. Learn. Recycle. Repeat.* ♻️