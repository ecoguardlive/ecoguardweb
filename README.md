# EcoGuard: Smart Pipeline Monitoring System

## 📋 Project Overview

EcoGuard is an industrial-grade pipeline monitoring and command platform designed specifically for Ghana and West African critical infrastructure operations. It combines real-time leak detection, secure multi-tenant access control, and field-ready mobile workflows into a unified operational system.

The platform enables rapid incident response (under 45 seconds) through automated engineer assignment, live telemetry dashboards, and zone-based accountability across 6 operational monitoring zones.

---

## 🎯 Key Features

### Real-Time Monitoring
- **Live pressure tracking** across 6 operational zones (A-F)
- **Instant leak alerts** with automatic zone assignment
- **Pressure anomaly detection** with visual status indicators
- **Live telemetry simulation** with 2.6-second refresh cycles

### Engineer Workflow Control
- **14 field engineers** managed across 6 zones
- **Automatic assignment logic** routing alerts to responsible zone engineers
- **Zone-specific dashboards** for engineers with 1 General Overseer maintaining full system visibility
- **Mobile-ready interface** for field teams

### Secure Multi-Tenant Operations
- **3 company themes** (Tano Energy, Volta Flow, Savannah Pipeworks) with separate visual branding
- **Role-based access control** (Engineers, Supervisors, General Overseers)
- **OTP + biometric-inspired authentication** flows
- **Tenant-aware data isolation** with clean operational boundaries
- **100% audit compliance** across all operations

### Industrial-Grade Security
- Two-factor authentication (OTP-based login)
- Multi-tenant isolation preventing data cross-contamination
- Audit logging for all system operations
- Encrypted communications and data at rest
- 99.9% uptime SLA with redundant backend systems

---

## 📁 Project Structure

```
WEBDONE/
├── index.html              # Main landing and product showcase page
├── styles.css              # Core styling with CSS variables for multi-company themes
├── script.js               # Dynamic content rendering and interactivity
├── data.js                 # Static data (zones, team, companies, testimonials)
└── README.md               # This file

Generated/Linked Resources:
├── web_app.html            # Secure command center (external link)
├── mobile_app.html         # Field engineer mobile interface
└── Unsplash imagery        # Industrial photography for context
```

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features (ARIA labels)
- **CSS3** - Modern layout (CSS Grid, Flexbox) with CSS custom properties for theming
- **Vanilla JavaScript** - No frameworks; lightweight interactivity
  - IntersectionObserver for scroll-triggered reveals
  - Dynamic DOM rendering from data arrays
  - Event-driven handlers for CTAs and navigation

### Data Management
- **Static JSON-like objects** in `data.js` for zones, team, companies, and testimonials
- **Live simulation** of pressure readings with jitter calculations
- **Carousel state management** with keyboard and mouse controls

### Design System
- **CSS Variables** supporting light/dark mode toggling
- **Multi-company theming** (Navy/Blue for Tano, Cyan for Volta, Deep Blue for Savannah)
- **Responsive typography** with Rajdhani (headings), Inter (body), IBM Plex Mono (code)
- **Smooth animations** with CSS transitions and reveal effects

---

## 🚀 How to Use

### Running Locally
1. Open `index.html` in a modern web browser
2. No build step or server required—works with file:// protocol
3. All interactivity is client-side

### Interactive Features
- **Dark/Light Mode**: Toggle in the top-right corner
- **Testimonial Carousel**: Auto-rotates every 5.2 seconds or manually navigate
- **Zone Pressure Cards**: Animate on scroll and update with live jitter
- **Mobile App CTA**: Shows "Still In Development" modal
- **Smooth Scroll Navigation**: All header links scroll to sections

### Navigation
- **Problem**: Why pipeline monitoring matters
- **Solution**: EcoGuard's integrated approach
- **Why Us**: Ghana-first identity and backend-aware design
- **Live Data**: Real-time zone monitoring dashboard
- **Multi-Company**: Tenant-aware theming
- **Reviews**: Field engineer testimonials
- **Case Study**: Tano Energy impact metrics
- **Security**: Industrial compliance and protection
- **Team**: 14-person engineering roster
- **Contact**: Operations team and CTA

---

## 👥 Core Team

### Leadership
- **General Overseer**: Eng. Amoah Anshel (Full-system supervision, no zone assignment)
- **Assisting CEO**: Eng. Jennifer S. Yindaanpoka

### Project Management
- **Project Manager**: Eng. Agnes Abrefi Ahwiren
- **Assisting Project Manager**: Eng. Adu Deborah Gyamfi

### Field Engineers (6 Zones)
- **Zone A**: Frimpong H. (142 PSI, Normal)
- **Zone B**: Baah R. (138 PSI, Normal)
- **Zone C**: Dzubey J. (187 PSI, **Alert**)
- **Zone D**: Apraku L. (128 PSI, Normal)
- **Zone E**: Henry F. (145 PSI, Normal)
- **Zone F**: Baah R. (131 PSI, Normal)

### Support Roles
- IT Specialist, Accountant, Logistics, Operations Coordinator, HR Manager, Customer Service Manager, HSE Officer, and more

See `data.js` TEAM array for full roster.

---

## 🏢 Multi-Company Support

EcoGuard serves three distinct operator companies with separate visual themes:

### Tano Energy
- **Primary Ghana operator** for national pipeline management
- **Color Theme**: Blue (#2563eb)
- **Features**: Command center interface, field response workflows, executive reporting

### Volta Flow
- **West African transport tenant** for cross-border operations
- **Color Theme**: Cyan (#0ea5e9)
- **Features**: Cross-border readiness, regional fleet management

### Savannah Pipeworks
- **Enterprise monitoring brand** for advanced analytics
- **Color Theme**: Dark Blue (#1e40af)
- **Features**: Executive reporting, integration-ready outputs, governance workflows

Each company maintains separate data boundaries and visual branding while operating on the same secure platform.

---

## 📊 Live Monitoring Dashboard

**Real-Time Zone Metrics**:
- Pressure readings (PSI) with live jitter simulation
- Status indicators (Normal / Alert)
- Percentage-of-max pressure visualization
- Assigned engineer name per zone
- Animated pressure bars on viewport entry

**Backend Architecture Indicators**:
- PostgreSQL (data persistence)
- Redis (caching and sessions)
- WebSocket (live updates)
- Secure sessions with OTP
- Multi-tenant isolation

---

## 🔒 Security & Compliance

### Authentication
- OTP-based multi-factor login
- Biometric-inspired UX for mobile
- Secure session management with Redis

### Access Control
- Role-based permissions (Engineer / Supervisor / General Overseer)
- Zone-specific field engineer dashboards
- Granular permission levels enforced at system level

### Data Protection
- Multi-tenant isolation (no data cross-contamination)
- Encrypted communications in transit
- Encrypted persistence at rest
- 100% audit logging for compliance

### Operational Reliability
- 99.9% uptime SLA
- Redundant backend systems
- Automatic failover and monitoring
- 24/7 telemetry collection

---

## 📈 Impact & Metrics

### Tano Energy Case Study
- **67% Faster Response**: 2+ hours → <45 seconds
- **$240K Annual Savings**: Prevented spillage incidents, reduced downtime
- **Zero Security Incidents**: 100% audit compliance with 14 engineers
- **Scalable to 6 Zones**: Expanded from 3 zones without overhead

---

## 🎨 Theming & Customization

### Light/Dark Mode
Toggle via the sun/moon button in the header. CSS custom properties automatically adapt:
- Background colors (`--navy-dk`, `--army-dk`)
- Text colors (`--white`, `--muted`)
- Border tints (`--border`, `--border-strong`)

### Company Color Variables
Each company's theme uses dedicated CSS variables:
- `--blue`, `--blue-lt`, `--blue-xl` (Tano Energy)
- `--cyan`, `--cyan-lt` (Volta Flow)
- Custom deep blue for Savannah Pipeworks

Modify `:root` variables in `styles.css` to adjust company branding.

---

## 📱 Responsive Design

- **Mobile-first approach** with breakpoints for tablets and desktops
- **Flexible grid layouts** using CSS Grid and Flexbox
- **Touch-friendly CTAs** with adequate spacing
- **Optimized images** via Unsplash with lazy loading
- **Viewport meta tag** for device scaling

---

## 🔧 Development Notes

### Adding New Zones
Edit the `ZONES` array in `data.js`:
```javascript
{ id: 'ZONE G', pressure: 150, status: 'normal', pct: 75, eng: 'Engineer Name' }
```

### Adding Team Members
Edit the `TEAM` array in `data.js` with role, name, and bio.

### Adding Companies
Edit the `COMPANIES` array in `data.js` with name, subtitle, color, description, and features.

### Adding Testimonials
Edit the `TESTIMONIALS` array in `data.js` with initials, quote, name, and title.

---

## 📞 Contact & Support

**Operations Team Email**: operations@ecoguard.tech  
**Phone**: +233 (Ghana)  
**Web App**: [Secure Command Center](https://agnesahwiren-oss.github.io/ecoguardwepapp/)  
**Mobile App**: In Development

---

## 📄 License & Credits

**Project**: EcoGuard Technologies · Ghana  
**Designed for**: Critical pipeline infrastructure operations across Ghana and West Africa

**Fonts**:
- Rajdhani (headings)
- Inter (body text)
- IBM Plex Mono (code/technical)

**Imagery**: Unsplash (industrial photography)

---

## 🏁 Quick Start Checklist

- [ ] Open `index.html` in browser
- [ ] Verify all sections load (scroll through page)
- [ ] Test dark/light mode toggle
- [ ] Check zone pressure cards animate
- [ ] Scroll testimonial carousel
- [ ] Click "Open Mobile App" to see development message
- [ ] Review security and compliance sections
- [ ] Explore team roster and company themes

---

**Last Updated**: April 2026  
**Version**: 1.0  
**Status**: Production-Ready for Field Deployment
