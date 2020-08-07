---
title: "Design Decisions sa Bagong Web Site&mdash;Part&nbsp;1"
description: "Mga design decision na ginawa sa bagong Web site ng Antares Programming"
image: /images/posts/design-decisions-1/cover.jpg
author: teacherbuknoy
slug: /design-decisions-part-1/
tags: [design, meta]
---
Bilang bahagi ng redesign ng Antares Programming, maraming pagbabago sa Web site. Hindi lang ito re-design; isa itong <i>rebuilding from scratch</i>. Goal ng redesign na &rsquo;to na maging accessible sa lahat at enjoyable gamitin ang buong website.

Isa sa mga goals ng redesign na ito ay makikita hindi lang sa visual aspect. Kasama rin dito estilo ng pagsulat at ang semantics ng HTML. Pero sa post na ito pag-usapan lang natin ang ilan sa maliliit na visual styling na ginamit sa redesign.

## Links sa bagong tab
Kapag nagli-link ang isang article sa ibang websites, gumagamit tayo ng `target="_blank"` attribute sa `<a></a>` tag para bumukas ito sa bagong tab. Magiging mas convenient ito para sa user, especially sa mga longform article na may mahahabang bodies ng text na baka gusto pang ituloy na basahin ng user. May mga kaso kung saan naglalagay tayo ng link papunta sa isang related na content na nasa ibang site. Puwede itong isang article, video sa YouTube, o image sa isang <abbr title="Content Delivery Network">CDN</abbr>. Sa mga kasong iyan, malamang na gusto lang ng mambabasa na tingnan kung ano ang nasa link, pero itutuloy pa rin niya ang pagbabasa pagkatapos. Sa site na ito, may bilog itong indicator.

## Writing guidelines
Simula pa sa [lumang Antares Blog](https://celestialcinnamon.github.io/antares-blog/), may writing guidelines na para sa mga article. Pero kung babasahin ninyo iyon, may pagkaistrikto masyado. Sa tingin ko, hindi na bagay sa bagong image ng Antares Programming ang gano'ng writing guidelines. 

May dine-develop ako ngayong writing guidelines base sa lumang guidelines. Para sa writing guidelines na ito, titingin tayo sa maraming iba't ibang existing na writing guidelines para sa inspiration. Kasama rito ang writing guidelines na galing sa [Smashing Magazine](https://smashingmagazine.com/) na pinagbasehan ng lumang writing guidelines.

Sa hinaharap din, magkakaroon ng web application na magba-validate ng mga articles bago ito i-publish. Mas mapapadali nito ang pagsunod sa bagong writing guidelines. Mahalaga na magkaroon ng writing guidelines

- <b>para maging accurate ang transfer ng impormasyon</b>. Ayaw nating maging grammar nazi, pero masisigurong tama ang pagkakaintindi ng reader sa nakasulat kung tama ang grammar nito (unless na lang siyempre kung hindi pa gano'n ka-fluent sa Filipino ang mambabasa, wala na tayong magagawa sa part natin bilang writers);
- <b>para magkaroon ng consistency</b>. Ayaw nating magtunog na parang iisang tao lang ang nagsusulat sa Antares Programming kahit na iba-iba ang authors nito. Pero gusto nating maging consistent sa mga articles pagdating sa mga part ng punctuation marks, mga rules sa pluralization, at iba pa. Mostly, technical na mga bagay ang inaayos ng bagong writing guidelines; at
- <b>para magkaroon ng limit sa <q>personality</q></b>. Gusto natin na maging friendly ang mga articles sa Antares Programming, pero hindi sa puntong magpapakabalbal ito. Makakaimpluwensya ang wikang ginagamit ng writer hindi lang sa image niya bilang author ng article, kundi pati na sa credibility ng isinulat niya at sa <em>brand ng platform kung saan makikita ang gawa niya</em>. May mine-maintain tayong credibility.

## Conclusion
Sa mga susunod na articles, magsusulat pa ako tungkol sa design decisions na ginawa, o gagawin pa lang, para sa Antares Programming.
