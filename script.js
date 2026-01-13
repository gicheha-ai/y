// Services Data
const services = [
    {
        id: "web-development",
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies.",
        icon: "fas fa-code",
        tags: ["HTML/CSS", "JavaScript", "React", "Node.js"]
    },
    {
        id: "mobile-app-development",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: "fas fa-mobile-alt",
        tags: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "User-centered design solutions for exceptional digital experiences.",
        icon: "fas fa-paint-brush",
        tags: ["Figma", "Adobe XD", "Prototyping", "Wireframing"]
    },
    {
        id: "seo-services",
        title: "SEO Services",
        description: "Increase your website's visibility and organic traffic.",
        icon: "fas fa-chart-line",
        tags: ["Keywords", "Backlinks", "Analytics", "Optimization"]
    },
    {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Strategic social media campaigns to grow your brand presence.",
        icon: "fas fa-hashtag",
        tags: ["Facebook", "Instagram", "LinkedIn", "Twitter"]
    },
    {
        id: "content-writing",
        title: "Content Writing",
        description: "Engaging and SEO-optimized content for your digital platforms.",
        icon: "fas fa-pen-alt",
        tags: ["Blogs", "Articles", "SEO", "Creative"]
    },
    {
        id: "Copywriting",
        title: "Copywriting",
        description: "Persuasive copy that converts visitors into customers.",
        icon: "fas fa-edit",
        tags: ["Sales", "Advertising", "Email", "Landing Pages"]
    },
    {
        id: "video-editing",
        title: "Video Editing",
        description: "Professional video editing for marketing and entertainment.",
        icon: "fas fa-video",
        tags: ["Premiere Pro", "After Effects", "Motion Graphics"]
    },
    {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Visually stunning designs for branding and marketing materials.",
        icon: "fas fa-palette",
        tags: ["Photoshop", "Illustrator", "Branding", "Print"]
    },
    {
        id: "data-entry",
        title: "Data Entry",
        description: "Accurate and efficient data management services.",
        icon: "fas fa-keyboard",
        tags: ["Excel", "Database", "Accuracy", "Speed"]
    },
    {
        id: "virtual-assistance",
        title: "Virtual Assistance",
        description: "Comprehensive administrative support for your business.",
        icon: "fas fa-headset",
        tags: ["Administrative", "Scheduling", "Email Management"]
    },
    {
        id: "customer-service",
        title: "Customer Service",
        description: "Professional customer support to enhance client satisfaction.",
        icon: "fas fa-comments",
        tags: ["Support", "CRM", "Communication", "Satisfaction"]
    },
    {
        id: "Accounting",
        title: "Accounting",
        description: "Accurate financial record-keeping and reporting.",
        icon: "fas fa-calculator",
        tags: ["Bookkeeping", "Tax", "Financial Statements"]
    },
    {
        id: "Bookkeeping",
        title: "Bookkeeping",
        description: "Organized financial tracking for business insights.",
        icon: "fas fa-book",
        tags: ["QuickBooks", "Xero", "Financial Records"]
    },
    {
        id: "legal-consulting",
        title: "Legal Consulting",
        description: "Expert legal advice for business compliance.",
        icon: "fas fa-gavel",
        tags: ["Contracts", "Compliance", "Business Law"]
    },
    {
        id: "financial-planning",
        title: "Financial Planning",
        description: "Strategic financial planning for growth and stability.",
        icon: "fas fa-chart-pie",
        tags: ["Investment", "Retirement", "Budgeting"]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Comprehensive online marketing strategies.",
        icon: "fas fa-bullhorn",
        tags: ["Strategy", "Campaigns", "ROI", "Analytics"]
    },
    {
        id: "ppc-management",
        title: "PPC Management",
        description: "Pay-per-click advertising for immediate results.",
        icon: "fas fa-ad",
        tags: ["Google Ads", "Facebook Ads", "Bing Ads"]
    },
    {
        id: "email-marketing",
        title: "Email Marketing",
        description: "Targeted email campaigns for customer engagement.",
        icon: "fas fa-envelope-open-text",
        tags: ["Newsletters", "Automation", "Campaigns"]
    },
    {
        id: "ecommerce-development",
        title: "E-commerce Development",
        description: "Online stores with seamless shopping experiences.",
        icon: "fas fa-shopping-cart",
        tags: ["Shopify", "WooCommerce", "Magento"]
    },
    {
        id: "wordpress-development",
        title: "WordPress Development",
        description: "Custom WordPress websites and themes.",
        icon: "fab fa-wordpress",
        tags: ["Themes", "Plugins", "Customization"]
    },
    {
        id: "shopify-development",
        title: "Shopify Development",
        description: "Professional Shopify stores with custom features.",
        icon: "fas fa-store",
        tags: ["Shopify", "E-commerce", "Themes"]
    },
    {
        id: "cybersecurity-consulting",
        title: "Cybersecurity Consulting",
        description: "Protect your business from digital threats.",
        icon: "fas fa-shield-alt",
        tags: ["Security", "Audit", "Protection"]
    },
    {
        id: "ai-machine-learning",
        title: "AI & Machine Learning",
        description: "Intelligent solutions powered by AI and ML.",
        icon: "fas fa-robot",
        tags: ["Python", "TensorFlow", "Neural Networks"]
    },
    {
        id: "blockchain-development",
        title: "Blockchain Development",
        description: "Decentralized applications and smart contracts.",
        icon: "fas fa-link",
        tags: ["Solidity", "Smart Contracts", "DApps"]
    },
    {
        id: "nft-creation",
        title: "NFT Creation",
        description: "Digital art and collectibles for the blockchain.",
        icon: "fas fa-coins",
        tags: ["Digital Art", "Smart Contracts", "Marketplaces"]
    },
    {
        id: "game-development",
        title: "Game Development",
        description: "Interactive games for various platforms.",
        icon: "fas fa-gamepad",
        tags: ["Unity", "Unreal", "2D/3D"]
    },
    {
        id: "3d-modeling-animation",
        title: "3D Modeling & Animation",
        description: "High-quality 3D assets and animations.",
        icon: "fas fa-cube",
        tags: ["Blender", "Maya", "3D Max"]
    },
    {
        id: "voice-over-services",
        title: "Voice-over Services",
        description: "Professional voice recordings for various media.",
        icon: "fas fa-microphone",
        tags: ["Recording", "Audio", "Narration"]
    },
    {
        id: "translation-localization",
        title: "Translation & Localization",
        description: "Accurate translation for global audiences.",
        icon: "fas fa-language",
        tags: ["Multilingual", "Localization", "Accuracy"]
    },
    {
        id: "transcription-services",
        title: "Transcription Services",
        description: "Convert audio/video to accurate text.",
        icon: "fas fa-file-alt",
        tags: ["Accuracy", "Timestamps", "Formatting"]
    },
    {
        id: "podcast-editing",
        title: "Podcast Editing",
        description: "Professional podcast production and editing.",
        icon: "fas fa-podcast",
        tags: ["Audio Editing", "Mixing", "Production"]
    },
    {
        id: "music-production",
        title: "Music Production",
        description: "Original music composition and production.",
        icon: "fas fa-music",
        tags: ["Composition", "Mixing", "Mastering"]
    },
    {
        id: "business-plan-writing",
        title: "Business Plan Writing",
        description: "Comprehensive business plans for startups.",
        icon: "fas fa-business-time",
        tags: ["Strategy", "Financials", "Market Analysis"]
    },
    {
        id: "resume-writing",
        title: "Resume Writing",
        description: "Professional resumes that stand out.",
        icon: "fas fa-file-contract",
        tags: ["ATS", "Professional", "Career"]
    },
    {
        id: "crm-implementation",
        title: "CRM Implementation",
        description: "Set up and customize CRM systems.",
        icon: "fas fa-users-cog",
        tags: ["Salesforce", "HubSpot", "Customization"]
    },
    {
        id: "sales-funnel-creation",
        title: "Sales Funnel Creation",
        description: "Optimized sales funnels for conversion.",
        icon: "fas fa-filter",
        tags: ["Conversion", "Automation", "Optimization"]
    },
    {
        id: "marketing-automation",
        title: "Marketing Automation",
        description: "Automate marketing workflows and campaigns.",
        icon: "fas fa-cogs",
        tags: ["Automation", "Workflows", "Integration"]
    },
    {
        id: "market-research",
        title: "Market Research",
        description: "In-depth market analysis and insights.",
        icon: "fas fa-search",
        tags: ["Analysis", "Data", "Insights"]
    },
    {
        id: "data-analysis",
        title: "Data Analysis",
        description: "Transform data into actionable insights.",
        icon: "fas fa-chart-bar",
        tags: ["Excel", "SQL", "Visualization"]
    },
    {
        id: "software-testing",
        title: "Software Testing",
        description: "Comprehensive testing for quality assurance.",
        icon: "fas fa-vial",
        tags: ["QA", "Automation", "Manual Testing"]
    },
    {
        id: "qa-engineering",
        title: "QA Engineering",
        description: "Quality assurance engineering services.",
        icon: "fas fa-check-double",
        tags: ["Testing", "Automation", "CI/CD"]
    },
    {
        id: "tech-support",
        title: "Tech Support",
        description: "Technical support and troubleshooting.",
        icon: "fas fa-tools",
        tags: ["Helpdesk", "Troubleshooting", "Support"]
    },
    {
        id: "it-consulting",
        title: "IT Consulting",
        description: "Strategic IT consulting for businesses.",
        icon: "fas fa-laptop-code",
        tags: ["Strategy", "Infrastructure", "Solutions"]
    },
    {
        id: "network-administration",
        title: "Network Administration",
        description: "Network setup and management.",
        icon: "fas fa-network-wired",
        tags: ["Networking", "Security", "Maintenance"]
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing",
        description: "Cloud infrastructure and migration.",
        icon: "fas fa-cloud",
        tags: ["AWS", "Azure", "Google Cloud"]
    },
    {
        id: "devops-engineering",
        title: "DevOps Engineering",
        description: "Streamline development and operations.",
        icon: "fas fa-sync",
        tags: ["CI/CD", "Docker", "Kubernetes"]
    },
    {
        id: "erp-consulting",
        title: "ERP Consulting",
        description: "Enterprise resource planning solutions.",
        icon: "fas fa-cogs",
        tags: ["SAP", "Oracle", "Implementation"]
    },
    {
        id: "sap-consulting",
        title: "SAP Consulting",
        description: "SAP system implementation and support.",
        icon: "fas fa-database",
        tags: ["SAP", "ERP", "Business Suite"]
    },
    {
        id: "wordpress-plugin-development",
        title: "WordPress Plugin Development",
        description: "Custom WordPress plugins.",
        icon: "fab fa-wordpress-simple",
        tags: ["PHP", "WordPress", "Custom"]
    },
    {
        id: "api-integration",
        title: "API Integration",
        description: "Seamless API integration services.",
        icon: "fas fa-plug",
        tags: ["REST", "GraphQL", "Integration"]
    },
    {
        id: "cybersecurity-auditing",
        title: "Cybersecurity Auditing",
        description: "Comprehensive security audits.",
        icon: "fas fa-user-shield",
        tags: ["Security", "Audit", "Vulnerability"]
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    const servicesGrid = document.querySelector('.services-grid');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Generate Service Cards
    services.forEach(service => {
        const serviceCard = document.createElement('a');
        serviceCard.href = `services/${service.id}.html`;
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-tags">
                ${service.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});