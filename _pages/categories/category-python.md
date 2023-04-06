---
title: "Python Tips"
layout: archive
permalink: categories/python
author_profile: true
sidebar_main: true
---
<small style="font-size:x-small"><a href='/'> Home </a> / <a href='/categories'> Categories</a> / Python</small>
{% assign posts = site.categories.Python %}
{% for post in posts%} 
{% include archive-single.html type=page.entries_layout %}
{% endfor %}