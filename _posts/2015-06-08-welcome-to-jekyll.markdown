---
layout: post
title:  "Hello world"
date:   2015-06-08 17:59:24
categories: jekyll update
---

Hello worldz!

Just trying out some jekyll stuff and some embedding yeah.

<script>
    var channel_name = 'alphatest';

    (function() {
        var sml = document.createElement('script'); sml.type = 'text/javascript'; sml.async = true;
        //sml.src = '//' + channel_name + '.net/embed.js';
        sml.src = "//localhost:4000/small-talk/js/embed.js";
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(sml);
    })();
</script>
<div id="small_talk"></div>
