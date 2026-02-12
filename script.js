const letters = [
    {
        id: 'first-receive',
        title: "Read me when you first receive this...",
        content: "Hi asawa kong maganda,\n\nI made this for you because I wanted you to have a piece of me with you, always. \n\nInside here are letters or messages that contains a piece of my heart. I hope these letters remind you of how much you are loved, cherished, and adored by me. \n\nbookmark this or remember this website, and come back whenever you need me. I'm always right here.\n\nI love you so much, Lara ko 😚💖"
    },
    {
        id: 'miss-me',
        title: "Read me when you miss me...",
        content: "Hi asawa kong maganda,\n\nMiss ako ng asawa ko po? Miss din kita ngayon for sure kasi hindi tayo magkacall or magkasama kaya nababasa mo to. \n\nI know we can't always be together, and sometimes the distance is hard. But remember this no matter how far apart we are, you are always in my heart no one can change that no one can replace you. \n\nThe distance between us is temporary. Please wait for me until the day we can be together remember my promise that I will marry you. Kukunin pa kita diyan at ipapaalam kita sa family mo po para magkasama na tayo sa isang bahay na bubuoin natin. I love you more than words can explain.\n\n gimingaw ko nimo, I crave your presence, my love"
    },
    {
        id: 'sad',
        title: "Read me when you're sad...",
        content: "Hi asawa ko,\n\nI'm sad that you're feeling down. I wish I could be there to hug you and be by your side physically. \n\nPlease remember that it's okay to not be okay sometimes. You are strong and maybe want to handle it independently, but you don't always have to be. Let yourself feel what you're feeling, but don't stay there too long. \n\nYou are the most beautiful, amazing person I know, and this feeling will pass. I'm here for you, always if you ever need me."
    },
    {
        id: 'happy',
        title: "Read me when you're happy...",
        content: "Hi my sweet sweet love,\n\nseeing you happy makes me the happiest person in the world! \n\nI hope you're smiling that beautiful smile of yours right now pero wag mo ipapakita sa iba baka ma fall po dapat sa akin lang. Yun ang goal ko po at want ko sa buhay po ang mapasaya ka po cause you make me happy. I saw the happiest version of myself with you po. You deserve all the happiness in the universe."
    },
    {
        id: 'jealous',
        title: "Read me when you're jealous...",
        content: "Hi asawa kong maganda,\n\nayaw kong nag ooverthink ikaw or nag seselos po hindi kita iiwan, at hindi kita ipagpapalit po, mahal na mahal kita hindi ka kapalit palit po walang mas better sayo po walang makakapalit sayo irreplaceable ka sakin po, you're so special, so precious to me, my love wala kang kaagaw sakin po \n\n Sayo lang ako palagi, sayong sayo lang, imo rako, ikaw lang gusto ko po ipinagdarasal, at hinihiling po\n\n I love you so much, asawa kong maganda 😚💖\nmwaaaa mwaaaa 😚😚"
    },
    {
        id: 'mad',
        title: "Read me when you're mad at me...",
        content: "Hi my love love,\n\nI'm so sorry. I never want to be the reason kung bakit galit ka or sad. Please know that even when we have tampuhan, my love for you never fades. \n\nI am imperfect, and I make mistakes. Please know that I never intended to hurt you or make you mad. But I am always willing to listen, to learn, and to grow with you. You are my priority, and us being good is what matters most.\n\nI love you, even when things are tough."
    },
    {
        id: 'reassurance',
        title: "Read me when you need reassurance...",
        content: "Hi my love love ko,\n\nYou are the one for me. There is no one else. \n\nI choose you, and I'll choose you always. I choose your voice, your laugh, your eyes, your smile, your pretty face, your sweetness, your cuteness, your caring side, and everything that makes you, you. You are enough. You are more than enough. You are my everything.\n\n You're the only one I want and need you and only you. You're safe with me po I'm not here to waste your time I'm committed to you and only you po, my love\n\nI love you so much, asawa kong maganda 😚💖\nonly you, always you, forever you\nmwaaaa mwaaaa 😚😚"
    },

    {
        id: 'bored',
        title: "Read me when you're bored...",
        content: "Hi asawa kong sweet,\n\nwhy bored ang asawa ko po? \n\nI wish I was there with you (or kulitin ikaw hanggang mawala ang pagka bored mo po). \n\nSendan mo nalang kaya ako ng selfie po? hehe seeing your pretty face always makes my day better and make me horny, and hopefully, I can make yours a little better too. \n\nI love you so much, asawa kong maganda na masawap"
    },
    {
        id: 'overthinking',
        title: "Read me when you're overthinking...",
        content: "Hi my sweet sweet love,\n\nWag na ikaw mag overthink po or I lessen mo ang pag ooverthink po \n\nMost of the things you're worrying about right now won't happen. And even if they do, we will face them together sabihin mo po sakin kakampi mo ako let me assure you po. You are safe with me. You don't have to carry the weight of the world on your shoulders.\n\nI love you, and I've got you."
    },
    {
        id: 'feel-crying',
        title: "Read me when you feel like crying...",
        content: "Hi my love love,\n\nlet it out.\n\nDon't hold it in. It's okay to cry. It's okay to be vulnerable. It's okay to feel heavy. \n\nI wish I could hug you right now and be there with you. You are not alone po. I'm here with you always, loving you through it all.\n\nCry if you need to, then drink some water. I love you so much, my love love ko."
    },

    {
        id: 'motivation',
        title: "Read me when you need motivation...",
        content: "Hi my love ko,\n\nYou can do this, my love!\n\nI believe in you. You are capable, intelligent, and stronger than you know. \n\nKaya ng asawa ko yan believe in yourself po. You've got this, and I'm your biggest cheerleader dapat ako lang nag checheer sayo or ang mga magiging anak natin.\n\nI'm so proud of you."
    },
    {
        id: 'messy-head',
        title: "Read me when your head is messy...",
        content: "Hi asawa kong maganda,\n\nMessy ba ang head ng asawa ko po?\n\nIt's okay, feel what you feel po \n\n You can call me talk to me or handle it independently po. You have me always po. \n\n I love you so much."
    },

    {
        id: 'argument',
        title: "Read me when we have an argument...",
        content: "Hi my love love,\n\nNagkatampuhan nanaman po ang mag asawa? \n\nPlease know that every tampuhan, eh ibig sabihin di na kita love po. I love you and no matter what the situation po I will always love you. \n\n I want us to be okay. You mean so much to me po. Let's fix this together, my love.\n\nI love you so so much, asawa ko."
    },
    {
        id: 'crying',
        title: "Read me when you're crying...",
        content: "Hi my love love ko,\n\nIt's okay, my love it's okay to cry po para di win ikaw mapuno po and mailabas ang feelings mo po \n\nYou are so precious to me. Sana di ako ang nagpaiyak sayo po pero if ako man po I'm so sorry, my love \n\nI love you so much mwaaaa mwaaaa."
    },
    {
        id: 'not-loved',
        title: "Read me when you feel you are not loved...",
        content: "Hi my love ko,\n\nI love you so much, my love love ko.\n\nYou are loved. You are adored, by me, deeply and hindi nauubos po. My love for you keeps growing po, my love. \n\nSometimes naga overthink ikaw or naiisip mo na di kita love po, but the truth is in my heart. You are the love of my life. You matter to me more than anything. Never forget that.\n\nI love you so so much, asawa ko.\nI love you more than anything\n I love you more than you know\n I love you more than words can explain"
    },
    {
        id: 'song-palagi',
        title: "Song I dedicate to you",
        content: "Hi my love,\n\nThis song (Palagi by TJ & KZ) is my promise to you.\n\n'Pipiliin ka palagi.'\n\nIkaw ang pipiliin ko araw araw. Hindi man araw araw na masaya tayong dalawa po. Di na mabilang ang ating mga tampuhan Away-bati natin, 'di na namamalayan Ngunit sa huli, palagi Babalik pa rin sa yakap mo Hanggang sa huli, palagi Pipiliin kong maging sayo Iyo ako palagi\n Palagi \n\nPalagi. Always. Forever.\nI love you, my Palagi.",
        videoId: 'l5NQx0Ze6Mk'
    },
    
    {
        id: 'things-i-love',
        title: "Read me when you want to know the things I love about you...",
        content: "Hi my love,\n\nThere are so many things I love about you that I could talk about them forever. \n\nI love your kind heart, the way you care for the people around you, and how you always find a way to make me smile even on my hardest days. I love your eyes, your laugh, and the way you look at me. I love how you're so strong yet so gentle at the same time. \n\nYou are perfect to me, just the way you are. I love you so much, asawa ko."
    },
    {
        id: 'hurt-you',
        title: "Read me when I did something that hurt you...",
        content: "Hi asawa ko,\n\nIt hurts me to know that I hurt you. Please know that it's never my intention to hurt you po the person that is the most important to me the one who I love the most in the world. \n\nI am so sorry for my mistakes. I promise to listen, to understand, and to do better for you. You deserve all the happiness and love, and I will work hard to be better for you po. I love you more than anything, please forgive me."
    },
    {
        id: 'not-picking-up',
        title: "Read me when I don't reply instantly...",
        content: "Hi asawa ko,\n\nI'm so sorry if I'm not replying right away. Please don't overthink, my love. I might just be busy, nakaidlip, or na distwact po sa tiktok, but you are always on my mind.\n\nYou are my priority, I'm sorry po kung hindi ko nasagot agad, my love. I love you so much, my love love 😚💖"
    },
    {
        id: 'how-important',
        title: "Read me when you want to know how important you are to me...",
        content: "Hi my sweet sweet love,\n\nYou are the most important person in my life. You are my world, my home, and my future. \n\nEverything I do, I do it with you in mind sorry if sometimes I hurt you with my actions but please know that I didn't intend to hurt you po. You've changed my life in the best way possible, and I can't imagine a single day without you. You are my everything, and I will always cherish and value you above all else. I love you so so much."
    },
    {
        id: 'gentle-reminder',
        title: "Read me when you need a gentle reminder...",
        content: "Hi my love love,\n\nJust a gentle reminder that you are enough. You are doing great, and I am so proud of the person you are. \n\nDon't be too hard on yourself. Take a deep breath, and remember that I am right here by your side, cheering for you always. You are loved, you are valued, and you are precious to me. I love you 😚💖"
    },
    {
        id: 'someone-to-listen',
        title: "Read me when you need someone to listen...",
        content: "Hi asawa ko,\n\nI'm here. always here for you to listen po, I'm ready to listen. \n\nYou don't have to carry your burdens alone. I'm your partner, you can tell me everything, anything, or just sit with me in silence I'm not going anywhere. I've got you, always. I love you so much."
    },
    {
        id: 'not-doing-enough',
        title: "Read me when you feel like you're not doing enough...",
        content: "Hi my love,\n\nPlease don't let those thoughts get to you. You are doing more than enough just by being you. \n\nYour efforts are seen and appreciated. You are a hard worker, a loving partner, and an amazing person. Progress isn't always a straight line, and it's okay to have slow days. I am so proud of you, no matter what. I love you more than words can say."
    },
    {
        id: 'compliment',
        title: "Read me when you need a compliment...",
        content: "Hi asawa kong maganda,\n\nYou are breathtaking. Inside and out, you are the most beautiful person I've ever known. \n\nYour eyes, your lips, your humor, and that stunning smile of yours everything about you is perfect. You light up every room you walk into, and you certainly lit up my life. You're amazing, my love. 😚💖"
    },
    {
        id: 'song-paninindigan',
        title: "Second song I dedicate to you",
        content: "Hi asawa ko,\n\nPaninindigan Kita.\n\nPaninindigan kita, Ika'y iingatan ko, At aalagaan ko \n\n'Paninindigan kita, oo, mamahalin kita buong buo. Kahit sa pagtanda ako'y sayo'\n\nPapakasalan kita, sisikapin ko tuparin ang pangako ko sayo at mga plano natin, asawa ko. I'm so proud being yours, at I want to tell it to others and show them that I'm yours and only yours.\n\nI love you so much, asawa ko.",
        videoId: 'EMSAEKeloC8' // Official Lyric Video ID
    }
];

const cardGrid = document.querySelector('.card-grid');
const modal = document.getElementById('letter-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalVideoContainer = document.getElementById('modal-video-container'); // Check if this element exists
const closeBtn = document.querySelector('.close-btn');
const introOverlay = document.getElementById('intro-overlay');
const enterBtn = document.getElementById('enter-btn');
const backgroundDecor = document.querySelector('.background-decor');

// Generate Cards
function createCards() {
    letters.forEach((letter, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', letter.id);
        card.style.animationDelay = `${index * 0.1}s`;

        const heading = document.createElement('h3');
        heading.textContent = letter.title;

        const preview = document.createElement('p');
        preview.textContent = "Open Letter";

        card.appendChild(heading);
        card.appendChild(preview);

        // Tilt Interaction Logic
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        card.addEventListener('click', () => openLetter(letter));

        cardGrid.appendChild(card);
    });
}

// Feature detection for touch
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

function handleTilt(e) {
    if (isTouchDevice) return; // Skip title on mobile to avoid jitter

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
}

function resetTilt(e) {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
}

// Floating Petals Generation
function createPetals() {
    const petalCount = 15;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        // Randomized styles for nature-like feel
        const size = Math.random() * 15 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 10 + 10}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petal.style.opacity = Math.random() * 0.4 + 0.1;

        backgroundDecor.appendChild(petal);
    }
}

// Open Modal
function openLetter(letter) {
    modalTitle.textContent = letter.title;
    modalBody.textContent = letter.content;

    // Check if video container exists before trying to access it
    const videoContainer = document.getElementById('modal-video-container');
    if (videoContainer) {
        videoContainer.innerHTML = ''; // Clear previous video

        if (letter.videoId) {
            videoContainer.style.display = 'block';
            const iframe = document.createElement('iframe');
            iframe.width = "100%";
            iframe.height = "315";
            iframe.src = `https://www.youtube.com/embed/${letter.videoId}`;
            iframe.title = "YouTube video player";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            iframe.style.borderRadius = "10px";
            iframe.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";

            videoContainer.appendChild(iframe);

            // Fallback Link
            const fallbackLink = document.createElement('a');
            fallbackLink.href = `https://www.youtube.com/watch?v=${letter.videoId}`;
            fallbackLink.target = '_blank';
            fallbackLink.textContent = "Video not playing? Watch on YouTube";
            fallbackLink.style.display = 'block';
            fallbackLink.style.marginTop = '10px';
            fallbackLink.style.color = '#b8860b'; // highlight-color
            fallbackLink.style.fontSize = '0.9rem';
            fallbackLink.style.textDecoration = 'underline';
            fallbackLink.style.textAlign = 'center';
            fallbackLink.style.fontFamily = 'Montserrat, sans-serif';

            videoContainer.appendChild(fallbackLink);
        } else {
            videoContainer.style.display = 'none';
        }
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';

    // Stop video playback when closing modal
    const videoContainer = document.getElementById('modal-video-container');
    if (videoContainer) {
        videoContainer.innerHTML = '';
        videoContainer.style.display = 'none';
    }
}

// Event Listeners
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createCards();
    createPetals();
    updateCounter();
    setInterval(updateCounter, 1000);
    displayDailyMessage();

    // Intro Button
    enterBtn.addEventListener('click', () => {
        introOverlay.classList.add('fade-out');
        document.body.classList.add('content-ready');
        setTimeout(() => {
            introOverlay.style.display = 'none';
        }, 1200);
    });
});

// Relationship Counter Logic
function updateCounter() {
    const startDate = new Date('2025-08-09T00:00:00');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffMs = now - startDate;
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    const parts = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`);
    if (months > 0) parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
    if (days > 0) parts.push(`${days} ${days === 1 ? 'Day' : 'Days'}`);

    parts.push(`${hours}h ${minutes}m ${seconds}s`);

    document.getElementById('counter-display').textContent = parts.join(', ');
}

// Daily Message Logic
const dailyMessages = [
    "You are my greatest adventure.",
    "Every day with you is a gift.",
    "I love you more than words can say.",
    "You make my heart smile.",
    "You are the best thing that ever happened to me.",
    "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
    "I look at you and see the rest of my life in front of my eyes.",
    "You are my sun, my moon, and all my stars.",
    "I love you not only for what you are, but for what I am when I am with you.",
    "My love for you has no depth, its boundaries are ever-expanding.",
    "You are my heart, my life, my one and only thought.",
    "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.",
    "If I had a flower for every time I thought of you...I could walk through my garden forever."
];

function displayDailyMessage() {
    const randomIndex = Math.floor(Math.random() * dailyMessages.length);
    document.getElementById('daily-message').textContent = `"${dailyMessages[randomIndex]}"`;
}
