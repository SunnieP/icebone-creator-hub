// IceBone Creator Hub - Main JavaScript

// Brand Colors Configuration
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

// Application State
const appState = {
    isLive: false,
    stats: {
        twitch: { followers: '2.1K', avgViewers: '150+' },
        tiktok: { followers: '8.5K', likes: '45K+' },
        youtube: { subscribers: '1.2K', views: '25K+' },
        instagram: { followers: '3.4K', engagement: '8.2%' }
    }
};

// Utility Functions
const createElement = (tag, className, content = '') => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
};

const createIcon = (name) => {
    const iconMap = {
        'trending-up': '📈',
        'users': '👥',
        'video': '📹',
        'message': '💬',
        'sparkles': '✨',
        'download': '⬇️',
        'external': '↗️',
        'twitch': '🎮',
        'tiktok': '🎵',
        'youtube': '▶️',
        'instagram': '📸'
    };
    return iconMap[name] || '•';
};

// Component: Stat Block
const createStatBlock = (label, value, context, accent = 'purple') => {
    const accentColor = accent === 'cyan' ? COLORS.glacier.cyan : COLORS.glacier.purple;
    
    const block = createElement('div', 'stat-block');
    const labelEl = createElement('div', 'stat-label', label);
    labelEl.style.color = accentColor;
    const valueEl = createElement('div', 'stat-value', value);
    
    block.appendChild(labelEl);
    block.appendChild(valueEl);
    
    if (context) {
        const contextEl = createElement('div', 'stat-context', context);
        block.appendChild(contextEl);
    }
    
    return block;
};

// Component: Live Stat Card
const createLiveStatCard = (platform, icon, value, label, accentColor, delay = 0) => {
    const card = createElement('div', 'live-stat-card');
    card.style.animationDelay = `${delay}ms`;
    card.style.borderColor = `${accentColor}40`;
    
    const iconEl = createElement('div', 'live-stat-icon', icon);
    iconEl.style.color = accentColor;
    
    const content = createElement('div', 'live-stat-content');
    const valueEl = createElement('div', 'live-stat-value', value);
    valueEl.style.color = accentColor;
    const labelEl = createElement('div', 'live-stat-label', label);
    const platformEl = createElement('div', 'live-stat-platform', platform);
    
    content.appendChild(valueEl);
    content.appendChild(labelEl);
    content.appendChild(platformEl);
    
    card.appendChild(iconEl);
    card.appendChild(content);
    
    return card;
};

// Component: Community Card
const createCommunityCard = (icon, title, description, delay = 0) => {
    const card = createElement('div', 'community-card');
    card.style.animationDelay = `${delay}ms`;
    
    const iconEl = createElement('div', 'card-icon', icon);
    const titleEl = createElement('div', 'card-title', title);
    const descEl = createElement('div', 'card-description', description);
    
    card.appendChild(iconEl);
    card.appendChild(titleEl);
    card.appendChild(descEl);
    
    return card;
};

// Component: Platform Card
const createPlatformCard = (platform, icon, handle, stats, link, accentColor) => {
    const card = createElement('div', 'platform-card');
    
    // Header
    const header = createElement('div', 'platform-header');
    const info = createElement('div', 'platform-info');
    const iconEl = createElement('div', 'platform-icon', icon);
    iconEl.style.color = accentColor;
    
    const nameWrapper = createElement('div');
    const nameEl = createElement('div', 'platform-name', platform);
    const handleEl = createElement('div', 'platform-handle', `@${handle}`);
    nameWrapper.appendChild(nameEl);
    nameWrapper.appendChild(handleEl);
    
    info.appendChild(iconEl);
    info.appendChild(nameWrapper);
    header.appendChild(info);
    
    // Stats
    const statsContainer = createElement('div', 'platform-stats');
    stats.forEach(stat => {
        const statEl = createElement('div', 'platform-stat');
        const valueEl = createElement('div', 'platform-stat-value', stat.value);
        const labelEl = createElement('div', 'platform-stat-label', stat.label);
        statEl.appendChild(valueEl);
        statEl.appendChild(labelEl);
        statsContainer.appendChild(statEl);
    });
    
    // Link
    const linkEl = createElement('a', 'platform-link');
    linkEl.href = link;
    linkEl.target = '_blank';
    linkEl.rel = 'noopener noreferrer';
    linkEl.textContent = `Visit ${platform} `;
    linkEl.innerHTML += createIcon('external');
    
    card.appendChild(header);
    card.appendChild(statsContainer);
    card.appendChild(linkEl);
    
    return card;
};

// Build Hero Section
const buildHeroSection = () => {
    const section = createElement('section', 'hero-section');
    const content = createElement('div', 'hero-content');
    
    // Badge
    const badge = createElement('div', 'hero-badge');
    const liveIndicator = createElement('span', 'live-indicator');
    const badgeText = appState.isLive ? 'Join the stream right now' : 'Catch me live 4-5 times weekly';
    badge.appendChild(liveIndicator);
    badge.appendChild(document.createTextNode(badgeText));
    
    // Title
    const title = createElement('h1', 'hero-title', 'IceBone');
    
    // Subtitle
    const subtitle = createElement('p', 'hero-subtitle');
    subtitle.innerHTML = 'Share this page when I go live instead of just the Twitch link — it gives context, shows the brand, and makes it easier for new viewers to understand what we\'re about.';
    
    // CTA Button
    const cta = createElement('a', 'cta-button');
    cta.href = 'https://twitch.tv/icebone';
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';
    cta.textContent = 'Follow on Twitch ';
    cta.innerHTML += createIcon('external');
    
    content.appendChild(badge);
    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(cta);
    section.appendChild(content);
    
    return section;
};

// Build Stats Section
const buildStatsSection = () => {
    const section = createElement('section', 'stats-section');
    const container = createElement('div', 'container');
    
    // Header
    const header = createElement('div', 'section-header');
    const title = createElement('h2', 'section-title', 'Current reach across platforms');
    const subtitle = createElement('p', 'section-subtitle', 'Real vibes, real strategy, real community');
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // Stats Grid
    const grid = createElement('div', 'stats-grid');
    
    const stats = [
        { label: 'Total Followers', value: '15K+', context: 'Growing steady, staying authentic', accent: 'purple' },
        { label: 'Platforms', value: '4', context: 'Each platform serves a purpose', accent: 'cyan' },
        { label: 'Community', value: 'THAT', context: 'Building with the right people', accent: 'purple' }
    ];
    
    stats.forEach(stat => {
        grid.appendChild(createStatBlock(stat.label, stat.value, stat.context, stat.accent));
    });
    
    // Live Stats
    const liveGrid = createElement('div', 'live-stats-grid');
    
    const liveStats = [
        { platform: 'Twitch', icon: createIcon('twitch'), value: appState.stats.twitch.followers, label: 'Followers', color: COLORS.glacier.purple, delay: 0 },
        { platform: 'TikTok', icon: createIcon('tiktok'), value: appState.stats.tiktok.followers, label: 'Followers', color: COLORS.glacier.cyan, delay: 100 },
        { platform: 'YouTube', icon: createIcon('youtube'), value: appState.stats.youtube.subscribers, label: 'Subscribers', color: COLORS.glacier.teal, delay: 200 },
        { platform: 'Instagram', icon: createIcon('instagram'), value: appState.stats.instagram.followers, label: 'Followers', color: COLORS.glacier.yellow, delay: 300 }
    ];
    
    liveStats.forEach(stat => {
        liveGrid.appendChild(createLiveStatCard(stat.platform, stat.icon, stat.value, stat.label, stat.color, stat.delay));
    });
    
    container.appendChild(header);
    container.appendChild(grid);
    container.appendChild(liveGrid);
    section.appendChild(container);
    
    return section;
};

// Build Community Section
const buildCommunitySection = () => {
    const section = createElement('section', 'community-section');
    const container = createElement('div', 'container');
    
    // Header
    const header = createElement('div', 'section-header');
    const title = createElement('h2', 'section-title', 'THAT Community');
    const subtitle = createElement('p', 'section-subtitle');
    subtitle.innerHTML = `THAT Community isn't just a tagline — it's the people who show up, who engage, who build this alongside me. It's the trendsetters, the culture shapers, the ones grinding to create something real in their own space.<br><br>This is for those who were overlooked but refuse to stay in the background. Whether you're streaming, creating, or just vibing — your presence is felt here. We celebrate wins, support growth, and uplift each other.<br><br>If you've got something real to build, this is your space. 🔥`;
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // Community Cards
    const grid = createElement('div', 'community-grid');
    
    const cards = [
        { icon: createIcon('users'), title: 'Real Connection', description: 'Not just numbers — actual community members who vibe with the content', delay: 0 },
        { icon: createIcon('trending-up'), title: 'Steady Growth', description: 'Building sustainably without chasing trends that don\'t align', delay: 100 },
        { icon: createIcon('sparkles'), title: 'Authentic Energy', description: 'What you see is what you get — no performance, just presence', delay: 200 }
    ];
    
    cards.forEach(card => {
        grid.appendChild(createCommunityCard(card.icon, card.title, card.description, card.delay));
    });
    
    container.appendChild(header);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
};

// Build Platforms Section
const buildPlatformsSection = () => {
    const section = createElement('section', 'platforms-section');
    const container = createElement('div', 'container');
    
    // Header
    const header = createElement('div', 'section-header');
    const title = createElement('h2', 'section-title', 'Connect on your favorite platform');
    header.appendChild(title);
    
    // Platforms Grid
    const grid = createElement('div', 'platforms-grid');
    
    const platforms = [
        {
            name: 'Twitch',
            icon: createIcon('twitch'),
            handle: 'icebone',
            stats: [
                { value: appState.stats.twitch.followers, label: 'Followers' },
                { value: appState.stats.twitch.avgViewers, label: 'Avg Viewers' }
            ],
            link: 'https://twitch.tv/icebone',
            color: COLORS.glacier.purple
        },
        {
            name: 'TikTok',
            icon: createIcon('tiktok'),
            handle: 'icebone',
            stats: [
                { value: appState.stats.tiktok.followers, label: 'Followers' },
                { value: appState.stats.tiktok.likes, label: 'Likes' }
            ],
            link: 'https://tiktok.com/@icebone',
            color: COLORS.glacier.cyan
        },
        {
            name: 'YouTube',
            icon: createIcon('youtube'),
            handle: 'icebone',
            stats: [
                { value: appState.stats.youtube.subscribers, label: 'Subscribers' },
                { value: appState.stats.youtube.views, label: 'Views' }
            ],
            link: 'https://youtube.com/@icebone',
            color: COLORS.glacier.teal
        },
        {
            name: 'Instagram',
            icon: createIcon('instagram'),
            handle: 'icebone',
            stats: [
                { value: appState.stats.instagram.followers, label: 'Followers' },
                { value: appState.stats.instagram.engagement, label: 'Engagement' }
            ],
            link: 'https://instagram.com/icebone',
            color: COLORS.glacier.yellow
        }
    ];
    
    platforms.forEach(platform => {
        grid.appendChild(createPlatformCard(platform.name, platform.icon, platform.handle, platform.stats, platform.link, platform.color));
    });
    
    container.appendChild(header);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
};

// Build Media Kit Section
const buildMediaKitSection = () => {
    const section = createElement('section', 'mediakit-section');
    const container = createElement('div', 'container');
    const content = createElement('div', 'mediakit-content');
    
    // Header
    const header = createElement('div', 'section-header');
    const title = createElement('h2', 'section-title', 'Media Kit & Partnerships');
    const subtitle = createElement('p', 'mediakit-description');
    subtitle.innerHTML = 'Full brand guidelines, stats, audience demographics, partnerships info, and press-ready assets for brands and collaborators.<br><br>Open to brand partnerships, collaborations, and opportunities that align with the community\'s values and energy. If it\'s real, let\'s talk.';
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // CTA Button
    const cta = createElement('a', 'cta-button');
    cta.href = '#'; // Add actual media kit link
    cta.textContent = 'View Media Kit ';
    cta.innerHTML += createIcon('download');
    
    content.appendChild(header);
    content.appendChild(cta);
    container.appendChild(content);
    section.appendChild(container);
    
    return section;
};

// Initialize Application
const init = () => {
    const root = document.getElementById('root');
    
    // Clear root
    root.innerHTML = '';
    
    // Build and append all sections
    root.appendChild(buildHeroSection());
    root.appendChild(buildStatsSection());
    root.appendChild(buildCommunitySection());
    root.appendChild(buildPlatformsSection());
    root.appendChild(buildMediaKitSection());
    
    console.log('✅ IceBone Creator Hub initialized');
};

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
