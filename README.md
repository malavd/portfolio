***

# Portfolio Website

A modern, responsive portfolio website for **Malav Dalal** — Senior Systems & Functional Safety Engineer — built with vanilla HTML, CSS, and JavaScript. Hosted via GitHub Pages.

## 🌐 Live Demo

**[View Live Site](https://malavd.github.io/portfolio/)**

---

## 📂 Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── style.css               # Styling, animations, glass morphism
├── script.js               # Interactive features (scroll, nav, form)
├── thank-you.html          # Contact form success page
├── robots.txt              # SEO crawler config
├── images/                 # Portfolio images
│   └── image8.jpeg         # Hero / profile portrait
├── assets/                 # Downloadable assets
│   └── MalavDalal_R2.pdf   # Resume (PDF)
│
└── blog/                               # Blog root
    ├── index.html                      # Blog homepage (post list)
    ├── ul5500-remote-software-updates.html  # Blog post: UL 5500
    ├── PORTFOLIO-UPDATE-INSTRUCTIONS.md
    ├── README.md
    │
    ├── _posts/                         # Markdown blog posts
    │   ├── 2026-02-02-iso21434-guide.md
    │   ├── 2026-02-05-tara-methodology.md
    │   └── 2026-02-10-unece-r155.md
    │
    ├── assets/                         # Blog-specific assets
    │   ├── css/
    │   │   ├── blog.css
    │   │   └── syntax-highlighting.css
    │   └── js/
    │       └── blog.js
    │
    └── media/                          # Blog media files
        ├── images/
        │   ├── 2026-02/
        │   │   ├── iso21434-lifecycle.png
        │   │   ├── tara-process.jpg
        │   │   └── cybersecurity-arch.png
        │   └── 2026-01/
        │       └── autonomous-safety.jpg
        └── videos/
            ├── 2026-02/
            │   ├── ota-demo.mp4
            │   └── fmea-walkthrough.mp4
            └── thumbnails/
                ├── ota-demo-thumb.jpg
                └── fmea-thumb.jpg
```

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Grid, Animations, Glass Morphism)
- JavaScript (ES6+)
- Font Awesome 6.5.1
- Formspree (contact form)
- PostHog (privacy-friendly analytics)
- Google Analytics (gtag.js · GA4)

---

## ✨ Features

- Responsive design for all screen sizes
- Smooth scrolling navigation with active link tracking
- Animated background (gradient orbs + grid overlay)
- Interactive contact form (Formspree-powered with thank-you redirect)
- Mobile-friendly hamburger menu
- Glass morphism design style
- **Blog section** with individual post pages (UL 5500, ISO 21434, TARA, UNECE R155)
- Downloadable resume (PDF)
- Privacy-friendly analytics (PostHog) + Google Analytics

---

## 📋 Portfolio Sections

| Section | Description |
|---|---|
| **Intro / Hero** | Role, tagline, quick-facts card, social links |
| **What I Do** | 5 narrative blocks: FuSa, Autonomy, OTA/Connected, GenAI, Cybersecurity |
| **Experience** | Timeline: Polaris · Monarch Tractors · Rivian · Karma · Daimler |
| **Skills & Tools** | Hardware, Software/Validation, Data/Programming, Requirements, Standards |
| **Education** | M.Eng. Mech Eng (UT Arlington) · B.Eng. Automobile Eng (GTU India) |
| **Certification** | TÜV-SÜD ISO 26262 FSE · UL ISO 21448 SOTIF · TÜV-SÜD HV EV Safety L2 |
| **Blog** | Technical articles on ISO 21434, TARA, UNECE R155, UL 5500 |
| **Contact** | Form + LinkedIn / GitHub / Email / Resume download |

---

## 🚀 Local Development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/malavd/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Open `index.html` directly in your web browser, or
   - Use a local dev server for a closer-to-production experience

3. **Using VS Code Live Server**
   ```bash
   code .
   # Right-click index.html → "Open with Live Server"
   ```

### Making Changes

1. Edit files in your code editor
2. Test changes locally
3. Commit and push to GitHub
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

GitHub Pages will automatically deploy your changes.

---

## 🎨 Customization

- **Images:** Replace files in the `images/` folder
- **Resume:** Replace `assets/MalavDalal_R2.pdf` with a new PDF
- **Colors / Theme:** Edit CSS variables in `style.css`
- **Content:** Update text directly in `index.html`
- **Contact Form:** Change the Formspree endpoint in the `<form>` tag in `index.html`
- **Analytics:** Update PostHog project key and Google Analytics ID in `index.html`
- **Blog Posts:** Add new HTML files under `blog/` and link from `blog/index.html`

---

## 🖼️ Professional Headshot

The professional headshot used in this portfolio was AI-generated using the following specification:

**Prompt Used:**
> Create a photorealistic, high-resolution corporate headshot of the individual from the provided image, framed from the chest up. The subject should be rendered with a confident yet approachable expression, featuring a subtle and genuine smile to convey trustworthiness and professionalism. Ensure their posture is upright and relaxed, with shoulders slightly angled towards the camera for a dynamic composition.
>
> **Professional Attire:** Dress the subject in sharp, contemporary business attire. This should consist of a well-tailored dark suit jacket, in either navy blue or charcoal gray, worn over a crisp, white or light-blue collared shirt or blouse. The clothing must appear to be of high-quality fabric, perfectly fitted, and free of any wrinkles.
>
> **Studio Lighting:** Employ a classic and flattering studio lighting scheme. Use a soft key light to gently define and sculpt the facial features (loop lighting is preferred). Add a subtle fill light to soften shadows on the opposite side of the face, ensuring detail is preserved. Include a gentle hair light or rim light from behind to create clear separation from the background. It is critical that there are distinct, professional catchlights visible in the subject's eyes to bring them to life.
>
> **Background:** Place the subject against a seamless, solid, neutral-gray studio background. The background should be clean and unobtrusive, featuring a subtle, smooth gradient that is slightly darker at the bottom and lighter towards the top. This will add a sense of depth while ensuring the subject remains the sole focus.
>
> **Photographic Specifications:** The final image must emulate the quality of a professional DSLR camera equipped with an 85mm prime portrait lens, shot at an aperture of f/2.8. This will produce a shallow depth of field, rendering the subject's eyes and facial features in tack-sharp focus while the background is softly and pleasingly blurred (bokeh). The final output must be high-resolution, sharp, and entirely free of digital noise or artifacts.

---

## 📱 Browser Support

Works on all modern browsers including Chrome, Firefox, Safari, and Edge.

---

## 📄 License

Open source — feel free to fork and customize for your own use.

***

**Last Updated:** April 2026

***
