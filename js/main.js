// Bluebonnet Music - Main JS

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-main a').forEach(a => {
        a.addEventListener('click', function() {
            document.getElementById('navMain').classList.remove('active');
        });
    });
});

// Contact form handler
async function submitInquiry(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('/api/inquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            form.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        } else {
            alert('Something went wrong. Please call us at (214) 717-8188 or email info@bluebonnetmusic.com');
        }
    } catch (err) {
        alert('Something went wrong. Please call us at (214) 717-8188 or email info@bluebonnetmusic.com');
    }
}
