export const navLists = ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home Entertainment", "Accessories", "Support"]

export type Movie = {
    poster: string;
    name: string;
};

export type SearchResult = {
    page: number;
    total_pages: number
    total_results: number
    results: Movie[]
}


export type ApiResults = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const appleSubscriptions = [
    {
        title: 'Buy an Apple device',
        subtitle: '3 months free.',
        description: 'Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.3\n\nCheck eligibility',
        buttonText: 'Check eligibility'
    },
    {
        title: 'Free 7-day trial',
        subtitle: 'EGP 119.99 / mo.',
        description: 'A monthly subscription is just EGP 119.99 per month after a free 7-day trial. Share Apple TV+ with your family.4\n\nTry it free',
        buttonText: 'Try it free'
    },
    {
        title: 'Free 1‑month trial',
        subtitle: 'Apple One',
        description: 'Bundle Apple TV+ with three other great services for one low monthly price. And enjoy more for less.',
        buttonText: 'Learn more'
    }
];




export const contentIcons = [
    {
        title: "Apple TV",
        icon: "/macmini.svg",
    },
    {
        title: "iPhone",
        icon: "/iphone.svg",
    },
    {
        title: "iPad",
        icon: "/ipad.landscape.svg",
    },
    {
        title: "Mac",
        icon: "/laptopcomputer.svg",
    },
    {
        title: "AirPlay",
        icon: "/airplay-svgrepo-com.svg",
    },
];




export const accordionData = [

    {
        value: '1',
        title: "What is Apple TV+?",
        content: "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids' entertainment, comedies, and more — with new Apple Originals added every month."
    },
    {
        value: '2',
        title: "How can I watch it?",
        content: " Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices.Just open the app, click or tap Apple TV +, and enjoy the shows and movies.You can also watch Apple TV + on streaming platforms, popular smart TVs, and AirPlay - enabled TVs with the Apple TV app — or watch online at ",
        link: 'tv.apple.com/eg.'

    },
    {
        value: '3',
        title: "Can I share with my family?",
        content: "Of course. Apple TV+ lets you share your subscription with up to five family members."
    },
    {
        value: '4',
        title: "Are there commercials? And can I watch on demand?",
        content: "Apple Originals are always commercial-free. New movies and series are added every Wednesday and Friday, though some shows release all episodes at once. You can watch them on demand anytime, anywhere."
    },
    {
        value: '5',
        title: "Do I need an Apple TV 4K?",
        content: " No, you don't. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.",
        link: 'See all supported devices'
    },
    {
        value: "6",
        title: "Can I download to watch offline?",
        content: "Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection."
    }
];


export const FooterElements = [
    {
        text: "The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply."
    },
    {
        text: "Not all content is available in 4K or 4K HDR. 4K resolution requires a 4K‑capable device. Accessing Dolby Atmos features requires a Dolby Atmos‑capable system. Playback quality will depend on hardware and internet connection."
    },
    {
        text: "New and qualified returning subscribers only. EGP 119.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ three months free or one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply."
    },
    {
        text: "One subscription per Family Sharing group. Plan automatically renews until cancelled."
    },
    {
        text: "Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only and does not extend to a Family Sharing group."
    }
];

export const FooterLinks = [
    {
        title: "Explore",
        links: [
            'Mac',
            'iPad',
            'iPhone',
            'Watch',
            'AirPods',
            'TV & Home',
            'AirTag'
        ]
    },
    {
        title: "Account",
        links: [
            'Manage Your Apple ID',
            'iCloud.com'
        ]
    },
    {
        title: "Entertainment",
        links: [
            'Apple One',
            'Apple TV+',
            'Apple Music',
            'Apple Arcade',
            'Apple Podcasts',
            'Apple Books',
            'App Store'
        ]
    },
    {
        title: "About Apple",
        links: [
            'Newsroom',
            'Apple Leadership',
            'Career Opportunities',
            'Investors',
            'Ethics & Compliance'
        ]
    }
];
