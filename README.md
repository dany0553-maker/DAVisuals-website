# DA Visuals — GitHub Pages site

This repository is a simple static GitHub Pages site based on the live site at https://mediumslateblue-cod-769966.hostingersite.com/.

Quick deploy steps:

1. Create a new GitHub repository (or use an existing one).
2. Initialize and push this folder to the repo's `main` branch:

```bash
git init
git add .
git commit -m "Initial GitHub Pages site"
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

3. On GitHub: go to `Settings` → `Pages` and set the source to `main` branch and folder `/ (root)`.

4. After a minute the site should be available at `https://your-username.github.io/your-repo/`.

Notes:
- This is a static mirror intended for GitHub Pages. Contact forms on the original site are not functional here — replace with Formspree or similar if you need form submissions.
- Update `index.html` and `styles.css` to match branding or add assets.
