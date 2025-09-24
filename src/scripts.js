        
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                mobileMenu.classList.add('hidden');
            });
        });

        
        document.getElementById('contact-btn').addEventListener('click', () => {
            document.getElementById('news').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.animate-float');
            const speed = scrolled * 0.2;
            parallax.style.transform = `translateY(${speed}px) rotate(-12deg)`;
        });

        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        
        document.addEventListener('mousemove', (e) => {
            const cursor = document.querySelector('.cursor-glow');
            if (!cursor) {
                const glowElement = document.createElement('div');
                glowElement.className = 'cursor-glow fixed pointer-events-none w-4 h-4 bg-blue-500 rounded-full opacity-20 blur-sm transition-all duration-300 z-50';
                document.body.appendChild(glowElement);
            }
            
            const glow = document.querySelector('.cursor-glow');
            if (glow) {
                glow.style.left = e.clientX - 8 + 'px';
                glow.style.top = e.clientY - 8 + 'px';
            }
        });