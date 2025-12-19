---
title: Phishing Email Analysis in a SOC Environment
category: Malware Analysis
description: Step-by-step breakdown of analyzing sophisticated phishing campaigns targeting finance departments.
date: 2024-09-05
layout: layouts/post.njk
tags: blog
---

<h3 class="tech-section-title">Email Analysis Steps</h3>
<p>Step-by-step breakdown of analyzing a sophisticated phishing email targeting finance department credentials.</p>

<ul class="step-list">
    <li><strong>Header Inspection:</strong> Identified SPF/DKIM failures and suspicious X-originating IPs.</li>
    <li><strong>Payload Analysis:</strong> Extracted an embedded macro from a .docm file using Olevba.</li>
    <li><strong>Risk Assessment:</strong> Determined the campaign was part of a broader industry-wide targeting effort.</li>
    <li><strong>Response:</strong> Updated SPAM filters and performed a global search/purge of the specific email hash.</li>
</ul>
