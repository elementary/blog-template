---
title: "Building the New Antares Programming Website"
description: "Bago na ang Website ng Antares Programming. Paano ito ginawa, at ano ang mga bagong features nito?"
image: /images/posts/building-the-new-antares-programming-website-1x.jpg
author: teacherbuknoy
slug: /building-the-new-antares-programming-website/
tags: [meta, web development]
---

## Bakit kailangan ng bago?

Bilang part ng goal natin na maka-avail ng sarili nating domain name, gumawa ako ng bagong [Github organization](https://github.com/antaresprogramming/) at [repository](https://github.com/antaresprogramming/) para sa site. Ginawa ko ito dahil:

- isang separate na entity ang Antares Programming, kaya hindi ito dapat nakahalo sa mga repositories ng personal kong Github account. Hindi ito isa sa mga personal projects ko. Instead, nakikita ko ito as a project na puwedeng lumaki at magkaroon ng sarili nitong team in the future. Para maging mas madali ang process kapag dumami na ang gumagamit ng code, kailangan nito ng sarili nitong account.
- sa paparating na bagong features ng Antares Programming, kakailanganin ang separate na repositories para sa mga downloadable files. Isang halimbawa nito ang paparating na <i>Courses by Antares Programming</i>, kung saan puwede mong i-download ang code files na ginamit sa mga video tutorials.
- posibleng magkaroon pa ng ibang projects ang Antares Programming.

## Ang bagong site ng Antares Programming

Gawa ang dating site sa [Hexo](https://hexo.io/), isang static blog engine sa Node.JS. Naging useful sa akin ang blog framework na ito. Pero kailangan mong magkaroon ng dalawang git branch, isa para sa development ng site, at isa pa para sa rendered na HTML, CSS, at JavaScript files. Kapag may babaguhin ka sa site, kailangan mong i-code ang feature, pagkatapos ire-render mo iyong static files (HTML, CSS, at JavaScript), at pagkatapos, ipu-push mo ang changes mo sa dalawang magkaibang branch.

Hindi naman iyan ganoong kalaking problema. Pero may mas maganda palang way. Diyan papasok ang [Jekyll](https://jekyllrb.com/), isang static site generator para sa mga blog. Ang maganda sa Jekyll, integrated na ito agad sa [Github Pages](https://pages.github.io/), na ginagamit natin sa pagho-host ng buong site. At hindi gaya ng sa Hexo, hindi na kailangan ng dalawang magkaibang branch para sa development at sa rendered files. Ang kailangan mo lang i-push sa Github repository ay ang development files. Once na na-upload na ito sa Github, ipa-process na ito ng Github Pages. Oo, Github Pages mismo ang magre-render ng pages mo. Kaya naman ito na ang napili kong gamitin para sa redesign ng Antares Programming Web site. At mas mabuti ito kaysa sa pagha-hard code ng HTML, CSS, at JavaScript (na talagang balak kong gawin no'ng una kasi gusto kong mahirapan.😂)

## Ang advantages ng Jekyll + Github Pages
Sa simula pa lang, gusto ko nang makontrol fully ang development ng blog site. At sa tulong ng Jekyll at ng [blog template](https://github.io/elementary/blog-template) mula sa elementary OS team, nakagawa agad ako ng fully functional na blog site sa loob lang ng humigit-kumulang 12 hours. Totoo, gawa sa Ruby ang Jekyll, pero hindi ko kinailangang mag-code ng kahit isang line lang ng Ruby<sup><a href="#ftn-1" id="fsrc-1">1</a></sup>. Kung mapapansin ninyo, binago ko lang ang styles at ilang font ng [elementary OS blog](https://blog.elementary.io/). Nakatulong ito para matapos ko agad ang theme.

Bukod sa mabilis na theme development, marami ring ibang benefits ang Jekyll:
- <b>Bilis.</b> Dahil static assets ang sine-serve ng Jekyll, hindi na nito kailangang kumontak sa isang database, i-process ang content, i-recompile ang mga files etc. Diretsong HTML, CSS, at JavaScript na ang ipapadala ng Github Pages papunta sa browser. Gaya sa Hexo, hindi ko na kailangang alalahanin ang server ko, dahil wala ako no'n.
- <b>Editing.</b> Dahil Github Pages ang magpa-process ng files ko, hindi ko na kailangan ng desktop o laptop para magsulat ng bagong blog post. Ang kailangan ko lang gawin ay gumawa ng bagong markdown file sa Github repository at i-commit iyon. Pagkatapos, Github Pages na ang bahala sa iba. Hindi ito posible sa Hexo, dahil para makapagdagdag ng posts, kailangan mong i-compile nang sarili mo sa isang laptop o desktop ang buong site.
- <b>Total control.</b> Dahil ako rin ang nagsusulat ng code para sa Web site, kontrolado ko lahat hanggang sa pinakamaliliit na detalye. Isa rin ito sa nagustuhan ko sa Hexo noon.
- <b>Privacy.</b> Kumpara sa mga blog platforms na gaya ng Wordpress, Tumblr, at Medium, may magandang privacy ang Jekyll. Dahil ako ang may kontrol sa site, at static lang ito, puwedeng maging privacy-oriented ang blog ng Antares Programming&mdash;walang JavaScript mula sa third parties, walang analytics, walang tracking mula sa mga social networking platforms, etc. Ang nandito lang ay kung ano ang mahalaga: ang content.

> Walang JavaScript mula sa third parties, walang analytics, walang tracking mula sa mga social networking platforms, at iba pa. Ang nandito lang ay kung ano ang mahalaga: ang content.

Dahil nasa Github din ang code, magiging mas madali ang pagkakaroon ng guest authors sa Antares Programming. Kung gusto mong magsulat ng article para sa blog, magpu-pull request ka lang sa repository, at pagkatapos ng review sa article mo, mapa-publish na ito agad-agad pagkatapos na ma-accept ang pull request mo.

## Mga bagong features na wala noon
Kahit static lang ang blog, hindi ito kinukulang sa mga features.
- <b>[RSS feed](/feed.xml)</b> para puwede ka nang maging updated sa mga bagong post sa blog.
- <b>Responsive design</b> salamat sa template ng elementary OS blog.
- <b>Automatic dark mode</b> kung sinu-support ito ng browser at operating system mo. Again, kasama ito sa features ng elementary OS blog template.
- <b>Pagse-share sa social media</b> nang hindi nata-track ng mga social networking sites.

Isa rin sa mga nagustuhan ko ay ang binanggit ni [Cassidy James Blaede](https://twitter.com/cassidyjames) sa [post niya](https://blog.elementary.io/welcome-to-the-new-blog/) sa elementary OS blog tungkol sa decision nila na gumamit din ng Jekyll:

> One thing we've actively chosen <em>not</em> to implement or support is some sort of commenting system... it is just another place for people to worry about an account, for us to moderate, to track users, and to slow down the blog.

Si Cassidy James Blaede ay isa sa mga UX designer na nirerespeto ko dahil sa mga ginawa niya sa user experience design ng elementary OS. Alam niya kung ano ang kailangan at hindi kailangan ng users. At dahil nakita kong may sense ang sinasabi niya, hindi na rin ako naglagay ng commenting system. Kung sa bagay, may [Facebook page](https://facebook.com/antaresprogramming) na rin naman tayo, at puwedeng doon na lang magkaroon ng discussion kung mayro'n man.

## Conclusion
Open sourced ang lahat ng code sa Antares Programming Web site. Kung gusto mong tumulong sa pagde-develop nito, o kung gusto mong magsulat ng article para sa Antares Programming, pumunta ka lang sa [Github repository ng Antares Programming Web site](https://github.com/antaresprogramming/antaresprogramming.github.io).

## Footnotes
1. <a id="ftn-1" href="#fsrc-1">[^]</a> Matagal na akong aware tungkol sa Jekyll. Pero iniiwasan ko ito dahil akala ko no'ng una, kailangan ko munang mag-aral ng Ruby (dahil hindi ako nagbabasa ng documentation 😂).
