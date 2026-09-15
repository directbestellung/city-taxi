import { business } from "@/lib/business";
import type { LandingBlock, ServiceCopy } from "./types";
import type { Dictionary } from "./de";

const en: Dictionary = {
  htmlLang: "en",
  localeName: "English",
  otherLocaleName: "Deutsch",
  switchLanguage: "Change language",

  nav: {
    home: "Home",
    services: "Services",
    tariff: "Fares",
    cityrides: "City rides",
    largetaxi: "Large-capacity taxi",
    courier: "Courier runs",
    business: "Business accounts",
    booking: "Order a taxi",
    contact: "Contact",
    medical: "Medical transport",
    airport: "Airport transfers",
    airbase: "Taxi to the Air Base",
    imprint: "Imprint",
    privacy: "Privacy",
  },

  common: {
    callNow: "Call now",
    bookOnline: "Order online",
    whatsapp: "WhatsApp",
    whatsappAria: "Order a taxi via WhatsApp",
    whatsappMessage: "Hello, I would like to order a taxi. Pick-up address: ",
    phoneLabel: "Phone",
    addressLabel: "Address",
    hoursLabel: "Availability",
    emailLabel: "Email",
    hours: "24 hours a day, 7 days a week",
    hoursShort: "Around the clock",
    directions: "Get directions",
    relatedTitle: "You might also need",
    readMore: "Read more",
    menu: "Menu",
    skipToContent: "Skip to content",
    backHome: "Back to the home page",
    ratingLine: `${business.rating.valueEn} stars from ${business.rating.count} Google reviews`,
  },

  home: {
    badge: "Taxi in Kaiserslautern — order now",
    title: "Your taxi in",
    titleHighlight: "Kaiserslautern.",
    lead: "City Taxi Kaiserslautern gets you there reliably — airport transfer, appointment, or the ride home at night. Order by phone, on WhatsApp, or online.",
    trust: [
      "Fixed rates set by the official taxi tariff",
      "Drivers who know the city",
      "Reachable around the clock",
    ],
    servicesTitle: "What we drive you to",
    servicesLead:
      "From a short hop across town to an airport transfer — one number for all of it.",
    servicesCta: "See all services",
    stepsEyebrow: "How it works",
    stepsTitle: "Three steps to your taxi",
    steps: [
      {
        title: "Tell us the trip",
        body: "Call us, send a WhatsApp message, or use the online booking form.",
      },
      {
        title: "Get confirmation",
        body: "We confirm the pick-up point, the time, and the right vehicle.",
      },
      {
        title: "Get in",
        body: "Your driver arrives on time. You pay in the car.",
      },
    ],
    areaEyebrow: "Service area",
    areaTitle: "Kaiserslautern and the surrounding area",
    areaLead:
      "We drive across the whole city and the surrounding towns. Longer journeys on request at a fixed price.",
    areas: [
      "City centre",
      "Kaiserslautern West",
      "Betzenberg",
      "Vogelweh",
      "Einsiedlerhof",
      "Erfenbach",
      "Hohenecken",
      "Siegelbach",
      "Morlautern",
      "Dansenberg",
      "RPTU University",
      "Westpfalz-Klinikum",
      "Landstuhl",
      "Ramstein-Miesenbach",
    ],
    areaNote:
      "Do not see your area? Give us a call — we drive beyond this list too.",
    liveLabel: "Live",
    liveHeadline: "Order a taxi with real-time personal confirmation",
    liveNote:
      "Your order goes straight to a driver and our dispatch — not a contact form sitting in an inbox.",
    heroOr: "Or reach us directly:",
    faresTitle: "What the ride costs",
    faresLead:
      "Every taxi in Kaiserslautern charges the same official tariff. Here it is, in full.",
    faresCta: "Fares in detail",
    contactTitle: "How to reach us",
    contactLead:
      "For an immediate ride, calling is fastest. For anything else, send us a WhatsApp message.",
    contactCta: "Go to the contact page",
    bookingTitle: "Book right here",
    bookingLead:
      "Enter your pick-up point, destination, and preferred time — no need to leave this page.",
    bookingCta: "Open the booking page",
    photoCaption: "Kaiserslautern main station — one of the pick-up points we drive to most.",
    ctaTitle: "Need a taxi right now?",
    ctaLead:
      "Calling is the fastest way. To book for later, use the online form.",
  },

  services: {
    eyebrow: "Services",
    title: "Our journeys",
    lead: "One call is enough. Tell us where you are going and we will send the right vehicle.",
    items: [
      {
        title: "City rides",
        body: "Short trips around Kaiserslautern: to an appointment, the station, the shops, or safely home in the evening.",
        icon: "pin",
        link: "cityrides",
      },
      {
        title: "Airport transfers",
        body: "Frankfurt, Hahn, Saarbrücken, or Luxembourg. Transfers on request at a flat rate, on time for your flight.",
        icon: "plane",
        link: "airport",
      },
      {
        title: "Large-capacity taxi",
        body: "More room for luggage or for several passengers. Just mention it when you book.",
        icon: "users",
        link: "largetaxi",
      },
      {
        title: "Courier runs",
        body: "Documents, spare parts, or small deliveries taken directly where they need to go.",
        icon: "briefcase",
        link: "courier",
      },
      {
        title: "Business accounts",
        body: "Regular journeys for staff and visitors. Talk to us about a standing arrangement.",
        icon: "clock",
        link: "business",
      },
      {
        title: "Medical journeys",
        body: "Seated journeys to the doctor, dialysis, therapy, or hospital — for all health insurers.",
        icon: "accessible",
        link: "medical",
      },
    ] as ServiceCopy[],
    tariffTitle: "What does a ride cost?",
    tariffBody: [
      "Taxi journeys in Kaiserslautern are charged according to the official taxi tariff. The tariff is set by the city and applies equally to every taxi operator — so the price depends on distance and time, not on the company you call.",
      "For airport transfers and longer journeys we are happy to quote a fixed price in advance. Just give us a call.",
    ],
  },

  booking: {
    eyebrow: "Booking",
    title: "Order a taxi online",
    lead: "Enter your pick-up point, destination, and preferred time. The order runs through the taxi.de booking system and is confirmed personally.",
    widgetNote:
      "Note: this form is provided by taxi.de. Loading it transfers data to taxi.de.",
    disclaimer: "taxi.de terms and conditions",
    fallbackTitle: "Prefer to speak to someone?",
    fallbackBody:
      "For an immediate pick-up, calling is fastest. We are reachable around the clock.",
  },

    app: {
      eyebrow: "Taxi.de app",
      title: "Order from the app",
      lead: "If you travel with us often, the free Taxi.de app is the quickest route — with us saved as your preferred firm.",
      pinLabel: "Our PIN",
      steps: [
        "Download the free Taxi.de app",
        "Save City Taxi Kaiserslautern as your preferred company — using the PIN above",
        "Order with a single tap",
        "Follow your car on its way",
        "Pay straight from the app",
      ],
      appStore: "App Store",
      playStore: "Google Play",
      note: "The app is provided by taxi.de. Their terms and privacy notice apply to downloading and using it.",
    },
  contact: {
    eyebrow: "Contact",
    title: "How to reach us",
    lead: "For an immediate ride, calling is best. For anything else, send us a WhatsApp message or an email.",
    callTitle: "Order by phone",
    callBody: "The fastest way to a taxi — day and night.",
    whatsappTitle: "On WhatsApp",
    whatsappBody: "Send us the pick-up point and time and we will confirm.",
    onlineTitle: "Book online",
    onlineBody: "Planning a trip for later? Use the booking form.",
    addressTitle: "Address",
  },

  imprint: {
    eyebrow: "Legal",
    title: "Imprint",
    sections: [
      {
        heading: "Information pursuant to § 5 DDG",
        body: [
          business.legalName,
          "[Owner: first and last name]",
          `${business.street}`,
          `${business.postalCode} ${business.city}`,
          "Germany",
        ],
      },
      {
        heading: "Contact",
        body: [`Phone: ${business.phoneDisplay}`, `Email: ${business.email}`],
      },
      {
        heading: "VAT",
        body: [
          "VAT identification number pursuant to § 27 a of the German VAT Act:",
          "[VAT ID, or a note on the small-business rule under § 19 UStG]",
        ],
      },
      {
        heading: "Professional information",
        body: [
          "Professional title: taxi operator (awarded in the Federal Republic of Germany)",
          "Competent supervisory and licensing authority: [authority, e.g. Stadtverwaltung Kaiserslautern, with address]",
          "The German Passenger Transport Act (PBefG) and its associated regulations apply; they can be consulted at www.gesetze-im-internet.de.",
        ],
      },
      {
        heading: "Consumer dispute resolution",
        body: [
          "We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        heading: "Liability for content and links",
        body: [
          "As a service provider we are responsible for our own content on these pages under general law. We are not obliged to monitor third-party information that is transmitted or stored.",
          "Our site contains links to external websites over whose content we have no influence. The respective provider is always responsible for the content of linked pages.",
        ],
      },
    ],
    creditsHeading: "Image credits",
    creditsIntro: "The photographs used on this site are freely licensed. Author and licence:",
  },

  privacy: {
    eyebrow: "Legal",
    title: "Privacy policy",
    sections: [
      {
        heading: "Controller",
        body: [
          "The controller for data processing on this website is:",
          business.legalName,
          "[Owner: first and last name]",
          `${business.street}, ${business.postalCode} ${business.city}`,
          `Phone: ${business.phoneDisplay}`,
          `Email: ${business.email}`,
        ],
      },
      {
        heading: "Access data and hosting",
        body: [
          "When you visit this website, the hosting provider automatically stores information in server log files that your browser transmits: IP address, date and time of access, the page requested, the referrer URL, and browser and operating system details.",
          "This data serves the secure and stable operation of the website. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in an error-free presentation).",
        ],
      },
      {
        heading: "No cookies, no analytics",
        body: [
          "This website sets no cookies for analytics, tracking, or advertising, and embeds no analytics services. Your language is detected solely from your browser's language setting and is not stored.",
        ],
      },
      {
        heading: "Online booking form (taxi.de)",
        body: [
          "On the online booking page we embed a form provided by taxi.de GmbH. Opening that page establishes a connection to the taxi.de servers, transmitting your IP address to taxi.de. The details you enter in the form (including pick-up point, destination, time, and contact details) are transmitted to taxi.de and passed on to us in order to arrange your journey.",
          "The legal basis is Art. 6(1)(b) GDPR (steps taken prior to entering into a contract). For details please see the taxi.de privacy information.",
        ],
      },
      {
        heading: "Contact by phone, email, and WhatsApp",
        body: [
          "If you call, write, or message us on WhatsApp, we process the details you provide in order to handle your enquiry and carry out your journey. The legal basis is Art. 6(1)(b) GDPR.",
          "Please note: WhatsApp is a service of WhatsApp Ireland Limited. When you use WhatsApp, connection and usage data is processed by that provider, and transfer to third countries cannot be ruled out. If you would rather avoid this, please use the phone or email instead.",
        ],
      },
      {
        heading: "Retention period",
        body: [
          "We store personal data only for as long as is necessary for the purposes described, or for as long as statutory retention periods require.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and the right to object (Art. 21 GDPR).",
          "You also have the right to lodge a complaint with a data protection supervisory authority. The competent authority is the State Commissioner for Data Protection and Freedom of Information of Rhineland-Palatinate.",
        ],
      },
    ],
  },

  tariff: {
    eyebrow: "Fares",
    title: "Taxi fares in Kaiserslautern",
    lead: "Inside the city every taxi charges the same official tariff. Here is exactly what that means — in full, with no small print.",
    tableHeading: "Official taxi tariff of the city of Kaiserslautern",
    validFromLabel: "In force since",
    sourceLabel: "Taxi tariff ordinance, City of Kaiserslautern",
    columns: { item: "Item", price: "Amount" },
    rows: {
      basePrice: "Base fare (minimum fare)",
      firstThree: "For the first 3 kilometres, per kilometre",
      dayRate: "Each further kilometre, weekdays 06:00 to 22:00",
      nightRate: "Each further kilometre, weekdays 22:00 to 06:00 and on Sundays and public holidays",
      waiting: "Time rate per hour (waiting and traffic standstill)",
      meterStep: "Increment the meter advances in",
    },
    surchargeHeading: "Surcharges",
    surcharges: {
      einsiedlerhof: "Pick-up for journeys within the Einsiedlerhof district",
      largeTaxi: "Large-capacity taxi from the fifth passenger, flat",
      cancellation: "Cancellation once the taxi is already on its way",
    },
    footnote:
      "There is no charge for the approach journey inside the mandatory service area. The compulsory waiting time at the passenger's request is 10 minutes. The current taxi tariff ordinance of the city of Kaiserslautern always takes precedence.",
    blocks: [
      {
        type: "text",
        heading: "Why does every taxi cost the same?",
        paragraphs: [
          "For journeys inside the mandatory service area — the core city within the town boundary signs, including Einsiedlerhof — the city of Kaiserslautern sets the tariff. It applies equally to every licensed taxi operator. No company can charge more, and none can undercut it.",
          "So we can only stand out where it actually matters: how quickly a car reaches you, how reliably we keep to the time, and how fairly we advise you on journeys beyond the city limits.",
        ],
      },
      {
        type: "note",
        heading: "Journeys outside the mandatory service area",
        paragraphs: [
          "For the part of a journey outside the city, the price can be agreed freely. That is exactly why we offer a flat rate for airport transfers and longer journeys, quoted before you travel.",
          "If no price is agreed, the mandatory-area rates apply automatically — so you never pay more than the official tariff provides for.",
        ],
      },
      {
        type: "faq",
        heading: "Common questions about fares",
        items: [
          {
            q: "Are you cheaper than other taxis in Kaiserslautern?",
            a: "Inside the city, no — and that is by design: the official tariff applies to every Kaiserslautern taxi operator alike. The differences are in waiting time, service, and journeys beyond the mandatory area, where we quote you a fixed price.",
          },
          {
            q: "What does a short trip across town cost?",
            a: "A journey of around 3 kilometres costs 10.40 euros: a 3.50 euro base fare plus three times 2.30 euros per kilometre. On top of that, only the traffic standstill or waiting time that actually occurs.",
          },
          {
            q: "Is it more expensive at night?",
            a: "The base fare and the first three kilometres stay the same. From the fourth kilometre, nights, Sundays, and public holidays are charged at 2.20 euros instead of 2.10 euros per kilometre.",
          },
          {
            q: "Are there surcharges for luggage or pets?",
            a: "No. The Kaiserslautern tariff ordinance provides for none. Surcharges apply only to large-capacity taxis from the fifth passenger, and to pick-ups within the Einsiedlerhof district.",
          },
          {
            q: "Can I get a fixed price in advance?",
            a: "For journeys beyond the city limits, such as to an airport, yes. Call us with your start point, destination, and time, and we will quote the flat rate before you travel.",
          },
          {
            q: "What does waiting time cost?",
            a: "The time rate is 35 euros per hour and is calculated by the meter. The compulsory waiting time at your request is 10 minutes.",
          },
        ],
      },
    ] as LandingBlock[],
  },

  landing: {
    medical: {
      eyebrow: "Medical transport",
      title: "Medical transport in Kaiserslautern",
      lead: "Seated medical journeys to the doctor, dialysis, therapy, and hospital — we drive for all health insurers.",
      blocks: [
        {
          type: "text",
          heading: "Reliably on time for your treatment",
          paragraphs: [
            "When you have to travel for treatment regularly, one thing matters above all: the taxi being there when it should be. We drive medical journeys across Kaiserslautern and the surrounding towns, at fixed appointment times, early in the morning and at weekends.",
            "Recurring appointments such as dialysis or a course of radiotherapy can be scheduled as a standing arrangement, so you do not have to call ahead of every single journey.",
          ],
        },
        {
          type: "list",
          heading: "What we drive you to",
          intro: "Journeys we handle regularly:",
          items: [
            "Dialysis appointments on a fixed schedule",
            "Chemotherapy and radiotherapy",
            "Doctor and specialist appointments",
            "Hospital admission and discharge",
            "Rehabilitation and follow-up care",
            "Physiotherapy, occupational therapy, and check-ups",
          ],
        },
        {
          type: "note",
          heading: "What we cannot offer",
          paragraphs: [
            "We carry seated passengers only. Transport in a wheelchair, or lying down on a stretcher, is not possible in our vehicles.",
            "If you need wheelchair or stretcher transport, please contact a dedicated patient transport service. If you are unsure, give us a quick call — we will tell you honestly whether we are the right choice for your journey.",
          ],
        },
        {
          type: "text",
          heading: "Cover by your health insurer",
          paragraphs: [
            "For a medical journey paid by your health insurer you need a doctor's prescription for patient transport (Verordnung einer Krankenbeförderung, form Muster 4). Journeys for outpatient treatment must be approved by the insurer in advance; for dialysis, chemotherapy, and radiotherapy that approval is normally granted.",
            "Adults with statutory insurance pay a co-payment of 10 percent of the fare, at least 5 and at most 10 euros per journey. If you are exempt from co-payments, please bring your exemption certificate.",
            "Your health insurer always makes the final decision on cover. If in doubt, check with them before booking. We are of course happy to drive you without a prescription too — in that case it is an ordinary taxi journey at the official taxi tariff.",
          ],
        },
        {
          type: "faq",
          heading: "Common questions about medical transport",
          items: [
            {
              q: "Which health insurers do you drive for?",
              a: "We drive for all health insurers. Simply bring your prescription along to the journey.",
            },
            {
              q: "Do I need a prescription from my doctor?",
              a: "For the journey to be billed to your health insurer, yes: your doctor issues a prescription for patient transport (Muster 4). Without one we will still drive you, but as an ordinary taxi journey at the official taxi tariff.",
            },
            {
              q: "How much is the co-payment?",
              a: "Adults with statutory insurance pay 10 percent of the fare, at least 5 and at most 10 euros per journey. With an exemption certificate the co-payment does not apply.",
            },
            {
              q: "Can you take me in a wheelchair?",
              a: "No. We carry seated passengers only and cannot provide wheelchair or stretcher transport. A dedicated patient transport service is the right contact for those journeys.",
            },
            {
              q: "Do you handle regular dialysis journeys?",
              a: "Yes. We drive dialysis appointments regularly on a fixed schedule. Get in touch and we will put your appointments in the diary as a standing booking.",
            },
            {
              q: "How far in advance should I book a medical journey?",
              a: "Ideally let us know a day ahead so we can reserve a vehicle. We will always try to make short-notice journeys work as well — just call.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    airport: {
      eyebrow: "Airport transfer",
      title: "Airport transfers from Kaiserslautern",
      lead: "To Frankfurt, Hahn, Saarbrücken, or Luxembourg — direct, on time, and at a flat rate on request.",
      blocks: [
        {
          type: "text",
          heading: "Door to terminal, no changes",
          paragraphs: [
            "Changing trains with suitcases is no fun, least of all at five in the morning. We collect you at home and take you straight to the terminal — no connections, no hunting for a parking space, and no waiting for the first train of the day.",
            "The same goes for the return leg: give us your flight number and landing time and we will schedule the pick-up around it.",
          ],
        },
        {
          type: "table",
          heading: "Airports and journey times",
          intro:
            "Approximate distances from Kaiserslautern. Actual journey time depends on traffic and time of day.",
          columns: ["Destination", "Distance", "Journey time approx."],
          rows: [
            ["Frankfurt am Main (FRA)", "approx. 120 km", "approx. 1:15 h"],
            ["Frankfurt-Hahn (HHN)", "approx. 100 km", "approx. 1:15 h"],
            ["Saarbrücken (SCN)", "approx. 75 km", "approx. 0:50 h"],
            ["Luxembourg (LUX)", "approx. 150 km", "approx. 1:40 h"],
            ["Stuttgart (STR)", "approx. 200 km", "approx. 2:00 h"],
            ["Ramstein Air Base", "approx. 20 km", "approx. 0:25 h"],
          ],
        },
        {
          type: "note",
          heading: "A flat rate instead of the meter",
          paragraphs: [
            "For airport transfers we agree a flat rate on request. You know what the journey costs before you set off, whatever the traffic or the time of day.",
            "Call us or send a WhatsApp message with your pick-up address, the airport, and your departure time. You get the fixed price up front.",
          ],
        },
        {
          type: "list",
          heading: "To keep the transfer running smoothly",
          intro: "When you book, it helps to tell us:",
          items: [
            "Your flight number and departure time, so we can set the pick-up accordingly",
            "How many passengers and suitcases — with a lot of luggage we send a larger vehicle",
            "Whether you need the return leg too; booked together it is usually cheaper",
            "Your terminal or airline, so we can drop you at the right entrance",
          ],
        },
        {
          type: "faq",
          heading: "Common questions about airport transfers",
          items: [
            {
              q: "What does a transfer to Frankfurt Airport cost?",
              a: "For airport transfers we quote a flat rate on request. Call us or send a WhatsApp message with your pick-up address and departure time, and you will have the fixed price before the journey.",
            },
            {
              q: "When should I be collected?",
              a: "For flights from Frankfurt you should be at the terminal around two hours before departure, and nearer three for long-haul. With a journey time of about 1:15 hours that means a pick-up roughly three and a half to four hours before departure. We are happy to advise when you book.",
            },
            {
              q: "Do you collect from the airport as well?",
              a: "Yes. Give us your flight number and scheduled landing time and we will schedule the pick-up around it.",
            },
            {
              q: "Do you drive at night and at weekends?",
              a: "Yes, around the clock, seven days a week. Early departures are routine for us.",
            },
            {
              q: "How much luggage fits in the vehicle?",
              a: "Just tell us how many passengers and suitcases are travelling. For larger loads or groups of up to eight people we send a large-capacity vehicle.",
            },
          ],
        },
      ] as LandingBlock[],
    },
    airbase: {
      eyebrow: "Air Base",
      title: "Taxi to Ramstein Air Base and around the KMC",
      lead: "Rides between Kaiserslautern, Ramstein Air Base, Vogelweh, Landstuhl, and the rest of the Kaiserslautern Military Community — around the clock. On request with a driver who holds a base access card, so we can take you on the installation itself.",
      blocks: [
        {
          type: "text",
          heading: "For the Kaiserslautern Military Community",
          paragraphs: [
            "The area around Kaiserslautern is home to the largest American community outside the United States, and we drive it constantly: between downtown, the housing areas, and the KMC installations — for shift start, for medical appointments, to the passenger terminal and back.",
            "This whole site is available in English, and you are welcome to send us your booking in English on WhatsApp at any time.",
          ],
        },
        {
          type: "table",
          heading: "Installations and journey times",
          intro:
            "Approximate distances from downtown Kaiserslautern. Actual journey time depends on traffic and on checks at the gate.",
          columns: ["Destination", "Distance", "Journey time approx."],
          rows: [
            ["Ramstein Air Base", "approx. 20 km", "approx. 0:25 h"],
            ["Landstuhl Regional Medical Center", "approx. 20 km", "approx. 0:25 h"],
            ["Vogelweh", "approx. 5 km", "approx. 0:10 h"],
            ["Rhine Ordnance Barracks", "approx. 6 km", "approx. 0:12 h"],
            ["Pulaski Barracks", "approx. 6 km", "approx. 0:12 h"],
            ["Daenner Kaserne", "approx. 5 km", "approx. 0:10 h"],
            ["Kleber Kaserne", "approx. 4 km", "approx. 0:10 h"],
            ["Sembach Kaserne", "approx. 15 km", "approx. 0:20 h"],
          ],
        },
        {
          type: "note",
          heading: "Need us on the installation? Tell us when you book",
          paragraphs: [
            "Yes, we do drive on base — to your quarters, your building, or the terminal. For that we specifically assign a driver who holds a valid base access card. The same goes for pick-ups from inside the installation.",
            "The important part: say so when you book. If we do not know in advance, there may be no driver with an access card free, and we can only take you as far as the gate. One sentence at booking time saves you the walk.",
          ],
        },
        {
          type: "list",
          heading: "What we help with most",
          intro: "Typical journeys in and around the KMC:",
          items: [
            "Rides onto the installation with a base-access driver — just tell us when you book",
            "Rides for shift start and after duty, including very early and very late",
            "Appointments at Landstuhl Regional Medical Center and clinics in Kaiserslautern",
            "Early runs to the passenger terminal for rotator flights",
            "Transfers between hotel and quarters during a PCS move",
            "Shopping and restaurant trips downtown, with a safe ride back",
            "Onward transfers to Frankfurt or Hahn airport at a flat rate",
          ],
        },
        {
          type: "faq",
          heading: "Common questions",
          items: [
            {
              q: "Do you drive onto the base itself?",
              a: "Yes. We have drivers with base access and can drop you off or collect you on the installation. Please mention it when you book — that is the only way we can assign a driver who holds an access card. Without advance notice there may be no such driver available, and we would only be able to take you as far as the gate.",
            },
            {
              q: "Can you pick me up from inside the base?",
              a: "Yes, with the same caveat: say at booking time that the pick-up is on the installation, and give us the building or meeting point. We will then send a driver who is allowed to drive in.",
            },
            {
              q: "Will you drive very early to the passenger terminal?",
              a: "Yes. We drive around the clock, including nights and public holidays. Tell us the arrival time you need and we will plan the pick-up with a buffer.",
            },
            {
              q: "What does a ride to Ramstein cost?",
              a: "Ramstein lies outside the Kaiserslautern mandatory service area. For that part of the journey we agree a flat rate on request, so you know the price before you travel.",
            },
            {
              q: "Can several people travel with luggage?",
              a: "Yes. Tell us how many passengers and suitcases when you book — if needed we will send a large-capacity vehicle for up to eight people.",
            },
            {
              q: "Can I book in English?",
              a: "Yes. This site is available in English, and you can send us your booking in English on WhatsApp at any time.",
            },
          ],
        },
      ] as LandingBlock[],
    },
    cityrides: {
      eyebrow: "City rides",
      title: "Taxi in Kaiserslautern for short trips",
      lead: "To an appointment, the station, the shops, or safely home in the evening — the ride that simply has to work.",
      blocks: [
        {
          type: "text",
          heading: "The ride you should not have to think about",
          paragraphs: [
            "Most journeys in Kaiserslautern are short: a few kilometres into town, to the doctor, to work, or back home. Which means only one thing really matters — that the car is there when you need it and you arrive on time.",
            "We drive across the whole city, including the outlying districts beyond the mandatory service area such as Hohenecken, Siegelbach, Erfenbach, Morlautern, and Dansenberg. Call as you need it, or book ahead for a fixed appointment.",
          ],
        },
        {
          type: "list",
          heading: "Where we drive most often in town",
          intro: "Destinations that come up every day:",
          items: [
            "Main station and bus station, with help to the platform",
            "City centre, Fackelrondell, and Stiftsplatz",
            "Westpfalz-Klinikum, clinics, and specialist practices",
            "RPTU University and the college campuses",
            "Fritz-Walter-Stadion on match days",
            "Council offices, courts, and the town hall",
          ],
        },
        {
          type: "note",
          heading: "The price is settled in advance — across town",
          paragraphs: [
            "Inside the mandatory service area we charge the official taxi tariff of the city of Kaiserslautern. The price therefore depends only on distance and time, not on who you call.",
            "For journeys beyond the city limits we will quote you a fixed price in advance on request.",
          ],
        },
        {
          type: "faq",
          heading: "Common questions about city rides",
          items: [
            {
              q: "How quickly can a taxi reach me?",
              a: "Usually within a few minutes inside the city, depending on the time of day and traffic. For a fixed appointment it is best to book ahead so a car is reserved for you.",
            },
            {
              q: "Can I book a taxi for later?",
              a: "Yes — by phone, on WhatsApp, or through the online form. For early starts and medical appointments we recommend booking the day before.",
            },
            {
              q: "Do you drive at night and on Sundays?",
              a: "Yes, around the clock, seven days a week. From the fourth kilometre, nights, Sundays, and public holidays carry a slightly higher rate per kilometre.",
            },
            {
              q: "Will you take luggage or shopping?",
              a: "Of course, and at no extra charge — the Kaiserslautern tariff ordinance provides for no luggage surcharge. If you have a great deal with you, just say so and we will send a larger vehicle.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    largetaxi: {
      eyebrow: "Large-capacity taxi",
      title: "Large-capacity taxi in Kaiserslautern",
      lead: "Up to eight passengers or a lot of luggage in one vehicle — instead of two taxis trailing each other across town.",
      blocks: [
        {
          type: "text",
          heading: "Everyone in one car",
          paragraphs: [
            "As soon as there are five or more of you, an ordinary taxi gets tight. A large-capacity taxi solves it: everyone travels together, the luggage comes along, and one vehicle goes instead of two that lose each other on the way.",
            "When you book, just tell us how many people are travelling and how much luggage there is, and we will send the right vehicle.",
          ],
        },
        {
          type: "list",
          heading: "When a large taxi pays off",
          intro: "Typical occasions:",
          items: [
            "Groups heading to the airport, with a suitcase each",
            "Family celebrations, weddings, and birthdays",
            "Club and team journeys",
            "Company visits with several guests",
            "Nights out in town, there and back together",
            "Trips with a pushchair, sports gear, or bulky luggage",
          ],
        },
        {
          type: "note",
          heading: "What a large taxi costs",
          paragraphs: [
            "Inside the city the normal taxi tariff applies, plus the surcharge set out in the tariff ordinance for large-capacity taxis from the fifth passenger: a flat 5.50 euros, regardless of how long the journey is.",
            "For airport transfers and longer journeys we agree a flat rate for the whole vehicle on request.",
          ],
        },
        {
          type: "faq",
          heading: "Common questions about large taxis",
          items: [
            {
              q: "How many people fit in?",
              a: "Up to eight passengers. How much luggage fits alongside depends on the number of people — tell us both when you book and we will plan accordingly.",
            },
            {
              q: "Do I need to book a large taxi in advance?",
              a: "We recommend it. Large-capacity vehicles are less common than ordinary taxis, and booking ahead makes sure one is reserved for you.",
            },
            {
              q: "Is the surcharge per person?",
              a: "No. The 5.50 euro surcharge is charged once, as a flat fee, whenever a large-capacity taxi is used from the fifth passenger onwards.",
            },
            {
              q: "Can we get child seats?",
              a: "Tell us the ages of the children when you book and we will sort it out with you in advance.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    courier: {
      eyebrow: "Courier runs",
      title: "Courier service in Kaiserslautern",
      lead: "Documents, spare parts, or forgotten paperwork — straight from A to B, with no detour through a sorting depot.",
      blocks: [
        {
          type: "text",
          heading: "A direct run, not a parcel service",
          paragraphs: [
            "A parcel service collects, sorts, and delivers sometime the next day. A courier run sets off immediately and takes the item straight to the recipient — no intermediate stop, and nobody else handling it on the way.",
            "That is worth it whenever something has to arrive today: the signed contract, the missing spare part, the forgotten key.",
          ],
        },
        {
          type: "list",
          heading: "What we typically carry",
          intro: "Anything that fits in a taxi:",
          items: [
            "Contracts, paperwork, and signed documents",
            "Spare parts and small components for a workshop or business",
            "Keys and forgotten belongings",
            "Goods and samples up to boot size",
            "Deliveries between company sites around Kaiserslautern",
            "Urgent runs to business partners in the region",
          ],
        },
        {
          type: "note",
          heading: "How a courier run works",
          paragraphs: [
            "Call us with the collection and delivery addresses and a contact at each end. We will tell you when the car will be there, and for journeys beyond the city limits we quote a fixed price up front.",
            "Please note: we do not carry hazardous goods or anything requiring special authorisation to transport.",
          ],
        },
        {
          type: "faq",
          heading: "Common questions about courier runs",
          items: [
            {
              q: "How quickly can something be collected?",
              a: "Usually within a few minutes inside the city. Call us and we will tell you straight away when a car can be with you.",
            },
            {
              q: "What does a courier run cost?",
              a: "Inside the city, the official taxi tariff. For journeys beyond the city limits, or for regular runs, we will quote a fixed price on request.",
            },
            {
              q: "Do you drive outside business hours?",
              a: "Yes, around the clock — including nights, weekends, and public holidays.",
            },
            {
              q: "Can the recipient confirm receipt?",
              a: "Let us know if you need confirmation of handover, and give us a contact at the destination.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    business: {
      eyebrow: "Business accounts",
      title: "Taxi for businesses in Kaiserslautern",
      lead: "Predictable journeys for staff and visitors, one point of contact, and a routine that works without follow-up questions.",
      blocks: [
        {
          type: "text",
          heading: "Journeys that just run",
          paragraphs: [
            "If someone at your company needs a taxi regularly, it should not become a job for the front desk. We set ourselves up around fixed routines: known addresses, recurring times, and a contact who knows who you are.",
            "That applies equally to the visitor who needs collecting from the station and the colleague who should get home after a late shift.",
          ],
        },
        {
          type: "list",
          heading: "What we handle for companies",
          intro: "Frequently booked:",
          items: [
            "Collecting guests and clients from the station or airport",
            "Staff journeys to appointments and between sites",
            "Shift runs at fixed times, early and late",
            "Courier runs for documents and spare parts",
            "Airport transfers at a flat rate",
            "Rides home after company events and celebrations",
          ],
        },
        {
          type: "note",
          heading: "A standing arrangement, not a one-off",
          paragraphs: [
            "Talk to us about a standing arrangement. We will settle the routine, the point of contact, and the billing with you personally, so it stays predictable on both sides.",
            "A conversation is quickest: call us, or drop us a short email describing what you need.",
          ],
        },
        {
          type: "faq",
          heading: "Common questions from business customers",
          items: [
            {
              q: "Can recurring journeys be scheduled permanently?",
              a: "Yes. Repeat journeys at fixed times can be set up as a standing booking, so nobody has to order again before each one.",
            },
            {
              q: "How does billing work?",
              a: "We agree that with you individually. Get in touch and we will work out which form of billing suits your company.",
            },
            {
              q: "Can you collect our guests from the airport?",
              a: "Yes. With the flight number and landing time we schedule the pick-up around it, at an agreed flat rate on request.",
            },
            {
              q: "Are short-notice journeys possible too?",
              a: "Yes. One call and we send the next free car — including outside normal office hours.",
            },
          ],
        },
      ] as LandingBlock[],
    },
  },

  notFound: {
    title: "This page does not exist.",
    lead: "The link is probably out of date, or there is a typo in it. You can still get a taxi — calling is quickest.",
    linksIntro: "Perhaps you were looking for one of these:",
  },

  footer: {
    tagline:
      "Your taxi company in Kaiserslautern. City rides, airport transfers, and courier runs — around the clock.",
    navTitle: "Pages",
    contactTitle: "Contact",
    servicesTitle: "What we offer",
    legalTitle: "Legal",
    rights: "All rights reserved.",
  },

  seo: {
    home: {
      title: "Order a taxi online in Kaiserslautern — City Taxi 24h",
      description:
        "Order a taxi in Kaiserslautern online — with real-time personal confirmation from a driver or our dispatch, around the clock. City rides, airport transfers, large-capacity taxi. Or call 0171 3553030.",
    },
    services: {
      title: "Services — city rides, airport transfers & more",
      description:
        "Our journeys in Kaiserslautern: city rides, airport transfers to Frankfurt and Hahn, large-capacity taxi, courier runs, and medical journeys. Charged at the official taxi tariff.",
    },
    booking: {
      title: "Order a taxi online in Kaiserslautern",
      description:
        "Order a taxi online in Kaiserslautern: enter pick-up point, destination, and time — confirmation comes in real time from a driver or our dispatch. Around the clock, including right now.",
    },
    contact: {
      title: "Contact — taxi service Kaiserslautern",
      description:
        "City Taxi Kaiserslautern, Pariser Str. 51, 67655 Kaiserslautern. Reachable by phone, WhatsApp, or online — 24 hours a day.",
    },
    medical: {
      title: "Medical transport Kaiserslautern — all health insurers",
      description:
        "Seated medical transport in Kaiserslautern: dialysis, chemotherapy, doctor appointments, and hospital journeys. We drive for all health insurers. Call 0171 3553030.",
    },
    airport: {
      title: "Airport transfer Kaiserslautern — Frankfurt, Hahn & more",
      description:
        "Airport transfers from Kaiserslautern to Frankfurt, Hahn, Saarbrücken, and Luxembourg. Flat rate on request, around the clock. Ask for your fixed price today.",
    },
    tariff: {
      title: "Taxi fares Kaiserslautern — the official tariff",
      description:
        "What does a taxi cost in Kaiserslautern? A 3.50 € base fare, from 2.10 € per kilometre. The complete official taxi tariff with every surcharge, clearly explained.",
    },
    airbase: {
      title: "Taxi Ramstein Air Base — KMC, Landstuhl & Vogelweh",
      description:
        "Taxi between Kaiserslautern and Ramstein Air Base, Landstuhl Regional Medical Center, Vogelweh, and the KMC. Around the clock, flat rate on request.",
    },
    cityrides: {
      title: "Taxi Kaiserslautern city rides — fast, around the clock",
      description:
        "Taxi for short trips in Kaiserslautern: main station, city centre, hospital, university. Charged at the official taxi tariff, day and night. Call 0171 3553030.",
    },
    largetaxi: {
      title: "Large taxi Kaiserslautern — up to 8 passengers",
      description:
        "Large-capacity taxi in Kaiserslautern for up to eight passengers and plenty of luggage. Ideal for groups, airport transfers, and celebrations. Book on 0171 3553030.",
    },
    courier: {
      title: "Courier service Kaiserslautern — direct, not a parcel depot",
      description:
        "Courier runs in Kaiserslautern: documents, spare parts, and urgent deliveries taken straight to the recipient, around the clock. Call 0171 3553030.",
    },
    business: {
      title: "Taxi for businesses in Kaiserslautern",
      description:
        "Taxi for companies in Kaiserslautern: guest collection, staff and shift journeys, airport transfers, and courier runs under a standing arrangement.",
    },
    imprint: {
      title: "Imprint",
      description: "Imprint and provider identification for City Taxi Kaiserslautern.",
    },
    privacy: {
      title: "Privacy policy",
      description:
        "Information on the processing of personal data on the City Taxi Kaiserslautern website.",
    },
  },
};

export default en;
