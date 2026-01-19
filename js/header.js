const headerHTML = `
<header class="site-header">
  <div class="container">
    <a href="index.html" class="logo-link">
      <img src="Resources/White Vertical.png" alt="DA Visuals Logo" class="logo-img" height="60" width="250">
    </a>
    <nav>
      <a href="index.html">Home</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="index.html#about-me">About Me</a>
      <a href="index.html#contact">Contact</a>
    </nav>
  </div>
</header>
`;

document.currentScript.outerHTML = headerHTML;
