# Blossom Keys — Website

A 5-page static website (HTML, CSS, JavaScript — no build step required).

## Pages
- `index.html` — Home
- `consulting.html` — Consulting
- `talent-development.html` — Talent Development
- `coaching.html` — Coaching
- `about.html` — About & Contact

Shared assets: `css/styles.css`, `js/main.js`, and the `images/` folder.

---

## How to publish it free on GitHub Pages

You don't need any coding tools — everything is done in your web browser.

1. **Create a GitHub account** at https://github.com (free) if you don't have one.
2. Click the **+** (top right) → **New repository**.
   - Repository name: `blossomkeys` (any name is fine).
   - Set it to **Public**.
   - Click **Create repository**.
3. On the new repo page, click **"uploading an existing file"** (a link in the middle of the page).
4. **Drag and drop ALL the files and folders** from this website package into the upload box
   (the five `.html` files, plus the `css`, `js`, and `images` folders, and this README).
   - Tip: select everything inside the folder, not the folder itself, so `index.html` sits at the top level.
5. Click **Commit changes** (green button) to save the upload.
6. Go to the repo's **Settings** → **Pages** (left sidebar).
7. Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Branch: **main**, folder: **/ (root)**. Click **Save**.
8. Wait 1–2 minutes, then refresh. GitHub will show your live address, e.g.
   `https://yourusername.github.io/blossomkeys/`

That's it — your site is live.

---

## Using your own domain (www.blossomkeys.com)

1. In the repo **Settings → Pages → Custom domain**, type `www.blossomkeys.com` and Save.
2. At your domain registrar (where you bought blossomkeys.com), add a **CNAME record**:
   - Host/Name: `www`
   - Value/Target: `yourusername.github.io`
3. (Optional) To make the plain `blossomkeys.com` redirect to `www`, add the four GitHub Pages
   `A` records for the root domain — GitHub's Pages docs list the exact IP addresses.
4. Back in Settings → Pages, tick **Enforce HTTPS** once it becomes available.

DNS changes can take a little time (minutes to a few hours) to take effect.

---

## The enquiry form

The "Get in touch" form on the About page is already connected to **Web3Forms** and sends
submissions to **puicheng.wong@blossomkeys.com** — no server needed.

- The very first submission may need a one-time confirmation, and could land in your spam/junk
  folder, so check there once.
- A hidden honeypot field silently screens out bots; Web3Forms also filters spam.
- If you ever change the destination email or need to manage the form, sign in at
  https://web3forms.com with the same email. The access key lives in `about.html`.

---

## Editing later

All text lives directly in the `.html` files. Open the relevant page in any text editor,
change the words between the tags, save, and re-upload that file to GitHub (you can upload a
single changed file the same way as step 3 above — GitHub will replace the old one).
