# Red Hat Open Training Program — Landing Page

Landing page for the Red Hat Open Training Program. Hosted on GitHub Pages at [redhatquickcourses.github.io/open-training](https://redhatquickcourses.github.io/open-training/).

## What it covers

- Overview of the Open Training Program
- Rapid Course Builder (RCB) onboarding and intake form
- Process steps from request to published course
- Searchable, grouped list of published LMS courses

## File structure

```
.
├── index.html       # Landing page
├── courses.json     # Published course data (edit this to add courses)
├── images/          # Red Hat logo (also used as favicon)
├── README.md
├── TASKS.md
└── .nojekyll        # Prevents Jekyll processing on GitHub Pages
```

## GitHub Pages setup

1. Push to the `main` branch of this repository.
2. In repository **Settings → Pages**, set source to `main` branch, `/ (root)` folder.
3. Site publishes at `https://redhatquickcourses.github.io/open-training/`.

## Adding a course

Edit `courses.json`. Add a new entry at the **top** of the `courses` array (newest first):

```json
{
  "title": "Course Name",
  "contributors": "Contributor Name(s)",
  "category": "OpenShift",
  "associateLink": "https://training-lms.redhat.com/sso/saml/auth/rhlpint?RelayState=deeplinkoffering%3D...",
  "partnerLink": "https://training-lms.redhat.com/sso/saml/auth/rhopen?RelayState=deeplinkoffering%3D...",
  "isNew": true
}
```

**Categories:** `OpenShift`, `OpenStack & RHOSO`, `Satellite`, `Ansible`, `Developer`

Set `isNew` to `true` for recently published courses (displays a "New" badge). Remove or set to `false` when the course is no longer new.

The course count on the page is derived automatically from `courses.json` — no manual counter update needed.

## Local preview

The page loads course data via `fetch()`. Serve the directory locally rather than opening `index.html` directly:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Intake form

Primary intake form: [RHTR Jira form](https://redhat.atlassian.net/jira/software/c/projects/RHTR/form/51)

Support: [opentraining@redhat.com](mailto:opentraining@redhat.com) · Slack: [#help-open-training](https://redhat.enterprise.slack.com/archives/C05RM9TSWUF)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request
