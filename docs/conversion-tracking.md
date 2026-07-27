# Conversion tracking

The site fires two custom dataLayer events. Everything else about lead reporting
follows from wiring these into GTM and GA4.

| dataLayer event          | Fired by                                                              | GA4 event name   | Key Event? |
| ------------------------ | --------------------------------------------------------------------- | ---------------- | ---------- |
| `seam_lead`              | Contact, Certification, Standard download, Org membership, LEED crosswalk | `generate_lead`  | **Yes**    |
| `seam_newsletter_signup` | Footer newsletter, Blog newsletter                                    | `sign_up`        | No         |

Both are pushed by `window.seamTrack` (defined in `src/layouts/SiteLayout.astro`,
alongside the GTM bootstrap so it exists before any form script runs). Call sites:

- `src/pages/contact.astro`
- `src/pages/certification.astro`
- `src/pages/resources/standard.astro`
- `src/pages/resources/leed-crosswalk.astro`
- `src/pages/membership/organization.astro`
- `src/components/Footer.astro`
- `src/pages/resources/blog/index.astro`

Each fires only after the HubSpot POST returns a confirmed 200, so a failed or
abandoned submission never counts.

## Legacy events (Google Ads)

Two forms also re-fire their original event name, because Google Ads conversion tags
in GTM already trigger on them:

| Page                       | Legacy event            |
| -------------------------- | ----------------------- |
| `/contact`                 | `contact_form_submit`   |
| `/resources/leed-crosswalk`| `leed_crosswalk_download` |

Passed as `legacyEvent` in the `seamTrack.lead()` call. Once those Ads tags are
repointed at `seam_lead` in GTM, drop the `legacyEvent` property from both call sites
— until then, removing it takes Ads conversion tracking offline for those forms.

## Why not `form_submit`

The Jul 2026 audit suggested firing `form_submit` alongside `generate_lead`. We
deliberately don't. GA4 enhanced measurement already owns the `form_submit` name and
fires it on submit *intent* — before the HubSpot request is known to have succeeded.
Marking that as the Key Event would count failed submissions as leads, and having
both marked would double-count every real one. `generate_lead` on confirmed success
is the number that should drive the report.

`form_start` (2/week, the existing enhanced-measurement event) stays as-is. It now
has a completion event to pair with, so start→submit drop-off becomes readable.

## GTM setup (container GTM-PFFKXQPW)

Two triggers and two tags. Roughly ten minutes.

**Trigger 1 — Lead**

1. Triggers → New → Custom Event
2. Event name: `seam_lead`
3. Fires on: All Custom Events
4. Name it `CE - seam_lead`, save

**Trigger 2 — Newsletter**

Same, with event name `seam_newsletter_signup`, named `CE - seam_newsletter_signup`.

**Variables** — create one Data Layer Variable per field you want on the event, each
with the Data Layer Variable Name matching exactly: `form_name`, `form_location`,
`form_topic`.

**Tag 1 — Lead**

1. Tags → New → Google Analytics: GA4 Event
2. Measurement ID: the existing GA4 config tag for property 525373317
3. Event Name: `generate_lead`
4. Event Parameters: `form_name`, `form_location`, `form_topic` → the matching
   Data Layer Variables
5. Trigger: `CE - seam_lead`
6. Name it `GA4 - generate_lead`, save

**Tag 2 — Newsletter**

Same shape: Event Name `sign_up`, parameter `form_location`, trigger
`CE - seam_newsletter_signup`.

**Then** use Preview mode, submit the contact form once on the live site, and confirm
`seam_lead` appears in the dataLayer and `GA4 - generate_lead` fired. Publish.

## GA4 setup (property 525373317)

Do this *after* the GTM tag has fired at least once, or the event won't be listed yet.

1. Admin → Data display → Events
2. Find `generate_lead`
3. Toggle **Mark as key event** on

Leave `sign_up` unmarked — a newsletter subscribe isn't a sales lead, and mixing the
two makes the lead number useless.

Custom dimensions are optional but make the report far more useful: Admin → Custom
definitions → Create custom dimension, scope Event, for `form_name` and
`form_location`. That's what lets you see *which* form produced each lead.

## Verifying

GA4 Realtime shows the event within seconds. Standard reports take 24–48h, so the
first week's lead count in the report will be partial regardless of when this ships.
