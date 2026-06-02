const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const leadForm = document.querySelector('#leadForm');
const formMessage = document.querySelector('#formMessage');

navToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    siteNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const lead = Object.fromEntries(formData.entries());
  const timestamp = new Date().toISOString();

  const normalizedLead = {
    lead_id: `lead_${Date.now()}`,
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    event_type: lead.eventType,
    event_date: lead.eventDate,
    venue: lead.venue,
    location: lead.venue,
    guest_count: lead.guestCount,
    desired_package: lead.desiredService,
    budget_range: lead.budgetRange,
    songs_or_music_style: lead.musicStyle,
    preferred_contact_method: lead.preferredContact,
    message: lead.message,
    source: 'Website',
    status: 'New Lead',
    next_follow_up_date: '',
    notes: '',
    created_at: timestamp,
    updated_at: timestamp,
  };

  const existingLeads = JSON.parse(localStorage.getItem('sarah_event_leads') || '[]');
  existingLeads.push(normalizedLead);
  localStorage.setItem('sarah_event_leads', JSON.stringify(existingLeads, null, 2));

  // Future integration point:
  // - Send normalizedLead to Google Forms, Tally, or Formspree via fetch().
  // - Send normalizedLead to Airtable, Notion, or Google Sheets through Zapier or Make.
  // - Trigger a new-lead alert email or SMS for Sarah's team.
  // - Create a CRM row with status "New Lead" and a follow-up reminder.

  leadForm.reset();
  formMessage.textContent = 'Thank you! Sarah’s team will review your event details and get back to you shortly.';
});
