# Sarah Events Music

**Sarah — Elegant live vocals for weddings, private events and unforgettable moments in Charlotte.**

This project is the first operational foundation for Sarah's transition from bar performances into a premium weddings and events brand in Charlotte, North Carolina.

## Goals

1. Position Sarah as a professional live vocalist for weddings and events.
2. Capture qualified leads through a simple, elegant website.
3. Organize opportunities in a lightweight CRM structure.
4. Respond to inquiries with polished templates and AI-assisted workflows.
5. Generate consistent content for Instagram, TikTok, YouTube Shorts, and YouTube.
6. Present clear service packages for ceremonies, cocktail hours, full experiences, private events, and corporate events.
7. Build local authority across Charlotte, Lake Norman, Huntersville, Cornelius, Mooresville, Matthews, Ballantyne, Concord, and Fort Mill.

## Folder Structure

```text
sarah-events-music/
├── agents/      # AI agent role instructions
├── content/     # Editorial calendars and content ideas
├── crm/         # Lead schema, sample leads, statuses
├── docs/        # Business, operating, metrics, brand, and package docs
├── templates/   # Sales, proposal, and outreach templates
└── website/     # Static HTML/CSS/JS landing page
```

## First Version Deliverables

- Static responsive website in `website/`.
- AI agent instruction files in `agents/`.
- Sales, follow-up, proposal, and outreach templates in `templates/`.
- 30-day content calendar plus supporting content idea files in `content/`.
- Simple JSON CRM schema and examples in `crm/`.
- Business proposal, metrics, brand voice, service packages, operating process, and weekly workflow in `docs/`.

## How to Preview the Website

Open `website/index.html` directly in a browser, or run a small local server:

```bash
cd sarah-events-music/website
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Recommended Next Steps

1. Replace placeholder video blocks with Sarah's best performance videos.
2. Connect the lead form to Formspree, Tally, Airtable, Google Sheets, Zapier, or Make.
3. Add real testimonials as Sarah books events.
4. Create a Calendly link for discovery calls.
5. Build a simple dashboard for lead status and follow-up dates.
6. Add a proposal generator using the proposal templates.
7. Migrate the static site to Webflow, Squarespace, Wix, or Next.js when the offer is validated.
8. Add Stripe or another payment tool for deposits once pricing and contract terms are finalized.
