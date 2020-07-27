---
layout: lesson
title: HyperText Markup Language
subtitle: HTML Essentials
summary: "Ano ang HTML, at ano ang lugar nito sa Web development?"
section: 0
permalink: /courses/html-essentials/01-hypertext-markup-language/
video: https://github.com/antaresprogramming/code/
has_downloads: true
code: https://github.com/antaresprogramming/code/
next_lesson: 02-html-syntax/
---

## HyperText Markup Language

Ang HyperText Markup Language ang ginagamit para gumawa ng mga Web sites.

Makikita sa maraming lugar ang HTML. Ginagamit ito sa mga Web site, app, at iba pang software—sa kahit na anong bagay na gumagamit ng Web technology. HTML ang nagsisilbing channel ng content: mga salita, image,video at audio, forms, at mga interactive experience. Ito ang pundasyon kung saan nakabase ang lahat ng iba pang Web technologies.

Nagsasalita ang mga tao ng mga wika na ginagamit ng tao. Mayroon tayong milyon-milyong mga salita, at marami sa mga ito ang nagbabago ang kahulugan depende sa konteksto, paraan ng pagkakasabi, emosyon, pagbigkas, at iba pa. Kaya nga inaabot tayo ng maraming taon para maging fluent sa isang wika.

May wika rin ang mga computer. Ang mga <b><i>programming language</i></b> ay iba sa wika nating mga tao. Mas logical ang mga ito at consistent. Hindi nagbabago-bago ang kahulugan ng mga salita nito. Ang Internet ay isang lugar kung saan nagtatagpo ang wika ng tao at mga programming language. Ginagamit ng mga tao pati na ng iba pang mga computer software ang mga content na makikita online. Halimbawa, ang artificial intelligence ay isang branch ng computer science na tungkol sa pagtuturo sa mga computer na unawain ang mga ginagawa ng tao. Paano kung sa Web, may puwede tayong gawin para siguruhin na tama ang mauunawaan ng mga computers tungkol sa mga ginagawa ng tao? Para diyan ginawa ang HTML

Ang HTML ay isang paraan para malagyan ng label , o i-markup, ang content para pagtagpuin ang mga wika ng tao at mga programming language. Sa course na ito, pag-uusapan natin kung paano tamang magagamit ang HTML para makagawa ng mga Web sites nang mabilis.

### Ang lugar ng HTML sa Web development
Gawa ang World Wide Web sa tatlong programming languages: <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, at JavaScript.

Ang <dfn>HyperText Markup Language</dfn> ay isang language na nagle-label, or nagma-"mark up", sa content ng isang Web page. Basically, sinasabi nito sa browsers kung nasaan ang mga parts ng isang Web page, at kung ano ang ibig sabihin ng mga ito. Binibigyan din tayo ng HTML ng ability na gamitin ang maraming functionality na built-in na sa Web browsers. Puwede mong gamitin ang mga functionality na iyan sa sarili mong Web pages gamit ang ilang specific na HTML.

Ang <dfn>Cascading Style Sheets</dfn> naman ang nagbibigay ng visual styling at layout sa mga Web pages. Gamit ang CSS, puwede nating baguhin ang design ng isang Web page, kasama na ang mga color, typography, at mga size. Puwede rin tayong maglagay ng mga animation, at interactions, sa mga Web page natin gamit ang CSS.

Ginagamit naman ang <dfn>JavaScript</dfn> para magdagdag ng interactivity na hindi pino-provide by default ng Web browsers. Hindi laging kailangan ang JavaScript, pero habang nagiging mas complex ang user interface ng Web pages, mas lalong nagiging kailangan ang JavaScript.

Kung galing ka sa ibang programming languages, puwede kang ma-confuse dito. <q>Bakit kailangang maraming programming language ang gagamitin? Bakit hindi puwedeng isa lang?</q> Iba kasi ang Web platform sa ibang mga software. Puwede kang gumawa ng Web site ngayon, at maaasahan mong gagana pa rin iyan sa susunod na limang taon kahit hindi ka magdagdag ng updates. Puwede kang mag-code ng Web site ngayon na gagana pa rin kahit sa mga lumang computers at browsers from ten years ago. Gumagana ang Web sa maraming computers at devices: Windows, mac, Linux, Android, iOS, eBook readers, TV, relo, mga home appliances, at kahit mga devices na hindi mo alam na nag-e-exist pala. Napakalawak ng range ng mga device na gumagamit ng HTML, CSS, at JavaScript, in some form or another. Iyan mismo ang dahilan kung bakit naimbento ang Web platform, ang makagawa ng way para makapag-share tayo ng information sa isa't isa kahit na magkakaiba tayo ng computers o device na ginagamit. 'Di ba ang angas niyan? Posible lang iyan dahil mayroon tayong tatlong programming languages, bawat isa ay may ginagawang isang part lang ng trabaho.

Simple lang ang HTML sa structure nito. Wala itong programming logic, loops, at functions. Instead, tinatawag itong isang <dfn><i>declarative language</i></dfn>. <em>Dine-declare</em> lang ng HTML, sinasabi lang nito na <q>Paragraph ito, ito naman heading. Lagyan mo ng emphasis itong word na 'to. Gawin mong link ito. Maglagay ka ng button at text box dito.</q> Dahil sa simplicity nito, napaka-resilient ng HTML. Kapag may mali sa HTML, kapag may nawala o may namali ng spelling, <!-- sa video gawin mo 'tong conversational: "Eh, may kamukha naman, huhulaan ko na lang kung ano ibig sabihin nito, idi-display ko pa rin 'tong page na 'to." --> gagawin nito ang best nito para i-interpret ang gustong sabihin ng code at idi-display pa rin nito ang HTML page. Kayang tumagal ng HTML sa maraming errors, at makakapag-display pa rin ito ng output.

Kumpara naman sa HTML, mas may logic na kailangan sa CSS, kaya mas fragile ito. Pero dahil din diyan, mas marami itong abilities, at mas powerful ito kumpara sa HTML. At kaya pa rin nitong maka-survive sa mga errors. Kapag may mali sa isang CSS code, lalagpasan lang ng browser ang part lang na may error. Hindi nito ia-apply ang styling na iyon sa page. Pero itutuloy niya ang pag-a-apply ng CSS na walang problema. Puwedeng hindi maging tama ang hitsura ng Web page mo, pero gagawin ng browser ang best nito para gumana pa rin ang malaking bahagi ng Web page kahit may errors.

JavaScript ang may pinakamaraming capabilities sa tatlo. Marami itong kayang gawin na hindi kaya ng CSS. Pero ito rin ang pinaka-fragile. Kung may mali sa code, o kung masyado nang luma ang browser para maintindihan kung ano ang ibig sabihin ng code na iyon, titigil ang browser. Hindi ie-execute ng browser ang JavaScript na iyon. Hindi huhulaan ng browser kung ano ang gusto sanang gawin ng JavaScript code na iyon.

Dahil may tatlong magkakaibang languages ang Web platform, may kakayahan tayo bilang developers na pagsama-samahin ang mga ito para sabay-sabay na mabigyan ang Web page natin ng resilience at maraming capabilities. Sa course na ito at sa mga susunod pa na tungkol sa CSS at JavaScript, laging tandaan na dapat mong unahin ang resilience, ang tibay, ng Web pages mo. Ito ang dapat mong unahin. Siguruhin na gagana sa pinakamaraming devices at computers ang Web site mo hangga't posible. At pagkatapos, saka ka magdagdag ng additional features. Kung puwede mong gawin ang isang functionality sa HTML, gawin mo iyon sa HTML. Kung hindi, saka mo lang gagamitin ang CSS at JavaScript.

Madalas i-take for granted ang HTML. Karamihan sa mga nag-aaral ng Web development, pinapaspasan lang ang pag-aaral ng HTML. Worth it ang oras na gagamitin mo para pag-aralan ang lahat ng HTML elements at attributes para magamit mo nang buo ang lahat ng kaya nitong gawin.
