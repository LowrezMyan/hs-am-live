(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>`./${e}`,t={phone:`0209 972 31 54`,mobile:`0178 166 16 15`,email:`info@hs-am.de`,address:`Wilhelmine-Victoria-Str. 6`,postal:`45883 Gelsenkirchen`,serviceArea:`Nordrhein-Westfalen · bundesweit mobil nach Absprache`},n={arrow:`<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4"/></svg>`,phone:`<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M6.5 3.5 4.4 5.1c-.5.4-.7 1.1-.4 1.7 2.1 4.5 5.2 7.6 9.7 9.7.6.3 1.3.1 1.7-.4l1.5-2.1-3.3-2-1.3 1.3a11 11 0 0 1-5.6-5.6L8 6.4l-1.5-2.9Z"/></svg>`,clock:`<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.2 2"/></svg>`,handshake:`<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m4 12 3.5-3.5h4l2 2 2-2h4.5L20 12l-4 4-3-3-2 2-4-3Z"/><path d="m7.5 8.5-2-2L3 9l3 3M16.5 8.5l2-2L21 9l-3 3"/></svg>`,shield:`<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 19 6v5c0 4.5-2.8 7.7-7 10-4.2-2.3-7-5.5-7-10V6l7-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>`,mail:`<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M3 5.5h14v9H3zM3.5 6l6.5 5 6.5-5"/></svg>`,whatsapp:`<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M10 2.8a7.2 7.2 0 0 0-6.1 11l-.9 3.3 3.4-.9A7.2 7.2 0 1 0 10 2.8Z"/><path d="M7.4 6.8c.2-.3.4-.3.6-.3h.5c.2 0 .3.1.4.4l.5 1.2c.1.2 0 .4-.1.6l-.4.4c.5 1 1.3 1.7 2.3 2.2l.4-.4c.2-.2.4-.2.6-.1l1.2.5c.2.1.3.2.3.4v.5c0 .2-.1.4-.3.5-.4.3-1 .4-1.5.2-2.8-.7-4.5-2.3-5.2-4.8-.1-.5 0-1.1.3-1.4Z"/></svg>`,check:`<svg aria-hidden="true" viewBox="0 0 20 20"><path d="m4 10 4 4 8-8"/></svg>`,play:`<svg aria-hidden="true" viewBox="0 0 20 20"><path d="m7 4 9 6-9 6V4Z"/></svg>`},r=[{number:`01`,title:`Wände & Innenausbau`,text:`Von der Wandöffnung bis zur fertigen Oberfläche: sauber, gerade und bereit für den Alltag.`,details:[`Wände ausbessern & verputzen`,`Rigips, Paneele & Wandverkleidung`,`Streichen & Raufaser tapezieren`],image:`images/waende-innenausbau.webp`,alt:`HS-AM bei der Ausbesserung einer Wand`,width:1408,height:1920},{number:`02`,title:`Fenster & Türen`,text:`Einbauen, austauschen, einstellen und sauber abschließen. Auch wenn die vorhandene Situation nicht von der Stange ist.`,details:[`Fenster & Türen montieren`,`Binnentüren & Schlösser`,`Silikon, Dichtungen & Nacharbeit`],image:`images/fenster-einsetzen.webp`,alt:`HS-AM beim Einsetzen eines Fensters`,width:1408,height:1920},{number:`03`,title:`Böden & Fliesen`,text:`Laminat, Kunststoff, Fliesen und Untergründe mit ruhigem Verlegebild und sauberen Anschlüssen.`,details:[`Laminat & Kunststoffböden`,`Fliesen, Platten & Mosaik`,`Estrich, Egaline & Übergänge`],image:`images/bodenaufbau-egaline.webp`,alt:`HS-AM beim Glätten eines Bodenaufbaus`,width:1408,height:1920},{number:`04`,title:`Küche, Bad & Einbauten`,text:`Montage, Anpassung und Reparatur dort, wo Präzision sofort sichtbar wird.`,details:[`Küchen & Regale aufbauen`,`Duschkabinen & Wandpaneele`,`Armaturen, Siphons & Dichtungen`],image:`images/kuche-bad-einbauten.webp`,alt:`HS-AM bei der präzisen Ausrichtung eines Einbaus`,width:1408,height:1920},{number:`05`,title:`Montage & Raumservice`,text:`Alles, was einen Raum praktisch und fertig macht. Auch kleine Aufträge sind willkommen.`,details:[`Lampen, Bilder & Rollos`,`Möbel, Küche & Regale`,`Urlaubsservice für Haus & Garten`],image:`images/regalbau-montage.webp`,alt:`HS-AM beim Bau eines passgenauen Regals`,width:1408,height:1920},{number:`06`,title:`Inspektion und Wartung`,text:`Austauschen, anschließen, einstellen und warten. Praktische Hilfe für Haus, Wohnung und Betrieb.`,details:[`Schalter & Glühlampen wechseln`,`Elektrogeräte in Betrieb nehmen`,`Türgelenke, Wasserhähne & Siphons`],image:`images/badarmatur-montage.webp`,alt:`HS-AM bei der Montage einer Badarmatur`,width:1408,height:1920}],i=[{type:`Instandsetzung`,title:`Wasserschaden behoben`,text:`Feuchte Stelle raus, Untergrund wiederhergestellt und der Raum sauber nutzbar übergeben.`,before:[`images/projects/generated/wasserschaden-before.webp`,`Raum mit sichtbarem Wasserschaden vor der Instandsetzung`,1500,1125],after:[`images/projects/generated/wasserschaden-after.webp`,`Raum nach abgeschlossener Instandsetzung des Wasserschadens`,1500,1125]},{type:`Umbau`,title:`Wandöffnung sauber abgeschlossen`,text:`Von einer rohen Öffnung zu einem geraden, ruhigen Übergang, der direkt Teil des Raumes wird.`,before:[`images/projects/generated/wandoeffnung-before.webp`,`Geöffnete Wand während der Umbauarbeiten`,1500,1125],after:[`images/projects/generated/wandoeffnung-after.webp`,`Fertiggestellte Wandöffnung nach dem Umbau`,1500,1125]},{type:`Badmontage`,title:`Duschkabine passgenau montiert`,text:`Glas, Beschläge und Silikon sauber montiert, damit das Bad jeden Tag zuverlässig funktioniert.`,before:[`images/projects/generated/duschkabine-before.webp`,`Dusche vor Einbau der Duschkabine`,1500,1125],after:[`images/projects/generated/duschkabine-after.webp`,`Dusche nach Einbau der Duschkabine`,1500,1125]},{type:`Bodenarbeiten`,title:`Laminat ohne Stolperkanten`,text:`Einen verschlissenen Boden durch ein ruhiges, durchlaufendes Verlegebild mit sauberen Sockelleisten ersetzt.`,before:[`images/projects/generated/laminat-before.webp`,`Unebener, abgenutzter Boden vor der Verlegung`,1500,1125],after:[`images/projects/generated/laminat-after.webp`,`Neu verlegter Laminatboden mit sauberem Abschluss`,1500,1125]},{type:`Küchenmontage`,title:`Küchenfronten wieder bündig`,text:`Schiefe Fronten, lose Griffe und sichtbare Fugen korrigiert, damit die Küche wieder wie aus einem Guss wirkt.`,before:[`images/projects/generated/kueche-before.webp`,`Küchenfronten vor der Nachjustierung`,1500,1125],after:[`images/projects/generated/kueche-after.webp`,`Bündige Küchenfronten nach der Montage`,1500,1125]},{type:`Reparatur`,title:`Tür und Schloss wieder im Lot`,text:`Tür, Scharniere und Schloss geprüft und repariert, damit wieder alles leicht und sicher schließt.`,before:[`images/projects/generated/tuer-schloss-before.webp`,`Tür mit lockerer Garnitur vor der Reparatur`,1500,1125],after:[`images/projects/generated/tuer-schloss-after.webp`,`Gerade eingestellte Tür nach der Reparatur`,1500,1125]},{type:`Oberflächen`,title:`Wand wieder glatt und ruhig`,text:`Löcher, Risse und alte Reparaturen geglättet und mit einer sauberen Oberfläche übergeben.`,before:[`images/projects/generated/wand-reparatur-before.webp`,`Beschädigte Wand vor dem Ausbessern`,1500,1125],after:[`images/projects/generated/wand-reparatur-after.webp`,`Glatte, frisch gestrichene Wand nach der Reparatur`,1500,1125]},{type:`Fliesen & Fugen`,title:`Fugen und Silikon sauber erneuert`,text:`Eine kleine Badarbeit mit großer Wirkung: neue Fugen, neues Silikon und wieder ein frischer Eindruck.`,before:[`images/projects/generated/fliesen-silikon-before.webp`,`Beschädigte Fliesenfugen vor der Erneuerung`,1500,1125],after:[`images/projects/generated/fliesen-silikon-after.webp`,`Erneuerte Fliesenfugen und Silikonabschlüsse`,1500,1125]}],a=[[`20`,`Jahre Erfahrung`,`Seit 2006 persönlich im Einsatz`],[`1.500+`,`Aufträge erledigt`,`Renovierung, Montage und Reparatur`],[`15+`,`Gewerke im Griff`,`Von Wand bis Boden, Küche und Bad`]],o=[[`20 Jahre Erfahrung`,`Seit 2006 persönlich im Einsatz – mit Ruhe, Überblick und dem Blick fürs Detail.`,`images/20-jahre-erfahrung.webp`],[`Qualität garantiert`,`Sauber ausgeführt, ordentlich hinterlassen und direkt geklärt, wenn etwas nicht passt.`,`images/qualitaet-garantiert.webp`],[`Bundesweit mobil`,`In Nordrhein-Westfalen verwurzelt. Mit Transport und Werkzeug kommt HS-AM nach Absprache zu Ihnen.`,`images/bundesweit-mobil.webp`]],s=[[`M`,`M. aus NRW`,`„Direkte Absprache und pünktlich vor Ort. Die Küche war am Ende wirklich sauber ausgerichtet und alles wurde ordentlich hinterlassen.“`],[`S`,`S. aus Essen`,`„Wir hatten mehrere kleine Arbeiten, die sich lange angesammelt hatten. HS-AM hat mitgedacht und alles in einem Termin sauber erledigt.“`],[`A`,`A. aus Bochum`,`„Besonders gut war, dass wir nicht weitergereicht wurden. Eine Person, klare Antwort und eine saubere Übergabe.“`],[`K`,`K. aus Dortmund`,`„Die Wandöffnung und die Anschlüsse sind genau so geworden, wie wir es vorher besprochen hatten. Auch die Nacharbeit war sauber.“`],[`N`,`N. aus NRW`,`„Auch bei einer kleinen Reparatur wurde nicht abgewunken. Schnell eingeschätzt, fair gelöst und danach war wieder Ruhe.“`],[`T`,`T. aus Münster`,`„Professioneller Auftritt und gute Kommunikation. Besonders angenehm war, dass keine halbfertige Baustelle zurückblieb.“`],[`L`,`L. aus Köln`,`„Das Badezimmer hatte mehrere kleine Baustellen gleichzeitig. Die Arbeiten wurden sinnvoll sortiert und Schritt für Schritt erledigt.“`],[`R`,`R. aus Düsseldorf`,`„Vom ersten WhatsApp-Kontakt bis zur fertigen Montage war alles unkompliziert. Die neue Tür sitzt und schließt sauber.“`],[`J`,`J. aus Hannover`,`„Wir brauchten Hilfe bei Boden und Sockelleisten. Das Verlegebild ist ruhig geworden und die Übergänge wirken jetzt wie aus einem Guss.“`],[`E`,`E. aus München`,`„Die Abstimmung über Fotos hat super funktioniert. Vor Ort wurde präzise gearbeitet und die Wohnung ordentlich übergeben.“`],[`P`,`P. aus Frankfurt am Main`,`„Ein Wasserschaden ist schon stressig genug. Die Ursache wurde ruhig eingeschätzt und die Oberfläche danach sauber wiederhergestellt.“`],[`D`,`D. aus Hamburg`,`„Die Wandpaneele sitzen gerade und die Anschlüsse sind sauber gelöst. Man merkt, dass hier nicht einfach schnell zugemacht wird.“`],[`B`,`B. aus Stuttgart`,`„Gute Beratung vor dem Start und klare Aussagen zum Aufwand. Das Ergebnis im Eingangsbereich sieht deutlich hochwertiger aus.“`],[`F`,`F. aus Leipzig`,`„Mehrere Regale mussten angepasst werden, weil nichts ganz gerade war. HS-AM hat gemessen, angepasst und sauber montiert.“`],[`G`,`G. aus Nürnberg`,`„Die Silikonfugen im Bad waren längst überfällig. Jetzt wirkt alles frisch und die Kanten sind gleichmäßig ausgeführt.“`]],c=[[`boden-ausrichten.webp`,`Boden exakt ausrichten`,`Böden & Untergründe`],[`technik-wartung.webp`,`Technik und Wartung`,`Inspektion & Wartung`],[`tueren-fertigstellen.webp`,`Türen professionell fertigstellen`,`Montage`],[`laminat-verlegen.webp`,`Laminat mit Präzision verlegen`,`Bodenverlegung`],[`kueche-ausrichten.webp`,`Küche sauber ausrichten`,`Küchenmontage`],[`wandpaneele-montieren.webp`,`Wandpaneele montieren`,`Wandverkleidung`],[`fliesen-setzen.webp`,`Fliesen gleichmäßig setzen`,`Fliesen`],[`silikon-abziehen.webp`,`Silikon sauber abziehen`,`Bad & Dichtungen`],[`beratung-vor-ort.webp`,`Die Lösung gemeinsam planen`,`Persönliche Beratung`]],l=[[`images/people/hs-am-helmet-blue.webp`,`HS-AM op de bouwplaats`,864,1184],[`images/portfolio/laminat-verlegen.webp`,`HS-AM bij het leggen van een vloer`,1408,1920],[`images/portfolio/wandpaneele-montieren.webp`,`HS-AM bij het monteren van wandpanelen`,1408,1920],[`images/portfolio/kueche-ausrichten.webp`,`HS-AM bij het uitrichten van een keuken`,1408,1920],[`images/portfolio/fliesen-setzen.webp`,`HS-AM bij tegelwerk`,1408,1920]],u=[[`01`,`Bad`,`Duschkabine, Silikon und die letzte saubere Kante.`,`videos/gallery/hs-am-badkamer.mp4`,`images/video-stills/bad.webp`],[`02`,`Beratung vor Ort`,`Gemeinsam klären, was gemacht werden soll und was sinnvoll ist.`,`videos/gallery/hs-am-consulting.mp4`,`images/video-stills/beratung.webp`],[`03`,`Haus-Check`,`Ein praktischer Blick auf die Punkte, die Aufmerksamkeit brauchen.`,`videos/gallery/hs-am-home-check.mp4`,`images/video-stills/haus-check.webp`],[`04`,`Schrank ausmessen`,`Erst genau messen, dann passend montieren.`,`videos/gallery/hs-am-kast-meten-01.mp4`,`images/video-stills/schrank-messen-01.webp`],[`05`,`Schrank montieren`,`Aus Einzelteilen wird ein sauber passendes Ganzes.`,`videos/gallery/hs-am-kast-meten-02.mp4`,`images/video-stills/schrank-messen-02.webp`],[`06`,`Küche`,`Praktische Montage mit Blick auf Ausrichtung und Alltag.`,`videos/gallery/hs-am-keuken.mp4`,`images/video-stills/kueche.webp`],[`07`,`Laminat`,`Ein Boden, der ruhig durchläuft und lange Freude macht.`,`videos/gallery/hs-am-laminaat.mp4`,`images/video-stills/laminat.webp`],[`08`,`Maßarbeit`,`Messen, anpassen und erst danach endgültig montieren.`,`videos/gallery/hs-am-meten-03.mp4`,`images/video-stills/massarbeit.webp`],[`09`,`Wand fertigstellen`,`Eine Wand glatt zu bekommen beginnt bei der richtigen Vorbereitung.`,`videos/gallery/hs-am-muur.mp4`,`images/video-stills/wand.webp`],[`10`,`Wanddekoration`,`Die letzte Montage gibt einem Raum seinen eigenen Charakter.`,`videos/gallery/hs-am-muur-decor.mp4`,`images/video-stills/wanddeko.webp`]],d=[[`01`,`Kurz melden`,`Rufen Sie an oder schicken Sie Fotos und eine kurze Beschreibung per E-Mail.`],[`02`,`Arbeit einschätzen`,`HS-AM klärt persönlich, worum es geht und welcher nächste Schritt sinnvoll ist.`],[`03`,`Sauber umsetzen`,`Der Auftrag wird konzentriert ausgeführt und ordentlich abgeschlossen.`]],f=[[`Schnell`,`Umgehende Rückmeldung auf Anfragen und klare nächste Schritte.`,`clock`],[`Flexibel`,`Individuelle Lösungen für kleine Reparaturen bis zur kompletten Renovierung.`,`handshake`],[`Gründlich`,`Genaue und sorgfältige Arbeit mit sauberer Übergabe am Ende.`,`shield`],[`Verlässlich`,`Klare Absprachen, direkte Kommunikation und ein Ansprechpartner.`,`phone`]],p=[[`Welche Arbeiten übernimmt HS-AM?`,`Renovierungen, Innenausbau, Montage und Reparaturen rund um Fenster, Türen, Wände, Böden, Küche und Bad. Auch Instandsetzungen nach Feuchte- oder Wasserschäden gehören zum Leistungsspektrum.`],[`Übernimmt HS-AM auch kleinere Aufträge?`,`Ja. Auch einzelne Montagen, Ausbesserungen und Reparaturen können angefragt werden. Am schnellsten lässt sich das telefonisch oder anhand einiger Fotos einschätzen.`],[`Wie läuft eine erste Anfrage ab?`,`Sie schildern kurz, was gemacht werden soll. Falls vorhanden, schicken Sie Fotos per E-Mail. Danach bespricht HS-AM direkt mit Ihnen, ob ein Vor-Ort-Termin nötig ist.`],[`Wo ist HS-AM ansässig?`,`HS-AM ist in Nordrhein-Westfalen ansässig und bundesweit mobil. Für eine konkrete Anfrage und die Abstimmung des Einsatzortes schreiben Sie bitte kurz.`],[`Kann ich vorab Fotos schicken?`,`Ja, Fotos helfen bei einer ersten Einschätzung. Schicken Sie sie per E-Mail oder nutzen Sie das Formular und schreiben Sie kurz dazu, was Sie sich wünschen.`],[`Arbeitet HS-AM auch außerhalb von Nordrhein-Westfalen?`,`Ja. HS-AM ist bundesweit mobil unterwegs. Einsatzort, Umfang und Anfahrt werden vorab persönlich abgestimmt.`],[`Wie schnell bekomme ich eine Rückmeldung?`,`HS-AM meldet sich persönlich. Am schnellsten geht es per WhatsApp, besonders wenn es um einen konkreten Termin geht.`],[`Bringt HS-AM Material und Werkzeug mit?`,`Das benötigte Werkzeug und der Transport sind dabei. Material wird je nach Auftrag abgestimmt, damit Sie nur das bekommen, was wirklich passt.`]],m=t=>`
  <article class="service-card">
    <div class="service-card__media">
      <img src="${e(t.image)}" alt="${t.alt}" width="${t.width}" height="${t.height}" loading="lazy" decoding="async" />
      <span>${t.number}</span>
    </div>
    <div class="service-card__content">
      <h3>${t.title}</h3>
      <p>${t.text}</p>
      <ul>${t.details.map(e=>`<li>${n.check}${e}</li>`).join(``)}</ul>
    </div>
  </article>
`,h=(t,n)=>`
  <article class="project-card ${n===0?`project-card--featured`:``}">
    <div class="project-card__copy">
      <p class="eyebrow">${t.type}</p>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </div>
      <div class="project-pair before-after" data-before-after style="--split: 50%">
        <img class="before-after__after" src="${e(t.after[0])}" alt="${t.after[1]}" width="${t.after[2]}" height="${t.after[3]}" loading="lazy" decoding="async" />
        <div class="before-after__before"><img src="${e(t.before[0])}" alt="${t.before[1]}" width="${t.before[2]}" height="${t.before[3]}" loading="lazy" decoding="async" /></div>
        <input class="before-after__range" type="range" min="0" max="100" value="50" aria-label="Vorher und Nachher für ${t.title} vergleichen" />
        <span class="before-after__hint" aria-hidden="true">Ziehen zum Vergleichen</span>
        <span class="before-after__handle" aria-hidden="true"><i></i><i></i></span>
        <span class="before-after__label before-after__label--before">Vorher</span><span class="before-after__label before-after__label--after">Nachher</span>
      </div>
  </article>
`,g=([t,n,r])=>`
  <figure class="portfolio-card">
    <img src="${e(`images/portfolio/${t}`)}" alt="${n}" width="1408" height="1920" loading="lazy" decoding="async" />
    <figcaption><span>${r}</span><strong>${n}</strong></figcaption>
  </figure>
`,_=({number:t,title:n,text:r,poster:i,source:a,alt:o})=>`
  <article class="work-video" data-video-shell>
    <div class="work-video__media">
      <video autoplay muted loop playsinline preload="metadata" data-src="${e(a)}" aria-label="${o}"></video>
    </div>
    <div class="work-video__copy">
      <span>${t}</span>
      <div><h3>${n}</h3><p>${r}</p></div>
    </div>
  </article>
`,v=([t,n,r,i])=>`
  <div class="hero-slide"><img src="${e(t)}" alt="${n}" width="${r}" height="${i}" fetchpriority="${t===l[0][0]?`high`:`low`}" decoding="async" /></div>
`;document.querySelector(`#app`).innerHTML=`
  <div class="page" id="top">
    <a class="skip-link" href="#content">Zum Inhalt springen</a>

    <div class="topline">
      <p>Heimwerker Service in Nordrhein-Westfalen</p>
      <p>Persönlich für Sie da seit 2006</p>
    </div>

    <header class="site-header">
      <button class="header-menu" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Menü öffnen"><span></span><span></span><span></span></button>
      <a class="brand" href="#top" aria-label="HS-AM Startseite">
        <strong class="wordmark">HS-AM</strong>
      </a>
      <nav id="site-navigation" class="site-nav" aria-label="Hauptnavigation">
        <a href="#leistungen">Leistungen</a>
        <a href="#projekte">Projekte</a>
        <a href="#ueber-uns">Über uns</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a class="header-call" href="https://wa.me/491781661615" target="_blank" rel="noreferrer" aria-label="HS-AM über WhatsApp kontaktieren">${n.whatsapp}</a>
    </header>

    <main id="content">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__copy">
          <p class="eyebrow">Renovierung · Montage · Reparatur</p>
          <h1 id="hero-title">Ihr Zuhause.<br><span>Sauber gemacht.</span></h1>
          <p class="hero__lede">Seit 2006 übernimmt HS-AM Arbeiten in Wohnungen und Häusern persönlich. Ein Ansprechpartner für alles, was in den eigenen vier Wänden sauber, passend und fertig werden soll.</p>
          <div class="hero__actions">
            <a class="button button--dark" href="tel:+492099723154">Projekt besprechen ${n.arrow}</a>
            <a class="text-link" href="#leistungen">Leistungen ansehen ${n.arrow}</a>
          </div>
          <ul class="hero__proof" aria-label="Vorteile von HS-AM">
            <li><strong>20 Jahre</strong><span>Erfahrung im Handwerk</span></li>
            <li><strong>Direkt</strong><span>HS-AM als Ansprechpartner</span></li>
            <li><strong>Mobil</strong><span>Bundesweit nach Absprache</span></li>
          </ul>
        </div>

        <div class="hero__media">
          <div class="hero-carousel" data-carousel="hero" aria-label="HS-AM Arbeiten">
            <div class="hero-carousel__rail">${l.map(v).join(``)}</div>
          </div>
          <div class="hero__stamp"><strong>20</strong><span>Jahre<br>Erfahrung</span></div>
        </div>
      </section>

      <section class="stats-strip" aria-label="HS-AM Zahlen">
        ${a.map(([e,t,n])=>`<div class="stat"><strong>${e}</strong><span>${t}</span><small>${n}</small></div>`).join(``)}
      </section>

      <section id="leistungen" class="section services" aria-labelledby="services-title">
        <div class="section-head section-head--split">
          <div><p class="eyebrow">Leistungen</p><h2 id="services-title">Ein Ansprechpartner.<br>Viele Lösungen.</h2></div>
          <p>Von der einzelnen Reparatur bis zur Renovierung eines ganzen Raumes. Fragen Sie einfach an, was bei Ihnen gemacht werden soll. Weitere Arbeiten auf Anfrage.</p>
        </div>
        <div class="service-grid" tabindex="0" aria-label="Leistungen horizontal durchblättern">${r.map(m).join(``)}</div>
        <div class="section-action"><p>Nicht sicher, ob Ihre Arbeit dabei ist?</p><a class="text-link" href="tel:+492099723154">Einfach kurz anrufen ${n.arrow}</a></div>
      </section>

      <section id="projekte" class="section projects" aria-labelledby="projects-title">
        <div class="section-head section-head--light">
          <p class="eyebrow">Ausgewählte Arbeiten</p>
          <h2 id="projects-title">Das Ergebnis<br>spricht für sich.</h2>
          <p>Vorher und nachher – echte Projektbilder zeigen am besten, was saubere Arbeit verändert.</p>
        </div>
        <div class="project-grid" tabindex="0" aria-label="Vorher-Nachher-Projekte horizontal durchblättern">${i.map(h).join(``)}</div>
      </section>

      <section class="section portfolio" aria-labelledby="portfolio-title">
        <div class="section-head section-head--split">
          <div><p class="eyebrow">Portfolio</p><h2 id="portfolio-title">So sieht sauber<br>ausgeführtes Handwerk aus.</h2></div>
          <p>Ein scrollbarer Einblick in verschiedene Arbeiten von HS-AM – von der ersten Maßarbeit bis zur letzten sauberen Fuge.</p>
        </div>
        <div class="portfolio-carousel" data-carousel="portfolio">
          <div class="portfolio-rail" tabindex="0" aria-label="Portfolio-Bilder horizontal durchblättern">
          ${c.map(g).join(``)}
          </div>
          <div class="carousel-dots" data-carousel-dots aria-label="Portfolio navigatie"><button type="button" aria-label="Portfolio Bild 1" aria-current="true"></button><button type="button" aria-label="Portfolio Bild 2"></button><button type="button" aria-label="Portfolio Bild 3"></button></div>
        </div>
      </section>

      <section class="section video-section" aria-labelledby="video-title">
        <div class="section-head section-head--split">
          <div><p class="eyebrow">Video-gallery</p><h2 id="video-title">HS-AM bei der Arbeit.<br>Echt und direkt.</h2></div>
          <p>HS-AM bei der Arbeit. Echt und direkt. Das Video in der Mitte läuft automatisch und wiederholt sich.</p>
        </div>
        <div class="video-slider" data-carousel="videos">
          <div class="video-grid" tabindex="0" aria-label="Video gallery horizontal durchblättern">${u.map(([e,t,n,r,i])=>_({number:e,title:t,text:n,poster:i,source:r,alt:`HS-AM bei ${t}`})).join(``)}</div>
          <div class="carousel-dots" data-carousel-dots aria-label="Video navigatie"><button type="button" aria-label="Video 1" aria-current="true"></button><button type="button" aria-label="Video 2"></button><button type="button" aria-label="Video 3"></button></div>
        </div>
      </section>

      <section class="quality-section" aria-labelledby="quality-title">
        <div class="quality-section__intro">
          <p class="eyebrow">Qualitätsversprechen</p>
          <h2 id="quality-title">Nicht nur fertig.<br>Richtig fertig.</h2>
          <p>HS-AM arbeitet mit einem klaren Anspruch: Was besprochen wird, wird sauber ausgeführt und ordentlich hinterlassen.</p>
        </div>
        <div class="quality-grid">${o.map(([t,n,r],i)=>`<article><div class="quality-card__media"><img src="${e(r)}" alt="${t}" width="768" height="1024" loading="lazy" decoding="async" /></div><div class="quality-card__copy"><span>0${i+1}</span><h3>${t}</h3><p>${n}</p></div></article>`).join(``)}</div>
      </section>

      <section class="section process-section" aria-labelledby="process-title">
        <div class="section-head section-head--split">
          <div><p class="eyebrow">So geht’s</p><h2 id="process-title">Unkompliziert vom ersten Kontakt an.</h2></div>
          <p>Keine Hotline und keine langen Wege. Sie sprechen direkt mit der Person, die Ihre Arbeit ausführt.</p>
        </div>
        <ol class="process-grid">
          ${d.map(([e,t,n])=>`<li><span>${e}</span><h3>${t}</h3><p>${n}</p></li>`).join(``)}
        </ol>
      </section>

      <section class="section testimonial-section" aria-labelledby="testimonial-title">
        <div class="section-head section-head--split">
          <div><p class="eyebrow">Kundenstimmen</p><h2 id="testimonial-title">Wenn es fertig ist, merkt man den Unterschied.</h2></div>
          <p>Kurze Rückmeldungen aus unterschiedlichen Aufträgen. Keine Hochglanzversprechen, sondern das, worauf es im Alltag ankommt: klare Absprache und saubere Übergabe.</p>
        </div>
        <div class="testimonial-rail" tabindex="0" aria-label="Kundenstimmen horizontal durchblättern">${s.map(([e,t,n])=>`<article class="testimonial-card"><div class="testimonial-card__top"><span class="avatar">${e}</span><div><strong>${t}</strong><span class="verified">Kundenfeedback</span></div></div><div class="stars" aria-label="Fünf von fünf Sternen">★★★★★</div><p>${n}</p></article>`).join(``)}</div>
      </section>

      <section id="ueber-uns" class="section about" aria-labelledby="about-title">
        <div class="about__media"><img src="${e(`images/people/hs-am-office.webp`)}" alt="Arsen Movsisyan, Inhaber von HS-AM" width="864" height="1184" loading="lazy" decoding="async" /></div>
        <div class="about__copy">
          <p class="eyebrow">Über uns</p>
          <h2 id="about-title">Handwerk ist persönlich.</h2>
          <p class="about__lead">Arsen Movsisyan steht seit 2006 selbst für HS-AM. Vom ersten Gespräch bis zur fertigen Arbeit bleibt der Kontakt direkt.</p>
          <p>Das bedeutet kurze Absprachen, eine ehrliche Einschätzung und einen Ansprechpartner, der weiß, was vor Ort vereinbart wurde. Gerade bei Arbeiten im eigenen Zuhause ist das genauso wichtig wie das handwerkliche Ergebnis.</p>
          <div class="about__signature"><strong>Arsen Movsisyan</strong><span>HS-AM Heimwerker Service</span></div>
          <a class="button button--light" href="tel:+491781661615">Arsen mobil anrufen ${n.arrow}</a>
        </div>
      </section>

      <section class="section faq" aria-labelledby="faq-title">
        <div class="section-head section-head--split">
          <div><p class="eyebrow">Gut zu wissen</p><h2 id="faq-title">Häufige Fragen.</h2></div>
          <p>Die wichtigsten Antworten vor Ihrer Anfrage. Alles Weitere lässt sich direkt besprechen.</p>
        </div>
        <div class="faq-list">
          ${p.map(([e,t],n)=>`<details ${n===0?`open`:``}><summary><span>${e}</span><i aria-hidden="true"></i></summary><p>${t}</p></details>`).join(``)}
        </div>
      </section>

      <section class="benefits-section" aria-labelledby="benefits-title">
        <div class="benefits-section__intro">
          <p class="eyebrow">Warum HS-AM</p>
          <h2 id="benefits-title">Einfach anfragen.<br>Verlässlich umgesetzt.</h2>
          <p>Wenn zu Hause etwas gemacht werden muss, zählt mehr als nur das Ergebnis. Sie sollen wissen, woran Sie sind – vor, während und nach dem Auftrag.</p>
        </div>
        <div class="benefits-grid">
          ${f.map(([e,t,r])=>`<article class="benefit"><div class="benefit__icon">${n[r]}</div><h3>${e}</h3><p>${t}</p></article>`).join(``)}
        </div>
        <div class="benefits-cta">
          <div><p class="eyebrow">Ihr nächster Schritt</p><h3>Sie haben eine Arbeit im Kopf?</h3><p>Rufen Sie kurz an oder schicken Sie Fotos. HS-AM sagt Ihnen direkt, wie es weitergeht.</p></div>
          <div class="benefits-cta__actions"><a class="button button--accent" href="tel:+492099723154">Jetzt anrufen ${n.arrow}</a><a class="button button--light" href="mailto:${t.email}?subject=Anfrage%20an%20HS-AM">Fotos per E-Mail senden</a></div>
        </div>
      </section>

      <section id="kontakt" class="section contact" aria-labelledby="contact-title">
        <div class="contact__main">
          <p class="eyebrow">Ihr Projekt</p>
          <h2 id="contact-title">Was soll bei Ihnen gemacht werden?</h2>
          <p>Beschreiben Sie kurz die Arbeit. Sie können direkt Bilder mitschicken oder lieber per WhatsApp schreiben – HS-AM meldet sich persönlich.</p>
          <div class="contact__actions">
            <a class="button button--accent" href="tel:+492099723154">Jetzt anrufen ${n.arrow}</a>
            <a class="button button--outline-light" href="mailto:${t.email}?subject=Anfrage%20an%20HS-AM">Fotos per E-Mail senden</a>
          </div>
        </div>
        <form class="contact-form" data-contact-form>
          <div class="form-row">
            <label><span>Name</span><input name="name" autocomplete="name" required /></label>
            <label><span>Telefon oder E-Mail</span><input name="contact" autocomplete="email" required /></label>
          </div>
          <div class="form-row">
            <label><span>Ort</span><input name="location" autocomplete="address-level2" placeholder="Stadt oder Region" /></label>
            <label><span>Worum geht’s?</span><select name="service"><option>Bitte auswählen</option>${r.map(e=>`<option>${e.title}</option>`).join(``)}<option>Andere Arbeit</option></select></label>
          </div>
          <label><span>Kurz beschreiben</span><textarea name="message" rows="5" required placeholder="Was soll gemacht werden? Fotos können Sie danach per E-Mail senden."></textarea></label>
          <label class="form-check"><input type="checkbox" required /><span>Ich bin damit einverstanden, dass HS-AM meine Angaben zur Beantwortung der Anfrage verwendet.</span></label>
          <button class="button button--dark" type="submit">Anfrage per E-Mail senden ${n.arrow}</button>
          <p class="form-note" data-form-note>Beim Absenden öffnet sich Ihr Mailprogramm mit der fertigen Anfrage.</p>
        </form>
        <address class="contact__details">
          <a href="tel:+492099723154"><span>Telefon</span><strong>${t.phone}</strong></a>
          <a href="tel:+491781661615"><span>Mobil</span><strong>${t.mobile}</strong></a>
          <a href="mailto:${t.email}"><span>E-Mail</span><strong>${t.email}</strong></a>
          <a href="#top"><span>Einsatzgebiet</span><strong>${t.serviceArea}</strong></a>
          <a href="https://www.google.com/maps/search/?api=1&query=Wilhelmine-Victoria-Str.+6+45883+Gelsenkirchen" target="_blank" rel="noreferrer"><span>Adresse</span><strong>${t.address}<br>${t.postal}</strong></a>
        </address>
      </section>
    </main>

    <footer class="site-footer">
      <strong class="wordmark wordmark--footer">HS-AM</strong>
      <p>Renovierung · Montage · Reparatur<br>Nordrhein-Westfalen · bundesweit mobil · Seit 2006</p>
      <div><a href="tel:+492099723154">${t.phone}</a><a href="mailto:${t.email}">${t.email}</a></div>
      <p>© ${new Date().getFullYear()} HS-AM</p>
    </footer>

    <div class="mobile-call" aria-label="Direkt contact opnemen">
      <a href="#kontakt" aria-label="Per e-mail contact opnemen">${n.mail}<span>Contact</span></a>
    </div>
  </div>
`;var y=(e,t)=>e.classList.toggle(`is-playing`,t);document.querySelectorAll(`[data-video-shell]`).forEach(e=>{let t=e.querySelector(`video[data-src]`);t.addEventListener(`play`,()=>y(e,!0)),t.addEventListener(`pause`,()=>y(e,!1)),t.addEventListener(`ended`,()=>y(e,!1))});var b=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target,n=t.querySelector(`video[data-src]`);if(!e.isIntersecting||e.intersectionRatio<.62){n.pause(),y(t,!1);return}document.querySelectorAll(`[data-video-shell]`).forEach(e=>{e!==t&&(e.querySelector(`video`)?.pause(),y(e,!1))}),n.dataset.loaded||(n.src=n.dataset.src,n.dataset.loaded=`true`,n.load()),n.play().catch(()=>{})})},{threshold:[.62]});document.querySelectorAll(`[data-video-shell]`).forEach(e=>b.observe(e)),document.querySelectorAll(`[data-before-after]`).forEach(e=>{let t=e.querySelector(`.before-after__range`);t.addEventListener(`input`,()=>{e.style.setProperty(`--split`,`${t.value}%`)})});var x=(e,t)=>{let n=e.querySelector(`[class$="-rail"], [class$="__rail"], .video-grid`),r=[...n.children],i=[...e.querySelectorAll(`[data-carousel-dots] button`)],a=0,o,s=()=>{let e=r.length<4?a:Math.round(a/(r.length-1)*(i.length-1));i.forEach((t,n)=>t.setAttribute(`aria-current`,n===e?`true`:`false`))},c=(e,t=!0)=>{a=(e+r.length)%r.length;let i=r[a],o=i.offsetLeft-(n.clientWidth-i.clientWidth)/2,c=n.scrollWidth-n.clientWidth;n.scrollTo({left:Math.max(0,Math.min(o,c)),behavior:t?`smooth`:`auto`}),s()};i.forEach((e,t)=>e.addEventListener(`click`,()=>{c(Math.round(t/(i.length-1)*(r.length-1)))})),n.addEventListener(`scroll`,()=>{window.clearTimeout(o);let e=n.getBoundingClientRect().left+n.clientWidth/2;a=r.reduce((t,n,i)=>Math.abs(n.getBoundingClientRect().left+n.getBoundingClientRect().width/2-e)<Math.abs(r[t].getBoundingClientRect().left+r[t].getBoundingClientRect().width/2-e)?i:t,0),s(),o=window.setTimeout(()=>{o=window.setInterval(()=>c(a+1),t)},7e3)},{passive:!0}),o=window.setInterval(()=>c(a+1),t),s()};document.querySelectorAll(`[data-carousel]`).forEach(e=>x(e,e.dataset.carousel===`videos`?6e3:4600));var S=document.querySelector(`.header-menu`),C=document.querySelector(`#site-navigation`);S?.addEventListener(`click`,()=>{let e=C.classList.toggle(`is-open`);document.body.classList.toggle(`menu-open`,e),S.setAttribute(`aria-expanded`,String(e)),S.setAttribute(`aria-label`,e?`Menü schließen`:`Menü öffnen`)}),C?.querySelectorAll(`a`).forEach(e=>e.addEventListener(`click`,()=>{C.classList.remove(`is-open`),document.body.classList.remove(`menu-open`),S?.setAttribute(`aria-expanded`,`false`),S?.setAttribute(`aria-label`,`Menü öffnen`)})),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(C?.classList.remove(`is-open`),document.body.classList.remove(`menu-open`),S?.setAttribute(`aria-expanded`,`false`),S?.setAttribute(`aria-label`,`Menü öffnen`))}),document.querySelector(`[data-contact-form]`)?.addEventListener(`submit`,e=>{e.preventDefault();let n=e.currentTarget,r=Object.fromEntries(new FormData(n).entries()),i=`Anfrage an HS-AM von ${r.name}`,a=[`Name: ${r.name}`,`Kontakt: ${r.contact}`,`Ort: ${r.location||`Nicht angegeben`}`,`Leistung: ${r.service||`Nicht angegeben`}`,``,r.message].join(`
`),o=n.querySelector(`[data-form-note]`);o&&(o.textContent=`Ihr Mailprogramm wird geöffnet. Die Anfrage ist bereits vorbereitet.`),window.location.href=`mailto:${t.email}?subject=${encodeURIComponent(i)}&body=${encodeURIComponent(a)}`});var w=document.querySelector(`.page`),T=()=>w.classList.toggle(`show-mobile-call`,window.scrollY>640);T(),window.addEventListener(`scroll`,T,{passive:!0});