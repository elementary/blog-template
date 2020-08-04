---
title: "Creating Links to Up One Directory"
description: "Isang quick post para maipakita kung paano magagamit ang '..' sa mga anchor tags."
author: teacherbuknoy
slug: /creating-links-to-up-one-directory/
image: /images/posts/creating-links-to-up-one-directory/cover.png
tags: [web development]
---

Habang kino-code ang bagong Web site ng Antares Programming, specifically ang part para sa courses, nagkaroon ako ng maliit na problema. Sa lessons page, may dalawa akong link na nakalagay: isang link pabalik sa course page, at isang link papunta sa susunod na lesson.

<img class="img--borderize" src="/images/posts/creating-links-to-up-one-directory/01.png" height="74" width="709" />

Para sa link na <i>Bumalik sa course page</i>, wala akong way para makuha ang link ng course ng lesson na tinitingnan ngayon ng user. Naghanap ako online ng function o Liquid HTML na puwede kong gamitin, pero wala akong nahanap.

Literal na inabot ako ng more or less 30 minutes bago ko na-realize, <q>Puwede ko palang gmitin 'yong dalawang tuldok!'</q>

## Relative URLs

May dalawang types ng <abbr title="Uniform Resource Locator">URL</abbr>, ang absolute at relative. Ang absolute URLs ay mga exact na addresses at file paths gaya ng `https://antaresprogramming.github.io/` o kaya naman ay `https://github.com/antaresprogramming/antaresprogramming.github.io`.

Ang mga relative URLs naman ay mga URL na nakadepende sa path ng file na gumagamit nito. Halimbawa nito ang `/home/maniczirconium/Documents`. Relative URL ito dahil nakadepende ito sa location ng root directory (`/`). Relative URL din ang `./file.png` dahil nakaangkla ang buong URL sa path ng kasalukuyang file o directory.

Sa problema ko, kailangan kong bumalik sa course page. At naalala ko ang structure ng URLs ng Web site na ito:

<pre>https://antaresprogramming.github.io/courses/&lt;COURSE>/&lt;LESSON>/</pre>

Sa pattern na ito, puwede kong makuha ang link ng course page gamit ang <i>up one directory</i> operator<sup><a href="#ftn-1" id="fsrc-1">1</a></sup>. For example, kunwari may ganito tayong folder structure:

<pre>
antaresprogramming.github.io/
 |
 + blog
 + courses
     |
     + html-essentials
         |
         + 01-hypertext-markup-language
         + 02-html-syntax
</pre>

Kung nasa page na `01-html-syntax` ang reader, paano siya makakabalik sa course page (`html-essentials`)? Simple lang. Magdadagdag tayo ng dalawang tuldok sa dulo ng URL:

<pre>/courses/html-essentials/02-html-syntax/<mark>..</mark></pre>

Dahil sa dalawang tuldok na iyan, lalabas ng isang directory ang browser, kaya mula sa `02-html-syntax`, babalik siya sa `html-essentials`. Napakasimpleng bagay nito, at madalas ko rin itong gamitin sa command-line gamit ang `cd ..` para lumabas sa directory. Pero inabot ako ng kalahating oras bago ko na-realize. Talagang kahit gaano ka na katagal nagpo-program, may mga instances pa rin na lutang ka. 😂

1. <sup><a href="#fsrc-1" id="ftn-1">^</a></sup> Hindi ako sigurado kung <q>operator</q> ba talaga dapat ang itawag dito. For the purposes of this write-up, tawagin natin siyang operator. 
