Answer1:
**How to Run**
**Run Locally (Recommended)**

1. Clone the repository:
   ```bash
   git clone https://github.com/arfahai/Tip-Calculator.git
   ```

2. Navigate to the project folder:
   ```bash
   cd Tip-Calculator
   ```

3. Open `index.html` in your browser:
   - Simply double-click the `index.html` file, **OR**
   - Right-click on `index.html` → Open with Chrome / Firefox / Edge

**No installation required!**  
This is a static website — no Node.js, no dependencies, nothing to install.

**Deployed Version**
You can also try the live version directly:  
👉 **[https://tip-calculator-ruby-nine.vercel.app/](https://tip-calculator-ruby-nine.vercel.app/)**

Answer 2:
**Stack & Design Choices**

I deliberately chose **pure Vanilla HTML, CSS, and JavaScript** (no frameworks like React, Vue, or Tailwind) because:
- This was a **relatively simple** interactive app, and using a heavy framework would be over engineering.
- The goal was to demonstrate **strong fundamentals** ,clean DOM manipulation, efficient event handling, and smooth flow of application.It keeps the project lightweight, fast loading speed, and easy to deploy which is perfect for a tip calculator.
- Since the project needed heavy real-time DOM updates and custom animations, vanilla JS gave me full control without any abstraction layer.
This choice perfectly matched the problem statement’s expectation of a clean, performant, single screen web app
**Two Specific Visual Decisions**

1. Making "Per Person Amount" the Largest & Most Prominent Element in a Hierarchy
-Instead of giving equal importance to all numbers, I made the **Per Person Amount** significantly larger (3.2rem font size) and placed it at the top of the results section with a strong gradient.
-Reason of doing so is that, In a tip calculator, the **most important question** for the user is : **Mujhe personally kitna dena hai**  
-By making this number visually dominant, I reduced cognitive load. Users can find what they want at a glance without scanning multiple values.
This affects entire results section, especially per-person-amount. This decision directly improves user experience and decision-making speed.


2. Using Real-time `input` Events + Smooth State Synchronization 
-I attached **input** event listeners directly on the bill input and custom tip field, and called **calculate()** on every keystroke instead of using a "Calculate" button or **change** event.
-Reason of doing this is users expect modern web apps to feel **instant and reactive** ,like using a calculator on their phone. Waiting for a button click would break the flow. I also ensured that when switching between preset tips and custom tip, the active state and calculations stay perfectly in sync. This gives a smooth fluid-like experience.
-This decision makes the whole app feel **alive and responsive**, which was one of the hardest things to get right in the project.
Which part it affects:  
- Bill input field
- Custom tip input
- All tip percentage buttons
- Split controls

Answer 3:
**Ai Usage**
  I used Gemini for getting better suggestions to look my app better so there were two areas(UI Color Scheme / Theme colors & Theme Toggle Button Improvement)
   1.I used suugestions of gemini
   2.Then i added my creativity and used claude to make code for those changes
**Theme Toggle Button Improvement**
What I asked from : How to make the theme switch button better.
What AI suggested: Remove the text "Toggle Theme" and use moon/sun icons instead.
What I changed: I decided to replacethe text button with a round icon button that changes from moon to sun. I also added a small hover animation.I used Claude to generae the code

Answer 4:

**2. Responsive & Accessibility**

**How does your app behave on different screen sizes?**
I have checked the web app responsivenes by this tool :https://responsivetesttool.com/ which allows users to see their app responsiveness both in desktop version and different models of mobiles.

- **On a 360px-wide phone** (small mobile):  
  I tried it 360 x 740 [ Samsung Galaxy Note 8 ]The app is fully responsive. The card takes almost full width, fonts scale down appropriately, tip buttons stack nicely in a row with proper spacing, and the large “Per Person” amount remains readable. All elements are touch-friendly with good spacing. No horizontal scrolling occurs.
<img width="1117" height="917" alt="image" src="https://github.com/user-attachments/assets/727e9955-3c0f-4dff-aefd-4148ee59a592" />

- **On a 1440px laptop** (large desktop):  
  I tried it on 1024 x 600 [ Desktop ]The app stays centered with a maximum width of `420px`, so it doesn’t stretch awkwardly. The layout, typography, and spacing remain clean and balanced. The design feels premium on big screens without looking empty.
<img width="1598" height="843" alt="image" src="https://github.com/user-attachments/assets/b0472eaa-7d45-4bfe-a9b0-e9c85ff7dc17" />

I used a combination of `max-width`, Flexbox, and a mobile-first media query (`@media (max-width: 600px)`) to ensure a good experience across devices.


**One Accessibility Consideration I Handled:**
I paid good attention to **focus states and keyboard navigation**.  
- All interactive elements e.g:inputs, buttons, toggle, have visible focus outlines.The theme toggle, tip buttons, and split controls are fully keyboard accessible.
- I used proper semantic HTML and added **aria-label** on the theme toggle button.Hover and focus states are clearly visible with color changes and scale effects.This makes the app usable for people who navigate using keyboard only.

**One Thing I Knowingly Skipped and Why:**
The project required **inline visible error messages** near invalid fields e.g., “Bill amount must be positive”.  
I **knowingly skipped** showing red error text messages. Instead, I made the app robust by:
- Using **<input type="number">** which prevents users from typing letters or invalid characters.
- Gracefully handling invalid inputs (empty, zero, or negative bill) by showing $0.00 in results instead of breaking the UI.

**Why I skipped it**:  
For this type of calculator app, showing multiple red error messages can feel noisy and cluttered. I prioritized a **clean, calm UI** and prevented most invalid inputs at the source using type="number" . In a real-world banking/finance app I would have added visible error messages, but for this project it felt unnecessary.

Answer 5:
**Honest Gap:** Area for Improvement
One thing that isn’t polished enough:
Even though the app looks good, the UI/UX can still feel more premium and professional. Some areas like spacing, button proportions, input field design, and overall visual hierarchy could be refined to match top-tier modern apps.
Additionally, the app currently supports only USD ($) as currency, which limits its usefulness for users in other countries
