# PAYKX Marketing Website

The standalone marketing website for PAYKX, published at **www.paykx.co.uk**.
It is fully separate from the PAYKX Rail app / API (`api.paykx.co.uk`).

This is a static React (Vite) single-page site. The report form is
download-only (no backend). Outbound links:

- "Try Live Demo" / Developers → `https://api.paykx.co.uk`
- "Book a Demo" / "Request a Shadow Diagnostic" → `https://calendly.com/taseenrayed`
- Trust & Evidence report gate → downloads `public/corridor-health-report.pdf`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static files to dist/
```

## Publish on Replit

This project is configured to deploy as a **Static** site:

- Build command: `npm run build`
- Public directory: `dist`

After publishing, attach the custom domain `www.paykx.co.uk` in the
deployment's domain settings and add the DNS records Replit shows you at
your domain registrar.

## Analytics

Plausible is wired in `index.html` for `data-domain="www.paykx.co.uk"`.
Create the matching site in your Plausible account for stats to start
recording. The script is harmless until then.
