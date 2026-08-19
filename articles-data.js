const articlesList = [
    { title: "We Analysed Thousands of Real Print Checks. Here's What People Get Wrong.", url: "print-quality-statistics" },
    { title: "Can You Print AI-Generated Images? A Practical Guide", url: "can-you-print-ai-generated-images" },
    { title: "AI Image Print Resolution Guide: Exact Specs for Every Tool", url: "ai-image-print-resolution-guide" },
    { title: "Best Image Resolution for Large Canvas Prints Without Losing Quality", url: "Best-Image-Resolution-for-Large-Canvas-prints" },
    { title: "Resolution, DPI and PPI explained", url: "resolution-dpi-ppi" },
    { title: "How to Prepare Your Photos for Printing", url: "prepare-photos-printing" },
    { title: "Print Your Photos at Home vs a Print Shop", url: "print-home-vs-print-shop" },
    { title: "Stop Paying Adobe: Affinity Photo Free", url: "stop-paying-adobe-affinity-photo-free" },
    { title: "I Quit Adobe For 30 Days", url: "i-quit-adobe-30-days" },
    { title: "Affinity vs Photoshop", url: "affinity-vs-photoshop" },
    { title: "I'm DONE with Adobe…", url: "im-done-with-adobe-one-year-later" },
    { title: "How many PPI do you need to make large prints?", url: "how-many-ppi-for-large-prints" },
    { title: "Pushing 12MP RAW to Poster Size", url: "pushing-12mp-raw-to-poster-size" },
    { title: "iPhone 17 Pro vs Pro Mirrorless Cameras", url: "iphone-17-pro-vs-pro-mirrorless-cameras" },
    { title: "Color Spaces: sRGB vs. Adobe RGB", url: "color-spaces-srgb-adobe-rgb" },
    { title: "Choosing Paper: Lustre, Glossy, Matte", url: "choosing-paper-lustre-glossy-matte" },
    { title: "How to Calibrate Your Monitor", url: "how-to-calibrate-your-monitor" },
    { title: "AI Upscaling: Print Small Files Large", url: "ai-upscaling-print-small-files-large" },
    { title: "Aspect Ratios: Why Photos Get Cropped", url: "aspect-ratios-why-photos-get-cropped" },
    { title: "Best Professional Photo Labs", url: "best-professional-photo-labs" },
    { title: "How to Backup Your Photos", url: "how-to-backup-your-photos" },
    { title: "Darktable vs. GIMP: Free Alternatives", url: "darktable-vs-gimp-free-alternatives" },
    { title: "Metal vs. Acrylic Prints", url: "metal-vs-acrylic-prints" },
    { title: "5 Reasons Your Prints Are Too Dark", url: "reasons-your-prints-are-too-dark" }
];

function renderSidebar(currentPage) {
    const list = document.getElementById('article-link-list');
    if (!list) return;

    list.innerHTML = articlesList.map(article => {
        const isActive = article.url === currentPage;
        return `<li><a href="${article.url}"${isActive ? ' class="active-link"' : ''}>${article.title}</a></li>`;
    }).join('');
}
