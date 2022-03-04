---
---
# Tags

<section class="tag-list">
{% assign tags = site.tags | sort %}
{% for tag in tags %}
  {% if tag[1].size > 1 %}
    {% assign id = tag[0] | replace: ' ', '-' %}
    <a href="#{{ id }}"><h2 id="{{ id }}">#{{ tag[0] }}</h2></a>
    {% assign posts = tag[1] | sort | reverse %}
    <div class="latest">
      {% for post in posts %}
        {% unless post.hidden %}
          {% include featured.html post=post %}
        {% endunless %}
      {% endfor %}
    </div>
  {% endif %}
{% endfor %}
</section>
