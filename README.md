# Northbridge Systems - Clean Control (Site 6)

## Project Overview

This is **Site 6** of the Paleon cybersecurity scanner validation laboratory. Site 6 is the **clean control** reference environment used to identify false positives in the Paleon scanner.

**Expected Paleon scan result: ZERO FINDINGS**

If Paleon reports any findings when scanning this site, those findings should be investigated as potential false positives.

## Fictional Company

**Northbridge Systems** is a fictional UK B2B technology services company created for this validation lab. All company information, team members, client names, case studies, and contact details are entirely fictional.

Domain: `paleon-lab-clean.com`

## Purpose

This website represents a properly configured, secure, modern web application with:

- Strong HTTP security headers
- Restrictive Content Security Policy (CSP)
- No exposed secrets or credentials
- No exposed sensitive files or paths
- No intentional vulnerabilities
- No outdated/EOL components
- Clean DNS/email configuration (when deployed)
- Minimal technology disclosure

## Technology Stack

- **Framework:** Next.js 16.3.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel-compatible
- **Runtime:** Node.js

## Security Configuration

### HTTP Security Headers

The following security headers are implemented in `next.config.ts`:

1. **Strict-Transport-Security**: `max-age=31536000; includeSubDomains; preload`
2. **Content-Security-Policy**: Restrictive policy allowing only same-origin resources
3. **X-Content-Type-Options**: `nosniff`
4. **X-Frame-Options**: `DENY`
5. **Referrer-Policy**: `strict-origin-when-cross-origin`
6. **Permissions-Policy**: Restrictive permissions for device APIs

### CSP Details

The Content Security Policy is configured to:
- Allow resources only from same origin (`'self'`)
- Permit inline scripts/styles (required by Next.js)
- Block third-party resources
- Prevent framing
- Restrict form actions to same origin

### Version Disclosure

- `X-Powered-By` header is disabled
- Framework identification is minimized where possible

## Project Structure

```
clean-control/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── solutions/page.tsx    # Solutions page
│   ├── resources/page.tsx    # Resources/articles page
│   └── contact/page.tsx      # Contact page
├── components/
│   ├── Navbar.tsx            # Main navigation
│   └── Footer.tsx            # Site footer
├── public/
│   └── (static assets)
├── next.config.ts            # Next.js config with security headers
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── .gitignore                # Git ignore rules
├── README.md                 # This file
└── expected.yaml             # Paleon validation expectations

```

## Local Development

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Development server (with hot reload)
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Create production build
npm run build

# Run production build locally
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

This application is designed for deployment on Vercel:

1. Connect the repository to Vercel
2. Configure the custom domain: `paleon-lab-clean.com`
3. Deploy

No environment variables or secrets are required for the application itself.

### HTTPS/TLS

- HTTPS and certificate provisioning are handled by Vercel
- No custom certificate handling is implemented in the application
- The application is configured to work properly with HTTPS

### DNS Configuration (Post-Deployment)

After deploying the application, the following DNS/email configuration is required at the domain registrar/DNS provider:

- **SPF**: Strong SPF record
- **DMARC**: Policy set to `p=reject`
- **DKIM**: Properly configured
- **DNSSEC**: Enabled
- **CAA**: Restrictive CAA records

These are configured at the DNS/email provider level, not in the application code.

## What This Project Does NOT Include

To maintain the clean-control objective, this project intentionally does not include:

- Database or backend server
- Authentication or login system
- User accounts or sessions
- API endpoints
- Payment processing
- External CMS
- External analytics/tracking
- Cookies (except essential Next.js functionality)
- Third-party scripts or resources
- Intentional vulnerabilities
- Exposed secrets or credentials
- Exposed development files (.git, .env, etc.)
- Debug or admin endpoints
- Outdated dependencies

## Security Checklist

- [x] HTTP security headers implemented
- [x] CSP configured and functional
- [x] X-Powered-By header removed
- [x] No secrets in code
- [x] .env files in .gitignore
- [x] No exposed backup files
- [x] No exposed .git directory
- [x] No unnecessary cookies
- [x] No third-party tracking
- [x] No outdated dependencies
- [x] All navigation links functional
- [x] Mobile responsive
- [x] Semantic HTML and accessibility
- [ ] DNS/email configuration (post-deployment)
- [ ] DNSSEC enabled (post-deployment)
- [ ] TLS properly configured (handled by Vercel)

## Validation

The `expected.yaml` file defines the expected Paleon scan results:

```yaml
detections: []
```

Any findings reported by Paleon should be investigated as potential false positives.

## Reset Instructions

To reset the project to a clean state:

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild the project
npm run build
```

## License

This is a controlled test environment for the Paleon validation laboratory. It is not intended for public use or distribution.

## Contact

This is a fictional website created for security scanner validation. All contact information is fictional and for testing purposes only.

---

**Important:** This website is part of a controlled cybersecurity validation laboratory. All domains, infrastructure, and content are owned and controlled by the Paleon validation lab.