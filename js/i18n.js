/* UnA Performance — translation data (DE default, EN secondary) */

const translations = {
  de: {
    meta: {
      langLabel: "DE",
      htmlLang: "de"
    },
    nav: {
      home: "Start",
      about: "Leistungen",
      how: "Ablauf",
      pricing: "Preise",
      testimonials: "Stimmen",
      contact: "Kontakt",
      cta: "Termin buchen"
    },
    hero: {
      eyebrow: "Laktatdiagnostik · Wien",
      title: "Wissenschaftliche Leistungsdiagnostik für ambitionierte Athlet:innen",
      subtitle: "Laktattests, Trainingsbereiche und individuelle Trainingspläne für Läufer:innen, Radfahrer:innen und Triathlet:innen in Wien.",
      cta: "Termin buchen",
      secondary: "Mehr erfahren",
      chips: ["Individuelle Trainingsbereiche", "Wissenschaftliche Methode", "Persönliche Betreuung"]
    },
    about: {
      eyebrow: "Leistungen",
      title: "Was ist ein Laktattest?",
      intro: "Der Laktattest ist die zuverlässigste Methode, um deine individuellen Trainingsbereiche zu bestimmen. Durch eine stufenweise Belastung auf Laufband, Rad oder Ergometer messen wir, wie sich dein Laktatspiegel im Blut verändert — und leiten daraus präzise Herzfrequenz- und Leistungsbereiche für dein Training ab.",
      whoTitle: "Für wen ist ein Laktattest geeignet?",
      who: [
        "Läufer:innen, die ihre Trainingsbereiche optimieren wollen",
        "Radfahrer:innen und Triathlet:innen mit Wettkampfzielen",
        "Ambitionierte Freizeitsportler:innen",
        "Athlet:innen im Wiedereinstieg nach Pause oder Verletzung"
      ],
      includedTitle: "Was ist in einer Session enthalten?",
      included: [
        "Persönliches Vorgespräch zu Trainingsstand & Zielen",
        "Stufentest auf Laufband, Rad oder Ergometer",
        "Laktatmessung aus dem Ohrläppchen an jeder Stufe",
        "Herzfrequenz- und Leistungsmessung während des gesamten Tests",
        "Ausführlicher Ergebnisbericht mit Trainingsbereichen"
      ]
    },
    how: {
      eyebrow: "Ablauf",
      title: "So läuft dein Test ab",
      subtitle: "Vom ersten Gespräch bis zu deinem persönlichen Trainingsbereichs-Report.",
      steps: [
        { title: "Beratungsgespräch", desc: "Wir besprechen deinen Trainingsstand, deine Ziele und die passende Testmethode." },
        { title: "Stufentest", desc: "Ein individuell angepasster Stufentest auf Laufband, Rad oder Ergometer bis zur Ausbelastung." },
        { title: "Laktatanalyse", desc: "Auswertung der Laktat-, Herzfrequenz- und Leistungsdaten aus deinem Test." },
        { title: "Trainingsbereiche-Report", desc: "Du erhältst deinen persönlichen Report mit klar definierten Trainingszonen." }
      ]
    },
    pricing: {
      eyebrow: "Preise",
      title: "Transparente Preise",
      subtitle: "Für jede Zielsetzung das passende Paket — ohne versteckte Kosten.",
      popularLabel: "Beliebt",
      plans: [
        {
          name: "Laktattest Basic",
          price: "120 €",
          period: "einmalig",
          desc: "Der ideale Einstieg: Stufentest inklusive Laktatmessung und kompakter Auswertung.",
          features: [
            "Stufentest auf Laufband, Rad oder Ergometer",
            "Laktatmessung an jeder Stufe",
            "Kompakte Trainingsbereichs-Übersicht"
          ],
          cta: "Jetzt buchen",
          highlighted: false
        },
        {
          name: "Laktattest Pro",
          price: "200 €",
          period: "einmalig",
          desc: "Für ambitionierte Athlet:innen: umfassende Analyse inklusive persönlicher Besprechung.",
          features: [
            "Alles aus Basic",
            "Erweiterte Herzfrequenz- & Leistungsanalyse",
            "Ausführlicher schriftlicher Report",
            "Persönliches Auswertungsgespräch"
          ],
          cta: "Jetzt buchen",
          highlighted: true
        },
        {
          name: "All-Inclusive Paket",
          price: "500 €",
          period: "einmalig",
          desc: "Das Rundum-Paket: Pro-Test plus individueller Trainingsplan zum Start.",
          features: [
            "Alles aus Pro",
            "Individueller Trainingsplan (Ersterstellung)",
            "1 Monat Trainingsbetreuung inklusive",
            "Priorisierte Terminvergabe"
          ],
          cta: "Jetzt buchen",
          highlighted: false
        }
      ],
      addon: {
        title: "Laufende Trainingsplanung",
        price: "99 € / Monat",
        desc: "Fortlaufende individuelle Trainingsplanerstellung und Betreuung nach deinem Laktattest — monatlich kündbar, ideal in Kombination mit jedem Test."
      }
    },
    testimonials: {
      eyebrow: "Stimmen",
      title: "Das sagen unsere Athlet:innen",
      items: [
        { quote: "Der Laktattest bei UnA Performance hat mein Training komplett verändert. Endlich trainiere ich in den richtigen Zonen statt nach Gefühl.", name: "Lisa K.", role: "Marathonläuferin" },
        { quote: "Sehr professionelle Betreuung und eine Auswertung, die man wirklich versteht. Klare Empfehlung für alle Radsportler:innen.", name: "Thomas B.", role: "Hobby-Radrennfahrer" },
        { quote: "Der All-Inclusive-Test plus Trainingsplan war genau das, was ich vor meinem ersten Ironman gebraucht habe.", name: "Julia S.", role: "Triathletin" }
      ]
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Vereinbare deinen Termin",
      subtitle: "Buche jetzt deinen Laktattest in Wien — wir melden uns innerhalb von 24 Stunden.",
      form: {
        name: "Name",
        namePlaceholder: "Dein Name",
        email: "E-Mail",
        emailPlaceholder: "deine@email.at",
        message: "Nachricht",
        messagePlaceholder: "Erzähl uns von deinen Zielen und deinem Trainingsstand …",
        submit: "Nachricht senden",
        success: "Danke! Deine Nachricht wurde übermittelt — wir melden uns in Kürze."
      },
      info: {
        addressLabel: "Standort",
        address: "Wien, Österreich",
        emailLabel: "E-Mail",
        email: "info@una-performance.at",
        phoneLabel: "Telefon",
        phone: "+43 660 123 45 67"
      },
      map: {
        title: "Wien, Österreich",
        note: "Genaue Adresse folgt nach Terminvereinbarung"
      }
    },
    footer: {
      tagline: "Laktatdiagnostik & Trainingsplanung in Wien.",
      linksTitle: "Rechtliches",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      socialTitle: "Folge uns",
      rights: "Alle Rechte vorbehalten."
    },
    legal: {
      backToHome: "Zurück zur Startseite",
      placeholderNote: "Platzhaltertext — bitte vor Veröffentlichung durch die tatsächlichen Unternehmens- und Rechtsdaten ersetzen.",
      impressum: {
        title: "Impressum",
        updated: "Stand: Juli 2026",
        mediaOwnerTitle: "Medieninhaber & Herausgeber",
        mediaOwner: "UnA Performance\nMusterstraße 1, 1010 Wien, Österreich",
        contactTitle: "Kontakt",
        contactEmail: "E-Mail: info@una-performance.at",
        contactPhone: "Telefon: +43 660 123 45 67",
        regTitle: "Unternehmensangaben",
        regItems: [
          "Unternehmensgegenstand: Sportwissenschaftliche Leistungsdiagnostik & Trainingsberatung",
          "Firmenbuchnummer: FN XXXXXXx (Platzhalter)",
          "UID-Nummer: ATUXXXXXXXX (Platzhalter)",
          "Gewerbebehörde: Magistrat der Stadt Wien"
        ],
        disputeTitle: "Online-Streitbeilegung",
        disputeText: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: ec.europa.eu/consumers/odr. Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet."
      },
      datenschutz: {
        title: "Datenschutzerklärung",
        updated: "Stand: Juli 2026",
        introTitle: "Allgemeine Hinweise",
        introText: "Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung informiert dich darüber, welche Daten wir erheben, wenn du unsere Website besuchst oder das Kontaktformular nutzt, und wie wir damit umgehen.",
        controllerTitle: "Verantwortlicher",
        controllerText: "UnA Performance, Musterstraße 1, 1010 Wien, Österreich — info@una-performance.at (Platzhalterangaben)",
        formTitle: "Kontaktformular",
        formText: "Wenn du uns über das Kontaktformular kontaktierst, speichern wir die von dir angegebenen Daten (Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage und für den Fall von Anschlussfragen.",
        cookiesTitle: "Cookies & Hosting",
        cookiesText: "Diese Website verwendet keine Tracking-Cookies. Beim Hosting-Anbieter können technisch notwendige Server-Logdaten anfallen.",
        rightsTitle: "Deine Rechte",
        rightsText: "Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten sowie das Recht auf Datenübertragbarkeit. Wende dich dazu an die oben genannte Kontaktadresse."
      }
    }
  },

  en: {
    meta: {
      langLabel: "EN",
      htmlLang: "en"
    },
    nav: {
      home: "Home",
      about: "Services",
      how: "How it works",
      pricing: "Pricing",
      testimonials: "Testimonials",
      contact: "Contact",
      cta: "Book Appointment"
    },
    hero: {
      eyebrow: "Lactate Diagnostics · Vienna",
      title: "Science-based performance diagnostics for driven athletes",
      subtitle: "Lactate testing, training zones, and personalised training plans for runners, cyclists, and triathletes in Vienna.",
      cta: "Book Appointment",
      secondary: "Learn more",
      chips: ["Personalised training zones", "Evidence-based method", "One-on-one guidance"]
    },
    about: {
      eyebrow: "Services",
      title: "What Is a Lactate Test?",
      intro: "A lactate test is the most reliable way to determine your individual training zones. Through a graded test on a treadmill, bike, or ergometer, we track how your blood lactate changes — and translate that into precise heart-rate and power zones for your training.",
      whoTitle: "Who Is It For?",
      who: [
        "Runners looking to fine-tune their training zones",
        "Cyclists and triathletes preparing for race goals",
        "Motivated recreational athletes",
        "Athletes returning to training after a break or injury"
      ],
      includedTitle: "What's Included in a Session?",
      included: [
        "A personal consultation on your training background and goals",
        "A graded test on a treadmill, bike, or ergometer",
        "Lactate measurement from the earlobe at every stage",
        "Continuous heart rate and power monitoring throughout the test",
        "A detailed results report with your training zones"
      ]
    },
    how: {
      eyebrow: "How it works",
      title: "How Your Test Works",
      subtitle: "From your first conversation to your personal training zones report.",
      steps: [
        { title: "Consultation", desc: "We discuss your training background, your goals, and the right test for you." },
        { title: "Step Test", desc: "A graded test on a treadmill, bike, or ergometer, tailored to your fitness and taken to maximal effort." },
        { title: "Lactate Analysis", desc: "Your lactate, heart rate, and power data are analysed in detail." },
        { title: "Training Zones Report", desc: "You receive a personal report with clearly defined training zones." }
      ]
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent Pricing",
      subtitle: "The right package for every goal — no hidden costs.",
      popularLabel: "Popular",
      plans: [
        {
          name: "Lactate Test Basic",
          price: "€120",
          period: "one-time",
          desc: "A great starting point: a step test with lactate measurement and a compact summary.",
          features: [
            "Step test on treadmill, bike, or ergometer",
            "Lactate measurement at every stage",
            "Compact training zones overview"
          ],
          cta: "Book now",
          highlighted: false
        },
        {
          name: "Lactate Test Pro",
          price: "€200",
          period: "one-time",
          desc: "For ambitious athletes: a comprehensive analysis with a personal debrief.",
          features: [
            "Everything in Basic",
            "Extended heart rate & power analysis",
            "Detailed written report",
            "Personal results consultation"
          ],
          cta: "Book now",
          highlighted: true
        },
        {
          name: "All-Inclusive Package",
          price: "€500",
          period: "one-time",
          desc: "The complete package: the Pro test plus a personalised training plan to get you started.",
          features: [
            "Everything in Pro",
            "Custom training plan (initial setup)",
            "1 month of training plan support included",
            "Priority booking"
          ],
          cta: "Book now",
          highlighted: false
        }
      ],
      addon: {
        title: "Ongoing Training Plan",
        price: "€99 / month",
        desc: "Continuous, personalised training plan creation and support after your lactate test — cancel anytime, ideal alongside any test."
      }
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What Our Athletes Say",
      items: [
        { quote: "The lactate test at UnA Performance completely changed how I train. I'm finally training in the right zones instead of just going by feel.", name: "Lisa K.", role: "Marathon Runner" },
        { quote: "Very professional guidance and results that actually make sense. Highly recommend it to any cyclist.", name: "Thomas B.", role: "Amateur Road Racer" },
        { quote: "The All-Inclusive test plus training plan was exactly what I needed before my first Ironman.", name: "Julia S.", role: "Triathlete" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Book Your Appointment",
      subtitle: "Book your lactate test in Vienna today — we'll get back to you within 24 hours.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell us about your goals and training background …",
        submit: "Send Message",
        success: "Thank you! Your message has been sent — we'll be in touch shortly."
      },
      info: {
        addressLabel: "Location",
        address: "Vienna, Austria",
        emailLabel: "Email",
        email: "info@una-performance.at",
        phoneLabel: "Phone",
        phone: "+43 660 123 45 67"
      },
      map: {
        title: "Vienna, Austria",
        note: "Exact address provided upon booking"
      }
    },
    footer: {
      tagline: "Lactate diagnostics & training planning in Vienna.",
      linksTitle: "Legal",
      impressum: "Impressum",
      datenschutz: "Privacy Policy",
      socialTitle: "Follow us",
      rights: "All rights reserved."
    },
    legal: {
      backToHome: "Back to homepage",
      placeholderNote: "Placeholder text — please replace with your actual company and legal details before publishing.",
      impressum: {
        title: "Impressum",
        updated: "Last updated: July 2026",
        mediaOwnerTitle: "Media Owner & Publisher",
        mediaOwner: "UnA Performance\nMusterstraße 1, 1010 Vienna, Austria",
        contactTitle: "Contact",
        contactEmail: "Email: info@una-performance.at",
        contactPhone: "Phone: +43 660 123 45 67",
        regTitle: "Company Details",
        regItems: [
          "Business purpose: Sports science performance diagnostics & training consulting",
          "Commercial register number: FN XXXXXXx (placeholder)",
          "VAT ID: ATUXXXXXXXX (placeholder)",
          "Trade authority: Vienna City Administration"
        ],
        disputeTitle: "Online Dispute Resolution",
        disputeText: "The European Commission provides a platform for online dispute resolution (ODR): ec.europa.eu/consumers/odr. We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board."
      },
      datenschutz: {
        title: "Privacy Policy",
        updated: "Last updated: July 2026",
        introTitle: "General Information",
        introText: "Protecting your personal data matters to us. This privacy policy explains what data we collect when you visit our website or use the contact form, and how we handle it.",
        controllerTitle: "Data Controller",
        controllerText: "UnA Performance, Musterstraße 1, 1010 Vienna, Austria — info@una-performance.at (placeholder details)",
        formTitle: "Contact Form",
        formText: "If you contact us via the contact form, we store the data you provide (name, email address, message) solely to process your request and for any follow-up questions.",
        cookiesTitle: "Cookies & Hosting",
        cookiesText: "This website does not use tracking cookies. Our hosting provider may collect technically necessary server log data.",
        rightsTitle: "Your Rights",
        rightsText: "You have the right to access, rectify, erase, and restrict the processing of your data at any time, as well as the right to data portability. Please contact us at the address above."
      }
    }
  }
};
