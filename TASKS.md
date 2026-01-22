# Tasks

## RCB Post-RH1 Form and Guided Approach - Completed 2024-12-19

### Overview
Updated the RCB landing page to shift from self-service to a guided onboarding approach. Removed direct RCB access and added post-RH1 follow-up form with messaging that emphasizes guided onboarding after the event.

### Completed Tasks

#### 1. Remove Direct RCB Access ✅
- **Status:** Completed
- **Date:** 2024-12-19
- **Details:**
  - Removed the "Jump into RCB" button/link (previously at line ~506-514)
  - Removed the note about "Kerberos ID login (no password required)" (previously at line ~487)
  - Updated messaging to indicate RCB access will be provided during guided onboarding
  - Verified no references to direct RCB link remain in index.html

#### 2. Replace Form with RCB Expanded Pilot Access Form ✅
- **Status:** Completed
- **Date:** 2024-12-19
- **Details:**
  - Replaced primary form button with new Google Form: https://forms.gle/LZUaWeBpvSKYoJmV8
  - Updated primary button text to "Express Interest in RCB"
  - Updated blue info box to reflect new guided approach and post-RH1 follow-up
  - Added early engagement option linking to https://red.ht/open-training-request
  - Added messaging: "Join the RCB Expanded Pilot Access program. We'll reach out to you after Red Hat One to get you started with guided onboarding."

#### 3. Keep "Share a Training Idea" Form as Alternative ✅
- **Status:** Completed
- **Date:** 2024-12-19
- **Details:**
  - Added "Share a Training Idea" form in RCB section as alternative option
  - Used text: "Want to contribute to Open Training another way?"
  - Added "Share a Training Idea" link to Resources & Support section
  - Maintains access for users who want to contribute without using RCB

#### 4. Update Process Steps ✅
- **Status:** Completed
- **Date:** 2024-12-19
- **Details:**
  - Updated step 1: "Express Your Interest" → links to RCB Expanded Pilot Access form
  - Updated step 2: "We'll Follow Up After RH1" → mentions kickoff call scheduling
  - Updated step 3: "Guided RCB Walkthrough" → emphasizes guided experience during kickoff call
  - Step 4: "Review & Publish" → unchanged
  - Removed all references to direct RCB access and self-service approach

#### 5. Update RCB Section Messaging ✅
- **Status:** Completed
- **Date:** 2024-12-19
- **Details:**
  - Changed badge from "Early Access - Pilot Program" to "Expanded Pilot Access"
  - Updated description to mention guided onboarding during kickoff call after Red Hat One
  - Updated "First Step Required" section to "Express Your Interest" with new messaging
  - Removed all self-service language

#### 6. Update Key Features Section ✅
- **Status:** Completed
- **Date:** 2024-12-19
- **Details:**
  - Added intro text: "During your guided onboarding, we'll help you use these RCB features:"
  - Maintains feature list but now emphasizes guided experience

#### 7. Update Resources & Support Section ✅
- **Status:** Completed
- **Date:** 2024-12-19
- **Details:**
  - Added "Share a Training Idea" link to Resources & Support section
  - Added Slack channel link (#help-open-training)
  - Maintains existing links (Open Training Source Page, Contact Support)

### Files Modified
- `index.html` - Main landing page
  - RCB section (lines ~471-529)
  - Key Features section (lines ~531-555)
  - Process Steps section (lines ~557-585)
  - Resources & Support section (lines ~628-666)

### Notes
- All changes maintain existing styling and responsive design
- Google Form handles confirmation message automatically after submission
- Page remains publicly accessible (no password protection needed)
- RCB tool itself has password protection (separate from landing page)
