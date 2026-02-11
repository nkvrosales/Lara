const letters = [
    {
        id: 'first-receive',
        title: "Open when you first receive this...",
        content: "Hi asawa kong maganda,\n\nI made this for you because I wanted you to have a piece of me with you, always. \n\nLife can be a rollercoaster, and I know I can't always be there physically to hold your hand through it all. But I hope these letters remind you of how much you are loved, cherished, and adored. \n\nbookmark this, and come back whenever you need me. I'm always right here.\n\nI love you so much, Lara ko 😚💖"
    },
    {
        id: 'miss-me',
        title: "Open when you miss me...",
        content: "Hi asawa kong maganda,\n\nI know we can't always be together, and sometimes the distance feels overwhelming. But remember this: no matter how far apart we are, you are always in my heart. \n\nClose your eyes and take a deep breath. Can you feel that? That's me sending you all my love. I am so proud of you, my love. We are building a future together, and every moment apart is just one step closer to a lifetime together.\n\nI love you more than words can say."
    },
    {
        id: 'sad',
        title: "Open when you're sad...",
        content: "Hi asawa ko,\n\nI'm sad that you're feeling down. I wish I could be there to hug you and wipe away your tears. \n\nPlease remember that it's okay to not be okay sometimes. You are so strong, but you don't always have to be. Let yourself feel what you're feeling, but don't stay there too long. \n\nYou are the most beautiful, amazing person I know, and this feeling will pass. The sun will shine again. I'm here for you, always."
    },
    {
        id: 'happy',
        title: "Open when you're happy...",
        content: "Hi my sweet sweet love,\n\nseeing you happy makes me the happiest person in the world! \n\nI hope you're smiling that beautiful smile of yours right now. Whatever caused this joy, I'm celebrating with you! Capture this moment in your heart. You deserve all the happiness in the universe.\n\nKeep shining, my love!"
    },
    {
        id: 'mad',
        title: "Open when you're mad at me...",
        content: "Hi my love love,\n\nI'm so sorry. I never want to be the reason for your upset. Please know that even when we argue, my love for you never fades. \n\nI am imperfect, and I make mistakes. But I am always willing to listen, to learn, and to grow with you. Let's take a breath, and when you're ready, let's talk. You are my priority, and us being good is what matters most.\n\nI love you, even when things are tough."
    },
    {
        id: 'reassurance',
        title: "Open when you need reassurance...",
        content: "Hi my love love ko,\n\nYou are it for me. There is no one else. \n\nI choose you, every single day. I choose your smile, your laugh, your kindness, and everything that makes you, you. You are enough. You are more than enough. You are my everything.\n\nDon't ever doubt how much you mean to me."
    },
    {
        id: 'cant-sleep',
        title: "Open when you can't sleep...",
        content: "Hi my love ko,\n\nThe world is quiet now, and I hope your mind can find some peace too. \n\nImagine me lying there next to you, holding your hand. Let go of the worries of today. They can wait until tomorrow. For now, just rest. You are safe, you are loved, and I'll be dreaming of you.\n\nGoodnight, my angel."
    },

    {
        id: 'bored',
        title: "Open when you're bored...",
        content: "Hi asawa kong sweet,\n\nBored again, my love? \n\nI wish I was there to entertain you (or annoy you until you're not bored anymore!). \n\nWhy don't you listen to our favorite song? or maybe send me a selfie? seeing your face always makes my day better, and hopefully, I can make yours a little better too. \n\nI love you, you cutie!"
    },
    {
        id: 'overthinking',
        title: "Open when you're overthinking...",
        content: "Hi my sweet sweet love,\n\nBreathe, my love. Just breathe.\n\nI know that beautiful mind of yours runs a mile a minute, but try to slow it down for a second. \n\nMost of the things you're worrying about right now won't happen. And even if they do, we will face them together. You are safe. We are okay. You don't have to carry the weight of the world on your shoulders.\n\nI love you, and I've got you."
    },
    {
        id: 'feel-crying',
        title: "Open when you feel like crying...",
        content: "Hi my love love,\n\nlet it out.\n\nDon't hold it in. It's okay to be vulnerable. It's okay to feel heavy. \n\nI wish I could hold you right now. Just imagine my arms wrapped around you, holding you tight. You are not alone in this. I am here, holding space for you, loving you through it all.\n\nCry if you need to, then drink some water. I love you so much."
    },
    {
        id: 'bad-day',
        title: "Open when you have a bad day...",
        content: "Hi my love love ko,\n\nI'm so sorry you had a tough day, my love.\n\nSome days just suck, and that's the truth. But remember, one bad day doesn't mean a bad life. \n\nGo easy on yourself tonight. Do something that makes you feel cozy put on your pajamas, watch something funny, or just rest. You survived today, and I'm proud of you for that.\n\nTomorrow is a fresh start. I love you!"
    },
    {
        id: 'motivation',
        title: "Open when you need motivation...",
        content: "Hi my love ko,\n\nYou can do this, Lara!\n\nI believe in you so much. You are capable, intelligent, and stronger than you know. \n\nDon't look at how far you have to go; just look at the next step. You've got this, and I'm your biggest cheerleader. Go show the world what made me fall in love with you!\n\nI'm so proud of you."
    },
    {
        id: 'messy-head',
        title: "Open when your head is messy...",
        content: "Hi asawa kong maganda,\n\nIt's noisy in there, isn't it?\n\nIt's okay. Close your eyes. Listen to the sound of your own breathing. In... and out. \n\nYou don't have to figure everything out right this second. It's okay to not have all the answers. Just be here, in this moment. You are safe. You are loved. \n\nLet the noise settle. I love you."
    },
    {
        id: 'emotionally-exhausted',
        title: "Open when you're emotionally exhausted...",
        content: "Hi asawa kong sweet,\n\nMy poor love. You give so much of yourself.\n\nPlease, take a step back. You need to recharge. You cannot pour from an empty cup. \n\nIt's okay to say no. It's okay to rest. It's okay to do absolutely nothing for a while. Your only job right now is to take care of YOU. \n\nI love you. Please rest."
    },
    {
        id: 'overwhelming',
        title: "Open when everything feels overwhelming...",
        content: "Hi my sweet sweet love,\n\nStop. Just stop for a moment.\n\nI know it feels like a mountain right now. But remember, you climb a mountain one step at a time. \n\nWhat is the one small thing you can do right now? Just do that. Then the next. You don't have to carry the whole mountain. I'm here to help you carry the load. \n\nYou are stronger than this overwhelm."
    },
    {
        id: 'argument',
        title: "Open when we have an argument...",
        content: "Hi my love love,\n\nI hate that we fought. I hate being at odds with you. \n\nPlease know that even in the heat of the moment, I love you. My anger (or your anger) does not change that. \n\nLet's cool down. I want to understand you. I want us to be okay. You are more important to me than being right. Let's fix this, together.\n\nI love you, asawa ko."
    },
    {
        id: 'crying',
        title: "Open when you're crying...",
        content: "Hi my love love ko,\n\nI can feel your pain from here, and it breaks my heart. \n\nWipe those tears, my love. You are so precious to me. Whatever brings you tears, I hope it passes quickly. \n\nRemember that after the rain comes the rainbow. I am sending you the biggest, tightest hug right now. I love you so much."
    },
    {
        id: 'not-loved',
        title: "Open when you feel you are not loved...",
        content: "Hi my love ko,\n\nI love you so much, my love love ko.\n\nYou are loved. You are adored . \n\nBy me, deeply and endlessly. \n\nSometimes our minds play tricks on us, but the truth is in my heart. You are the love of my life. You matter to me more than anything. Never forget that.\n\nI love you, I love you, I love you."
    }
];

const cardGrid = document.querySelector('.card-grid');
const modal = document.getElementById('letter-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
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

function handleTilt(e) {
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
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
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

    // Intro Button
    enterBtn.addEventListener('click', () => {
        introOverlay.classList.add('fade-out');
        document.body.classList.add('content-ready');
        setTimeout(() => {
            introOverlay.style.display = 'none';
        }, 1200);
    });
});
