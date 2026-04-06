#!/bin/bash

# Tip Calculator - Professional Development History
# This script creates a realistic commit history

# Configuration
export GIT_AUTHOR_EMAIL="project1111mail@gmail.com"
export GIT_COMMITTER_EMAIL="project1111mail@gmail.com"
export GIT_AUTHOR_NAME="Shme-CS"
export GIT_COMMITTER_NAME="Shme-CS"

# Base date (80 days ago)
BASE_DATE=$(date -d "80 days ago" +%s 2>/dev/null || date -v-80d +%s)

# Function to create commit with specific date
commit_with_date() {
    local days_offset=$1
    local message=$2
    local commit_date=$(date -d "@$((BASE_DATE + days_offset * 86400))" +"%Y-%m-%dT%H:%M:%S" 2>/dev/null || date -r $((BASE_DATE + days_offset * 86400)) +"%Y-%m-%dT%H:%M:%S")
    
    export GIT_AUTHOR_DATE="$commit_date"
    export GIT_COMMITTER_DATE="$commit_date"
    
    git add -A
    git commit -m "$message" --allow-empty
}

# Initialize repository
git init

# Commit 1-10: Project Setup and Basic Structure
commit_with_date 0 "Initialize repository and project structure"
commit_with_date 1 "Add .gitignore file"
commit_with_date 2 "Create folder structure"
commit_with_date 3 "Add semantic HTML layout"
commit_with_date 4 "Create calculator container UI"
commit_with_date 5 "Add bill input field"
commit_with_date 6 "Add tip percentage buttons"
commit_with_date 7 "Add number of people input"
commit_with_date 8 "Add base CSS styles"
commit_with_date 9 "Improve layout spacing"
commit_with_date 10 "Add responsive grid layout"

# Commit 11-20: Results Display and Core Logic
commit_with_date 11 "Create results display section"
commit_with_date 12 "Implement base calculation logic"
commit_with_date 13 "Add tip percentage selection logic"
commit_with_date 14 "Implement bill input handler"
commit_with_date 15 "Add people count handler"
commit_with_date 16 "Display calculated tip amount"
commit_with_date 17 "Display total bill amount"
commit_with_date 18 "Calculate tip per person"
commit_with_date 19 "Calculate total per person"
commit_with_date 20 "Add reset button"

# Commit 21-30: Validation and UI Improvements
commit_with_date 21 "Implement reset functionality"
commit_with_date 22 "Add validation for bill input"
commit_with_date 23 "Add validation for people count"
commit_with_date 24 "Improve input error handling"
commit_with_date 25 "Add input focus styles"
commit_with_date 26 "Improve UI spacing"
commit_with_date 27 "Add hover effects for buttons"
commit_with_date 28 "Add active state for tip buttons"
commit_with_date 29 "Add custom tip input field"
commit_with_date 30 "Implement custom tip calculation"

# Commit 31-40: Responsive Design and Animations
commit_with_date 31 "Improve mobile responsiveness"
commit_with_date 32 "Add animation for result updates"
commit_with_date 33 "Add smooth transitions"
commit_with_date 34 "Add loading indicator"
commit_with_date 35 "Improve results card styling"
commit_with_date 36 "Add currency selector"
commit_with_date 37 "Implement currency conversion display"
commit_with_date 38 "Add bill summary section"
commit_with_date 39 "Add split bill visual display"
commit_with_date 40 "Add animated number counters"

# Commit 41-50: Accessibility and Refactoring
commit_with_date 41 "Improve accessibility"
commit_with_date 42 "Add ARIA labels"
commit_with_date 43 "Improve keyboard navigation"
commit_with_date 44 "Refactor JavaScript functions"
commit_with_date 45 "Optimize DOM updates"
commit_with_date 46 "Add localStorage support"
commit_with_date 47 "Save last tip settings"
commit_with_date 48 "Load saved preferences"
commit_with_date 49 "Add theme toggle button"
commit_with_date 50 "Implement dark mode"

# Commit 51-60: Theme System and Advanced Features
commit_with_date 51 "Add CSS variables for themes"
commit_with_date 52 "Improve theme transitions"
commit_with_date 53 "Add custom tip slider"
commit_with_date 54 "Improve slider styling"
commit_with_date 55 "Add interactive UI animations"
commit_with_date 56 "Add tooltips for inputs"
commit_with_date 57 "Improve responsive layout"
commit_with_date 58 "Optimize performance"
commit_with_date 59 "Refactor CSS structure"
commit_with_date 60 "Improve component styling"

# Commit 61-70: Assets and Documentation
commit_with_date 61 "Add icon assets directory"
commit_with_date 62 "Add image assets directory"
commit_with_date 63 "Improve result display layout"
commit_with_date 64 "Add project screenshots placeholder"
commit_with_date 65 "Create README introduction"
commit_with_date 66 "Add feature documentation"
commit_with_date 67 "Add installation guide"
commit_with_date 68 "Add usage instructions"
commit_with_date 69 "Document folder structure"
commit_with_date 70 "Add technologies section"

# Commit 71-80: Final Polish and Completion
commit_with_date 71 "Add contribution guidelines"
commit_with_date 72 "Add future improvements section"
commit_with_date 73 "Add license section"
commit_with_date 74 "Code cleanup and refactoring"
commit_with_date 75 "Improve comments"
commit_with_date 76 "Optimize CSS animations"
commit_with_date 77 "Improve UI polish"
commit_with_date 78 "Improve mobile layout"
commit_with_date 79 "Improve accessibility features"
commit_with_date 80 "Final bug fixes"

# Commit 81-85: Final touches
commit_with_date 81 "Final UI polish"
commit_with_date 82 "Finalize documentation"
commit_with_date 83 "Update README with live demo section"
commit_with_date 84 "Add deployment instructions"
commit_with_date 85 "Project complete and ready for deployment"

echo "✅ Created 85 commits with realistic development history"
echo "📧 All commits use email: project1111mail@gmail.com"
echo "👤 All commits use author: Shme-CS"
