export const DUMMYCHATBOXES = [
  {
    name: 'Max S.',
    text: "hahaha that's such an awes...",
    image: '/images/dummy-profile-1.png',
    time: 'Today',
  },
  {
    name: 'Jennifer Smith',
    text: 'Hey Mark, did you check the...',
    image: '/images/dummy-profile-2.png',
    time: '27 nov',
  },
  {
    name: 'Richardo Lopez',
    text: 'oh wow I didn’t know this ex...',
    image: '/images/dummy-profile-3.png',
    time: '27 nov',
  },
  {
    name: 'Chris F.',
    text: 'Can you help me make a coo...',
    image: '/images/dummy-profile-4.png',
    time: '27 nov',
  },
  {
    name: 'Leanne J.',
    text: 'Wow, I am in love with ...',
    image: '/images/dummy-profile-6.png',
    time: '27 nov',
  },
];

export const DUMMYCHAT = [
  {
    text: 'Hello nibnab',
    time: '8:00 PM',
    sender: 'user',
  },
  {
    text: 'Hi Mark 👋 What can i help with today?',
    time: '8:00 PM',
    sender: 'ai',
  },
  {
    text: 'I want to connect with a photographer looking for gigs<br/> in the SF area. Need some images for my new app.',
    time: '8:02 PM',
    sender: 'user',
  },
  {
    text: 'Looking into it! Could you please share an example <br/>of the kind of images you’d want?',
    time: '8:02 PM',
    sender: 'ai',
  },
  {
    text: '',
    time: '8:04 PM',
    sender: 'user',
    image: '/images/dummy-hero-chat-image.png',
  },
];

export const USECASES = [
  {
    text: 'I am looking to start<br/> dating again',
    image: '/images/heart.svg',
    color: 'redMain',
    link: '/dating',
  },
  {
    text: 'I need to make an extra <br/>$5000 this month',
    image: '/images/dollar.svg',
    color: 'amber',
    link: '/earning',
  },
  {
    text: 'I need to find a new <br/>apartment',
    image: '/images/home.svg',
    color: 'blue',
    link: '/finding-home',
  },
  {
    text: 'My heater just broke...<br/> who should I call',
    image: '/images/call.svg',
    color: 'blue',
    link: '/chores',
  },
  {
    text: 'I would like to sell some <br/>things I don’t use',
    image: '/images/tie.svg',
    color: 'redMain',
    link: '/selling-items',
  },
  {
    text: 'How do I get my business <br/>off the ground',
    image: '/images/bag.svg',
    color: 'amber',
    link: '/business-advice',
  },
  {
    text: 'Can you help me find a<br/> new job',
    image: '/images/dollar-blue.svg',
    color: 'blue',
    link: '/find-job',
  },
  {
    text: 'Struggling to get into<br/> new career...',
    image: '/images/bag.svg',
    color: 'amber',
    link: '/new-career',
  },
  {
    text: 'Found a buyer for an<br/> item you own',
    image: '/images/tie.svg',
    color: 'redMain',
    link: '/find-buyer',
  },
];

export const whileInView = {
  opacity: 1,
  y: 0,
  transition: { duration: 0.5, delay: 0.2 },
};

export const initial = { opacity: 0, y: 50 };

export const EXAMPLEQUESTIONS = [
  'I want to find someone I can <br/>build a succesful business with',
  'I want to improve my form in the<br/> gym',
  'I want to get better at speaking <br/>French',
];

export const WHYCHOOSEDUMMYCHAT = [
  {
    sender: 'user',
    text: 'Is nibnab like other chatting apps where<br/> you can text friends, etc?',
  },
  {
    sender: 'ai',
    text: 'nibnab is similar in some ways, but instead of just<br/> texting your existing friends, it assists you in <br/>connecting with people and opportunities that match <br/>your wants and needs in every moment.',
  },

  {
    sender: 'user',
    text: 'Wow, cool! Are there any more features like <br/>sending images, and stuff like that?',
  },
  {
    sender: 'ai',
    text: 'Yep! You can send images, do voice recordings and <br/>other features you usually find in regular chat apps,<br/> however there are many things that nibnab can do<br/> which other chat apps cannot currently...',
  },
  {
    sender: 'user',
    text: 'Can you please name some?',
  },
  {
    sender: 'ai',
    text: 'Sure. I&apos;ll name 3:<br/><ol><li>1. Increase your earnings by sharing your skills with <br/>&nbsp&nbsp&nbsp&nbspnibnab. nibnab will then connect you with someone <br/>&nbsp&nbsp&nbsp&nbspseeking precisely those skills, willing to pay for your<br/> &nbsp&nbsp&nbsp&nbspexpertise.</li><br/><li> 2. As you engage in more conversations with nibnab, it <br/>&nbsp&nbsp&nbsp&nbspwill get to know you better, and begin presenting <br/>&nbsp&nbsp&nbsp&nbspsuggestions, connections, and opportunities that<br/> &nbsp&nbsp&nbsp&nbspalign with your preferences and interests. </li><br/><li>3. nibnab creates a unique network effect unlike any<br/> &nbsp&nbsp&nbsp&nbspother chatting app. If you and another person share<br/>&nbsp&nbsp&nbsp&nbsp a similar goal, nibnab will facilitate a situation for<br/> &nbsp&nbsp&nbsp&nbspboth of you to succeed, potentially leading to <br/>&nbsp&nbsp&nbsp&nbspcollaboration in achieving that shared goal.</li></ol>',
  },
  {
    sender: 'user',
    text: 'Wow, this sounds like the coolest chatting <br/>app ever... How can I join?',
  },
  {
    sender: 'ai',
    text: 'That&apos;s the goal. You can sign up for the early access<br/> down below!',
  },
];

export const FOOTERLINKS = {
  resources: [
    {
      title: 'Team',
      href: '/team',
    },
    {
      title: 'Grants Recognition',
      href: '/grants-recognition',
    },
    {
      title: 'Careers',
      href: 'http://careers.nibnab.ai/',
    },
    {
      title: 'Blog',
      href: 'https://nibnab.medium.com/',
    },
  ],
  links: [
    {
      title: 'How it Works',
      href: '#how-it-works',
    },
    {
      title: 'Use Cases',
      href: '#use-cases',
    },
    {
      title: 'Personal Website',
      href: '#personal-website',
    },
  ],
  terms: [
    {
      title: 'Terms of Use',
      href: '/docs/terms-of-use.pdf',
    },
    {
      title: 'Privacy Policy',
      href: '/docs/privacy-policy.pdf',
    },
  ],
  socials: [
    {
      image: '/images/fb.svg',
      href: '',
    },
    {
      image: '/images/tiktok.svg',
      href: 'https://www.tiktok.com/@nibnab_ai',
    },
    {
      image: '/images/insta.svg',
      href: '',
    },
    {
      image: '/images/twitter.svg',
      href: 'https://twitter.com/nibnab_ai',
    },
    {
      image: '/images/linked-in.svg',
      href: 'https://www.linkedin.com/company/nibnab',
    },
  ],
};

export interface IPageConsts {
  title: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
    twitterImage: string;
  };
}

export const COREPAGE = {
  title: 'nibnab',
  meta: {
    title: 'nibnab',
    description: 'Opportunity discovery & creation through AI',
    ogImage: 'images/meta/social-share.png',
    twitterImage: 'images/meta/social-share.png',
  },
};

export const USECASEPAGES = [
  {
    title: 'I am looking to<br/> start dating again',
    meta: {
      title: 'Use case: Dating',
      description:
        'nibnab is your personal wingman. It will help you find the perfect match, and even help you get the first date.',
      ogImage: 'images/meta/social-share.png',
      twitterImage: 'images/meta/social-share.png',
    },
    link: '/dating',
    profilePicture: '/images/use-case-dating.png',
    contactProfilePicture: '/images/contact-profile-1.png',
    contactName: 'Olivia W.',
    texts: [
      {
        sender: 'user',
        text: 'I am looking to start dating again',
      },
      {
        sender: 'ai',
        text: 'Cool. Should I add "Find matched for dating." as a goal?',
      },
      {
        sender: 'user',
        text: 'Yes, please.',
      },
      {
        sender: 'ai',
        text: 'Find matches for dating',
        type: 'goal',
      },
      {
        sender: 'ai',
        text: 'Nice! Do you mind sharing a bit more about what are you looking for?',
      },
      {
        sender: 'user',
        text: 'I am looking for a girl who&apos;s got a beautiful smile, lives in<br/>my city, is around the same age as me (+- 3 years), got<br/>a decent job, likes to hang out with friends, supports<br/> watching football on the weekends, likes to go to the<br/> gym and would be down to cook at home and meal prep <br/>for the week.',
      },
      {
        sender: 'ai',
        text: 'It seems you have an exquisite taste!<br/> I will start looking right away. In the meantime, <br/>could you please share a few recent images<br/> of yourself I could show your potential next date?',
      },
      {
        sender: 'user',
        text: 'Sure, here&apos;s two images from last weekend!',
        images: ['/images/dating-1.png', '/images/dating-2.png'],
      },
      {
        sender: 'ai',
        text: 'Great, thanks!',
      },
      {
        sender: 'ai',
        text: 'I will let you know as soon as I find something.',
      },
      {
        sender: 'user',
        text: 'Thanks nibnab!',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: 'Hey Bruno! <br/>I found 3 people I think you would connect with<br/> really well.',
      },
      {
        sender: 'ai',
        text: 'Olivia seems to be a perfect match! <br/>Olivia is 26 years old, lives in your city and <br/>loves to go to the gym, cook dinner at home <br/>and chatting over a cup of coffee with friends<br/> and family. She&apos;s looking for a serious <br/>relationship.',
        type: 'contact-card',
      },
      {
        type: 'svg-line',
        sender: 'ai',
      },
      {
        sender: 'user',
        text: 'Hey Olivia! Super nice to meet you. I’m Bruno!',
      },
      {
        sender: 'contact',
        text: 'Hey Bruno! I heard a few really nice things about <br/>you from nibnab. You seem like a really nice guy!',
      },
      {
        sender: 'user',
        type: 'loading',
      },
    ],
  },
  {
    title: 'I need to make an <br/>extra $5000 this<br/> month',
    meta: {
      title: 'Use case: Earning',
      description:
        'nibnab can helo you make extra money by connecting you with people who need your skills.',
      ogImage: 'images/meta/social-share.png',
      twitterImage: 'images/meta/social-share.png',
    },
    link: '/earning',
    profilePicture: '/images/use-case-money.png',
    contactProfilePicture: '/images/contact-profile-2.png',
    contactName: 'Chris F.',
    texts: [
      {
        sender: 'user',
        text: 'I need to make an extra $5000 this month',
      },
      {
        sender: 'ai',
        text: 'Hey Nolan! Cool. Should I add “Make an extra $5000 <br/>this month” as a goal?',
      },
      {
        sender: 'user',
        text: 'Yes, please!',
      },
      {
        sender: 'ai',
        text: 'Make an extra $5000 this month',
        type: 'goal',
      },
      {
        sender: 'ai',
        text: 'I know you’ve been taking on a few freelancer jobs <br/>building websites and such. Is that something you <br/>would like to keep doing?',
      },
      {
        sender: 'user',
        text: 'Yes, I think that would be good! Do you think<br/> you could help find more people that need help<br/> with web development?',
      },
      {
        sender: 'ai',
        text: 'Absolutely, I will start looking immediately and<br/> let you know!',
      },
      {
        sender: 'user',
        text: 'Thanks nibnab!',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: 'Hey Ben! I shared your work with a few people,<br/> and think I found a great solution. <br/>Chris owns a surfboard company, and he wants<br/> to build a new website for his company. He is<br/> willing to spend $5000 to make it happen.',
      },
      {
        sender: 'ai',
        text: 'He’s ready to get started today:',
        type: 'contact-card',
      },
      {
        type: 'svg-line',
        sender: 'ai',
      },
      {
        sender: 'user',
        text: 'Hey Chris! I’m Ben, a software developer from Canada.<br/> nibnab told me about your surfing company, that’s so<br/> cool!',
      },
      {
        sender: 'contact',
        text: 'Hey Ben! Thank you so much. nibnab showed me <br/>some of your work as well. Would you be able<br/> to help me build a new website for my company? <br/>It doesn’t have to be super advanced, but need <br/>to at least include an online store section.<br/> Thanks!',
      },
      {
        sender: 'user',
        text: 'We can absolutely make that happen!',
      },
      {
        sender: 'contact',
        type: 'loading',
      },
    ],
  },
  {
    title: 'I need to find a <br/>new apartment',
    meta: {
      title: 'Use case: Find Home',
      description: 'nibnab can help you find a place to live.',
      ogImage: 'images/meta/social-share.png',
      twitterImage: 'images/meta/social-share.png',
    },
    link: '/finding-home',
    profilePicture: '/images/use-case-apartment.png',
    contactProfilePicture: '/images/contact-profile-3.png',
    contactName: 'Isabella P.',
    addressPfp: '/images/address-card-1.png',
    address: '345-395 South End Ave<br/> New York, NY 10280',
    texts: [
      {
        sender: 'user',
        text: 'I need to find a new apartment',
      },
      {
        sender: 'ai',
        text: 'Alright! Should I add "Find a new appartment." as a goal?',
      },
      {
        sender: 'user',
        text: 'Ya',
      },
      {
        sender: 'ai',
        text: 'Find a new appartment.',
        type: 'goal',
      },
      {
        sender: 'ai',
        text: 'Cool, let’s find a new apartment for you then. <br/>What area of town do you want to live in? <br/>Are you considering moving city?',
      },
      {
        sender: 'user',
        text: 'Definitely don’t want to move to a different city. <br/>Would love to get an apartment not too too far<br/> from my current one!',
      },
      {
        sender: 'ai',
        text: 'Got it, will start looking for apartments in<br/> the Downtown Manhattan area.',
      },
      {
        sender: 'ai',
        text: 'Do you want to have a roommate?',
      },
      {
        sender: 'user',
        text: 'Not really.',
      },
      {
        sender: 'ai',
        text: 'What is your monthly budget?',
      },
      {
        sender: 'user',
        text: 'Anything under $4000.',
      },
      { sender: 'user', text: 'Just want it to be cozy.' },
      {
        sender: 'ai',
        text: 'Great. I will let you know as soon as I find something<br/> interesting!',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: 'Hey Leanne! I found a few interesting choices.<br/> Please check them out and let me know what<br/> you think!',
        type: 'address-card',
      },
      {
        sender: 'user',
        text: 'Wow, I am in love with the first apartment!<br/> Is it available from March?',
      },
      {
        sender: 'ai',
        text: 'Yep!<br/>Do you want me to put you in contact with the<br/> landlord, and you guys can schedule a viewing?',
        type: 'address-card',
      },
      {
        sender: 'user',
        text: 'Yes, please.',
      },
      {
        sender: 'ai',
        text: 'Here you go:',
        type: 'contact-card',
      },
      {
        type: 'svg-line',
        sender: 'ai',
      },
      {
        sender: 'user',
        text: 'Hey Isabella! I love your apartment in South End Ave. Would<br/> it be possible to come look at it? I’m looking to rent a new<br/> apartment from March.',
      },
      {
        sender: 'contact',
        text: 'Hey Leanne! Nice to meet you. Sure, that is<br/> possible! Does tomorrow at 11am work for you?',
      },
      {
        sender: 'user',
        type: 'loading',
      },
    ],
  },
  {
    title: 'My heater just<br/> broke... who <br/>should I call',
    meta: {
      title: 'Use case: Chores',
      description: 'nibnab can help you with your chores.',
      ogImage: 'images/meta/social-share.png',
      twitterImage: 'images/meta/social-share.png',
    },
    link: '/chores',
    profilePicture: '/images/use-case-heater.png',
    texts: [
      {
        sender: 'user',
        text: 'My heater just broke... who should I call',
      },
      {
        sender: 'ai',
        text: 'I\'m sorry to learn that... Should I add "Resolve broken heater situation." as a goal?',
      },
      {
        sender: 'user',
        text: 'Yes, please do!',
      },
      {
        sender: 'ai',
        text: 'Resolve broken heater situation',
        type: 'goal',
      },
      {
        sender: 'ai',
        text: 'OK let me look into it right away!',
      },
      {
        sender: 'ai',
        text: 'What kind of heater is it?',
      },
      {
        sender: 'user',
        text: 'It’s a Lasko',
      },
      {
        sender: 'ai',
        text: 'I found John from Heater Repair & Fix. He’s got a good <br/>reputation of fixing all kinds of heaters, and might <br/>even be able to help you fix it over the phone.<br/> You should give him a call, he’s available right now:<br/>+1 (206) 342-8631',
      },
      {
        sender: 'user',
        text: 'Will do, thanks!',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: 'Hey Sam! Did you manage to get your heater fixed?',
      },
      {
        sender: 'user',
        text: 'Yes! John was able to help me over the phone actually. <br/>Thank you so much for the recommendation.',
      },
      {
        sender: 'ai',
        text: 'I’m glad to hear. That’s my job.',
      },
    ],
  },
  {
    title: 'I would like to sell<br/> some things I<br/> don’t use',
    meta: {
      title: 'Use case: Sell',
      description: "nibnab can help you sell things you don't use.",
      ogImage: 'images/meta/social-share.png',
      twitterImage: 'images/meta/social-share.png',
    },
    link: '/selling-items',
    profilePicture: '/images/use-case-heater.png',
    contactProfilePicture: '/images/contact-profile-4.png',
    contactName: 'Jake W.',
    texts: [
      {
        sender: 'user',
        text: 'I would like to sell some things I don’t use',
      },
      {
        sender: 'ai',
        text: 'What are you trying to sell? Can you please send<br/> a short description, images and what you want <br/>for it?',
      },
      {
        sender: 'user',
        text: 'Sure! Give me a bit of time.',
      },
      {
        sender: 'ai',
        text: 'Take your time. I’m always here!',
      },
      {
        sender: 'user',
        text: 'Playstation 5. One controller, barely used, $425',
        images: ['/images/gaming-1.png', '/images/gaming-2.png'],
      },
      {
        sender: 'ai',
        text: 'Cool. Should I add "Sell Playstation 5 console + controller for no less than $425." as a goal?',
      },
      {
        sender: 'user',
        text: 'Yup.',
      },
      {
        sender: 'ai',
        text: 'Sell Playstation 5 console + controller for no less than $425.',
        type: 'goal',
      },
      {
        sender: 'ai',
        text: 'Give me some time, I will look for some potential<br/> buyers for this.',
      },
      {
        sender: 'user',
        text: 'Thanks, nibnab!',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: 'Hey Nicholas! I found someone who wants to<br/> buy both your Playstation 5 and your controller.<br/> His name is Fred, and lives only 10min away <br/>from you.',
        type: 'contact-card',
      },
      {
        type: 'svg-line',
      },
      {
        sender: 'user',
        text: 'Hey Jake! nibnab told me you might be interested in purchasing a used Playstation 5?',
      },
      {
        sender: 'contact',
        text: 'Hey Nicholas! Yes, I am very interested.!',
      },
      {
        sender: 'user',
        text: 'You saw pictures of it, right?',
      },
      {
        sender: 'contact',
        text: 'Yep! It comes with one controller, right?',
      },
      {
        sender: 'user',
        type: 'loading',
      },
    ],
  },
  {
    title: 'How do I get my<br/> business<br/> off the ground',
    meta: {
      title: 'Use case: Business',
      description: 'nibnab can help you get your business off the ground.',
      ogImage: 'images/meta/social-share.png',
      twitterImage: 'images/meta/social-share.png',
    },
    link: '/business-advice',
    profilePicture: '/images/use-case-business.png',
    contactProfilePicture: '/images/contact-profile-5.png',
    contactName: 'Jacob P.',
    contactNameSecond: 'Jason D.',
    contactProfilePictureSecond: '/images/contact-profile-6.png',
    texts: [
      {
        sender: 'user',
        text: 'How do I get my business off the ground',
      },
      {
        sender: 'ai',
        text: 'That’s awesome. What’s your business about?',
      },
      {
        sender: 'user',
        text: 'It’s a mobile barber shop. I eventually want to have<br/> my own barber shop(s), but can’t afford it right now,<br/> so that’s why it’s mobile.',
      },
      {
        sender: 'ai',
        text: 'Cool. Should I add “Get my business off the ground”<br/> as a goal?',
      },
      {
        sender: 'user',
        text: 'Yes, that would be nice. I would like to build<br/> it to a place where I can quit my day job. I only<br/> need $2500/month to do so.',
      },
      {
        sender: 'ai',
        text: 'Cool. Should I add “Help Frank get his business<br/> to $2500 net profit per month.” as a goal?',
      },
      {
        sender: 'user',
        text: 'Yes, please!',
      },
      {
        sender: 'ai',
        text: 'Help Frank get his business to $2500 net profit per month.',
        type: 'goal',
      },
      {
        sender: 'ai',
        text: 'Got it. Let’s work towards achieving that as soon as possible then!',
      },
      {
        sender: 'user',
        text: 'Sounds like a plan. Thanks, nibnab!',
      },
      {
        sender: 'ai',
        text: 'Of course! What is the way you’re getting clients<br/> currently?',
      },
      {
        sender: 'user',
        text: 'Word of mouth for the most part. But I also post <br/>sometimes on social media, and that does work<br/> at times.',
      },
      {
        sender: 'ai',
        text: 'Awesome! Word of moth is an awesome way to<br/> grow a clientele. Social media is another very<br/> good way to grow this - you should start <br/>utilizing that more for sure!',
      },
      {
        sender: 'user',
        text: 'Will do, thanks!',
      },
      {
        sender: 'ai',
        text: 'In the meantime, let me do some searching<br/> for people who are looking to get a haircut <br/>in the Austin, TX area.',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: 'Hey Frank! Good news, I found 4 people who are<br/> looking to get a haircut this weekend. Are you <br/>free to do some this weekend?',
      },

      {
        sender: 'user',
        text: 'Yes!',
      },
      {
        sender: 'ai',
        text: 'Great! Feel free to reach out to them with your<br/> services:',
        type: 'contact-card',
        subType: 'contact-2',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: 'Hey Frank! Any luck with those potential clients <br/>I sent the other day?',
      },

      {
        sender: 'user',
        text: 'Yes, two them ended up wanting a haircut, and<br/> one of them actually sent me another client!<br/> So hugely successful I would say.',
      },

      {
        sender: 'ai',
        text: 'That’s awesome! Do you want me to continue<br/> sending potential clients like that?',
      },
      {
        sender: 'user',
        text: 'That would be awesome!',
      },
      {
        sender: 'ai',
        text: 'Will do.',
      },
      {
        sender: 'ai',
        text: 'Oh, while doing some searching today, I came <br/>across a guy named Jacob who lives in Austin.<br/> He might be someone cool for you to chat with.<br/> Jacob has started a pretty big chain of barber<br/> shops in Austin and is searching for ambitious <br/>individuals, like yourself, to mentor and help <br/>grow their businesses. Would you be interested <br/>in connecting with him?',
      },
      {
        sender: 'user',
        text: 'Oh yeah, that sounds super cool! Please connect<br/> me with him!',
      },
      {
        sender: 'ai',
        text: 'Here you go:',
        type: 'contact-card',
        subType: 'contact-1',
      },
      {
        type: 'svg-line',
        sender: 'ai',
      },
      {
        sender: 'user',
        text: 'Hey Jacob! My name is Frank. I’m a young entrepreneur <br/> from Austin looking to take my barbershop business <br/> to the next level. Currently it’s a small mobile business, <br/> but I would love to start my own barber shop(s) when time is <br/>right!',
      },
      {
        sender: 'user',
        text: 'nibnab told me a lot of great things about you, you’re<br/> a huge inspiration my man!',
      },
      {
        sender: 'contact',
        text: 'Hey Frank! That is so awesome. I also heard a lot<br/> of great things about you from nibnab. I would <br/>love to chat with you over a cup of coffee<br/> sometime this week and see how I can help take <br/>your business to new levels. I have a lot of tricks <br/>up my sleeves, and I have a huge list of clientele <br/>that could use a great barber.',
      },
      {
        sender: 'user',
        text: 'Wow, that would mean the world! <br/>I’ll make time for that any day at any time!',
      },
      {
        sender: 'contact',
        text: 'Cool, let’s do it!',
      },
      {
        sender: 'contact',
        type: 'loading',
      },
    ],
  },
  {
    title: 'I told my boss “I<br/> quit”. Can you help<br/> me find a new job?',
    meta: {
      title: '',
      description: '',
      ogImage: '',
      twitterImage: '',
    },
    link: '/find-job',
    profilePicture: '/images/use-case-job.png',
    contactProfilePicture: '/images/dummy-profile-6.png',
    contactName: 'Maria L.',
    contactNameSecond: 'Jason.',
    contactProfilePictureSecond: '/images/dummy-profile-10.png',
    texts: [
      {
        sender: 'user',
        text: 'Hey nibnab! I told my boss I quit today...',
      },
      {
        sender: 'user',
        text: 'Can you please help me find a new job?',
      },
      {
        sender: 'ai',
        text: 'On it!',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: "Great news! I've discussed your work with numerous<br/>marketing decision-makers. Three employers are<br/> already very interested and want to talk to you about<br/> opportunities with them. You can reach out to them here:",
        type: 'contact-card',
      },
      {
        sender: 'user',
        text: 'Wow, that was quick and easy. Thanks, nibnab!',
      },
      {
        sender: 'ai',
        text: 'Of course. I will keep looking and applying until we secure you a new job!',
      },
      {
        sender: 'ai',
        text: 'In the meantime, you should talk to Jason.<br/> He seems very interested in what you bring to<br/> the table.',
        type: 'contact-card',
        subType: 'contact-2',
      },
      {
        type: 'svg-line',
      },
      {
        sender: 'user',
        text: 'Hey Jason! Nice to meet you. nibnab told me you’re<br/> potentially hiring for a marketing role, is that correct?',
      },
      {
        sender: 'contact-2',
        text: 'Hey Phil! I love your work. nibnab told me <br/>everything about you. Love the way you <br/>approach marketing and what you’ve done<br/> in the past.',
      },
      {
        sender: 'user',
        type: 'loading',
      },
    ],
  },
  {
    title: 'I’m a 50yr old that<br/> can’t get a tech <br/>job. Can you help?',
    meta: {
      title: '',
      description: '',
      ogImage: '',
      twitterImage: '',
    },
    link: '/new-career',
    profilePicture: '/images/dummy-profile-16.png',
    contactProfilePicture: '/images/dummy-profile-3.png',
    contactName: 'Simon P.',
    contactNameSecond: 'Harry Brown',
    contactProfilePictureSecond: '/images/contact-profile-7.png',
    texts: [
      {
        sender: 'user',
        text: "I'm having a tough time getting a job interview.<br/>I'm trying to make a 180 in my career into tech<br/>and I guess my age is a big issue...",
      },
      {
        sender: 'ai',
        text: 'Of course! What’s the trouble you’re facing currently when applying?',
      },
      {
        sender: 'user',
        text: 'I am very motivated to put in the work and learn from my <br/>future team, but I keep getting rejections before I can<br/> even speak to someone at the company.',
      },
      {
        sender: 'ai',
        text: "Sorry to hear that. I'll focus on finding roles and teams<br/>that deserve your talents and align well with your skills<br/>and values!",
      },
      {
        sender: 'user',
        text: 'Thanks nibnab 😉',
      },
      {
        type: 'new message',
      },
      {
        sender: 'ai',
        text: "Great news! I've found 5 startup founders interested <br/>in helping you begin your journey, all of whom are<br/> fans of your teaching background.",
        type: 'contact-card',
      },
      {
        sender: 'user',
        text: 'Wow, awesome! That’s a lot of people, haha.<br/>Anyone in particular I should connect with?',
      },
      {
        sender: 'ai',
        text: 'I recommend connecting with all of them to explore <br/>multiple opportunities. However, Mark seems to be <br/>the best option and fit in my eyes. He runs a <br/>development agency out of Vancouver, Canada, and <br/>has multiple open roles for remote junior developers.',
        type: 'contact-card',
        subType: 'contact-2',
      },
      {
        type: 'svg-line',
      },
      {
        sender: 'user',
        text: 'Hey Simon! Nice to meet you. nibnab told me you’re<br/> potentially hiring for a marketing role, is that correct?',
      },
      {
        sender: 'contact-2',
        text: 'Hey Mark! nibnab told me about your journey<br/> towards working in tech, and showed me a<br/> bunch of the projects you’ve built. I love your<br/> spirit and hustle! In my eyes, you can never be <br/>too old to learn something new.',
      },
      {
        sender: 'user',
        type: 'loading',
      },
    ],
  },
  {
    title: 'I found a person<br/> willing to buy your<br/> guitar for $2500.',
    meta: {
      title: '',
      description: '',
      ogImage: '',
      twitterImage: '',
    },
    link: '/find-buyer',
    profilePicture: '/images/contact-profile-5.png',
    contactProfilePicture: '/images/dummy-profile-3.png',
    contactName: 'Robert Lopez',
    texts: [
      {
        sender: 'user',
        images: ['/images/hero-1.png'],
      },
      {
        type: 'svg-line',
      },
      {
        sender: 'ai',
        text: 'Hey Matt! Remember this image you<br/> sent me the other day? Is this a Martin<br/> Dreadnought guitar I see in it?',
        type: 'reply',
        goalImage: '/images/hero-1.png',
      },
      {
        sender: 'user',
        text: 'Yeah... what’s up? 👀',
      },
      {
        sender: 'ai',
        text: 'I found a person who may be<br/> willing to buy it for $2500.<br/> Are you interested in selling it?',
      },
      {
        sender: 'user',
        text: 'Oh wow, I actually have been thinking about selling <br/>some of my gear. So, yes, I am interested!',
      },
      {
        sender: 'ai',
        text: 'Great you can connect with',
        type: 'contact-card',
      },
      {
        sender: 'user',
        text: 'Hey Robert! I hear you’re looking to get a <br/>Martin Dreadnought guitar?',
      },
      {
        sender: 'user',
        images: ['/images/hero-1.png'],
      },
      {
        type: 'svg-line',
      },
      {
        sender: 'contact',
        text: 'Hey Matt! Yes, I can’t say I was looking for long, literally <br/>mentioned it yesterday for the very first time, haha,<br/> but yeah - is this a Dreadnought?',
      },

      {
        sender: 'user',
        text: 'Yup, it’s a 1978 Martin Dreadnought, in a mint condition!',
      },
      {
        sender: 'contact',
        text: 'Can you ship it to NYC?',
      },
      {
        sender: 'user',
        type: 'loading',
      },
    ],
  },
];

export const navLinks = [
  {
    title: 'How it Works',
    href: '#how-it-works',
  },
  {
    title: 'Use Cases',
    href: '#use-cases',
  },
  {
    title: 'Personal Website',
    href: '#personal-website',
  },
];

export const features = [
  {
    bg: 'redMain',
    title: 'Unlimited Opportunities',
    icon: '/images/infinity.svg',
    description:
      'nibnab identifies and shares opportunities that match your wants and needs from around the world, without any extra effort on your part.',
  },
  {
    bg: 'amber',
    title: 'Collaboration On-Demand',
    icon: '/images/collaboration.svg',
    description:
      "nibnab's algorithms connect you with essential contacts for mutual success and collaboration for your current and future projects.",
  },
  {
    bg: 'blue',
    title: 'The Best AI Assistant',
    icon: '/images/assistant.svg',
    description:
      'nibnab is the most powerful AI assistant out there. It knows & understands you on an unprecedented level.',
  },
  {
    bg: 'amber',
    title: 'Activity In The Background',
    icon: '/images/activity.svg',
    description:
      'nibnab is tirelessly working for you even while you sleep! Especially so when you have expressed goals you want to achieve.',
  },
  {
    bg: 'blue',
    title: 'We Are Proactive!',
    icon: '/images/proactive.svg',
    description:
      'You don’t need to be in “search mode” to get a new opportunity. Your agent uses the knowledge it posses about you to identify points of collaboration between parties, even when they haven’t explicitly requested.',
  },
  {
    bg: 'redMain',
    title: 'Privacy Stays Protected',
    icon: '/images/protect.svg',
    description:
      'nibnab presents opportunities in a multi-step<br/> context reveal algorithm, involving user permission on what identifiable information may be revealed during negotiation and presentation of opportunities to your potential new connections.',
  },
];
export const teamChat = [
  {
    text: 'Hey hey! <b>@Nikolay</b> here, founder & CEO @ nibnab! I brew the best coffee, yet I drink none. Super power: spotting worst-case scenarios within seconds.',
    smallerDeviceText:
      'Hey hey! @Nikolay here, founder & CEO @ nibnab!I brew the best coffee, yet I drink none. Super power: spotting worst-case scenarios within seconds.',
    sender: 'user',
    profile: '/images/team/nikolay.png',
  },
  {
    text: "Hey, I'm <b>@Deyan</b>, and I am super excited to join the fantastic nibnab team as a Junior Software Engineer! Ready to dive in and code some magic!",
    smallerDeviceText:
      "Hey, I'm <b>@Deyan</b>, and I am super excited to join the fantastic nibnab team as a Junior Software Engineer! Ready to dive in and code some magic!",
    sender: 'user',
    profile: '/images/team/deyan.png',
  },
  {
    text: 'Hi, my name is <b>@Narayani</b>! I’m delighted to join nibnab as an R&D Engineer in AI, eager to explore new possibilities in AI research and development. I look forward to being part of a dynamic team that’s shaping the future of technology.',
    smallerDeviceText:
      'Hi, my name is <b>@Narayani</b>! I’m delighted to join nibnab as an R&D Engineer in AI, eager to explore new possibilities in AI research and development. I look forward to being part of a dynamic team that’s shaping the future of technology.',
    sender: 'user',
    profile: '/images/team/narayani.png',
  },
  {
    text: 'Hey, I’m <b>@Elias</b>! I’m leading the AssignTask team, working closely with my colleges <b>@Sam</b> and <b>@Suman</b> on design and marketing.',
    smallerDeviceText:
      'Hey, I’m @Elias! I’m leading the AssignTask team, working closely with my colleges <b>@Sam</b> and <b>@Suman</b> on design and marketing.',
    sender: 'ai',
    profile: '/images/team/elias.png',
  },
  {
    text: '<b>@Sam</b> here!',
    smallerDeviceText: '<b>@Sam</b> here!',
    sender: 'ai',
    profile: '/images/team/sam.png',
  },
  {
    text: 'I’m <b> @Suman</b>! I also do work on the development side with the front-end.',
    smallerDeviceText:
      'I’m <b> @Suman</b>! I also do work on the development side with the front-end.',
    sender: 'ai',
    profile: '/images/team/suman.png',
  },
  {
    text: "Hey! <b> @Maggie</b> here. I run the Bookkeeping at nibnab together with my colleges at <a href='https://www.veda.uk/' target='_blank'>VEDA</a>, <b>@Dani</b> and <b>@Velislava</b>.<br/><br/>We're taking care of a unicorn from the days it was just a little pony.<br/> We know the drill of Bookkeeping!",
    smallerDeviceText:
      "Hey! <b> @Maggie</b>  here. I run the Bookkeeping at nibnab together with my colleges at <a href='https://www.veda.uk/' target='_blank'>VEDA</a>, <b>@Dani</b> and <b>@Velislava</b>.<br/><br/>We're taking care of a unicorn from the days it was just a little pony. We know the drill of Bookkeeping!",
    sender: 'user',
    profile: '/images/team/maggie.png',
  },
  {
    text: 'Hello there! <b> @Dani</b> here..',
    smallerDeviceText: 'Hello there! <b> @Dani</b> here..',
    sender: 'user',
    profile: '/images/team/dani.png',
  },
  {
    text: 'Hi, I’m <b> @Velislava</b>!',
    smallerDeviceText: 'Hi, I’m <b> @Velislava</b>!',
    sender: 'user',
    profile: '/images/team/velislava.png',
  },
  {
    text: "Hi! This is <b> @Bina</b>! I do the accounting at nibnab and I’m the co-founder of <a href='https://www.linkedin.com/company/summit-service-&-associates-llc/' target='_blank'>SUMMIT</a> - a boutique accounting and tax advisory firm.",
    smallerDeviceText:
      "Hi! This is <b> @Bina</b>! I do the accounting at nibnab and I’m the co-founder of <a href='https://www.linkedin.com/company/summit-service-&-associates-llc/' target='_blank'>SUMMIT</a> - a boutique accounting and tax advisory firm.",
    sender: 'ai',
    profile: '/images/team/bina.png',
  },
  {
    text: "Hey, I’m <b> @AnonymousAttorney#1</b> 🥸. I may be anonymous on this page, but if you want to learn my name - simply try to infringe on nibnab's IP and you will be getting a word from me... other than that I'm a cool guy. 😎",
    smallerDeviceText:
      "Hey, I’m <b> @AnonymousAttorney#1</b> 🥸. I may be anonymous on this page, but if  you want to learn my name - simply try to infringe on nibnab's IP and you will be getting a word from me... other than that I'm a cool guy. 😎",
    sender: 'user',
    profile: '/images/team/anon.png',
  },
];
