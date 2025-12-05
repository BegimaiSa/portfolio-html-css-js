# Min Portfolio - U02

Länken till Netlify:

**Live demo:** https://begimai-portfolio.netlify.app/

I detta projekt har jag utvecklat en personlig portfoliosida med HTML, CSS och JavaScript.
Syftet var att skapa en modern och interaktiv webbplats som presenterar mig, min erfarenhet och mina tidigare projekt.

Webbplatsen består av flera sektioner: About, Experience, Projects, Contact.
Jag har även implementerat två interaktiva JavaScript funktioner:

1. En kontaktform med bekräftelsemeddelande
2. Automatisk hämtning av projekt från GitHub via GitHub API

Genom API-kopplingen visas mina egna GitHub repositoryn dynamiskt i Projects-sektionen, vilket gör att sidan alltid visar den senaste informationen utan att jag behöver uppdatera den manuellt.

Styrkor:
Sidan är uppbyggd på ett logiskt sätt och det är lätt för användaren att navigera.

    Med hjälp av media queries fungerar sidan bra på både mobil, surfplatta och dator.

    Att lyckas hämta projekt automatiskt från GitHub visar att jag förstår hur man arbetar med asynkrona funktioner, JSON och fetch().

    Formuläret ger ett tydligt bekräftelsemeddelande till användaren, vilket förbättrar UX.

Brister:
Just nu visas endast projektens namn och beskrivning. Sedan vidare skulle man kunna lägga till fler detaljer som t.ex språk, stjärnor och använda en fin design.

    Webbplatsen har två JavaScript-funktioner, men jag hade kunnat lägga till ännu fler, exempelvis mörkt/vitt läge. Små animationer när sektioner visas och scroll effekter.

    Jag kan lägga till mer detaljer kring utbildning arbetslivserfarenhet och mera projekter.

    Jag är nöjd med projektet eftersom jag har utvecklat och designat sidan själv från grunden. Jag lärde mig mycket om JavaScript, API-anrop och GitHub hantering, och jag känner att min förståelse för frontend-utveckling har stärkts.
    Samtidigt ser jag att det finns flera områden där jag kan förbättra funktionalitet och design i framtiden, vilket gör projektet till en bra grund för vidare utveckling.

    ● ## Vad kan man utveckla m.h.a av javaScript inom frontend?

        JavaScript används dör att göra webbsidor interaktiva och dynamiska. exempel på vad man kan bygga:

        - DOM-manipulation & UI-interaktioner - visa/dölj innehåll, uppdatera text eller klasser, skapa modal/fönster, dropdowns, tabs.

        - Formulär och validering - validera användarinmatning i realtid, visa felmeddelanden och hantera skickning asynkront.

        - Asynkrona anrop (AJAX / fetch) - hämta data från API:er utan att ladda om sidan (t.ex. sökfunktioner, dynamiska listor, kommentarsflöden).

        - Single Page Applications (SPA) - med ramverk eller ren JS kan du bygga appar där routing och vyer byts utan full omladning.

        - Animationer & övergångar - animeringar som ger bättre användarupplevelse (t.ex. scroll-effekter, mikro-animationer).

        - State-hantering & komponentlogik - hantera appens tillstånd (vad som visas, valda alternativ, osv) antingen med bibliotek eller egna lösningar.

        - Offline-stöd & PWA-funktionalitet - service workers, cachehantering, göra sidan användbar offline.

        - Integrationer - t.ex betalningslösningar, kartor, social login, WebSockets för realtidsdata.

        - Kort sagt: JS tar en statisk HTML/CSS-sida och gör den levande och användarvänlig.

    ● ## Vad är JSON och hur används det inom frontend?

    JSON (JavaScript Object Notation) är ett lättviksformat för att representera strukturdata (object och arrayer) i textform. Exempel:

    {
        "name": "Begimai",
        "projects": ["portfolio", "quiz"]
    }

    Hur det används i frontend:

    Dataöverföring mellan klient och server - REST-APIer returnerar ofta JSON. I JS hämtar du det med fetch och response.json().

    const res = await fetch ('https://api.github.com/users/Begimai/repos');
    const repos = await res.json();

    Konfiguration och statisk data - t.ex en lokal data.json med innehåll som sidan bygger upp dynamiskt.

    LocalStorage / sessionStorage - spara JSON-data i webläsaren:

    localStorage.setItem('user', JSON.stringify({name: 'Begimai'}));
    const user = JSON.parse(localStorage.getItem('user'));

    JSON är lättläst och språk-agnostiskt, vilket gör det perfekt för front-back kommunikation.

    ● ## Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

    HTTP (HyperText Transfer Protocol) är protokollet webbläsaren använder för att kommunicera med servar. Grundläggande delar:

    - Metoder: GET (hämta); POST (skapa), PUT/PATCH (uppdatera), DELETE (ta bort).

    - Statuskoder: 200 (OK), 201 (Created), 404 (Not Found), 500 (Servar error) - viktiga för att hantera svar korrekt.

    - Headers: styr innehållstyp, cache, autentisering (t.ex Authorization) och CORS-policy.

    Varför det är viktigt för frontend:

    - Felsökning: veta varför ett fetch-anrop misslyckas (statuskod, CORS, fel body).

    - Säkerhet: förstå autentisering, tokens, CORS begränsningar och hur man skyddar känsliga anrop.

    - Prestanda: cache-headers, gzip, lazy loading och hur man minskar antal requests.

    - Arkitektur: skillanden mellan rest och GraphQL, när du bör använda POST vs GET osv.
    Att förstå HTTP gör att du kan bygga robusta, säkra och snabba frontend-lösningar.
