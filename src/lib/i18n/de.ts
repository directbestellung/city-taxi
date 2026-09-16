import { business } from "@/lib/business";
import type { LandingBlock, ServiceCopy } from "./types";

const de = {
  htmlLang: "de",
  localeName: "Deutsch",
  otherLocaleName: "English",
  switchLanguage: "Sprache wechseln",

  nav: {
    home: "Startseite",
    services: "Leistungen",
    tariff: "Preise",
    cityrides: "Stadtfahrten",
    app: "Taxi App",
    largetaxi: "Großraumtaxi",
    courier: "Kurierfahrten",
    business: "Geschäftskunden",
    booking: "Taxi bestellen",
    contact: "Kontakt",
    medical: "Krankenfahrten",
    airport: "Flughafentransfer",
    airbase: "Taxi zur Air Base",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },

  common: {
    callNow: "Jetzt anrufen",
    bookOnline: "Online bestellen",
    whatsapp: "WhatsApp",
    whatsappAria: "Per WhatsApp ein Taxi bestellen",
    whatsappMessage:
      "Hallo, ich möchte gerne ein Taxi bestellen. Abholort: ",
    phoneLabel: "Telefon",
    addressLabel: "Adresse",
    hoursLabel: "Erreichbarkeit",
    emailLabel: "E-Mail",
    hours: "24 Stunden täglich, 7 Tage die Woche",
    hoursShort: "Rund um die Uhr",
    directions: "Route planen",
    relatedTitle: "Das könnte Sie auch interessieren",
    readMore: "Mehr erfahren",
    menu: "Menü",
    skipToContent: "Zum Inhalt springen",
    backHome: "Zurück zur Startseite",
    ratingLine: `${business.rating.value} Sterne bei ${business.rating.count} Google-Bewertungen`,
  },

  home: {
    badge: "Taxi in Kaiserslautern — jetzt bestellen",
    title: "Ihr Taxi in",
    titleHighlight: "Kaiserslautern.",
    lead: "City Taxi Kaiserslautern bringt Sie zuverlässig ans Ziel — ob Flughafentransfer, Arzttermin oder Heimweg am Abend. Bestellen Sie telefonisch, per WhatsApp oder direkt online.",
    trust: [
      "Feste Preise nach amtlichem Taxitarif",
      "Ortskundige Fahrerinnen und Fahrer",
      "Rund um die Uhr erreichbar",
    ],
    servicesTitle: "Womit wir Sie fahren",
    servicesLead:
      "Von der kurzen Stadtfahrt bis zum Flughafentransfer — eine Nummer für alles.",
    servicesCta: "Alle Leistungen ansehen",
    stepsEyebrow: "So einfach geht es",
    stepsTitle: "In drei Schritten zum Taxi",
    steps: [
      {
        title: "Fahrt melden",
        body: "Rufen Sie an, schreiben Sie uns per WhatsApp oder nutzen Sie das Online-Formular.",
      },
      {
        title: "Bestätigung erhalten",
        body: "Wir bestätigen Abholort, Uhrzeit und das passende Fahrzeug.",
      },
      {
        title: "Einsteigen",
        body: "Ihr Fahrer holt Sie pünktlich ab. Bezahlt wird im Wagen.",
      },
    ],
    areaEyebrow: "Einsatzgebiet",
    areaTitle: "Kaiserslautern und Umgebung",
    areaLead:
      "Wir fahren im gesamten Stadtgebiet und in den umliegenden Orten. Längere Strecken auf Anfrage zum Festpreis.",
    areas: [
      "Innenstadt",
      "Kaiserslautern-West",
      "Betzenberg",
      "Vogelweh",
      "Einsiedlerhof",
      "Erfenbach",
      "Hohenecken",
      "Siegelbach",
      "Morlautern",
      "Dansenberg",
      "RPTU Universität",
      "Westpfalz-Klinikum",
      "Landstuhl",
      "Ramstein-Miesenbach",
    ],
    areaNote:
      "Ihr Ort ist nicht dabei? Rufen Sie uns an — wir fahren auch darüber hinaus.",
    liveLabel: "Live",
    liveHeadline: "Taxi bestellen mit persönlicher Echtzeit-Bestätigung",
    liveNote:
      "Ihre Bestellung geht direkt an Fahrer und Zentrale — kein Kontaktformular, das im Postfach liegen bleibt.",
    heroOr: "Oder direkt:",
    faresTitle: "Was die Fahrt kostet",
    faresLead:
      "In Kaiserslautern gilt für alle Taxis derselbe amtliche Tarif. Hier ist er, vollständig.",
    faresCta: "Preise im Detail",
    contactTitle: "So erreichen Sie uns",
    contactLead:
      "Für eine sofortige Fahrt ist der Anruf am schnellsten. Für alles andere schreiben Sie uns gerne per WhatsApp.",
    contactCta: "Zur Kontaktseite",
    bookingTitle: "Direkt hier buchen",
    bookingLead:
      "Abholort, Ziel und Wunschzeit eingeben — Sie müssen dafür die Seite nicht verlassen.",
    bookingCta: "Buchungsseite öffnen",
    photoCaption: "Kaiserslautern Hauptbahnhof — einer unserer häufigsten Abholorte.",
    ctaTitle: "Brauchen Sie jetzt ein Taxi?",
    ctaLead:
      "Am schnellsten geht es telefonisch. Für später buchen Sie bequem online.",
  },

  services: {
    eyebrow: "Leistungen",
    title: "Unsere Fahrten",
    lead: "Ein Anruf genügt. Sagen Sie uns, wohin es geht, und wir schicken das passende Fahrzeug.",
    items: [
      {
        title: "Stadtfahrten",
        body: "Kurze Wege in Kaiserslautern: zum Termin, zum Bahnhof, zum Einkaufen oder abends sicher nach Hause.",
        icon: "pin",
        link: "cityrides",
      },
      {
        title: "Flughafentransfer",
        body: "Frankfurt, Hahn, Saarbrücken oder Luxemburg. Transfer auf Anfrage zum Pauschalpreis, pünktlich zum Abflug.",
        icon: "plane",
        link: "airport",
      },
      {
        title: "Großraumtaxi",
        body: "Mehr Platz für Gepäck oder für mehrere Personen. Bitte bei der Bestellung kurz angeben.",
        icon: "users",
        link: "largetaxi",
      },
      {
        title: "Kurierfahrten",
        body: "Dokumente, Ersatzteile oder kleine Sendungen schnell und direkt zugestellt.",
        icon: "briefcase",
        link: "courier",
      },
      {
        title: "Geschäftskunden",
        body: "Regelmäßige Fahrten für Mitarbeitende und Gäste. Sprechen Sie uns auf feste Absprachen an.",
        icon: "clock",
        link: "business",
      },
      {
        title: "Krankenfahrten",
        body: "Sitzende Fahrten zu Arzt, Dialyse, Therapie oder Klinik — für alle Krankenkassen.",
        icon: "accessible",
        link: "medical",
      },
    ] as ServiceCopy[],
    tariffTitle: "Was kostet die Fahrt?",
    tariffBody: [
      "Taxifahrten in Kaiserslautern werden nach dem amtlichen Taxitarif abgerechnet. Der Tarif wird von der Stadt festgelegt und gilt für alle Taxiunternehmen gleichermaßen — der Preis hängt also von Strecke und Zeit ab, nicht vom Anbieter.",
      "Für Flughafentransfers und längere Strecken nennen wir Ihnen auf Anfrage gerne vorab einen Festpreis. Rufen Sie einfach an.",
    ],
  },

  booking: {
    eyebrow: "Bestellung",
    title: "Taxi online bestellen",
    lead: "Abholort, Ziel und Wunschzeit eingeben — fertig. Die Bestellung läuft über das Bestellsystem von taxi.de und wird persönlich bestätigt.",
    widgetNote:
      "Hinweis: Das Formular wird von taxi.de bereitgestellt. Beim Laden werden Daten an taxi.de übertragen.",
    disclaimer: "AGB von taxi.de",
    fallbackTitle: "Lieber persönlich?",
    fallbackBody:
      "Für sofortige Fahrten ist der Anruf am schnellsten. Wir sind rund um die Uhr erreichbar.",
  },

    app: {
      eyebrow: "Taxi.de App",
      title: "Mit der App bestellen",
      lead: "Wenn Sie öfter fahren, geht es über die kostenlose Taxi.de App am schnellsten — mit uns als hinterlegtem Unternehmen.",
      pinLabel: "Unsere PIN",
      steps: [
        "Kostenlose Taxi.de App laden",
        "City Taxi Kaiserslautern als bevorzugtes Unternehmen hinterlegen — mit der PIN oben",
        "Mit einem Klick bestellen",
        "Anfahrt live verfolgen",
        "Bequem in der App bezahlen",
      ],
      faqHeading: "Häufige Fragen zur App",
      faq: [
        {
          q: "Kostet die App etwas?",
          a: "Nein. Die Taxi.de App ist im App Store und bei Google Play kostenlos erhältlich. Für die Fahrt selbst gilt der normale Taxitarif.",
        },
        {
          q: "Wozu brauche ich die PIN?",
          a: "Mit der PIN 24075 hinterlegen Sie City Taxi Kaiserslautern als bevorzugtes Unternehmen. Ihre Bestellungen kommen dann direkt bei uns an und nicht bei einem anderen Betrieb.",
        },
        {
          q: "Muss ich die App nutzen?",
          a: "Nein. Sie können genauso online über das Formular bestellen, uns per WhatsApp schreiben oder einfach anrufen. Die App lohnt sich vor allem, wenn Sie regelmäßig fahren.",
        },
        {
          q: "Kann ich in der App bezahlen?",
          a: "Ja, die App bietet eine Bezahlfunktion. Sie können aber weiterhin auch im Fahrzeug bezahlen.",
        },
      ],
      appStore: "App Store",
      playStore: "Google Play",
      note: "Die App kommt von taxi.de. Beim Download und bei der Nutzung gelten deren Bedingungen und Datenschutzhinweise.",
    },
  contact: {
    eyebrow: "Kontakt",
    title: "So erreichen Sie uns",
    lead: "Für eine sofortige Fahrt rufen Sie am besten direkt an. Für alles andere schreiben Sie uns gerne per WhatsApp oder E-Mail.",
    callTitle: "Telefonisch bestellen",
    callBody: "Der schnellste Weg zu einem Taxi — Tag und Nacht.",
    whatsappTitle: "Per WhatsApp",
    whatsappBody: "Schreiben Sie uns Abholort und Uhrzeit, wir bestätigen kurz.",
    onlineTitle: "Online buchen",
    onlineBody: "Planen Sie eine Fahrt für später bequem über das Formular.",
    addressTitle: "Anschrift",
  },

  imprint: {
    eyebrow: "Rechtliches",
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 DDG",
        body: [
          business.legalName,
          "[Inhaberin / Inhaber: Vor- und Nachname]",
          `${business.street}`,
          `${business.postalCode} ${business.city}`,
          "Deutschland",
        ],
      },
      {
        heading: "Kontakt",
        body: [
          `Telefon: ${business.phoneDisplay}`,
          `E-Mail: ${business.email}`,
        ],
      },
      {
        heading: "Umsatzsteuer",
        body: [
          "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
          "[USt-IdNr. oder Hinweis auf Kleinunternehmerregelung nach § 19 UStG]",
        ],
      },
      {
        heading: "Berufsrechtliche Angaben",
        body: [
          "Berufsbezeichnung: Taxiunternehmen (verliehen in der Bundesrepublik Deutschland)",
          "Zuständige Aufsichts- und Genehmigungsbehörde: [zuständige Behörde, z. B. Stadtverwaltung Kaiserslautern, Anschrift]",
          "Es gelten das Personenbeförderungsgesetz (PBefG) und die dazu ergangenen Verordnungen, einsehbar unter www.gesetze-im-internet.de.",
        ],
      },
      {
        heading: "Verbraucherstreitbeilegung",
        body: [
          "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        heading: "Haftung für Inhalte und Links",
        body: [
          "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
          "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
        ],
      },
    ],
    creditsHeading: "Bildnachweise",
    creditsIntro: "Die auf dieser Website verwendeten Fotos stehen unter einer freien Lizenz. Urheber und Lizenz:",
  },

  privacy: {
    eyebrow: "Rechtliches",
    title: "Datenschutzerklärung",
    sections: [
      {
        heading: "Verantwortlicher",
        body: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
          business.legalName,
          "[Inhaberin / Inhaber: Vor- und Nachname]",
          `${business.street}, ${business.postalCode} ${business.city}`,
          `Telefon: ${business.phoneDisplay}`,
          `E-Mail: ${business.email}`,
        ],
      },
      {
        heading: "Zugriffsdaten und Hosting",
        body: [
          "Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen in Server-Logfiles gespeichert, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssystemangaben.",
          "Diese Daten dienen dem sicheren und stabilen Betrieb der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer fehlerfreien Darstellung).",
        ],
      },
      {
        heading: "Keine Cookies, keine Analyse",
        body: [
          "Diese Website setzt keine Cookies für Analyse, Tracking oder Werbung ein und bindet keine Analysedienste ein. Ihre Spracheinstellung wird ausschließlich anhand der Spracheinstellung Ihres Browsers erkannt und nicht gespeichert.",
        ],
      },
      {
        heading: "Online-Buchungsformular (taxi.de)",
        body: [
          "Auf der Seite zur Online-Buchung binden wir ein Formular der taxi.de GmbH ein. Beim Aufruf dieser Seite wird eine Verbindung zu den Servern von taxi.de hergestellt, wobei Ihre IP-Adresse an taxi.de übertragen wird. Die im Formular eingegebenen Daten (unter anderem Abholort, Ziel, Zeit und Kontaktdaten) werden an taxi.de übermittelt und zur Vermittlung Ihrer Fahrt an uns weitergegeben.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen). Einzelheiten entnehmen Sie bitte den Datenschutzhinweisen von taxi.de.",
        ],
      },
      {
        heading: "Kontaktaufnahme per Telefon, E-Mail und WhatsApp",
        body: [
          "Wenn Sie uns anrufen, schreiben oder per WhatsApp kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten, um Ihre Anfrage zu bearbeiten und Ihre Fahrt durchzuführen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
          "Bitte beachten Sie: WhatsApp ist ein Dienst der WhatsApp Ireland Limited. Bei der Nutzung von WhatsApp werden Verbindungs- und Nutzungsdaten durch den Anbieter verarbeitet; eine Übermittlung in Drittländer ist dabei nicht ausgeschlossen. Wenn Sie das vermeiden möchten, nutzen Sie bitte Telefon oder E-Mail.",
        ],
      },
      {
        heading: "Speicherdauer",
        body: [
          "Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorsehen.",
        ],
      },
      {
        heading: "Ihre Rechte",
        body: [
          "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht (Art. 21 DSGVO).",
          "Außerdem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.",
        ],
      },
    ],
  },

  tariff: {
    eyebrow: "Preise",
    title: "Taxipreise in Kaiserslautern",
    lead: "Innerhalb der Stadt fahren alle Taxis zum amtlichen Tarif. Hier steht, was das konkret bedeutet — vollständig und ohne Kleingedrucktes.",
    tableHeading: "Amtlicher Taxitarif der Stadt Kaiserslautern",
    validFromLabel: "Gültig seit",
    sourceLabel: "Taxentarifordnung der Stadt Kaiserslautern",
    columns: { item: "Position", price: "Betrag" },
    rows: {
      basePrice: "Grundpreis (Mindestfahrpreis)",
      firstThree: "Für die ersten 3 Kilometer, je Kilometer",
      dayRate: "Jeder weitere Kilometer, werktags 06:00 bis 22:00 Uhr",
      nightRate: "Jeder weitere Kilometer, werktags 22:00 bis 06:00 Uhr sowie sonn- und feiertags",
      waiting: "Zeitpreis je Stunde (Wartezeit und verkehrsbedingter Stillstand)",
      meterStep: "Schaltsprung des Fahrpreisanzeigers",
    },
    surchargeHeading: "Zuschläge",
    surcharges: {
      einsiedlerhof: "Anfahrt zu Beförderungen innerhalb des Stadtteils Einsiedlerhof",
      largeTaxi: "Großraumtaxi ab dem fünften Fahrgast, pauschal",
      cancellation: "Stornierung, während die Taxe bereits auf der Anfahrt ist",
    },
    footnote:
      "Die Anfahrt innerhalb des Pflichtfahrgebiets ist frei. Die Pflichtwartezeit auf Wunsch des Fahrgastes beträgt 10 Minuten. Maßgeblich ist immer die jeweils gültige Taxentarifordnung der Stadt Kaiserslautern.",
    blocks: [
      {
        type: "text",
        heading: "Warum kostet das Taxi überall gleich?",
        paragraphs: [
          "Für Fahrten im Pflichtfahrgebiet — also in der Kernstadt innerhalb der Ortsschilder einschließlich Einsiedlerhof — legt die Stadt Kaiserslautern den Tarif fest. Er gilt für jedes konzessionierte Taxiunternehmen gleichermaßen. Ein Anbieter kann den Preis weder erhöhen noch unterbieten.",
          "Unterscheiden können wir uns deshalb nur dort, wo es wirklich zählt: wie schnell ein Wagen da ist, wie zuverlässig der Termin eingehalten wird und wie fair wir Sie bei Strecken außerhalb der Stadt beraten.",
        ],
      },
      {
        type: "note",
        heading: "Fahrten außerhalb des Pflichtfahrgebiets",
        paragraphs: [
          "Für den Streckenanteil außerhalb der Stadt kann der Preis frei vereinbart werden. Genau deshalb bieten wir für Flughafentransfers und längere Strecken einen Pauschalpreis an, den Sie vor der Fahrt kennen.",
          "Kommt keine Vereinbarung zustande, gelten automatisch die Entgelte des Pflichtfahrgebiets — Sie zahlen also nie mehr, als der amtliche Tarif vorsieht.",
        ],
      },
      {
        type: "faq",
        heading: "Häufige Fragen zu den Preisen",
        items: [
          {
            q: "Sind Sie günstiger als andere Taxis in Kaiserslautern?",
            a: "Innerhalb der Stadt nicht, und das ist so gewollt: Der amtliche Tarif gilt für alle Kaiserslauterer Taxiunternehmen gleich. Unterschiede gibt es bei der Wartezeit, beim Service und bei Fahrten außerhalb des Pflichtfahrgebiets, wo wir Ihnen einen Festpreis nennen.",
          },
          {
            q: "Was kostet eine kurze Fahrt in der Stadt?",
            a: "Eine Fahrt von rund 3 Kilometern kostet 10,40 Euro: 3,50 Euro Grundpreis plus dreimal 2,30 Euro je Kilometer. Dazu kommt nur, was an verkehrsbedingtem Stillstand oder Wartezeit tatsächlich anfällt.",
          },
          {
            q: "Wird es nachts teurer?",
            a: "Der Grundpreis und die ersten drei Kilometer bleiben gleich. Ab dem vierten Kilometer gelten nachts sowie an Sonn- und Feiertagen 2,20 Euro statt 2,10 Euro je Kilometer.",
          },
          {
            q: "Gibt es Zuschläge für Gepäck oder Haustiere?",
            a: "Nein. Die Tarifordnung der Stadt Kaiserslautern sieht dafür keine Zuschläge vor. Zuschläge gibt es nur für Großraumtaxen ab dem fünften Fahrgast und für Anfahrten innerhalb des Stadtteils Einsiedlerhof.",
          },
          {
            q: "Kann ich vorab einen Festpreis bekommen?",
            a: "Für Fahrten über die Stadtgrenze hinaus, etwa zum Flughafen, ja. Rufen Sie uns mit Start, Ziel und Zeit an, dann nennen wir Ihnen den Pauschalpreis vor der Fahrt.",
          },
          {
            q: "Was kostet Wartezeit?",
            a: "Der Zeitpreis beträgt 35 Euro je Stunde und wird vom Fahrpreisanzeiger berechnet. Die Pflichtwartezeit auf Ihren Wunsch beträgt 10 Minuten.",
          },
        ],
      },
    ] as LandingBlock[],
  },

  landing: {
    medical: {
      eyebrow: "Krankenfahrten",
      title: "Krankenfahrten in Kaiserslautern",
      lead: "Sitzende Krankenfahrten zu Arzt, Dialyse, Therapie und Klinik — wir fahren für alle Krankenkassen.",
      blocks: [
        {
          type: "text",
          heading: "Zuverlässig zum Behandlungstermin",
          paragraphs: [
            "Wenn Sie regelmäßig zur Behandlung müssen, zählt vor allem eines: dass das Taxi da ist, wenn es da sein soll. Wir fahren Krankenfahrten im gesamten Stadtgebiet Kaiserslautern und in die umliegenden Orte — zu festen Terminen, auch früh morgens und am Wochenende.",
            "Feste Termine wie Dialyse oder eine Bestrahlungsserie planen wir dauerhaft ein. Sie müssen dann nicht vor jeder Fahrt neu anrufen.",
          ],
        },
        {
          type: "list",
          heading: "Wofür wir fahren",
          intro: "Typische Fahrten, die wir regelmäßig übernehmen:",
          items: [
            "Dialysefahrten zu festen Terminen",
            "Chemotherapie und Strahlentherapie",
            "Arzt- und Facharzttermine",
            "Aufnahme und Entlassung im Krankenhaus",
            "Fahrten zur Reha und zur Nachsorge",
            "Physiotherapie, Ergotherapie und Kontrolluntersuchungen",
          ],
        },
        {
          type: "note",
          heading: "Was wir nicht anbieten können",
          paragraphs: [
            "Wir befördern ausschließlich sitzende Fahrgäste. Ein Transport im Rollstuhl oder eine liegende Beförderung ist mit unseren Fahrzeugen nicht möglich.",
            "Wenn Sie auf einen Rollstuhl- oder Liegendtransport angewiesen sind, wenden Sie sich bitte an einen Krankentransportdienst. Rufen Sie uns im Zweifel kurz an — wir sagen Ihnen ehrlich, ob wir die richtige Wahl für Ihre Fahrt sind.",
          ],
        },
        {
          type: "text",
          heading: "Kostenübernahme durch die Krankenkasse",
          paragraphs: [
            "Für eine Krankenfahrt auf Kosten der Krankenkasse brauchen Sie eine ärztliche Verordnung einer Krankenbeförderung (Muster 4). Fahrten zu einer ambulanten Behandlung müssen von der Krankenkasse vorab genehmigt werden; bei Dialyse, Chemotherapie und Strahlentherapie wird die Genehmigung in der Regel erteilt.",
            "Gesetzlich Versicherte ab 18 Jahren zahlen eine Zuzahlung von 10 Prozent der Fahrtkosten, mindestens 5 und höchstens 10 Euro je Fahrt. Wenn Sie von der Zuzahlung befreit sind, legen Sie bitte Ihren Befreiungsausweis vor.",
            "Über die Kostenübernahme entscheidet immer Ihre Krankenkasse. Fragen Sie im Zweifel dort nach, bevor Sie die Fahrt buchen. Selbstverständlich fahren wir Sie auch ohne Verordnung — dann als normale Taxifahrt nach dem amtlichen Taxitarif.",
          ],
        },
        {
          type: "faq",
          heading: "Häufige Fragen zu Krankenfahrten",
          items: [
            {
              q: "Für welche Krankenkassen fahren Sie?",
              a: "Wir fahren für alle Krankenkassen. Bringen Sie einfach Ihre Verordnung zur Fahrt mit.",
            },
            {
              q: "Brauche ich eine Verordnung vom Arzt?",
              a: "Für die Abrechnung über die Krankenkasse ja: Ihre Ärztin oder Ihr Arzt stellt eine Verordnung einer Krankenbeförderung (Muster 4) aus. Ohne Verordnung fahren wir Sie trotzdem, dann jedoch als normale Taxifahrt nach dem amtlichen Taxitarif.",
            },
            {
              q: "Wie hoch ist die Zuzahlung?",
              a: "Gesetzlich Versicherte ab 18 Jahren zahlen 10 Prozent der Fahrtkosten, mindestens 5 und höchstens 10 Euro je Fahrt. Mit einem Befreiungsausweis entfällt die Zuzahlung.",
            },
            {
              q: "Können Sie mich im Rollstuhl mitnehmen?",
              a: "Nein. Wir befördern ausschließlich sitzende Fahrgäste und können weder Rollstuhl- noch Liegendtransporte durchführen. Für solche Fahrten ist ein Krankentransportdienst der richtige Ansprechpartner.",
            },
            {
              q: "Übernehmen Sie regelmäßige Dialysefahrten?",
              a: "Ja. Dialysefahrten fahren wir regelmäßig zu festen Terminen. Sprechen Sie uns an, dann planen wir Ihre Termine dauerhaft ein.",
            },
            {
              q: "Wie weit im Voraus muss ich eine Krankenfahrt bestellen?",
              a: "Melden Sie den Termin am besten einen Tag vorher an, damit wir ein Fahrzeug fest einplanen können. Kurzfristige Fahrten versuchen wir möglich zu machen — rufen Sie einfach an.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    airport: {
      eyebrow: "Flughafentransfer",
      title: "Flughafentransfer ab Kaiserslautern",
      lead: "Nach Frankfurt, Hahn, Saarbrücken oder Luxemburg — direkt, pünktlich und auf Anfrage zum Pauschalpreis.",
      blocks: [
        {
          type: "text",
          heading: "Direkt von der Haustür zum Terminal",
          paragraphs: [
            "Mit Koffern umsteigen macht keinen Spaß, erst recht nicht um fünf Uhr morgens. Wir holen Sie zu Hause ab und bringen Sie direkt zum Terminal — ohne Umsteigen, ohne Parkplatzsuche und ohne auf den ersten Zug warten zu müssen.",
            "Für die Rückfahrt gilt dasselbe: Geben Sie uns Flugnummer und Landezeit, dann planen wir die Abholung passend ein.",
          ],
        },
        {
          type: "table",
          heading: "Flughäfen und Fahrzeiten",
          intro:
            "Ungefähre Entfernungen ab Kaiserslautern. Die tatsächliche Fahrzeit hängt von Verkehr und Tageszeit ab.",
          columns: ["Ziel", "Entfernung", "Fahrzeit ca."],
          rows: [
            ["Frankfurt am Main (FRA)", "ca. 120 km", "ca. 1:15 h"],
            ["Frankfurt-Hahn (HHN)", "ca. 100 km", "ca. 1:15 h"],
            ["Saarbrücken (SCN)", "ca. 75 km", "ca. 0:50 h"],
            ["Luxemburg (LUX)", "ca. 150 km", "ca. 1:40 h"],
            ["Stuttgart (STR)", "ca. 200 km", "ca. 2:00 h"],
            ["Ramstein Air Base", "ca. 20 km", "ca. 0:25 h"],
          ],
        },
        {
          type: "note",
          heading: "Pauschalpreis statt Taxameter",
          paragraphs: [
            "Für Flughafentransfers vereinbaren wir auf Anfrage einen Pauschalpreis. Sie wissen dann schon vor der Fahrt, was die Strecke kostet — unabhängig von Stau oder Tageszeit.",
            "Rufen Sie uns an oder schreiben Sie uns per WhatsApp mit Abholadresse, Flughafen und Abflugzeit. Sie bekommen den Festpreis vorab genannt.",
          ],
        },
        {
          type: "list",
          heading: "Damit der Transfer reibungslos läuft",
          intro: "Sagen Sie uns bei der Buchung am besten gleich:",
          items: [
            "Flugnummer und Abflugzeit, damit wir die Abholzeit passend planen",
            "Anzahl der Personen und Koffer — bei viel Gepäck schicken wir ein Großraumfahrzeug",
            "Ob Sie auch die Rückfahrt brauchen; gemeinsam gebucht ist es meist günstiger",
            "Terminal oder Fluggesellschaft, damit wir Sie direkt am richtigen Eingang absetzen",
          ],
        },
        {
          type: "faq",
          heading: "Häufige Fragen zum Flughafentransfer",
          items: [
            {
              q: "Was kostet der Transfer zum Flughafen Frankfurt?",
              a: "Für Flughafentransfers nennen wir Ihnen auf Anfrage einen Pauschalpreis. Rufen Sie uns an oder schreiben Sie uns per WhatsApp mit Abholadresse und Abflugzeit — den Festpreis erhalten Sie vor der Fahrt.",
            },
            {
              q: "Wann sollte ich abgeholt werden?",
              a: "Für Flüge ab Frankfurt sollten Sie etwa zwei Stunden vor Abflug am Terminal sein, bei Fernflügen eher drei. Bei rund 1:15 Stunden Fahrzeit bedeutet das eine Abholung etwa dreieinhalb bis vier Stunden vor Abflug. Wir beraten Sie gerne bei der Buchung.",
            },
            {
              q: "Holen Sie mich auch vom Flughafen ab?",
              a: "Ja. Geben Sie uns Flugnummer und geplante Landezeit, dann planen wir die Abholung entsprechend ein.",
            },
            {
              q: "Fahren Sie auch nachts und am Wochenende?",
              a: "Ja, rund um die Uhr an sieben Tagen die Woche. Frühe Abflüge sind bei uns der Normalfall.",
            },
            {
              q: "Wie viel Gepäck passt ins Fahrzeug?",
              a: "Sagen Sie uns einfach, wie viele Personen und Koffer mitfahren. Bei größerem Gepäck oder Gruppen bis acht Personen schicken wir ein Großraumfahrzeug.",
            },
          ],
        },
      ] as LandingBlock[],
    },
    airbase: {
      eyebrow: "Air Base",
      title: "Taxi zur Ramstein Air Base und in die KMC",
      lead: "Fahrten zwischen Kaiserslautern, Ramstein Air Base, Vogelweh, Landstuhl und den übrigen Standorten der Kaiserslautern Military Community — rund um die Uhr. Auf Wunsch mit einem Fahrer mit Basiszugang, direkt auf das Gelände.",
      blocks: [
        {
          type: "text",
          heading: "Für die Kaiserslautern Military Community",
          paragraphs: [
            "Rund um Kaiserslautern liegt die größte amerikanische Gemeinde außerhalb der USA. Entsprechend häufig fahren wir zwischen der Innenstadt, den Wohngebieten und den Standorten der KMC — zum Schichtbeginn, zum Arzttermin, zum Passenger Terminal und zurück.",
            "Unsere Website und die Buchung gibt es auch auf Englisch. Wenn Sie lieber auf Englisch schreiben, nutzen Sie einfach WhatsApp.",
          ],
        },
        {
          type: "table",
          heading: "Standorte und Fahrzeiten",
          intro:
            "Ungefähre Entfernungen ab Kaiserslautern Innenstadt. Die tatsächliche Fahrzeit hängt von Verkehr und Kontrollen am Gate ab.",
          columns: ["Ziel", "Entfernung", "Fahrzeit ca."],
          rows: [
            ["Ramstein Air Base", "ca. 20 km", "ca. 0:25 h"],
            ["Landstuhl Regional Medical Center", "ca. 20 km", "ca. 0:25 h"],
            ["Vogelweh", "ca. 5 km", "ca. 0:10 h"],
            ["Rhine Ordnance Barracks", "ca. 6 km", "ca. 0:12 h"],
            ["Pulaski Barracks", "ca. 6 km", "ca. 0:12 h"],
            ["Daenner Kaserne", "ca. 5 km", "ca. 0:10 h"],
            ["Kleber Kaserne", "ca. 4 km", "ca. 0:10 h"],
            ["Sembach Kaserne", "ca. 15 km", "ca. 0:20 h"],
          ],
        },
        {
          type: "note",
          heading: "Fahrt auf das Gelände? Bitte vorher Bescheid geben",
          paragraphs: [
            "Ja, wir fahren auch auf die Base — bis zur Unterkunft, zum Gebäude oder zum Terminal. Dafür setzen wir gezielt einen Fahrer mit gültigem Basiszugang (Access Card) auf Ihre Fahrt an. Das Gleiche gilt für Abholungen von der Base.",
            "Wichtig: Sagen Sie uns das bitte schon bei der Bestellung. Wenn wir vorher nichts davon wissen, ist unter Umständen kein Fahrer mit Zugangsausweis verfügbar — dann können wir Sie nur bis zum Gate bringen. Ein Satz bei der Buchung erspart Ihnen den Fußweg.",
          ],
        },
        {
          type: "list",
          heading: "Wobei wir häufig helfen",
          intro: "Typische Fahrten in und um die KMC:",
          items: [
            "Fahrten auf das Gelände mit Fahrer mit Basiszugang — bitte bei der Bestellung angeben",
            "Fahrten zum Schichtbeginn und nach Feierabend, auch sehr früh und sehr spät",
            "Termine im Landstuhl Regional Medical Center und in Kaiserslauterer Praxen",
            "Frühe Fahrten zum Passenger Terminal für Rotator-Flüge",
            "Transfers zwischen Hotel und Wohnung während eines PCS-Umzugs",
            "Einkaufs- und Restaurantfahrten in die Innenstadt, abends sicher zurück",
            "Anschlussfahrten zum Flughafen Frankfurt oder Hahn zum Pauschalpreis",
          ],
        },
        {
          type: "faq",
          heading: "Häufige Fragen",
          items: [
            {
              q: "Fahren Sie auch auf das Gelände der Air Base?",
              a: "Ja. Wir haben Fahrer mit Basiszugang und können Sie direkt auf dem Gelände absetzen oder dort abholen. Bitte sagen Sie uns das schon bei der Bestellung, denn nur dann können wir gezielt einen Fahrer mit Zugangsausweis einplanen. Ohne Vorankündigung ist möglicherweise kein solcher Fahrer verfügbar, und wir können Sie nur bis zum Gate bringen.",
            },
            {
              q: "Können Sie mich von der Base abholen?",
              a: "Ja, mit demselben Hinweis: Geben Sie bei der Bestellung an, dass die Abholung auf dem Gelände stattfindet, und nennen Sie Gebäude oder Treffpunkt. Dann schicken wir einen Fahrer, der hineinfahren darf.",
            },
            {
              q: "Fahren Sie auch sehr früh zum Passenger Terminal?",
              a: "Ja. Wir fahren rund um die Uhr, auch nachts und an Feiertagen. Sagen Sie uns die gewünschte Ankunftszeit, dann planen wir die Abholung mit Puffer.",
            },
            {
              q: "Was kostet die Fahrt nach Ramstein?",
              a: "Ramstein liegt außerhalb des Pflichtfahrgebiets von Kaiserslautern. Für diesen Streckenanteil vereinbaren wir auf Anfrage einen Pauschalpreis, den Sie vor der Fahrt kennen.",
            },
            {
              q: "Können mehrere Personen mit Gepäck mitfahren?",
              a: "Ja. Sagen Sie uns bei der Bestellung, wie viele Personen und Koffer mitfahren — bei Bedarf schicken wir ein Großraumfahrzeug für bis zu acht Personen.",
            },
            {
              q: "Kann ich auf Englisch bestellen?",
              a: "Ja. Diese Website gibt es auf Englisch, und Sie können uns Ihre Bestellung jederzeit auf Englisch per WhatsApp schreiben.",
            },
          ],
        },
      ] as LandingBlock[],
    },
    cityrides: {
      eyebrow: "Stadtfahrten",
      title: "Taxi in Kaiserslautern für kurze Wege",
      lead: "Zum Termin, zum Bahnhof, zum Einkaufen oder abends sicher nach Hause — die Fahrt, die einfach klappen muss.",
      blocks: [
        {
          type: "text",
          heading: "Die Fahrt, über die man nicht nachdenken will",
          paragraphs: [
            "Die meisten Fahrten in Kaiserslautern sind kurz: ein paar Kilometer in die Innenstadt, zum Arzt, zur Arbeit oder zurück nach Hause. Genau deshalb zählt bei ihnen nur eines — dass der Wagen da ist, wenn Sie ihn brauchen, und Sie pünktlich ankommen.",
            "Wir fahren im gesamten Stadtgebiet, auch in die Stadtteile außerhalb des Pflichtfahrgebiets wie Hohenecken, Siegelbach, Erfenbach, Morlautern oder Dansenberg. Spontan per Anruf oder vorbestellt für einen festen Termin.",
          ],
        },
        {
          type: "list",
          heading: "Wohin wir in der Stadt oft fahren",
          intro: "Ziele, die bei uns täglich auf dem Zettel stehen:",
          items: [
            "Hauptbahnhof und Busbahnhof, mit Gepäck bis zum Bahnsteig",
            "Innenstadt, Fackelrondell und Stiftsplatz",
            "Westpfalz-Klinikum sowie Praxen und Facharztzentren",
            "RPTU Universität und die Hochschulstandorte",
            "Fritz-Walter-Stadion an Spieltagen",
            "Ämter, Gerichte und das Rathaus",
          ],
        },
        {
          type: "note",
          heading: "Der Preis steht vorher fest — durch die Stadt",
          paragraphs: [
            "Innerhalb des Pflichtfahrgebiets rechnen wir nach dem amtlichen Taxitarif der Stadt Kaiserslautern ab. Der Preis hängt also nur von Strecke und Zeit ab, nicht davon, wen Sie anrufen.",
            "Für Fahrten über die Stadtgrenze hinaus nennen wir Ihnen auf Wunsch vorab einen Festpreis.",
          ],
        },
        {
          type: "faq",
          heading: "Häufige Fragen zu Stadtfahrten",
          items: [
            {
              q: "Wie schnell ist ein Taxi bei mir?",
              a: "Im Stadtgebiet meist innerhalb weniger Minuten, abhängig von Tageszeit und Verkehr. Für einen festen Termin bestellen Sie am besten vor, dann ist der Wagen sicher eingeplant.",
            },
            {
              q: "Kann ich ein Taxi für später vorbestellen?",
              a: "Ja, telefonisch, per WhatsApp oder über das Online-Formular. Für frühe Termine und Arztbesuche empfehlen wir die Vorbestellung am Vortag.",
            },
            {
              q: "Fahren Sie auch nachts und sonntags?",
              a: "Ja, rund um die Uhr an sieben Tagen die Woche. Ab dem vierten Kilometer gilt nachts sowie sonn- und feiertags ein leicht höherer Kilometerpreis.",
            },
            {
              q: "Nehmen Sie auch Gepäck oder Einkäufe mit?",
              a: "Selbstverständlich, und ohne Zuschlag — die Tarifordnung der Stadt Kaiserslautern sieht für Gepäck keinen Aufschlag vor. Bei sehr viel Gepäck sagen Sie uns kurz Bescheid, dann kommt ein größeres Fahrzeug.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    largetaxi: {
      eyebrow: "Großraumtaxi",
      title: "Großraumtaxi in Kaiserslautern",
      lead: "Bis zu acht Personen oder viel Gepäck in einem Fahrzeug — statt zwei Taxis, die hintereinander herfahren.",
      blocks: [
        {
          type: "text",
          heading: "Alle zusammen in einem Wagen",
          paragraphs: [
            "Sobald Sie zu fünft oder mehr unterwegs sind, wird es mit einem normalen Taxi eng. Ein Großraumtaxi löst das: Alle sitzen zusammen, das Gepäck passt mit, und es fährt nur ein Fahrzeug statt zweier, die sich unterwegs verlieren.",
            "Sagen Sie uns bei der Bestellung einfach, wie viele Personen mitfahren und wie viel Gepäck dabei ist — dann planen wir das passende Fahrzeug ein.",
          ],
        },
        {
          type: "list",
          heading: "Wofür sich ein Großraumtaxi lohnt",
          intro: "Typische Anlässe:",
          items: [
            "Gruppen zum Flughafen, mit Koffern für alle",
            "Familienfeiern, Hochzeiten und Geburtstage",
            "Vereins- und Mannschaftsfahrten",
            "Firmenbesuche mit mehreren Gästen",
            "Abende in der Stadt, gemeinsam hin und gemeinsam zurück",
            "Fahrten mit Kinderwagen, Sportgeräten oder sperrigem Gepäck",
          ],
        },
        {
          type: "note",
          heading: "Was ein Großraumtaxi kostet",
          paragraphs: [
            "Innerhalb der Stadt gilt der normale Taxitarif. Hinzu kommt der in der Tarifordnung festgelegte Zuschlag für Großraumtaxen ab dem fünften Fahrgast in Höhe von 5,50 Euro pauschal — unabhängig von der Länge der Fahrt.",
            "Für Flughafentransfers und längere Strecken vereinbaren wir auf Anfrage einen Pauschalpreis für das gesamte Fahrzeug.",
          ],
        },
        {
          type: "faq",
          heading: "Häufige Fragen zum Großraumtaxi",
          items: [
            {
              q: "Wie viele Personen passen hinein?",
              a: "Bis zu acht Fahrgäste. Wie viel Gepäck zusätzlich mitkann, hängt von der Personenzahl ab — sagen Sie uns beides bei der Bestellung, dann planen wir richtig.",
            },
            {
              q: "Muss ich ein Großraumtaxi vorbestellen?",
              a: "Wir empfehlen es. Großraumfahrzeuge sind seltener als normale Taxis; mit Vorbestellung ist eines sicher für Sie eingeplant.",
            },
            {
              q: "Gilt der Zuschlag pro Person?",
              a: "Nein. Der Zuschlag von 5,50 Euro fällt einmalig pauschal an, sobald ab dem fünften Fahrgast ein Großraumtaxi eingesetzt wird.",
            },
            {
              q: "Können wir Kindersitze bekommen?",
              a: "Sagen Sie uns bei der Bestellung, wie alt die Kinder sind, dann klären wir das vorab mit Ihnen.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    courier: {
      eyebrow: "Kurierfahrten",
      title: "Kurierfahrten in Kaiserslautern",
      lead: "Dokumente, Ersatzteile oder vergessene Unterlagen — direkt von A nach B, ohne Umweg über ein Verteilzentrum.",
      blocks: [
        {
          type: "text",
          heading: "Direktfahrt statt Paketdienst",
          paragraphs: [
            "Ein Paketdienst sammelt, sortiert und liefert irgendwann am nächsten Tag. Eine Kurierfahrt fährt sofort los und bringt die Sendung direkt zum Empfänger — ohne Zwischenstation und ohne dass jemand anderes sie in die Hand nimmt.",
            "Das lohnt sich immer dann, wenn etwas heute ankommen muss: der unterschriebene Vertrag, das fehlende Ersatzteil, der vergessene Schlüssel.",
          ],
        },
        {
          type: "list",
          heading: "Was wir typischerweise fahren",
          intro: "Alles, was in ein Taxi passt:",
          items: [
            "Verträge, Unterlagen und unterschriebene Dokumente",
            "Ersatz- und Kleinteile für Werkstatt oder Betrieb",
            "Schlüssel und vergessene Gegenstände",
            "Waren und Muster bis Kofferraumgröße",
            "Sendungen zwischen Firmenstandorten im Raum Kaiserslautern",
            "Dringende Fahrten zu Geschäftspartnern in der Region",
          ],
        },
        {
          type: "note",
          heading: "So läuft eine Kurierfahrt ab",
          paragraphs: [
            "Rufen Sie uns an und nennen Sie Abhol- und Zieladresse sowie einen Ansprechpartner auf beiden Seiten. Wir sagen Ihnen, wann der Wagen da ist, und bei Fahrten über die Stadtgrenze hinaus nennen wir vorab einen Festpreis.",
            "Bitte beachten Sie: Wir transportieren keine Gefahrgüter und keine Sendungen, für die eine besondere Zulassung erforderlich ist.",
          ],
        },
        {
          type: "faq",
          heading: "Häufige Fragen zu Kurierfahrten",
          items: [
            {
              q: "Wie schnell kann eine Sendung abgeholt werden?",
              a: "In der Regel innerhalb weniger Minuten im Stadtgebiet. Rufen Sie an, dann sagen wir Ihnen sofort, wann ein Wagen bei Ihnen sein kann.",
            },
            {
              q: "Was kostet eine Kurierfahrt?",
              a: "Innerhalb der Stadt nach dem amtlichen Taxitarif. Für Fahrten über die Stadtgrenze hinaus oder für regelmäßige Touren nennen wir Ihnen auf Anfrage einen Festpreis.",
            },
            {
              q: "Fahren Sie auch außerhalb der Geschäftszeiten?",
              a: "Ja, rund um die Uhr — auch nachts, am Wochenende und an Feiertagen.",
            },
            {
              q: "Kann der Empfänger den Erhalt bestätigen?",
              a: "Sprechen Sie uns darauf an, wenn Sie eine Bestätigung der Übergabe benötigen. Nennen Sie uns dazu bitte einen Ansprechpartner am Zielort.",
            },
          ],
        },
      ] as LandingBlock[],
    },

    business: {
      eyebrow: "Geschäftskunden",
      title: "Taxi für Geschäftskunden in Kaiserslautern",
      lead: "Planbare Fahrten für Mitarbeitende und Gäste, ein fester Ansprechpartner und ein Ablauf, der ohne Rückfragen funktioniert.",
      blocks: [
        {
          type: "text",
          heading: "Fahrten, die einfach laufen",
          paragraphs: [
            "Wenn regelmäßig jemand aus Ihrem Unternehmen ein Taxi braucht, soll das kein Thema für die Assistenz sein. Wir richten uns auf feste Abläufe ein: bekannte Adressen, wiederkehrende Zeiten und ein Ansprechpartner, der weiß, wer Sie sind.",
            "Das gilt für den Gast, der am Bahnhof abgeholt werden muss, genauso wie für die Kollegin, die nach einer späten Schicht nach Hause kommen soll.",
          ],
        },
        {
          type: "list",
          heading: "Was wir für Unternehmen übernehmen",
          intro: "Häufig gebuchte Leistungen:",
          items: [
            "Abholung von Gästen und Kunden am Bahnhof oder Flughafen",
            "Mitarbeiterfahrten zu Terminen und zwischen Standorten",
            "Schichtfahrten zu festen Zeiten, auch früh und spät",
            "Kurierfahrten für Dokumente und Ersatzteile",
            "Flughafentransfers zum Pauschalpreis",
            "Fahrten nach Firmenfeiern und Betriebsveranstaltungen",
          ],
        },
        {
          type: "note",
          heading: "Feste Absprachen statt Einzelfall",
          paragraphs: [
            "Sprechen Sie uns auf eine feste Vereinbarung an. Wir klären Ablauf, Ansprechpartner und Abrechnung persönlich mit Ihnen, damit es für beide Seiten planbar bleibt.",
            "Am schnellsten geht das im Gespräch: Rufen Sie an oder schreiben Sie uns kurz per E-Mail, was Sie brauchen.",
          ],
        },
        {
          type: "faq",
          heading: "Häufige Fragen von Geschäftskunden",
          items: [
            {
              q: "Können wir regelmäßige Fahrten fest einplanen lassen?",
              a: "Ja. Wiederkehrende Fahrten zu festen Zeiten planen wir dauerhaft ein, sodass Sie nicht vor jeder Fahrt neu bestellen müssen.",
            },
            {
              q: "Wie läuft die Abrechnung?",
              a: "Das stimmen wir individuell mit Ihnen ab. Sprechen Sie uns an, dann klären wir, welche Form der Abrechnung für Ihr Unternehmen passt.",
            },
            {
              q: "Können Sie unsere Gäste am Flughafen abholen?",
              a: "Ja. Mit Flugnummer und Landezeit planen wir die Abholung passend ein, auf Wunsch zum vorab vereinbarten Pauschalpreis.",
            },
            {
              q: "Sind auch kurzfristige Fahrten möglich?",
              a: "Ja. Ein Anruf genügt, und wir schicken den nächsten freien Wagen — auch außerhalb der üblichen Bürozeiten.",
            },
          ],
        },
      ] as LandingBlock[],
    },
  },

  notFound: {
    title: "Diese Seite gibt es nicht.",
    lead: "Der Link ist vermutlich veraltet oder hat sich vertippt. Ein Taxi bekommen Sie trotzdem — am schnellsten telefonisch.",
    linksIntro: "Vielleicht suchen Sie eine dieser Seiten:",
  },

  footer: {
    tagline:
      "Ihr Taxiunternehmen in Kaiserslautern. Stadtfahrten, Flughafentransfer und Kurierfahrten — rund um die Uhr.",
    navTitle: "Seiten",
    contactTitle: "Kontakt",
    servicesTitle: "Angebote",
    legalTitle: "Rechtliches",
    rights: "Alle Rechte vorbehalten.",
  },

  seo: {
    home: {
      title: "Taxi Kaiserslautern online bestellen — City Taxi 24h",
      description:
        "Taxi in Kaiserslautern online bestellen — mit persönlicher Echtzeit-Bestätigung, rund um die Uhr. Oder anrufen: 0171 3553030.",
    },
    services: {
      title: "Leistungen — Stadtfahrten & Flughafentransfer",
      description:
        "Stadtfahrten, Flughafentransfer, Großraumtaxi, Kurierfahrten und Krankenfahrten in Kaiserslautern — zum amtlichen Taxitarif.",
    },
    booking: {
      title: "Taxi online bestellen in Kaiserslautern",
      description:
        "Taxi online bestellen in Kaiserslautern: Abholort, Ziel und Uhrzeit eingeben. Bestätigung in Echtzeit, rund um die Uhr.",
    },
    contact: {
      title: "Kontakt — Taxiruf Kaiserslautern",
      description:
        "City Taxi Kaiserslautern, Pariser Str. 51, 67655 Kaiserslautern. Telefonisch, per WhatsApp oder online erreichbar — 24 Stunden täglich.",
    },
    medical: {
      title: "Krankenfahrten Kaiserslautern",
      description:
        "Sitzende Krankenfahrten in Kaiserslautern: Dialyse, Chemotherapie, Arzttermine und Klinik. Wir fahren für alle Krankenkassen. Jetzt anrufen unter 0171 3553030.",
    },
    airport: {
      title: "Flughafentransfer ab Kaiserslautern",
      description:
        "Flughafentransfer ab Kaiserslautern nach Frankfurt, Hahn, Saarbrücken und Luxemburg. Auf Anfrage zum Pauschalpreis, rund um die Uhr. Jetzt Festpreis anfragen.",
    },
    tariff: {
      title: "Taxipreise Kaiserslautern — amtlicher Taxitarif",
      description:
        "Was kostet ein Taxi in Kaiserslautern? Grundpreis 3,50 €, ab 2,10 € je Kilometer. Der komplette amtliche Taxitarif mit allen Zuschlägen, verständlich erklärt.",
    },
    airbase: {
      title: "Taxi Ramstein Air Base & KMC",
      description:
        "Taxi zwischen Kaiserslautern und Ramstein Air Base, Landstuhl Regional Medical Center, Vogelweh und der KMC. Rund um die Uhr, Pauschalpreis auf Anfrage.",
    },
    cityrides: {
      title: "Stadtfahrten — Taxi in Kaiserslautern",
      description:
        "Taxi für kurze Wege in Kaiserslautern: Hauptbahnhof, Innenstadt, Klinikum, Universität. Nach amtlichem Taxitarif, Tag und Nacht. Jetzt anrufen: 0171 3553030.",
    },
    largetaxi: {
      title: "Großraumtaxi Kaiserslautern — bis 8 Personen",
      description:
        "Großraumtaxi in Kaiserslautern für bis zu acht Personen und viel Gepäck — für Gruppen, Flughafentransfers und Feiern. Tel. 0171 3553030.",
    },
    courier: {
      title: "Kurierfahrten Kaiserslautern",
      description:
        "Kurierfahrten in Kaiserslautern: Dokumente, Ersatzteile und dringende Sendungen direkt zum Empfänger, rund um die Uhr. Jetzt anrufen unter 0171 3553030.",
    },
    business: {
      title: "Taxi für Geschäftskunden in Kaiserslautern",
      description:
        "Taxi für Unternehmen in Kaiserslautern: Gästeabholung, Mitarbeiter- und Schichtfahrten, Flughafentransfers und Kurierfahrten mit festen Absprachen.",
    },
    app: {
      title: "Taxi App Kaiserslautern — PIN 24075",
      description:
        "Taxi per App bestellen: Taxi.de App gratis laden, City Taxi Kaiserslautern mit PIN 24075 hinterlegen, per Klick bestellen.",
    },
    imprint: {
      title: "Impressum",
      description: "Impressum und Anbieterkennzeichnung von City Taxi Kaiserslautern.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      description:
        "Informationen zur Verarbeitung personenbezogener Daten auf der Website von City Taxi Kaiserslautern.",
    },
  },
};

export default de;
export type Dictionary = typeof de;
