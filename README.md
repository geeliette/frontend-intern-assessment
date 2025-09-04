# Agentic Workflow

A custom workflow builder application built with **Next.js** and **TailwindCSS**.

## Setup & Installation

### Steps
1. Clone the repo:
   ```bash
   git clone https://github.com/geeliette/frontend-intern-assessment.git
   cd frontend-intern-assessment/aroga-app

2. Install dependencies:
    ```bash
    npm install

3. Run the project:
    ```bash
    npm run dev

Visit http://localhost:3000 to view the application!


# 🚀 Akro – Technical Assessment (Frontend Intern)

Hello! We are excited to have you participate in our technical assessment. You will be implementing a simple agentic workflow user interface, which should not take more than 4-6 hours in total.

To ensure a fair evaluation process, please adhere to the following instructions:

## 📋 Instructions

Fork this repository to your own Github account, and push your code there as you make progress.
During submission, you will be submitting the Github link of your repository for our review.

- You should use Next.js/React to design and implement the design provided.
- Typescript is preferred over Javascript.
- All work must be original — no cheating, plagiarism, or collaboration.
- You _may_ use AI-assistance in **_limited_** amounts, i.e. no screenshotting and sending it to Claude. We'll know!
- Submit within the deadline; late submissions may not be accepted.


## 📖 Context
You are building a core feature for **Aroga**, an agentic report writer that automates data extraction and content generation.
Users build custom agentic workflows by selecting and sequencing action steps (e.g., ✍️ extract, 📑 summarize, 📝 write) from a selection menu.
Workflows follow a numbered sequential structure (1 → 2 → 3).

---

## 📝 Tasks

### 1. **(Mandatory) – UI/UX Designer’s User Flow**
Implement the workflow interface based on [this provided Figma design](https://www.figma.com/design/27O0Ob2aNVVTYFXzObHpc3/Frontend-Dev-Technical-Assessment?node-id=0-1&t=xv3EUT8elsW6ZZna-1).
The designs have been simplified specifically for the scope of this technical assessment.

Your implementation should minimally include:

- User flow implementation following the exact sequence shown in Figma
- Responsive design that adapts to different desktop sizes
- Interactive elements - all buttons should have hover/click states as designed
- Functional navigation - only buttons critical to the main user flow need actual functionality
- Visual fidelity - match the design spacing, typography, and color scheme as closely as possible

### 2. **(Optional) – What’s Next?**
Design and implement an **action configuration menu** after an action (e.g., "extract") is selected.
This menu should allow users to define parameters for the chosen action.

This is deliberately open-ended and is up to you to decide what this should look like, and be.
Some suggestions for you:
- Display configuration options dynamically.
- Provide input fields (text boxes, dropdowns, toggles).
- Ensure responsive and accessible UI.
- Keep consistent with Task 1’s design.

Alternatively, you may implement any additional feature that you deem fit for such an application in addition to/instead of the above-mentioned action configuration menu.


---

## 🧑‍⚖️ Grading Criteria
**Task 1:**
- Design accuracy
- Code quality
- Responsiveness
- Functionality

**Task 2:**
- Consistency with design system
- Code quality & extensibility (e.g. easy to add new action types)
- Responsiveness
- Usability of configuration menu

---

## 📦 Deliverables
Your submission should include:

- GitHub/GitLab repo link containing your code
- Clear README with setup and run instructions
- Screenshots or 🎥 short demo video of working UI (optional)
- Notes on assumptions/implementation decisions (optional)

---

## 🔗 References
- [🎨 Figma Design File](https://www.figma.com/design/27O0Ob2aNVVTYFXzObHpc3/Frontend-Dev-Technical-Assessment?node-id=0-1&t=xv3EUT8elsW6ZZna-1)
