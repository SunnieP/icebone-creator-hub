// IcedBone Creator Hub - JavaScript
// Matching original Glacier design

// Brand Colors
const COLORS = {
    background: {
        primary: '#0a0a0f',
        secondary: '#12121a',
        card: 'rgba(18, 18, 30, 0.6)',
    },
    glacier: {
        purple: '#b145ff',
        cyan: '#00e5ff',
        teal: '#1de9b6',
        yellow: '#ffd700',
    },
    text: {
        primary: '#f0f0f5',
        secondary: '#b5b5c5',
        muted: '#808090',
    },
};

// Configuration - UPDATE THESE URLs
const CONFIG = {
    twitchChannel: 'icebone',
    profileImage: 'https://via.placeholder.com/120/b145ff/ffffff?text=IB', // REPLACE with your profile pic URL
    glacierLogo: 'https://via.placeholder.com/140/00e5ff/ffffff?text=Glacier', // REPLACE with Glacier logo URL
    stats: {
        twitch: { followers: '3.5K', avgViewers: '140' },
        tiktok: { followers: '1.2K', likes: '45K+' },
        instagram: { followers: '850', engagement: '8.2%' },
        youtube: { subscribers: '420', views: '25K+' }
    }
};

// Utility function to create elements
const createElement = (tag, className = '', content = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.textContent = content;
    return el;
};

// Build Hero Section (FRAME 1)
const buildHeroSection = () => {
    const section = createElement('section', 'hero-section');
    const content = createElement('div', 'hero-content');
    
    // Hero Identity (Profile + Logo)
    const identity = createElement('div', 'hero-identity');
    
    // Profile wrapper with image and badge
    const profileWrapper = createElement('div', 'profile-wrapper');
    const profileImg = document.createElement('img');
    profileImg.src = CONFIG.profileImage;
    profileImg.alt = 'IcedBone';
    profileImg.className = 'profile-image';
    
    const profileBadge = createElement('div', 'profile-badge');
    profileBadge.innerHTML = '<i class="fas fa-snowflake" style="font-size: 18px;"></i>';
    
    profileWrapper.appendChild(profileImg);
    profileWrapper.appendChild(profileBadge);
    
    // Logo wrapper
    const logoWrapper = createElement('div', 'logo-wrapper');
    const logoImg = document.createElement('img');
    logoImg.src = CONFIG.glacierLogo;
    logoImg.alt = 'Glacier';
    logoImg.className = 'glacier-logo';
    logoWrapper.appendChild(logoImg);
    
    identity.appendChild(profileWrapper);
    identity.appendChild(logoWrapper);
    
    // Hero Header (Name + Tagline)
    const header = createElement('div', 'hero-header');
    const name = createElement('h1', 'hero-name', 'IcedBone');
    const tagline = createElement('div', 'hero-tagline', 'Just a Chill Uno til His 30s Cub 🐻');
    header.appendChild(name);
    header.appendChild(tagline);
    
    // Hero Mission
    const mission = createElement('div', 'hero-mission');
    mission.textContent = 'High-level competitive gameplay meets authentic community vibes. Member of Taylor Gang Gaming and proud representative of THAT Community — where the culture, strategy, and good times create something real.';
    
    // Hero Stats (4 stat blocks)
    const stats = createElement('div', 'hero-stats');
    
    const statData = [
        { label: 'COMMUNITY STRONG', value: '3.5K', context: 'Followers', accent: 'cyan' },
        { label: 'CONSISTENT PRESENCE', value: '4–5x weekly', context: 'Live streams', accent: 'purple' },
        { label: 'HOURS IN', value: '850+', context: 'Streamed', accent: 'cyan' },
        { label: 'AVG WATCH TIME', value: '42 min', context: 'Per session', accent: 'purple' }
    ];
    
    statData.forEach(stat => {
        const block = createElement('div', 'stat-block');
        const label = createElement('div', 'stat-label', stat.label);
        label.style.color = stat.accent === 'cyan' ? COLORS.glacier.cyan : COLORS.glacier.purple;
        const value = createElement('div', 'stat-value', stat.value);
        const context = createElement('div', 'stat-context', stat.context);
        
        block.appendChild(label);
        block.appendChild(value);
        block.appendChild(context);
        stats.appendChild(block);
    });
    
    content.appendChild(identity);
    content.appendChild(header);
    content.appendChild(mission);
    content.appendChild(stats);
    section.appendChild(content);
    
    return section;
};

// Build Twitch Embed Section
const buildTwitchSection = () => {
    const section = createElement('section', 'twitch-embed-section');
    
    // Header
    const header = createElement('div', 'section-header');
    const title = createElement('h2', 'section-title', 'Watch on Twitch');
    const subtitle = createElement('p', 'section-subtitle', 'Catch me live 4-5 times weekly');
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // Embed container
    const container = createElement('div', 'twitch-embed-container');
    const iframe = document.createElement('iframe');
    iframe.src = `https://player.twitch.tv/?channel=${CONFIG.twitchChannel}&parent=${window.location.hostname}&muted=false`;
    iframe.allowFullscreen = true;
    iframe.className = 'twitch-iframe';
    container.appendChild(iframe);
    
    // Footer
    const footer = createElement('div', 'twitch-embed-footer');
    const footerText = createElement('p');
    footerText.textContent = 'Share this page when I go live instead of just the Twitch link — it gives context, shows the brand, and makes it easier for new viewers to understand what we\'re about.';
    
    const followBtn = document.createElement('a');
    followBtn.href = `https://twitch.tv/${CONFIG.twitchChannel}`;
    followBtn.className = 'twitch-follow-btn';
    followBtn.target = '_blank';
    followBtn.innerHTML = '<i class="fas fa-video"></i> Follow on Twitch';
    
    footer.appendChild(footerText);
    footer.appendChild(followBtn);
    
    section.appendChild(header);
    section.appendChild(container);
    section.appendChild(footer);
    
    return section;
};

// Build Live Stats Section
const buildLiveStatsSection = () => {
    const section = createElement('section', 'live-stats-section');
    
    // Header
    const header = createElement('div', 'section-header');
    const title = createElement('h2', 'section-title', 'Current reach across platforms');
    const subtitle = createElement('p', 'section-subtitle', 'Real vibes, real strategy, real community');
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // Stats grid
    const grid = createElement('div', 'live-stats-grid');
    
    const platforms = [
        { 
            name: 'Twitch', 
            icon: '<i class="fab fa-twitch"></i>',
            value: CONFIG.stats.twitch.followers,
            label: 'Followers',
            color: COLORS.glacier.purple,
            borderColor: `${COLORS.glacier.purple}40`
        },
        { 
            name: 'TikTok', 
            icon: '<i class="fab fa-tiktok"></i>',
            value: CONFIG.stats.tiktok.followers,
            label: 'Followers',
            color: COLORS.glacier.cyan,
            borderColor: `${COLORS.glacier.cyan}40`
        },
        { 
            name: 'Instagram', 
            icon: '<i class="fab fa-instagram"></i>',
            value: CONFIG.stats.instagram.followers,
            label: 'Followers',
            color: COLORS.glacier.teal,
            borderColor: `${COLORS.glacier.teal}40`
        },
        { 
            name: 'YouTube', 
            icon: '<i class="fab fa-youtube"></i>',
            value: CONFIG.stats.youtube.subscribers,
            label: 'Subscribers',
            color: COLORS.glacier.purple,
            borderColor: `${COLORS.glacier.purple}40`
        }
    ];
    
    platforms.forEach((platform, index) => {
        const card = createElement('div', 'live-stat-card');
        card.style.borderColor = platform.borderColor;
        card.style.animationDelay = `${index * 100}ms`;
        
        const icon = createElement('div', 'live-stat-icon');
        icon.innerHTML = platform.icon;
        icon.style.color = platform.color;
        
        const value = createElement('div', 'live-stat-value', platform.value);
        value.style.color = platform.color;
        
        const label = createElement('div', 'live-stat-label', platform.label);
        const platformName = createElement('div', 'live-stat-platform', platform.name);
        
        card.appendChild(icon);
        card.appendChild(value);
        card.appendChild(label);
        card.appendChild(platformName);
        
        grid.appendChild(card);
    });
    
    section.appendChild(header);
    section.appendChild(grid);
    
    return section;
};

// Initialize the page
const init = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    
    // Build and append all sections in order
    root.appendChild(buildHeroSection());
    root.appendChild(buildTwitchSection());
    root.appendChild(buildLiveStatsSection());
    
    console.log('✅ IcedBone Creator Hub initialized');
    console.log('📝 Remember to update CONFIG.profileImage and CONFIG.glacierLogo with your actual image URLs');
};

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
