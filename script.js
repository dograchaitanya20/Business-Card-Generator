document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('customization-form');
    const card = document.getElementById('business-card');
    const logoUpload = document.getElementById('logo-upload');
    const logoImage = document.getElementById('logo-image');
    const logoText = document.getElementById('logo-text');

    // Handle logo upload
    logoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                logoImage.src = event.target.result;
                logoImage.style.display = 'block';
                logoText.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    // Real-time updates for card customization
    form.addEventListener('input', (e) => {
        const bgColor1 = document.getElementById('bg-color1').value;
        const bgColor2 = document.getElementById('bg-color2').value;
        const textColor = document.getElementById('text-color').value;
        const fontStyle = document.getElementById('font-style').value;
        const companyName = document.getElementById('company-name-input').value;
        const tagline = document.getElementById('tagline-input').value;
        const userName = document.getElementById('user-name-input').value;
        const designation = document.getElementById('designation-input').value;
        const contactInfo = document.getElementById('contact-input').value;

        // Update card styles
        card.style.background = `linear-gradient(135deg, ${bgColor1}, ${bgColor2})`;
        card.style.color = textColor;
        card.style.fontFamily = fontStyle;

        // Update card content
        document.getElementById('company-name').textContent = companyName || "Your Company";
        document.getElementById('tagline').textContent = tagline || "Your Slogan Here";
        document.getElementById('user-name').textContent = userName || "Your Name";
        document.getElementById('designation').textContent = designation || "Your Designation";
        document.getElementById('contact-info').textContent = contactInfo || "+123 456 7890 | email@example.com";
    });

    // Download card as PNG
    document.getElementById('download-btn').addEventListener('click', () => {
        html2canvas(card).then(canvas => {
            const link = document.createElement('a');
            link.download = 'business-card.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    });
});