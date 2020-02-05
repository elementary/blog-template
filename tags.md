---
---
<section class="tag-list">
{% assign tags = site.tags | sort %}
{% for tag in tags %}
  {% if tag[1].size > 1 %}
    <h1 id="{{ tag[0] | replace: ' ', '-' }}">#{{ tag[0] }}</h1>
    {% assign posts = tag[1] | sort | reverse %}
    {% for post in posts %}
      {% unless post.hidden %}
        {% include featured.html post=post %}
      {% endunless %}
    {% endfor %}
  {% endif %}
{% endfor %}
</section>
