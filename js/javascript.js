
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize AOS
            AOS.init({
                duration: 1000,
                once: true
            });

            // Typewriter effect
            const typewriterElement = document.querySelector('.typewriter');
            const phrases = ['Full Stack Developer', 'Web Designer', 'Python developer'];
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeWriter() {
                const currentPhrase = phrases[phraseIndex];

                if (isDeleting) {
                    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                    charIndex++;
                }

                if (!isDeleting && charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, 2000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(typeWriter, 500);
                } else {
                    setTimeout(typeWriter, isDeleting ? 50 : 100);
                }
            }

            typeWriter();

            // Section navigation
            function showSection(sectionId) {
                const sections = document.querySelectorAll('.section');
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                document.getElementById(sectionId).style.display = 'block';
            }

            // Attach click events to navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const sectionId = this.getAttribute('href').substring(1);
                    showSection(sectionId);
                });
            });

            // Show home section by default
            showSection('home');

            // Dark mode toggle
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;

            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                if (body.classList.contains('dark-mode')) {
                    darkModeToggle.textContent = 'Light Mode';
                } else {
                    darkModeToggle.textContent = 'Dark Mode';
                }
            });
        });
        const form = document.getElementById("form");
        const result = document.getElementById("result");

        form.addEventListener("submit", function (e) {
            const formData = new FormData(form);
            e.preventDefault();
            var object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            var json = JSON.stringify(object);
            result.innerHTML = "Please wait...";

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        result.innerHTML = json.message;
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-green-500");
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-red-500");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    result.innerHTML = "Something went wrong!";
                })
                .then(function () {
                    form.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 5000);
                });
        });

