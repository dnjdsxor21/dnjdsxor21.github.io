---
title: "Blog settings"
layout: archive
permalink: categories/blog
author_profile: true
sidebar_main: true
---
<small style="font-size:x-small"><a href='/'> Home </a> / <a href='/categories'> Categories</a> / Blog</small>
{% assign posts = site.categories.Blog %}
{% for post in posts%} 
{% include archive-single.html type=page.entries_layout %}
{% endfor %}