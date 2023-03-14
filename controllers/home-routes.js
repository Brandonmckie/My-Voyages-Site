const router = require('express').Router();

// render homepage
router.get('/', (req, res) => {
  res.render('index', {
    loggedIn: req.session.loggedIn,
    hero: {
      video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
      content: "My Voyages simplifies travel planning through social interaction, resulting in trusted travel reviews.",
      class: "hero-heading hero-heading-home fadeIn-element first-tittle"
    },
    promoVideo: {
      video: "https://player.vimeo.com/external/363737257.sd.mp4?s=56f6959fc24ef2533531ddba2895bb8f4be7d2ed&profile_id=164&oauth2_token_id=57447761",
      content: "My Voyages is a next generation travel app that allows its users to curate better lifestyle and travel experiences through social interaction."
    },
    footer: {
      video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
      content: "My \n Voyages",
      pTop: true
    }
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    loggedIn: req.session.loggedIn,
    hero: {
      video: "/public/html5-videos-22/About-Video2.mp4",
      content: "About Us",
      class: "hero-heading hero-heading-home fadeIn-element"
    },
    footer: {
      video: "/public/html5-videos-22/About-Video2.mp4",
      content: "the future of travel",
      pTop: true
    }
  });
});

router.get('/ambassador', (req, res) => {
  res.render('ambassador', {
    loggedIn: req.session.loggedIn,
    hero: {
      video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
      content: "Become a My Voyages Ambassador",
      class: "hero-heading hero-heading-home fadeIn-element",
      noAccessBtn: true
    },
    promoVideo: {
      video: "/public/html5-videos-22/About-Video2.mp4",
      content: "ARE YOU THE PERSON WHO FINDS THE COOLEST SPOTS AND MAKES SURE EVERYONE HAS A WONDERFUL TIME?"
    },
    footer: {
      video: "/public/html5-videos-22/Luxex.mp4",
      content: "My \n Voyages",
      noForm: true,
      pTop: true
    }
  });
});

router.get('/feature', (req, res) => {
  res.render('feature', {
    loggedIn: req.session.loggedIn,
    hero: {
      photo: "/public/img/feature/madrid.webp",
      content: "Voyager Feature \n Curated by creators",
      class: "hero-heading hero-heading-home fadeIn-element"
    },
    footer: {
      video: "https://www.11-76.com/html5-videos-22/luxex/luxex.mp4",
      content: "My \n Voyages",
      pTop: true
    }
  });
});

router.get('/contact', (req, res) => {
  res.render('contact-page', {
    loggedIn: req.session.loggedIn,
    hero: {
      video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
      content: "Contact Us",
      class: "hero-heading hero-heading-home fadeIn-element",
      noAccessBtn: true
    },
    footer: {
      video: "https://www.11-76.com/html5-videos-22/luxex/luxex.mp4",
      content: "ARE YOU THE PERSON WHO FINDS THE COOLEST SPOTS AND MAKES SURE EVERYONE HAS A WONDERFUL TIME?",
      contactUs: true,
      pBottom: true,
      noTopLines: true
    }
  });
});

// login page
router.get('/login-signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  };

  res.render('login-signup', {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;