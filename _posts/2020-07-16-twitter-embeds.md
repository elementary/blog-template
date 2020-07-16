---
title: Twitter “Embeds” While Respecting Privacy
description: A demo!
author: cassidyjames
---
Check it out:

```liquid
{% include twitter-card.html
  name="Twitter"
  account="@twitter"
  avatar="/images/twitter.svg"
  href="https://twitter.com/"
  timestamp="3:59 PM · Jul 16, 2020"
  contents="A fake tweet, as a demo"
%}
```

Turns into:

{% include twitter-card.html
  name="Twitter"
  account="@twitter"
  avatar="/images/twitter.svg"
  href="https://twitter.com/"
  timestamp="3:59 PM · Jul 16, 2020"
  contents="A fake tweet, as a demo"
%}

It's even light/dark style aware!
