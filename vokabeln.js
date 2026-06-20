// VOCABULARY DATA - 266 Vokabeln, 12 Kategorien
const VOCAB=[
{de:"Unternehmenssoftware",en:"Enterprise software",syn:"Corporate software / Business applications",exp:"Software designed to meet the complex needs of an organization rather than individual users.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Personalwesen",en:"Human resources (HR)",syn:"Personnel / Workforce management",exp:"The department that deals with the employment, training, and administration of staff.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Konzern / Großunternehmen",en:"Corporation",syn:"Large company / Conglomerate",exp:"A large business or organization that under the law has the rights and duties of an individual.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Datenanalyse",en:"Data analytics",syn:"Data analysis / Data interpretation",exp:"The science of analyzing raw data to make conclusions about that information.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Infrastruktur",en:"Infrastructure",syn:"Foundation / Framework",exp:"The basic physical and organizational structures and facilities needed for the operation of an enterprise.",cat:"Teil 1: IT & Datenanalyse"},
{de:"großangelegt / in großem Maßstab",en:"Large-scale",syn:"Massive / Extensive",exp:"Involving large numbers, quantities, or a large area.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Verschlüsselungstechnologien",en:"Encryption technologies",syn:"Cryptography / Data encoding",exp:"The process of converting information into a secret code to hide its true meaning and secure it.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Betrugserkennung",en:"Fraud detection",syn:"Scam prevention",exp:"Processes and systems designed to identify and prevent unauthorized or deceptive activities.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Finanzinstitute",en:"Financial institutions",syn:"Banks / Financial organizations",exp:"Establishments that focus on dealing with financial transactions, such as investments, loans, and deposits.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Transaktionen",en:"Transactions",syn:"Deals / Operations",exp:"Instances of buying or selling something; completed business agreements.",cat:"Teil 1: IT & Datenanalyse"},
{de:"Nutzerverhalten",en:"User behavior",syn:"Consumer habits / User interactions",exp:"The actions and patterns of individuals when interacting with a system, product, or service.",cat:"Teil 1: IT & Datenanalyse"},
{de:"datengesteuert / datenbasiert",en:"Data-driven",syn:"Evidence-based / Data-based",exp:"Determined by or heavily dependent on the collection and analysis of data rather than intuition.",cat:"Teil 1: IT & Datenanalyse"},

{de:"Zusammenarbeit",en:"Collaboration",syn:"Cooperation / Teamwork",exp:"The action of working with someone to produce or create something.",cat:"Teil 2: Zusammenarbeit"},
{de:"Produktivität",en:"Productivity",syn:"Efficiency / Output",exp:"The effectiveness of productive effort, often measured in terms of the rate of output per unit of input.",cat:"Teil 2: Zusammenarbeit"},
{de:"entwickeln",en:"to develop",syn:"to create / to engineer",exp:"To design and build new software, products, or ideas.",cat:"Teil 2: Zusammenarbeit"},
{de:"mittelständische Unternehmen",en:"medium-sized / mid-sized companies",syn:"SMEs / mid-market firms",exp:"Businesses that fall between small enterprises and large corporations.",cat:"Teil 2: Zusammenarbeit"},
{de:"Geschäftsprozesse optimieren",en:"to optimize business processes",syn:"to streamline operations / to improve workflows",exp:"To make the sequence of tasks in a business more efficient.",cat:"Teil 2: Zusammenarbeit"},
{de:"Effizienz steigern",en:"to improve efficiency",syn:"to boost productivity / streamlining",exp:"To achieve better or faster results using the same or fewer resources.",cat:"Teil 2: Zusammenarbeit"},
{de:"tätig sein in",en:"to operate in",syn:"to be active in / to do business in",exp:"To function, work, or conduct commercial activities within a specific market or industry.",cat:"Teil 2: Zusammenarbeit"},
{de:"digitale Dienstleistungsbranche",en:"digital services industry",syn:"digital service sector",exp:"The economic sector focused on providing services delivered via the internet or electronic networks.",cat:"Teil 2: Zusammenarbeit"},
{de:"Genauer gesagt",en:"More specifically",syn:"to be precise / strictly speaking / in particular",exp:"A linking phrase used to give a more exact, detailed, or focused explanation.",cat:"Teil 2: Zusammenarbeit"},
{de:"Schnittstelle",en:"intersection",syn:"interface / crossover / junction",exp:"A point where two or more distinct areas, fields, or disciplines meet and interact.",cat:"Teil 2: Zusammenarbeit"},
{de:"Insgesamt",en:"Overall",syn:"in general / on the whole / altogether",exp:"Taking everything into consideration; looking at the big picture.",cat:"Teil 2: Zusammenarbeit"},
{de:"gehören zu",en:"to belong to",syn:"to be part of / to be affiliated with",exp:"To be a member or a recognized part of a particular group, category, or industry.",cat:"Teil 2: Zusammenarbeit"},
{de:"hochinnovativ",en:"highly innovative",syn:"cutting-edge / pioneering / state-of-the-art",exp:"Characterized by a strong tendency to introduce new, advanced ideas, methods, or technologies.",cat:"Teil 2: Zusammenarbeit"},

{de:"Branche",en:"sector",syn:"industry / field / domain",exp:"A distinct part or branch of a nation's economy or society.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Mitarbeiter- / Dienstausweis",en:"Employee ID / ID badge",syn:"Company badge / security pass / name tag",exp:"A card that shows who you are at work and often grants access to the building.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Großraumbüro (offen gestaltet)",en:"Open-plan office",syn:"Open-space office / open-concept",exp:"An office where many people work in the same large room without dividing walls.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Fester Arbeitsplatz",en:"Fixed desk / Fixed workstation",syn:"Assigned desk / Dedicated desk / permanent",exp:"A desk that you use every day and do not share with others.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Hauptsitz / Firmenzentrale",en:"Headquarters (HQ)",syn:"Head office / Main office",exp:"The main administrative office of a company.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"hat seinen Hauptsitz in",en:"is headquartered in",syn:"is based in / has its head office in",exp:"A verb phrase used to state where a company's main administrative center is located.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Firmeneigenes Fitnessstudio",en:"On-site gym",syn:"Corporate fitness center / In-house gym",exp:"A gym located within the same building or campus where you work.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Parkhaus",en:"Parking garage",syn:"Multi-story car park (UK) / Parking structure",exp:"A multi-level building designed specifically for employee or visitor parking.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Arbeitskabine",en:"Work pod / Pods",syn:"Focus booth / Privacy pod / work cabins",exp:"A small, enclosed, often soundproof space designed for focused work or private calls.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Viel Tageslicht",en:"Plenty of natural light",syn:"Abundant daylight / Sunlit",exp:"A workspace that receives a large amount of sunlight from outside.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Arbeitsplatz",en:"Workstation",syn:"Workspace / Desk area",exp:"A designated area equipped with a desk and computer for working.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Desksharing / flexible Platzwahl",en:"Hot desking",syn:"Desk sharing / Unassigned seating",exp:"A system where people do not have a fixed desk and use any available free desk.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Gut ausgestattetes Büro",en:"Well-equipped office",syn:"Fully furnished office / roomy office",exp:"An office provided with everything you need, offering a lot of physical space.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Es ist praktisch / komfortabel",en:"It is convenient",syn:"It is handy / It is practical",exp:"Fitting in well with a person's needs, activities, or plans; requiring little effort.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Pausenraum / Aufenthaltsraum",en:"Rec room (Recreation room)",syn:"Break room / Lounge area",exp:"A room where people can relax, take a break, or play games.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Toilette / Waschraum",en:"Restroom",syn:"Bathroom / Washroom / Lavatory",exp:"The WC or washroom facilities at the workplace.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Abteilung",en:"Department",syn:"Division / Unit",exp:"A specific part or branch of a company handling a particular function.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Büroküche / Teeküche",en:"Office kitchen",syn:"Kitchenette / Break room kitchen",exp:"A small kitchen at work where people prepare food or drinks.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Ergonomische Stühle",en:"Ergonomic chairs",syn:"Posture-supporting chairs",exp:"Chairs designed to help you sit correctly, provide comfort, and avoid physical pain.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Höhenverstellbare Schreibtische",en:"Sit-stand desks",syn:"Height-adjustable desks / Standing desks",exp:"Desks that can be raised or lowered to allow working while sitting or standing.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Einrichtungen / Anlagen",en:"Facilities",syn:"Amenities / Premises",exp:"Equipment, areas, and services available for employees to use at the workplace.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Kantine / Betriebsrestaurant",en:"Company cafeteria",syn:"Canteen / Dining hall / staff dining room",exp:"A restaurant or dining room in a company where employees eat meals.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"vor Ort / betriebsintern",en:"on-site",syn:"in-house / on-premises",exp:"Located or occurring at the actual place of work or business.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"einstempeln / Arbeitszeit erfassen",en:"to clock in",syn:"to punch in / to log in / to sign in",exp:"To register one's arrival at work, often using an electronic system or time card.",cat:"Teil 3: Arbeitsplatz & Büro"},
{de:"Mein typischer Arbeitstag geht von ... bis",en:"my typical workday runs from ... to ...",syn:"my usual working hours are from ... to ...",exp:"A professional phrase to describe your regular daily schedule or core working hours.",cat:"Teil 3: Arbeitsplatz & Büro"},

{de:"zuständig für die Verwaltung",en:"responsible for managing",syn:"in charge of administering / overseeing",exp:"Having the duty to control and organize systems, people, or resources.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"zuständig für die Entwicklung und Wartung",en:"responsible for developing and maintaining",syn:"in charge of creating and keeping up",exp:"The duty to build new solutions and ensure existing ones continue to work properly.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"sich kümmern um / umgehen mit",en:"to take care of / to handle",syn:"to deal with / to manage",exp:"To assume responsibility for a task, process, or problem.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"Hauptverantwortung",en:"main responsibility",syn:"primary duty / core task",exp:"The most important job, task, or duty a person or department has.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"unterstützen",en:"to support",syn:"to assist / to back up",exp:"To help a process run smoothly or help someone do their job effectively.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"zuständig für die Wartung",en:"in charge of maintaining",syn:"responsible for the upkeep / servicing",exp:"Having control over keeping systems or equipment in good working order.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"für die Koordination",en:"for coordinating",syn:"for organizing / for aligning",exp:"Bringing different elements, teams, or tasks together to work efficiently.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"durch die Bereitstellung",en:"by providing",syn:"by supplying / by delivering",exp:"The act of giving someone something they need to perform their work.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"eng zusammenarbeiten",en:"to work closely (together)",syn:"to collaborate closely / to partner",exp:"To cooperate highly and communicate frequently with another group or person.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"Vertrieb",en:"sales",syn:"sales department / business development",exp:"The division of a business that is responsible for selling products or services.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"Arbeitsabläufe automatisieren",en:"to automate workflows",syn:"to automate processes / to computerize tasks",exp:"Using technology and software to perform tasks automatically.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"bereitstellen / zur Verfügung stellen",en:"to provide",syn:"to supply / to make available",exp:"To give, supply, or produce something that is needed.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"Berichte",en:"reports",syn:"statements / data summaries",exp:"Official documents or system outputs that give structured information.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"durch die Betreuung / Pflege",en:"by managing / by maintaining",syn:"by supervising / by administering",exp:"Taking care of the daily operations, updates, and support of a system.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"sicherstellen",en:"to ensure",syn:"to make sure / to guarantee",exp:"To make certain that something happens, such as the accurate flow of data.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"fungiert als Schnittstelle",en:"acts as an interface / acts as a link",syn:"serves as a bridge / acts as a liaison",exp:"To function as a connecting point or mediator between two different groups.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"fließt durch / verläuft über",en:"flows through",syn:"is routed through / moves through",exp:"Describes the path or channel that information or data takes within an organization.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"wird verwaltet mit / gesteuert über",en:"is managed using",syn:"is administered via / is directed by",exp:"Indicates which tool or system is used to organize and control a specific process.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"wird bearbeitet mit / abgewickelt über",en:"is handled with",syn:"is processed with / is dealt with using",exp:"Describes the system used to perform or execute a specific task or operation.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"koordinieren ihre Arbeit mit",en:"coordinate their work using",syn:"organize their tasks via / align their work through",exp:"How teams synchronize their efforts and manage collaborative tasks.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"erfolgt über / findet statt via",en:"takes place via",syn:"occurs through / happens via",exp:"Indicates the medium or platform used for an activity (often communication).",cat:"Teil 4: Verantwortlichkeiten"},
{de:"ist zugänglich für",en:"is accessible to",syn:"is available to / can be accessed by",exp:"Means that certain people or departments have the right and ability to enter a system.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"wird gespeichert in",en:"is stored in",syn:"is saved in / is housed in",exp:"Indicates where data or information is permanently kept.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"wird dokumentiert und nachverfolgt",en:"is documented and tracked",syn:"is recorded and monitored",exp:"The process of writing down project steps and continuously checking their progress.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"wird zusammengeführt und visualisiert",en:"is consolidated and visualized",syn:"is merged and displayed / is combined and charted",exp:"Bringing data together from different sources and presenting it graphically.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"verbindet / verknüpft",en:"connects",syn:"links / integrates / bridges",exp:"The act of joining different systems or departments so they can share data seamlessly.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"werden generiert / erstellt mit",en:"are generated using",syn:"are produced with / are created via",exp:"The automated or manual process of creating something, like reports, using a specific tool.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"Kennzahlen nachverfolgen",en:"to track key figures",syn:"to monitor KPIs / to track key metrics",exp:"To keep a record of important business numbers to evaluate performance over time.",cat:"Teil 4: Verantwortlichkeiten"},
{de:"sich verlassen auf / stützen auf",en:"to rely on",syn:"to depend on / to lean on",exp:"To need a specific system or tool to function properly or to make informed decisions.",cat:"Teil 4: Verantwortlichkeiten"},

{de:"SAP / SAP S/4HANA",en:"SAP / SAP S/4HANA",syn:"ERP System",exp:"A software used to manage core business processes like finance, logistics, and production.",cat:"Teil 5: Business-Tools"},
{de:"Salesforce",en:"Salesforce",syn:"CRM System",exp:"A platform primarily used by sales and marketing to manage customer data.",cat:"Teil 5: Business-Tools"},
{de:"Microsoft Dynamics 365",en:"Microsoft Dynamics 365",syn:"ERP & CRM System",exp:"A suite of intelligent business applications that combine ERP and CRM capabilities.",cat:"Teil 5: Business-Tools"},
{de:"Jira",en:"Jira",syn:"Project Management Tool / Issue Tracker",exp:"A software used by agile teams to plan, track, and manage tasks and projects.",cat:"Teil 5: Business-Tools"},
{de:"Confluence",en:"Confluence",syn:"Knowledge Base / Corporate Wiki",exp:"A team workspace where knowledge and collaboration meet; often used for documentation.",cat:"Teil 5: Business-Tools"},
{de:"Microsoft Teams",en:"Microsoft Teams",syn:"Collaboration & Communication Platform",exp:"A unified platform that combines workplace chat, video meetings, and file storage.",cat:"Teil 5: Business-Tools"},
{de:"Power BI",en:"Power BI",syn:"Business Intelligence / Data Viz Tool",exp:"A software used to turn raw data into interactive, visual dashboards.",cat:"Teil 5: Business-Tools"},
{de:"SharePoint",en:"SharePoint",syn:"Document Management System (DMS)",exp:"A web-based collaborative platform used primarily for document management and storage.",cat:"Teil 5: Business-Tools"},
{de:"Einkauf / Beschaffungswesen",en:"purchasing",syn:"procurement / buying",exp:"The department or process responsible for buying goods and services for a business.",cat:"Teil 5: Business-Tools"},
{de:"Konsistenz / Einheitlichkeit",en:"consistency",syn:"uniformity / reliability",exp:"The state of data being accurate, up-to-date, and identical across all systems.",cat:"Teil 5: Business-Tools"},
{de:"Doppelarbeit / Duplizierung",en:"duplication",syn:"redundancy / repetition",exp:"The act of doing something again that has already been done, wasting resources.",cat:"Teil 5: Business-Tools"},
{de:"Kundenlebenszyklus",en:"customer lifecycle",syn:"customer journey",exp:"The various stages a customer goes through, from learning about a product to loyalty.",cat:"Teil 5: Business-Tools"},
{de:"Interessenten / potenzielle Kunden",en:"leads",syn:"prospects / potential customers",exp:"Individuals or organizations that have shown interest but haven't bought yet.",cat:"Teil 5: Business-Tools"},
{de:"Verkaufschancen",en:"sales opportunities",syn:"potential deals / sales prospects",exp:"Qualified leads that have a high probability of converting into paying customers.",cat:"Teil 5: Business-Tools"},
{de:"Prognosegenauigkeit",en:"forecasting accuracy",syn:"prediction accuracy",exp:"The degree to which sales or financial predictions match the actual future results.",cat:"Teil 5: Business-Tools"},
{de:"Problem- und Fehlerverfolgung",en:"issue tracking",syn:"bug tracking / task tracking",exp:"The process of recording, managing, and following the progress of problems or tasks.",cat:"Teil 5: Business-Tools"},
{de:"Softwarefehler",en:"bugs",syn:"glitches / software errors",exp:"Errors, flaws, or faults in a computer program or system.",cat:"Teil 5: Business-Tools"},
{de:"Änderungsanfragen",en:"change requests",syn:"modification requests",exp:"Formal proposals by a client or team to alter a product, system, or project scope.",cat:"Teil 5: Business-Tools"},
{de:"Agile Methoden",en:"agile methods",syn:"agile methodology",exp:"Flexible project management frameworks (like Scrum) emphasizing short work phases.",cat:"Teil 5: Business-Tools"},
{de:"Echtzeit-Datenverarbeitung",en:"real-time data processing",syn:"instantaneous processing",exp:"The input, processing, and output of data almost immediately as it is generated.",cat:"Teil 5: Business-Tools"},
{de:"Skalierbarkeit",en:"scalability",syn:"expandability",exp:"The capacity of a system to handle a growing amount of work without losing performance.",cat:"Teil 5: Business-Tools"},
{de:"Anpassbarkeit / Personalisierung",en:"customization",syn:"tailoring / personalization",exp:"The action of modifying software or processes to suit a specific company's requirements.",cat:"Teil 5: Business-Tools"},
{de:"Aussagekräftige Erkenntnisse",en:"meaningful insights",syn:"actionable insights / valuable findings",exp:"Deep understandings drawn from raw data analysis that guide business decisions.",cat:"Teil 5: Business-Tools"},
{de:"erkennen / ausfindig machen",en:"to spot",syn:"to identify / to detect / to notice",exp:"To see or recognize something easily, such as a trend in sales numbers.",cat:"Teil 5: Business-Tools"},
{de:"nahtlos / reibungslos",en:"seamlessly",syn:"smoothly / flawlessly",exp:"Working together perfectly without any interruptions, problems, or noticeable transitions.",cat:"Teil 5: Business-Tools"},
{de:"Richtlinien / Leitfäden",en:"guidelines",syn:"policies / directives / rules",exp:"Official advice or rules given by an organization on how to do something.",cat:"Teil 5: Business-Tools"},

{de:"Besprechungsprotokolle",en:"meeting notes",syn:"minutes (of a meeting) / MoM",exp:"A written record of the main points discussed and decisions made during a meeting.",cat:"Teil 6: Büroalltag"},
{de:"Einarbeitung (neuer Mitarbeiter)",en:"onboarding",syn:"induction / integration",exp:"The structured process of integrating a new employee into an organization.",cat:"Teil 6: Büroalltag"},
{de:"Einzelbüro / Privatbüro",en:"private office",syn:"individual office / closed office",exp:"A separate, enclosed workspace for one or a few people.",cat:"Teil 6: Büroalltag"},
{de:"sich entspannen / abschalten",en:"to unwind",syn:"to relax / to decompress",exp:"To release tension and rest, often after a period of hard work or stress.",cat:"Teil 6: Büroalltag"},
{de:"Blendung / grelles Licht",en:"glare",syn:"harsh light / blinding light",exp:"Strong, dazzling light that makes it hard to see, especially on a computer screen.",cat:"Teil 6: Büroalltag"},
{de:"sich spiegeln / reflektieren",en:"to reflect",syn:"to bounce back / to cause glare",exp:"When light hits a surface (like a monitor) and bounces back into your eyes.",cat:"Teil 6: Büroalltag"},
{de:"Jalousien / Rollos (innen)",en:"blinds",syn:"window shades / interior blinds",exp:"Window coverings placed inside the room to block or adjust sunlight.",cat:"Teil 6: Büroalltag"},
{de:"Rollläden / Fensterläden (außen)",en:"shutters",syn:"exterior blinds / roller shutters",exp:"Solid window coverings attached to the outside of a building to block light or for security.",cat:"Teil 6: Büroalltag"},
{de:"Vertriebsbüro",en:"sales office",syn:"sales department location",exp:"A specific office, room, or branch dedicated to the sales team and their operations.",cat:"Teil 6: Büroalltag"},
{de:"Flur / Korridor",en:"hallway",syn:"corridor / hall",exp:"A connecting passage in a building with doors leading into different rooms or offices.",cat:"Teil 6: Büroalltag"},

{de:"letztes Quartal",en:"last quarter",syn:"the previous quarter",exp:"The three-month financial period immediately preceding the current one.",cat:"Teil 7: Finanzen"},
{de:"optimieren (Abläufe optimieren)",en:"to streamline",syn:"to optimize / to make more efficient",exp:"To simplify or eliminate unnecessary steps in business processes to improve efficiency.",cat:"Teil 7: Finanzen"},
{de:"Betriebskosten",en:"operational costs / operating costs",syn:"operating expenses / OPEX",exp:"The expenses related to the daily operation of a business (e.g., rent, utilities).",cat:"Teil 7: Finanzen"},
{de:"mit Blick in die Zukunft",en:"looking ahead",syn:"in the future / going forward",exp:"A transition phrase used when shifting focus from past results to future plans.",cat:"Teil 7: Finanzen"},
{de:"wachsende Nachfrage",en:"growing demand",syn:"increasing demand / rising demand",exp:"When more consumers want to buy a particular product or service over time.",cat:"Teil 7: Finanzen"},
{de:"bemerkt / festgestellt",en:"noticed",syn:"observed / perceived",exp:"Became aware of something, like a market trend or a drop in sales.",cat:"Teil 7: Finanzen"},
{de:"einsparen / straffen",en:"to tighten up",syn:"to cut back / to economize",exp:"To make an organization more efficient by strictly controlling and reducing spending.",cat:"Teil 7: Finanzen"},
{de:"auf Kurs (unsere Ziele zu erreichen)",en:"on track (to meet our targets)",syn:"on schedule / proceeding as planned",exp:"Making good progress and likely to succeed in achieving set objectives.",cat:"Teil 7: Finanzen"},
{de:"Jahresziele",en:"annual targets",syn:"yearly goals / annual objectives",exp:"The specific goals a company aims to achieve within a financial or calendar year.",cat:"Teil 7: Finanzen"},
{de:"Verbesserungspotenzial",en:"room for improvement",syn:"potential for growth / areas for enhancement",exp:"The possibility or need for a process, product, or team to be done or perform better.",cat:"Teil 7: Finanzen"},
{de:"hat einige Höhen und Tiefen erlebt",en:"seen some ups and downs",syn:"experienced fluctuations",exp:"Having gone through both successful (profitable) and difficult (loss-making) periods.",cat:"Teil 7: Finanzen"},
{de:"ein starker Rückgang",en:"a sharp drop",syn:"a steep decline / a sudden decrease",exp:"A very fast and significant decrease in numbers, value, or sales.",cat:"Teil 7: Finanzen"},
{de:"sich langsam erholt",en:"slowly recovered",syn:"gradually bounced back",exp:"To return to a normal or healthy state after a period of difficulty or decline.",cat:"Teil 7: Finanzen"},
{de:"gestiegene Nachfrage",en:"increased demand",syn:"heightened demand / higher demand",exp:"A larger desire from consumers for a product or service than before.",cat:"Teil 7: Finanzen"},
{de:"Lieferanten",en:"suppliers",syn:"vendors / providers",exp:"Companies or individuals that provide raw materials, products, or services to another business.",cat:"Teil 7: Finanzen"},
{de:"trotz (einiger schwieriger Monate)",en:"despite (some tough months)",syn:"in spite of / regardless of",exp:"Without being affected by the hardship; showing resilience.",cat:"Teil 7: Finanzen"},
{de:"Verkaufszahlen",en:"sales figures",syn:"sales data / sales numbers",exp:"The total amount or value of products or services sold over a specific period.",cat:"Teil 7: Finanzen"},
{de:"Anstieg der Ausgaben",en:"significant rise in expenses",syn:"increase in costs / surge in spending",exp:"Grammar Note: Use Rise IN + Noun vs. Rise OF + Number.",cat:"Teil 7: Finanzen"},
{de:"Rücksendungen / Retouren",en:"returns",syn:"returned goods / product returns",exp:"Items that customers send back to the seller.",cat:"Teil 7: Finanzen"},
{de:"einen Kredit aufnehmen",en:"to take out a loan",syn:"to borrow money / to secure financing",exp:"To borrow a sum of money, usually from a bank, that must be paid back with interest.",cat:"Teil 7: Finanzen"},
{de:"unerwartete Kosten",en:"unexpected costs",syn:"unforeseen expenses / surprise charges",exp:"Financial charges that were not planned for in the company's budget.",cat:"Teil 7: Finanzen"},
{de:"Lager / Lagerhalle",en:"warehouse",syn:"storage facility / depot",exp:"A large building where raw materials or manufactured goods are stored before distribution.",cat:"Teil 7: Finanzen"},

{de:"kostensparende Maßnahmen",en:"cost-saving measures",syn:"cost-cutting strategies / economy measures",exp:"Specific actions taken by a company to reduce its expenses and improve profitability.",cat:"Teil 8: Kostenreduktion"},
{de:"in großen Mengen kaufen",en:"to buy in bulk",syn:"to purchase wholesale / to buy in large quantities",exp:"To purchase goods in large amounts, usually to get a cheaper wholesale price.",cat:"Teil 8: Kostenreduktion"},
{de:"Vertriebsmitarbeiter",en:"sales reps / sales representative",syn:"salespeople / sales agents / salesperson",exp:"Employees whose primary job is to sell a company's products or services to clients.",cat:"Teil 8: Kostenreduktion"},
{de:"einen Gewinn erzielen",en:"to turn a profit / to make a profit",syn:"to generate a profit / to become profitable",exp:"To reach a point where the business earns more money than it spends.",cat:"Teil 8: Kostenreduktion"},
{de:"rückläufiger Trend bei den Verkaufszahlen",en:"downward trend in sales",syn:"decline in sales / downward trajectory",exp:"A continuous, negative decrease in the number of sales over time.",cat:"Teil 8: Kostenreduktion"},
{de:"die Verkaufszahlen haben sich erholt",en:"sales bounced back",syn:"sales rebounded",exp:"Sales returned to a healthy level quickly after a period of decline.",cat:"Teil 8: Kostenreduktion"},
{de:"stetiger Anstieg der Verkaufszahlen",en:"steady increase in sales",syn:"consistent growth in sales",exp:"A gradual, reliable, and continuous upward trend in the amount of products sold.",cat:"Teil 8: Kostenreduktion"},
{de:"steigende Preise (der Lieferanten)",en:"rising prices (from our suppliers)",syn:"increasing vendor costs / price hikes",exp:"When the companies providing goods or materials charge more money for them.",cat:"Teil 8: Kostenreduktion"},
{de:"finanzielle Schwierigkeiten haben",en:"been struggling financially",syn:"facing financial hardship",exp:"Experiencing severe problems with money, such as not having enough to pay bills or debts.",cat:"Teil 8: Kostenreduktion"},
{de:"rückläufige Umsätze",en:"falling revenue",syn:"declining income / decreasing sales revenue",exp:"When the total amount of money brought in by a company's business operations goes down.",cat:"Teil 8: Kostenreduktion"},
{de:"schwache Nachfrage",en:"weak demand",syn:"low demand / sluggish demand",exp:"When there is very little consumer interest in buying a product or service.",cat:"Teil 8: Kostenreduktion"},
{de:"Einstellungsstopp",en:"hiring freeze / to freeze hiring",syn:"recruitment freeze / employment freeze",exp:"A company policy to temporarily stop hiring new employees, usually to save money.",cat:"Teil 8: Kostenreduktion"},
{de:"Mitarbeiter entlassen",en:"to lay off employees",syn:"to make staff redundant / to dismiss workers / to downsize",exp:"To terminate employment, usually for economic reasons rather than poor performance.",cat:"Teil 8: Kostenreduktion"},
{de:"Arbeitszeitverkürzung (Kurzarbeit)",en:"reduced working hours",syn:"shortened hours / short-time working",exp:"A situation where employees work fewer hours than usual as a cost-saving measure.",cat:"Teil 8: Kostenreduktion"},
{de:"rote Zahlen schreiben",en:"running in the red",syn:"operating at a loss / losing money",exp:"To spend more money than is earned; to be in debt or unprofitable.",cat:"Teil 8: Kostenreduktion"},
{de:"das Budget straffen",en:"to tighten the budget",syn:"to reduce spending / to cut the budget",exp:"To strictly control or forcefully reduce financial expenditures.",cat:"Teil 8: Kostenreduktion"},
{de:"von Insolvenz bedroht",en:"risk of insolvency",syn:"in danger of bankruptcy / facing liquidation",exp:"The state of being unable to pay debts owed, potentially leading to legal bankruptcy.",cat:"Teil 8: Kostenreduktion"},
{de:"die Zukunft bleibt ungewiss",en:"the future remains uncertain",syn:"the outlook is unclear / unpredictable future",exp:"When it is impossible to predict what will happen to the business going forward.",cat:"Teil 8: Kostenreduktion"},
{de:"besorgt über weitere Kürzungen",en:"worried about further cutbacks",syn:"concerned about more reductions",exp:"Feeling anxious that the company will reduce spending, staff, or resources even more.",cat:"Teil 8: Kostenreduktion"},
{de:"einen Verlust verzeichnen",en:"to make a loss",syn:"to incur a loss",exp:"To spend more money than the business earns during a specific period.",cat:"Teil 8: Kostenreduktion"},
{de:"die Gewinnschwelle erreichen",en:"to break even",syn:"to reach the break-even point",exp:"To reach a financial point where profits are exactly equal to the costs.",cat:"Teil 8: Kostenreduktion"},
{de:"Umsatz",en:"revenue",syn:"turnover / sales income",exp:"The total amount of money a company brings in from its normal business operations.",cat:"Teil 8: Kostenreduktion"},
{de:"Ausgaben",en:"expenses",syn:"expenditures / costs",exp:"The money required or spent to operate the business or produce goods.",cat:"Teil 8: Kostenreduktion"},
{de:"Schulden",en:"debt",syn:"liabilities / financial obligations",exp:"Money that is owed or due to another party, like a bank or supplier.",cat:"Teil 8: Kostenreduktion"},
{de:"eine Bestellung aufgeben",en:"to place an order",syn:"to submit an order / to make a purchase",exp:"To officially request goods or services from a supplier or vendor.",cat:"Teil 8: Kostenreduktion"},
{de:"Nachfrage",en:"demand",syn:"consumer interest",exp:"The desire of purchasers or consumers for a particular product or service.",cat:"Teil 8: Kostenreduktion"},
{de:"ein knappes Budget",en:"tight budget",syn:"strict budget / limited funds",exp:"A financial situation where there is very little room for extra or unforeseen spending.",cat:"Teil 8: Kostenreduktion"},
{de:"den Betrieb umstrukturieren",en:"to restructure the company",syn:"to reorganize / to overhaul the business",exp:"To organize a company in a new way to make it operate more effectively or save money.",cat:"Teil 8: Kostenreduktion"},
{de:"Gemeinkosten / Fixkosten",en:"overhead costs",syn:"overheads / fixed costs / indirect costs",exp:"Ongoing business expenses not directly attributed to creating a product or service.",cat:"Teil 8: Kostenreduktion"},
{de:"senken / reduzieren / kürzen",en:"to cut / to reduce",syn:"to decrease / to lower / to bring down",exp:"To make something smaller in amount or size, especially concerning expenses.",cat:"Teil 8: Kostenreduktion"},
{de:"Verkäufe ankurbeln",en:"to boost sales",syn:"to increase sales / to drive up sales",exp:"To take actions that significantly and quickly improve the number of products sold.",cat:"Teil 8: Kostenreduktion"},
{de:"profitabel bleiben",en:"to stay profitable",syn:"to remain lucrative / to maintain profit margins",exp:"To continue making a profit over a period of time.",cat:"Teil 8: Kostenreduktion"},
{de:"schwarze Zahlen schreiben",en:"to be running in the black",syn:"to be profitable / to make a profit",exp:"Operating with positive financial figures; the opposite of running in the red.",cat:"Teil 8: Kostenreduktion"},
{de:"(vorübergehend) schließen",en:"to close (offices/stores)",syn:"to temporarily shut down",exp:"To cease operations for a short period, usually with the intention to reopen.",cat:"Teil 8: Kostenreduktion"},
{de:"dauerhaft schließen / aufgeben",en:"to close down",syn:"to shut down permanently / to go out of business",exp:"To close a business or a specific branch forever.",cat:"Teil 8: Kostenreduktion"},
{de:"Angebot und Nachfrage",en:"supply and demand",syn:"market forces",exp:"The fundamental economic model that determines prices in a market.",cat:"Teil 8: Kostenreduktion"},

{de:"verhandeln",en:"to negotiate",syn:"to bargain / to broker a deal",exp:"To try to reach an agreement or compromise through formal discussion.",cat:"Teil 9: Konjunktionen"},
{de:"Nebenkosten (Strom, Wasser, Heizung)",en:"utilities",syn:"utility costs / overheads",exp:"Expenses for essential building services like electricity, water, and gas.",cat:"Teil 9: Konjunktionen"},
{de:"obwohl / auch wenn",en:"even though / although",syn:"despite the fact that",exp:"A linking word used to introduce a statement that makes the main clause seem surprising.",cat:"Teil 9: Konjunktionen"},
{de:"dank / aufgrund von",en:"thanks to",syn:"due to / because of",exp:"Used to explain the reason for a specific outcome, often (but not always) positive.",cat:"Teil 9: Konjunktionen"},
{de:"während / wohingegen (Vergleich)",en:"while / whereas",syn:"on the other hand / by contrast",exp:"Used to contrast two things. While is common in spoken English, whereas is much more formal.",cat:"Teil 9: Konjunktionen"},
{de:"da / weil",en:"since",syn:"because / as",exp:"Used to introduce a reason.",cat:"Teil 9: Konjunktionen"},
{de:"außerdem / zusätzlich (informell)",en:"in addition / additionally / plus",syn:"also / as well",exp:"Used to add extra information. 'Plus' is very common in professional spoken English.",cat:"Teil 9: Konjunktionen"},
{de:"des Weiteren / darüber hinaus (formell)",en:"furthermore / moreover",syn:"what is more / besides",exp:"Highly formal transition words used primarily in written reports or official emails.",cat:"Teil 9: Konjunktionen"},
{de:"trotz",en:"despite",syn:"in spite of / regardless of",exp:"Shows a contrast. Followed by a noun or an -ing verb. NICHT 'despite of'!",cat:"Teil 9: Konjunktionen"},
{de:"solide / stabile Finanzen",en:"solid financials",syn:"stable financials / sound financial status",exp:"The overall financial health of a company is strong and secure.",cat:"Teil 9: Konjunktionen"},
{de:"Investitionen",en:"investments",syn:"financial backing / funding",exp:"Money put into a company, project, or asset with the expectation of achieving a profit.",cat:"Teil 9: Konjunktionen"},
{de:"optimistisch in die Zukunft blicken",en:"to be optimistic about the future",syn:"to be confident about the outlook",exp:"Feeling positive and confident that things will go well for the business going forward.",cat:"Teil 9: Konjunktionen"},

{de:"Unternehmenswachstum / Expansion",en:"business expansion",syn:"company growth / scaling up",exp:"The phase where a business reaches the point for growth and seeks out additional options.",cat:"Teil 10: Trends"},
{de:"Aufträge sichern / an Land ziehen",en:"to secure orders",syn:"to win contracts / to get orders",exp:"To successfully negotiate and finalize sales agreements with clients.",cat:"Teil 10: Trends"},
{de:"Aufwärtstrend",en:"uptrend (upward trend)",syn:"positive trajectory",exp:"A general tendency for numbers or values to move upwards over a period of time.",cat:"Teil 10: Trends"},
{de:"drastisch ansteigen / rasant wachsen",en:"to surge",syn:"to skyrocket / to leap",exp:"A sudden and powerful forward or upward movement in numbers or value.",cat:"Teil 10: Trends"},
{de:"durchstarten / schnell steigen",en:"to take off",syn:"to boom / to soar",exp:"To suddenly start to be successful or to increase rapidly in amount.",cat:"Teil 10: Trends"},
{de:"klettern / steigen",en:"to climb",syn:"to ascend",exp:"To go up or increase, often implying a steady or continuous movement.",cat:"Teil 10: Trends"},
{de:"Abwärtstrend",en:"downtrend",syn:"downward trajectory",exp:"A general tendency for numbers, sales, or values to move downwards over time.",cat:"Teil 10: Trends"},
{de:"abstürzen / drastisch fallen",en:"to plummet",syn:"to plunge / to crash",exp:"To fall very quickly and suddenly from a high level.",cat:"Teil 10: Trends"},
{de:"abnehmen / zurückgehen",en:"to decline",syn:"to decrease / to drop",exp:"To gradually become less, worse, or lower.",cat:"Teil 10: Trends"},
{de:"den tiefsten Punkt erreichen",en:"to bottom out",syn:"to reach the lowest point",exp:"To reach the lowest level in a declining trend before starting to rise again.",cat:"Teil 10: Trends"},
{de:"sich stabilisieren",en:"to stabilize",syn:"to level off / to plateau",exp:"To reach a state where there are no longer any major changes or fluctuations.",cat:"Teil 10: Trends"},
{de:"konstant bleiben",en:"to remain constant",syn:"to stay flat / to hold steady",exp:"To stay at the exact same level over a certain period without going up or down.",cat:"Teil 10: Trends"},
{de:"stetiger Rückgang",en:"steady decline",syn:"consistent drop",exp:"A continuous and reliable decrease over a long period.",cat:"Teil 10: Trends"},
{de:"saisonale Schwankungen",en:"seasonal changes",syn:"seasonal fluctuations",exp:"Predictable changes in data that occur at specific times of the year.",cat:"Teil 10: Trends"},
{de:"einen Höchststand erreichen (bei)",en:"to peak (peaking at)",syn:"to reach a high of / to top out",exp:"To reach the highest, strongest, or best point, value, or level.",cat:"Teil 10: Trends"},
{de:"sich auszahlen",en:"to pay off",syn:"to yield results / to bear fruit",exp:"To result in success or bring good results after a period of hard work or investment.",cat:"Teil 10: Trends"},
{de:"hervorheben / unterstreichen",en:"to highlight",syn:"to emphasize / to underline",exp:"To draw special attention to a specific point or trend in the data.",cat:"Teil 10: Trends"},
{de:"veranschaulichen / verdeutlichen",en:"to illustrate",syn:"to demonstrate / to show",exp:"To explain or make something clear by using examples, charts, or graphs.",cat:"Teil 10: Trends"},
{de:"ab [Monat] / von da an",en:"from [Month] onwards",syn:"starting in [Month] / going forward",exp:"Beginning at a particular time and continuing after it.",cat:"Teil 10: Trends"},
{de:"zweite Jahreshälfte",en:"the latter half (of the year)",syn:"the second half",exp:"The final six months of a year (July to December).",cat:"Teil 10: Trends"},
{de:"Wachstum signalisieren/anzeigen",en:"indicating growth",syn:"showing expansion",exp:"To show or suggest that the company or sales are getting larger or more successful.",cat:"Teil 10: Trends"},
{de:"leicht angestiegen",en:"slightly increased",syn:"rose marginally",exp:"Went up by a very small or insignificant amount.",cat:"Teil 10: Trends"},
{de:"drastischer Rückgang",en:"dramatic decrease",syn:"sharp drop / steep decline",exp:"A very sudden, large, and noticeable fall in numbers.",cat:"Teil 10: Trends"},

{de:"genehmigt / zugelassen",en:"approved",syn:"authorized / permitted",exp:"Officially agreed to or accepted by the company.",cat:"Teil 11: KI-Richtlinien"},
{de:"im Einklang stehen mit / entsprechen",en:"to comply with",syn:"to adhere to / to observe",exp:"To act in accordance with rules, policies, or laws.",cat:"Teil 11: KI-Richtlinien"},
{de:"Richtlinien befolgen",en:"to follow company guidelines",syn:"to stick to company policy",exp:"To obey the official rules set by the organization.",cat:"Teil 11: KI-Richtlinien"},
{de:"klare Grenzen",en:"clear boundaries",syn:"strict limits / defined rules",exp:"Specific limits that must not be crossed regarding what is allowed.",cat:"Teil 11: KI-Richtlinien"},
{de:"jeglicher Missbrauch",en:"any misuse",syn:"improper use / abuse",exp:"Using tools or data in a way that is wrong or strictly forbidden.",cat:"Teil 11: KI-Richtlinien"},
{de:"disziplinarische Maßnahmen",en:"disciplinary action",syn:"consequences / penalties",exp:"Punishments given by an employer to an employee who breaks the rules.",cat:"Teil 11: KI-Richtlinien"},
{de:"formelle Ermahnung / Abmahnung",en:"write-up / formal warning",syn:"written reprimand",exp:"An official written document placed in an employee's file for breaking rules.",cat:"Teil 11: KI-Richtlinien"},
{de:"Entzug von Systemzugängen",en:"revocation of system access",syn:"suspending access",exp:"The act of taking away an employee's permission to log into company software.",cat:"Teil 11: KI-Richtlinien"},
{de:"Kündigung / Entlassung",en:"termination",syn:"dismissal / firing",exp:"The formal end of an employee's contract due to severe rule violations.",cat:"Teil 11: KI-Richtlinien"},
{de:"dürfen nur verwendet werden",en:"may only be used",syn:"are only allowed to be used",exp:"Expresses permission combined with a strict restriction.",cat:"Teil 11: KI-Richtlinien"},
{de:"voll verantwortlich bleiben",en:"to bear full responsibility",syn:"to remain fully responsible",exp:"To still be the person who must answer for the final result, even if an AI helped.",cat:"Teil 11: KI-Richtlinien"},
{de:"E-Mails entwerfen / vorformulieren",en:"to draft emails",syn:"to outline emails / to write emails",exp:"To create a first version of a text or email before finalizing it.",cat:"Teil 11: KI-Richtlinien"},
{de:"Berichte zusammenfassen",en:"to summarize reports",syn:"to condense reports",exp:"To give a brief statement of the main points of a long document.",cat:"Teil 11: KI-Richtlinien"},
{de:"alles noch einmal überprüfen",en:"to double-check everything",syn:"to review everything / to verify",exp:"To check something twice or very carefully to ensure it is absolutely correct.",cat:"Teil 11: KI-Richtlinien"},
{de:"Fakten prüfen",en:"to fact-check",syn:"to verify information",exp:"To investigate statements or data to ensure they are true and accurate.",cat:"Teil 11: KI-Richtlinien"},
{de:"Kundendaten eingeben / hochladen",en:"to enter / upload customer data",syn:"to input client information",exp:"To put data into a computer system or transfer files to a cloud / AI platform.",cat:"Teil 11: KI-Richtlinien"},
{de:"sensible Daten",en:"sensitive information",syn:"confidential data / classified info",exp:"Private or secret information that must be protected from unauthorized access.",cat:"Teil 11: KI-Richtlinien"},
{de:"Probleme erkennen / darauf hinweisen",en:"to flag issues",syn:"to point out problems",exp:"To mark an item for attention or report a potential problem.",cat:"Teil 11: KI-Richtlinien"},
{de:"Fehler abfangen / finden",en:"to catch errors",syn:"to spot mistakes / to find bugs",exp:"To notice a mistake before it causes bigger problems or goes to the client.",cat:"Teil 11: KI-Richtlinien"},
{de:"Teil des täglichen Arbeitsablaufs",en:"part of the daily workflow",syn:"part of everyday work",exp:"A routine task that is integrated into the normal daily business processes.",cat:"Teil 11: KI-Richtlinien"},
{de:"die Dinge deutlich beschleunigen",en:"to speed things up",syn:"to make tasks faster",exp:"To cause a process to happen much more quickly.",cat:"Teil 11: KI-Richtlinien"},
{de:"als Ausgangspunkt nutzen",en:"to use as a starting point",syn:"to use as a baseline",exp:"To use AI-generated content as a foundation to build upon, not as a final product.",cat:"Teil 11: KI-Richtlinien"},
{de:"durchgehen / prüfen",en:"to go through (a report)",syn:"to review / to examine",exp:"To read or check a document carefully from beginning to end.",cat:"Teil 11: KI-Richtlinien"},
{de:"durchsehen / drüberschauen",en:"to look over / check over",syn:"to scan / to read through",exp:"To examine something quickly to get a general idea or check for obvious errors.",cat:"Teil 11: KI-Richtlinien"},
{de:"Fehler bemerken / aufschnappen",en:"to pick up mistakes",syn:"to notice errors",exp:"To spot or identify mistakes while reading or listening.",cat:"Teil 11: KI-Richtlinien"},
{de:"eine Aufgabe ausführen",en:"to carry out a task",syn:"to perform a task / to do a job",exp:"To complete a specific duty or instruction.",cat:"Teil 11: KI-Richtlinien"},
{de:"Ideen entwickeln / sich ausdenken",en:"to come up with ideas",syn:"to brainstorm / to generate ideas",exp:"To think of a plan, an idea, or a solution.",cat:"Teil 11: KI-Richtlinien"},
{de:"ein Problem lösen / klären",en:"to sort out a problem",syn:"to resolve / to fix an issue",exp:"To deal successfully with a difficult situation or problem.",cat:"Teil 11: KI-Richtlinien"},
{de:"repetitive Aufgaben übernehmen",en:"to take care of repetitive tasks",syn:"to handle routine tasks",exp:"To do the boring, repeating jobs so someone else doesn't have to.",cat:"Teil 11: KI-Richtlinien"},
{de:"Mitarbeiter entlasten",en:"to free employees up",syn:"to unburden staff",exp:"To save time for employees so they can focus their attention on more complex work.",cat:"Teil 11: KI-Richtlinien"},
{de:"Vertraue, aber prüfe nach",en:"Trust but verify",syn:"",exp:"An expression meaning you can use the AI's help, but you must independently confirm its accuracy.",cat:"Teil 11: KI-Richtlinien"},
{de:"Was man reinsteckt, kommt raus",en:"Garbage in, garbage out",syn:"",exp:"A computing idiom: if you give the AI poor or unclear instructions, you will get poor results.",cat:"Teil 11: KI-Richtlinien"},
{de:"Ein zweischneidiges Schwert",en:"A double-edged sword",syn:"A mixed blessing",exp:"Something that has both positive and negative consequences.",cat:"Teil 11: KI-Richtlinien"},
{de:"Nicht narrensicher / fehleranfällig",en:"It's not foolproof",syn:"not infallible / prone to errors",exp:"Meaning the system or method is not 100% perfect and can still fail or make mistakes.",cat:"Teil 11: KI-Richtlinien"},
{de:"halluzinieren (KI erfindet Fakten)",en:"to hallucinate",syn:"to fabricate facts / to make things up",exp:"When an AI confidently generates false, illogical, or entirely invented information.",cat:"Teil 11: KI-Richtlinien"},
{de:"mit Vorsicht genießen / nutzen",en:"to use with caution",syn:"to handle carefully",exp:"To use a tool carefully because it carries potential risks or errors.",cat:"Teil 11: KI-Richtlinien"},

{de:"Gleitzeit",en:"flexible working hours",syn:"flextime / flexitime",exp:"A system where employees can choose when to start and finish work within certain limits.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Kernarbeitszeiten",en:"core working hours / core hours",syn:"mandatory hours",exp:"The specific hours during the day when all employees must be present or available.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Vertrauensarbeitszeit",en:"trust-based working hours",syn:"trust-based working time",exp:"A system without strict time tracking, where focus is on completing tasks rather than logging hours.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Feste Arbeitszeiten",en:"fixed schedule",syn:"set working hours",exp:"A rigid work schedule where employees must work exact, predefined hours.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Wechselschicht / rotierende Schichten",en:"rotating shifts",syn:"variable shifts",exp:"A work schedule where employees change their working hours periodically.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"einstempeln / ausstempeln",en:"to clock in / to clock out",syn:"to punch in / to punch out",exp:"To officially record the time you arrive at and leave work.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Zeiterfassungssystem",en:"time tracking system",syn:"time attendance system",exp:"The software or hardware used by a company to record employees' working hours.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Arbeitszeitkonto / Stundenkonto",en:"time account / bank of hours",syn:"timesheet",exp:"A record of the exact hours an employee has worked, often used to track overtime.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"sich die eigene Zeit einteilen",en:"to manage one's own schedule",syn:"to set one's own hours",exp:"Having the autonomy to decide when and how to work.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Überstunden machen",en:"to work overtime",syn:"to put in extra hours",exp:"To work longer than the regular, contractually agreed working hours.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Überstundengrenze",en:"overtime limit",syn:"maximum extra hours",exp:"The maximum number of additional hours an employee is legally or contractually allowed to work.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Überstundenvergütung",en:"overtime pay",syn:"overtime compensation",exp:"Extra money paid to an employee for working beyond their standard hours.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"anderthalbfacher / doppelter Lohn",en:"time-and-a-half / double time",syn:"premium pay",exp:"Payment at 1.5x or 2x the normal hourly rate, usually for overtime.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Überstunden abbauen (Freizeitausgleich)",en:"to take time off in lieu (TOIL)",syn:"compensatory time off / comp time",exp:"Taking paid time off from work instead of receiving extra money for overtime worked.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Kurzarbeit",en:"short-time work",syn:"reduced hours",exp:"A temporary reduction of working hours mandated by the company to avoid layoffs.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Bezahlter Urlaub",en:"paid time off (PTO)",syn:"annual leave / paid vacation",exp:"Contractual time off work for which the employee still receives their regular salary.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Urlaubsantrag",en:"vacation request",syn:"leave request",exp:"The formal process of asking management for time off and getting it signed off.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"sich freinehmen",en:"to take time off",syn:"to take a day off / to go on leave",exp:"To get permission not to be at work for a specific period.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Betriebsurlaub",en:"holiday shutdown",syn:"mandatory company closure",exp:"A period when the entire company or factory closes down, and all staff must take vacation.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Bürotage / Präsenztage",en:"in-office days",syn:"on-site days / mandatory office days",exp:"The specific days an employee is required to physically be in the company building.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"Personalfluktuation",en:"staff turnover / employee turnover",syn:"churn rate / attrition",exp:"The rate at which employees leave a workforce and are replaced.",cat:"Teil 12: Arbeitszeitmodelle"},
{de:"unterbesetzt (sein)",en:"to be short-staffed",syn:"to be understaffed / shorthanded",exp:"Having fewer employees than are needed to do the work properly.",cat:"Teil 12: Arbeitszeitmodelle"}
];

// ============================================================
// IndexedDB - Lokale persistente Datenbank
// ============================================================
const DB_NAME="VocabMasterDB";
const DB_VERSION=1;
let db=null;

function openDB(){
    return new Promise((resolve,reject)=>{
        const req=indexedDB.open(DB_NAME,DB_VERSION);
        req.onupgradeneeded=e=>{
            const d=e.target.result;
            if(!d.objectStoreNames.contains("progress")){
                d.createObjectStore("progress",{keyPath:"vocabIndex"});
            }
            if(!d.objectStoreNames.contains("sessions")){
                const s=d.createObjectStore("sessions",{keyPath:"id",autoIncrement:true});
                s.createIndex("date","date");
            }
            if(!d.objectStoreNames.contains("log")){
                const l=d.createObjectStore("log",{keyPath:"id",autoIncrement:true});
                l.createIndex("vocabIndex","vocabIndex");
                l.createIndex("timestamp","timestamp");
            }
        };
        req.onsuccess=e=>{db=e.target.result;resolve(db)};
        req.onerror=e=>reject(e.target.error);
    });
}

function dbPut(store,data){
    return new Promise((resolve,reject)=>{
        const tx=db.transaction(store,"readwrite");
        tx.objectStore(store).put(data);
        tx.oncomplete=()=>resolve();
        tx.onerror=e=>reject(e.target.error);
    });
}

function dbGetAll(store){
    return new Promise((resolve,reject)=>{
        const tx=db.transaction(store,"readonly");
        const req=tx.objectStore(store).getAll();
        req.onsuccess=()=>resolve(req.result);
        req.onerror=e=>reject(e.target.error);
    });
}

function dbGet(store,key){
    return new Promise((resolve,reject)=>{
        const tx=db.transaction(store,"readonly");
        const req=tx.objectStore(store).get(key);
        req.onsuccess=()=>resolve(req.result);
        req.onerror=e=>reject(e.target.error);
    });
}

function dbClear(store){
    return new Promise((resolve,reject)=>{
        const tx=db.transaction(store,"readwrite");
        tx.objectStore(store).clear();
        tx.oncomplete=()=>resolve();
        tx.onerror=e=>reject(e.target.error);
    });
}

// ============================================================
// APP STATE
// ============================================================
let progressData={}; // vocabIndex -> {correct, wrong, lastSeen, mastered}
let sessionLog=[];   // [{vocabIndex, input, correct, expected, timestamp}]
let currentMode="smart";
let currentDirection="de-en";
let currentIndex=0;
let queuePos=0;
let answered=false;
let queue=[];
let sessionCorrect=0;
let sessionWrong=0;
let streak=0;
let bestStreak=0;
let sessionStart=Date.now();
let sessionRetryCount={};  // vocabIndex → wie oft in dieser Session als falsch markiert

// ============================================================
// HELPERS
// ============================================================
function norm(s){return s.toLowerCase().replace(/[.,!?;:'"()\/\-]/g,"").replace(/\s+/g," ").trim()}

// Levenshtein Distance für Fuzzy Matching
function levenshtein(a,b){
    const al=a.length,bl=b.length;
    const dp=Array.from({length:al+1},()=>Array(bl+1).fill(0));
    for(let i=0;i<=al;i++)dp[i][0]=i;
    for(let j=0;j<=bl;j++)dp[0][j]=j;
    for(let i=1;i<=al;i++){
        for(let j=1;j<=bl;j++){
            dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;
        }
    }
    return dp[al][bl];
}

// Prüft ob Antwort korrekt ist
// Gibt zurück: {correct, exact, type, distance}
// type: "exact" = exakt, "synonym" = Synonym/Alternative, "fuzzy" = Tippfehler
function isAnswerCorrect(input,targets){
    const ni=norm(input);
    // Exakte Prüfung immer
    for(const t of targets){
        if(ni===norm(t))return{correct:true,exact:true,type:"exact"};
    }
    // Smart: Prüfe ob Eingabe ein Teil der Antwort ist (z.B. "Employee ID" für "Employee ID / Badge ID")
    for(const t of targets){
        const nt=norm(t);
        // Antwort enthält " / " → Splitte in Alternativen
        if(t.includes(" / ")){
            const parts=t.split(" / ").map(p=>norm(p));
            for(const part of parts){
                if(ni===part)return{correct:true,exact:true,type:"synonym"};
                // Fuzzy auf einzelnen Teil
                if(window._fuzzyEnabled!==false&&ni.length>=3&&part.length>=3){
                    const d=levenshtein(ni,part);
                    if(d<=2)return{correct:true,exact:false,type:"fuzzy",distance:d};
                }
            }
        }
        // Eingabe ist Teilstring der Antwort (z.B. "mitarbeiter" in "Mitarbeiterausweis")
        if(ni.length>=3&&nt.includes(ni))return{correct:true,exact:true,type:"synonym"};
        // Antwort ist Teilstring der Eingabe (User schreibt mehr als nötig)
        if(ni.length>=3&&ni.includes(nt))return{correct:true,exact:true,type:"synonym"};
    }
    // Fuzzy nur wenn aktiviert (Tippfehler-Toleranz)
    if(window._fuzzyEnabled!==false){
        for(const t of targets){
            const nt=norm(t);
            if(ni.length>=3&&nt.length>=3){
                const dist=levenshtein(ni,nt);
                if(dist<=2)return{correct:true,exact:false,type:"fuzzy",distance:dist};
            }
        }
    }
    return{correct:false,exact:false,type:null};
}

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function getProgress(i){if(!progressData[i])progressData[i]={correct:0,wrong:0,lastSeen:0,mastered:false};return progressData[i]}
function isMastered(i){
    const threshold=window._masteredThreshold||3;
    const p=getProgress(i);
    return p.correct>=threshold&&p.correct>=p.wrong*2&&p.correct+p.wrong>=threshold;
}
function wrongRate(i){const p=getProgress(i);const t=p.correct+p.wrong;return t===0?0:p.wrong/t}
function totalAttempts(i){const p=getProgress(i);return p.correct+p.wrong}

// ============================================================
// QUEUE
// ============================================================
function buildQueue(){
    let idx=VOCAB.map((_,i)=>i);
    if(currentMode==="smart"){
        idx.sort((a,b)=>{
            const pa=getProgress(a),pb=getProgress(b);
            const aU=pa.correct+pa.wrong===0?1:0,bU=pb.correct+pb.wrong===0?1:0;
            if(aU!==bU)return bU-aU;
            const wrA=wrongRate(a),wrB=wrongRate(b);
            if(Math.abs(wrA-wrB)>0.01)return wrB-wrA;
            return totalAttempts(a)-totalAttempts(b);
        });
    }else if(currentMode==="weak"){
        idx=idx.filter(i=>wrongRate(i)>0&&!isMastered(i));
        idx.sort((a,b)=>wrongRate(b)-wrongRate(a));
    }else if(currentMode==="random"){
        shuffle(idx);
    }
    return idx;
}

// ============================================================
// UI
// ============================================================
function updateStats(){
    let mastered=0,learning=0,newCount=0;
    for(let i=0;i<VOCAB.length;i++){
        const p=getProgress(i);
        if(p.correct+p.wrong===0)newCount++;
        else if(isMastered(i))mastered++;
        else learning++;
    }
    document.getElementById("s-mastered").textContent=mastered;
    document.getElementById("s-learning").textContent=learning;
    document.getElementById("s-new").textContent=newCount;
    document.getElementById("s-total").textContent=`${mastered}/${VOCAB.length}`;

    const pct=Math.round((mastered/VOCAB.length)*100);
    const circ=document.getElementById("ring-fill");
    const circumference=2*Math.PI*52;
    circ.style.strokeDasharray=circumference;
    circ.style.strokeDashoffset=circumference*(1-pct/100);
    document.getElementById("ring-pct").textContent=pct+"%";
    document.getElementById("ring-label").textContent=`${mastered}/${VOCAB.length} gelernt`;

    document.getElementById("s-streak").textContent=streak;
    document.getElementById("s-correct").textContent=sessionCorrect;
    document.getElementById("s-wrong").textContent=sessionWrong;

    const elapsed=Math.floor((Date.now()-sessionStart)/1000);
    const m=Math.floor(elapsed/60);
    const s=elapsed%60;
    document.getElementById("s-time").textContent=`${m}:${s.toString().padStart(2,"0")}`;
}

function showCard(){
    if(queuePos>=queue.length){queue=buildQueue();queuePos=0}
    currentIndex=queue[queuePos];
    const v=VOCAB[currentIndex];
    const dir=currentDirection==="mixed"
        ?(Math.random()<0.5?"de-en":"en-de"):currentDirection;
    const isDE=dir==="de-en";

    document.getElementById("question-label").textContent=isDE?"Was ist die englische Übersetzung für:":"Was ist die deutsche Übersetzung für:";
    document.getElementById("question-text").textContent=isDE?v.de:v.en;
    document.getElementById("card-category").textContent=v.cat;

    const p=getProgress(currentIndex);
    const attemptText=p.correct+p.wrong>0?`Versuche: ${p.correct+p.wrong} | ✓ ${p.correct} | ✗ ${p.wrong}`:"Neue Vokabel";
    document.getElementById("card-attempts").textContent=attemptText;
    document.getElementById("card-counter").textContent=`${queuePos+1} / ${queue.length}`;

    document.getElementById("card-back").classList.add("hidden");
    document.getElementById("feedback").classList.add("hidden");
    document.getElementById("action-row").classList.add("hidden");
    document.getElementById("vokabel-input").value="";
    document.getElementById("vokabel-input").className="";
    document.getElementById("vokabel-input").disabled=false;
    document.getElementById("vokabel-input").readOnly=false;
    document.getElementById("check-btn").disabled=false;
    document.getElementById("card").className="card";

    document.getElementById("vokabel-input").focus();
    answered=false;
}

function showAnswer(showActions=true){
    const v=VOCAB[currentIndex];
    const qText=document.getElementById("question-label").textContent;
    const isDE=qText.includes("englisch");
    const correct=isDE?v.en:v.de;

    document.getElementById("answer-text").textContent=correct;
    const synEl=document.getElementById("answer-synonyms");
    synEl.innerHTML=v.syn?`<strong>Synonyme:</strong> ${v.syn}`:"";
    const expEl=document.getElementById("answer-explanation");
    expEl.innerHTML=v.exp?`<strong>Erklärung:</strong> ${v.exp}`:"";
    document.getElementById("card-back").classList.remove("hidden");
    if(showActions)document.getElementById("action-row").classList.remove("hidden");
    // Input NICHT deaktivieren - Enter muss weiter funktionieren!
    // NUR readonly setzen damit User nicht nachtippen kann
    document.getElementById("vokabel-input").readOnly=true;
    document.getElementById("check-btn").disabled=true;
}

// ============================================================
// CHECK
// ============================================================
// Letzter Auto-Grade Resultat (für Override durch Buttons)
let lastAutoCorrect=false;
let lastResultType=null;

async function checkAnswer(){
    if(answered)return;
    const input=document.getElementById("vokabel-input").value.trim();
    if(!input)return;

    const v=VOCAB[currentIndex];
    const qText=document.getElementById("question-label").textContent;
    const isDE=qText.includes("englisch");
    const correctAnswer=isDE?v.en:v.de;
    const allAnswers=[correctAnswer];
    if(v.syn)v.syn.split(" / ").forEach(s=>{const t=s.trim();if(t)allAnswers.push(t)});

    const result=isAnswerCorrect(input,allAnswers);
    answered=true;
    lastAutoCorrect=result.correct;
    lastResultType=result.type;

    // showAnswer SOFORT aufruerfen (vor await!) - setzt readOnly=true
    // Verhindert Race Condition: User drueckt Enter waehrend dbPut laeuft
    // Bei exakt: keine Action-Row (auto-weiter), bei otros: Pfeiltasten + Buttons
    showAnswer(!result.exact);

    // Log in DB
    const logEntry={vocabIndex:currentIndex,input,correct:result.correct,expected:correctAnswer,fuzzy:!result.exact&&result.correct,distance:result.distance||0,timestamp:Date.now()};
    sessionLog.push(logEntry);
    await dbPut("log",logEntry);

    const progress=getProgress(currentIndex);
    progress.lastSeen=Date.now();

    const card=document.getElementById("card");
    const fb=document.getElementById("feedback");

    if(result.exact){
        // EXAKT → grün, auto-weiter nach kurzer Pause
        progress.correct++;sessionCorrect++;streak++;
        if(streak>bestStreak)bestStreak=streak;
        document.getElementById("vokabel-input").className="correct";
        fb.className="feedback correct";
        fb.textContent=`Richtig! ${correctAnswer}`;
        card.classList.add("state-correct","pulse-green");
        if(window._confettiEnabled!==false)spawnConfetti();
        await dbPut("progress",{vocabIndex:currentIndex,...progress});
        await saveProgressFile();
        updateStats();
        // Auto-weiter nach 600ms
        setTimeout(()=>{if(answered)nextCard()},600);
    }else if(result.correct){
        // SYNONYM oder FUZZY → gelb/grau, Pfeiltasten nötig
        const isFuzzy=result.type==="fuzzy";
        document.getElementById("vokabel-input").className=isFuzzy?"fuzzy":"synonym";
        fb.className="feedback "+(isFuzzy?"fuzzy":"synonym");
        fb.innerHTML=isFuzzy
            ?`Ähnlich (entfernt: ${result.distance}) → <strong>${correctAnswer}</strong><br><span class="arrow-hint">← Falsch &nbsp;|&nbsp; Richtig →</span>`
            :`Synonym erkannt → <strong>${correctAnswer}</strong><br><span class="arrow-hint">← Falsch &nbsp;|&nbsp; Richtig →</span>`;
        card.classList.add(isFuzzy?"state-fuzzy":"state-synonym");
        card.classList.add(isFuzzy?"pulse-amber":"pulse-yellow");
        // NOCH NICHT speichern - User entscheidet mit Pfeiltasten via markCard()
    }else{
        // FALSCH → rot, Pfeiltasten nötig
        document.getElementById("vokabel-input").className="wrong shake";
        fb.className="feedback wrong";
        fb.innerHTML=`Falsch → <strong>${correctAnswer}</strong><br><span class="arrow-hint">← Falsch &nbsp;|&nbsp; Richtig →</span>`;
        card.classList.add("state-wrong","pulse-red");
        // NOCH NICHT speichern - User entscheidet mit Pfeiltasten via markCard()
    }
}

// Buttons/Pfeile nach Check: User bewertet die Antwort
async function markCard(correct){
    if(!answered)return;
    const progress=getProgress(currentIndex);
    progress.lastSeen=Date.now();

    if(correct){
        // Als RICHTIG markieren
        // Für Synonym/Fuzzy/Falsch: Progress noch nicht gespeichert → jetzt als correct
        // Für Exakt: bereits in checkAnswer() gespeichert → nochmal+1 wäre falsch → nur wenn noch nicht gespeichert
        // Einfach: wenn exakt → richtige antwort war's, korrigiere wenn nötig; wenn nicht exakt → jetzt correct speichern
        if(lastResultType==="exact"){
            // Exakt: bereits gespeichert in checkAnswer(), kein weiteres correct nötig (User bestätigt nur)
            // Nichts tun
        }else{
            // Synonym/Fuzzy/Wrong: progress noch nicht gespeichert → jetzt als correct speichern
            progress.correct++;sessionCorrect++;streak++;
            if(streak>bestStreak)bestStreak=streak;
        }
        const fb=document.getElementById("feedback");
        fb.className="feedback correct";
        fb.textContent=lastResultType==="exact"?"Richtig!":
            lastResultType?"Als richtig markiert ✓":"Richtig bestätigt ✓";
        document.getElementById("card").className="card state-correct pulse-green";
    }else{
        // Als FALSCH markieren → retry sofort
        if(lastResultType==="exact"||lastAutoCorrect){
            // War als correct markiert → korrigiere: -1 correct
            progress.correct--;sessionCorrect--;
        }
        progress.wrong++;sessionWrong++;streak=0;
        // Nur retry wenn < 2x in dieser Session (verhindert Endlos-Schleife)
        const retries=sessionRetryCount[currentIndex]||0;
        if(retries<2){
            // Wort ans Queue-Ende für sofortigen Retry
            queue.push(currentIndex);
            sessionRetryCount[currentIndex]=retries+1;
        }
        const fb=document.getElementById("feedback");
        fb.className="feedback wrong";
        fb.textContent=`Falsch ✗ → Retry kommt!`;
        document.getElementById("card").className="card state-wrong pulse-red";
    }

    await dbPut("progress",{vocabIndex:currentIndex,...progress});
    await saveProgressFile();
    updateStats();
    nextCard();
}

function nextCard(){
    queuePos++;
    // Queue zu Ende? Session-Zusammenfassung zeigen
    if(queuePos>=queue.length){
        showSessionModal();
        return;
    }
    showCard();updateStats()
}

// ============================================================
// DASHBOARD
// ============================================================
async function renderDashboard(){
    let mastered=0,totalCorrect=0,totalWrong=0;
    const catStats={};

    for(let i=0;i<VOCAB.length;i++){
        const v=VOCAB[i];
        const p=getProgress(i);
        if(!catStats[v.cat])catStats[v.cat]={correct:0,wrong:0,total:0,mastered:0};
        catStats[v.cat].correct+=p.correct;
        catStats[v.cat].wrong+=p.wrong;
        catStats[v.cat].total++;
        if(isMastered(i)){catStats[v.cat].mastered++;mastered++}
        totalCorrect+=p.correct;
        totalWrong+=p.wrong;
    }

    document.getElementById("dash-total-correct").textContent=totalCorrect;
    document.getElementById("dash-total-wrong").textContent=totalWrong;
    const total=totalCorrect+totalWrong;
    document.getElementById("dash-accuracy").textContent=total>0?Math.round(totalCorrect/total*100)+"%":"-";
    document.getElementById("dash-best-streak").textContent=bestStreak;
    document.getElementById("dash-current-streak").textContent=streak;

    // Category bars
    const catBars=document.getElementById("cat-bars");
    catBars.innerHTML="";
    for(const[cat,data]of Object.entries(catStats)){
        const pct=Math.round(data.mastered/data.total*100);
        catBars.innerHTML+=`<div class="cat-bar-row">
            <div class="cat-bar-label">${cat}</div>
            <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${pct}%"></div></div>
            <div class="cat-bar-pct">${pct}%</div>
        </div>`;
    }

    // Weak list
    const weakList=document.getElementById("weak-list");
    const weakIndices=VOCAB.map((_,i)=>i).filter(i=>wrongRate(i)>0&&!isMastered(i)).sort((a,b)=>wrongRate(b)-wrongRate(a)).slice(0,10);
    weakList.innerHTML=weakIndices.length?weakIndices.map(i=>`<span class="vocab-chip weak">${VOCAB[i].de} → ${VOCAB[i].en}</span>`).join(""):"<p style='color:var(--text3);font-size:.85rem'>Keine schwachen Vokabeln!</p>";

    // Mastered list
    const masteredList=document.getElementById("mastered-list");
    const masteredIndices=VOCAB.map((_,i)=>i).filter(i=>isMastered(i));
    masteredList.innerHTML=masteredIndices.length?`<p style="color:var(--green);font-size:.85rem">${masteredIndices.length} von ${VOCAB.length} Vokabeln gemeistert!</p>`:`<p style="color:var(--text3);font-size:.85rem">Noch keine Vokabeln gemeistert.</p>`;
}

// ============================================================
// HISTORY
// ============================================================
async function renderHistory(){
    const allLogs=await dbGetAll("log");
    allLogs.sort((a,b)=>b.timestamp-a.timestamp);
    document.getElementById("history-count").textContent=`${allLogs.length} Einträge`;
    const list=document.getElementById("history-list");
    list.innerHTML=allLogs.slice(0,100).map(e=>{
        const v=VOCAB[e.vocabIndex]||{de:"?",en:"?"};
        const t=new Date(e.timestamp);
        const time=t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"});
        const date=t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"});
        return`<div class="history-entry">
            <span class="h-icon">${e.correct?"✅":"❌"}</span>
            <span class="h-word">${v.de}</span>
            <span class="h-answer">${e.expected}</span>
            <span class="h-time">${date} ${time}</span>
        </div>`;
    }).join("");
}

// ============================================================
// CONFETTI
// ============================================================
function spawnConfetti(){
    const canvas=document.getElementById("confetti-canvas");
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    const particles=[];
    const colors=["#7c5cfc","#34d399","#fbbf24","#f87171","#60a5fa","#a78bfa"];
    for(let i=0;i<60;i++){
        particles.push({
            x:canvas.width/2+Math.random()*200-100,
            y:canvas.height/2,
            vx:(Math.random()-0.5)*12,
            vy:Math.random()*-14-4,
            w:Math.random()*8+4,
            h:Math.random()*6+3,
            color:colors[Math.floor(Math.random()*colors.length)],
            rot:Math.random()*360,
            vr:(Math.random()-0.5)*10,
            life:1
        });
    }
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        let alive=false;
        for(const p of particles){
            if(p.life<=0)continue;
            alive=true;
            p.x+=p.vx;p.y+=p.vy;p.vy+=0.3;p.rot+=p.vr;p.life-=0.015;
            ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
            ctx.fillStyle=p.color;ctx.globalAlpha=p.life;
            ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
            ctx.restore();
        }
        if(alive)requestAnimationFrame(draw);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    draw();
}

// ============================================================
// DATEI-BASIERTES TRACKING - progress.json
// ============================================================
let fileHandle=null; // File System Access API Handle
let lastSavedTimestamp=0;
const FILE_KEY="vocabmaster_progress_file";

// Baut das JSON-Objekt zusammen
async function buildProgressData(){
    const allProgress=await dbGetAll("progress");
    const allLogs=await dbGetAll("log");
    return{
        _format:"VocabMasterPro v2",
        _savedAt:new Date().toISOString(),
        _vocabCount:VOCAB.length,
        stats:{
            totalCorrect:allProgress.reduce((s,p)=>s+p.correct,0),
            totalWrong:allProgress.reduce((s,p)=>s+p.wrong,0),
            mastered:allProgress.filter(p=>p.correct>=3&&p.correct>p.wrong).length,
            totalVocab:VOCAB.length,
            accuracy:function(){const t=this.totalCorrect+this.totalWrong;return t>0?Math.round(this.totalCorrect/t*100):0}()
        },
        perCategory:computeCategoryStats(allProgress),
        progress:allProgress,
        log:allLogs.slice(-500)
    };
}

function computeCategoryStats(allProgress){
    const cats={};
    for(let i=0;i<VOCAB.length;i++){
        const v=VOCAB[i];
        const p=allProgress.find(x=>x.vocabIndex===i)||{correct:0,wrong:0};
        if(!cats[v.cat])cats[v.cat]={correct:0,wrong:0,total:0,mastered:0};
        cats[v.cat].correct+=p.correct;
        cats[v.cat].wrong+=p.wrong;
        cats[v.cat].total++;
        if(p.correct>=3&&p.correct>p.wrong)cats[v.cat].mastered++;
    }
    return cats;
}

// Speichert in localStorage (immer) + Datei (wenn Handle vorhanden)
async function saveProgressFile(){
    const data=await buildProgressData();

    // 1. Immer in localStorage cachen
    try{localStorage.setItem(FILE_KEY,JSON.stringify(data))}catch(e){}

    // 2. In Datei schreiben (wenn File System Access API Handle vorhanden)
    if(fileHandle){
        try{
            const writable=await fileHandle.createWritable();
            await writable.write(JSON.stringify(data,null,2));
            await writable.close();
        }catch(e){
            console.warn("Datei-Schreiben fehlgeschlagen:",e);
            fileHandle=null; // Handle ungültig
        }
    }

    // 3. Auto-Download als Fallback (alle 5 Minuten max)
    const now=Date.now();
    if(now-lastSavedTimestamp>300000){
        lastSavedTimestamp=now;
        window._lastExportData=data;
    }

    updateSaveTimestamp();
}

// File System Access API: Datei zum Schreiben auswählen
async function pickFileToSave(){
    if(window.showSaveFilePicker){
        try{
            fileHandle=await window.showSaveFilePicker({
                suggestedName:`vocabmaster_${new Date().toISOString().slice(0,10)}.json`,
                types:[{description:"JSON",accept:{"application/json":[".json"]}}]
            });
            await saveProgressFile();
            return true;
        }catch(e){
            if(e.name!=="AbortError")console.warn("File Picker:",e);
            return false;
        }
    }
    return false; // API nicht verfügbar
}

// Manuelles Herunterladen (Fallback für Browser ohne File System Access API)
function manualDownload(){
    const data=window._lastExportData;
    if(!data){alert("Noch kein Fortschritt zum Exportieren!");return}
    const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download=`vocabmaster_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);a.click();document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Beim Start: Lade aus localStorage + Datei
async function loadFromFile(){
    try{
        const raw=localStorage.getItem(FILE_KEY);
        if(raw){
            const data=JSON.parse(raw);
            if(data.progress&&data.progress.length>0){
                const dbEntries=await dbGetAll("progress");
                if(dbEntries.length===0){
                    for(const p of data.progress){
                        await dbPut("progress",p);
                        progressData[p.vocabIndex]={correct:p.correct,wrong:p.wrong,lastSeen:p.lastSeen,mastered:p.mastered};
                    }
                    console.log(`[VocabMaster] ${data.progress.length} Fortschritte aus Cache geladen`);
                }
                if(data.log){
                    const dbLogs=await dbGetAll("log");
                    if(dbLogs.length===0){
                        for(const l of data.log)await dbPut("log",l);
                    }
                }
                return true;
            }
        }
    }catch(e){console.warn("Cache-Laden fehlgeschlagen:",e)}
    return false;
}

function updateSaveTimestamp(){
    const el=document.getElementById("save-timestamp");
    if(el){
        if(fileHandle){
            el.textContent="● Automatisch gespeichert";
            el.style.color="var(--green)";
        }else{
            el.textContent="○ Nur lokaler Cache";
            el.style.color="var(--text3)";
        }
    }
}

// ============================================================
// EXPORT / IMPORT (MANUELL)
// ============================================================
async function exportDB(){manualDownload()}

async function importDB(){
    const input=document.createElement("input");
    input.type="file";input.accept=".json";
    input.onchange=async e=>{
        const file=e.target.files[0];if(!file)return;
        const reader=new FileReader();
        reader.onload=async ev=>{
            try{
                const data=JSON.parse(ev.target.result);
                if(!data.progress){alert("Kein gültiges VocabMaster-Dateiformat!");return}
                const count=data.progress.length;
                if(!confirm(`${count} Vokabel-Fortschriffe importieren?\n\nAlle aktuellen Daten werden überschrieben!`))return;
                await dbClear("progress");
                await dbClear("log");
                for(const p of data.progress)await dbPut("progress",p);
                if(data.log)for(const l of data.log)await dbPut("log",l);
                localStorage.setItem(FILE_KEY,JSON.stringify(data));
                await loadProgressFromDB();
                queue=buildQueue();queuePos=0;
                showCard();updateStats();
                alert(`✓ ${count} Vokabeln importiert!`);
            }catch(err){alert("Fehler beim Import: "+err.message)}
        };
        reader.readAsText(file);
    };
    input.click();
}

// ============================================================
// LOAD FROM DB
// ============================================================
async function loadProgressFromDB(){
    const all=await dbGetAll("progress");
    progressData={};
    all.forEach(p=>{progressData[p.vocabIndex]={correct:p.correct,wrong:p.wrong,lastSeen:p.lastSeen,mastered:p.mastered}});
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.getElementById("check-btn").addEventListener("click",checkAnswer);
document.getElementById("vokabel-input").addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        e.preventDefault();
        if(answered){
            // Enter = IMMER nächste Karte (auch bei Synonym/Fuzzy/Falsch)
            nextCard();
        }else{
            // Antwort prüfen
            checkAnswer();
        }
    }
    // Pfeiltasten: nach Antwort bewerten
    if(answered&&(e.key==="ArrowLeft"||e.key==="ArrowRight")){
        e.preventDefault();
        markCard(e.key==="ArrowRight");
    }
});

document.querySelectorAll(".pill[data-mode]").forEach(p=>{
    p.addEventListener("click",()=>{
        document.querySelectorAll(".pill[data-mode]").forEach(b=>b.classList.remove("active"));
        p.classList.add("active");currentMode=p.dataset.mode;
        queue=buildQueue();queuePos=0;showCard();
    });
});
document.querySelectorAll(".pill[data-dir]").forEach(p=>{
    p.addEventListener("click",()=>{
        document.querySelectorAll(".pill[data-dir]").forEach(b=>b.classList.remove("active"));
        p.classList.add("active");currentDirection=p.dataset.dir;showCard();
    });
});

// Navigation
document.querySelectorAll(".nav-tab").forEach(tab=>{
    tab.addEventListener("click",()=>{
        document.querySelectorAll(".nav-tab").forEach(t=>t.classList.remove("active"));
        document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById("view-"+tab.dataset.view).classList.add("active");
        if(tab.dataset.view==="dashboard")renderDashboard();
        if(tab.dataset.view==="history")renderHistory();
    });
});

document.getElementById("btn-export").addEventListener("click",manualDownload);
document.getElementById("btn-import").addEventListener("click",importDB);
document.getElementById("btn-save").addEventListener("click",async()=>{
    const picked=await pickFileToSave();
    if(!picked)manualDownload();
});
document.getElementById("btn-clear-history").addEventListener("click",async()=>{
    if(confirm("Verlauf wirklich löschen?")){await dbClear("log");renderHistory()}
});

// ============================================================
// SETTINGS DRAWER
// ============================================================
const drawer=document.getElementById("settings-drawer");
const overlay=document.getElementById("drawer-overlay");

function openDrawer(){drawer.classList.add("open");overlay.classList.remove("hidden")}
function closeDrawer(){drawer.classList.remove("open");overlay.classList.add("hidden")}

document.getElementById("nav-tab-settings")?.addEventListener("click",openDrawer);
overlay.addEventListener("click",closeDrawer);
document.getElementById("drawer-close").addEventListener("click",closeDrawer);

// Settings toggles
document.getElementById("opt-synonyms").addEventListener("change",e=>{
    document.getElementById("answer-synonyms").style.display=e.target.checked?"":"none";
});
document.getElementById("opt-explanation").addEventListener("change",e=>{
    document.getElementById("answer-explanation").style.display=e.target.checked?"":"none";
});
document.getElementById("opt-mastered").addEventListener("input",e=>{
    document.getElementById("opt-mastered-val").textContent=e.target.value;
    window._masteredThreshold=parseInt(e.target.value);
});
window._masteredThreshold=3;

// Confetti Toggle
window._confettiEnabled=true;
document.getElementById("opt-confetti").addEventListener("change",e=>{window._confettiEnabled=e.target.checked});

// Fuzzy Toggle
window._fuzzyEnabled=true;
document.getElementById("opt-fuzzy").addEventListener("change",e=>{window._fuzzyEnabled=e.target.checked});

// Override isMastered to use dynamic threshold
const origIsMastered=isMastered;
// (Already uses correct>=3, we override below in queue)

document.getElementById("btn-reset").addEventListener("click",async()=>{
    if(confirm("Wirklich ALLEN Fortschritt löschen?\n\nDas kann nicht rückgängig gemacht werden.")){
        await dbClear("progress");await dbClear("log");
        localStorage.removeItem(FILE_KEY);
        progressData={};sessionCorrect=0;sessionWrong=0;streak=0;bestStreak=0;
        queue=buildQueue();queuePos=0;
        showCard();updateStats();closeDrawer();
    }
});
document.getElementById("btn-export2").addEventListener("click",()=>{manualDownload()});
document.getElementById("btn-import2").addEventListener("click",()=>{importDB()});

// ============================================================
// SESSION SUMMARY MODAL
// ============================================================
function showSessionModal(){
    if(sessionCorrect+sessionWrong===0)return;
    const total=sessionCorrect+sessionWrong;
    const acc=Math.round(sessionCorrect/total*100);

    document.getElementById("modal-correct").textContent=sessionCorrect;
    document.getElementById("modal-wrong").textContent=sessionWrong;
    document.getElementById("modal-accuracy").textContent=acc+"%";
    document.getElementById("modal-streak").textContent=bestStreak;

    let icon="🎉",msg="";
    if(acc>=90){icon="🏆";msg="Exzellent! Du meisterst das Material!";}

    else if(acc>=70){icon="💪";msg="Sehr gut! Weiter so!";}

    else if(acc>=50){icon="👍";msg="Guter Fortschritt, übe die schwachen Stellen nochmal.";}

    else{icon="📖";msg="Du bist auf dem Weg! Wiederholung ist der Schlüssel.";}

    document.getElementById("modal-icon").textContent=icon;
    document.getElementById("modal-message").textContent=msg;
    document.getElementById("session-modal").classList.remove("hidden");
}

function closeSessionModal(){document.getElementById("session-modal").classList.add("hidden")}

function startNewSession(){
    sessionCorrect=0;sessionWrong=0;streak=0;
    sessionRetryCount={};sessionStart=Date.now();
    queue=buildQueue();queuePos=0;
    showCard();updateStats();
}

// ============================================================
// GLOBAL KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener("keydown",e=>{
    // Ignore when typing in input
    if(document.activeElement===document.getElementById("vokabel-input"))return;
    // Ignore when drawer/modal open
    if(!drawer.classList.contains("open")&&!document.getElementById("session-modal").classList.contains("hidden"))return;

    switch(e.key.toLowerCase()){
        case's':e.preventDefault();openDrawer();break;
        case'd':e.preventDefault();document.querySelector('[data-view="dashboard"]').click();break;
        case'h':e.preventDefault();document.querySelector('[data-view="history"]').click();break;
        case'q':e.preventDefault();document.querySelector('[data-view="quiz"]').click();break;
        case'1':if(answered)markCard(true);break;
        case'2':if(answered)markCard(false);break;
        case'escape':closeDrawer();closeSessionModal();break;
    }
});

// Auto-save every 30 seconds
setInterval(async()=>{
    await saveProgressFile();
    updateStats();
},30000);

// Update timer
setInterval(()=>{if(!answered)updateStats()},1000);

// ============================================================
// INIT
// ============================================================
(async function(){
    await openDB();
    await loadFromFile();
    await loadProgressFromDB();
    queue=buildQueue();
    showCard();
    updateStats();
    await saveProgressFile();
    updateSaveTimestamp();
})();
