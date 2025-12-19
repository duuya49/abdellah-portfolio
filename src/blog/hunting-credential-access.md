---
title: Hunting Credential Access Using SIEM Logs
category: Threat Hunting
description: A technical walkthrough on identifying brute-force and credential stuffing anomalies across hybrid environments.
date: 2024-12-19
layout: layouts/post.njk
tags: blog
---

<h3 class="tech-section-title">Background & Context</h3>
<p>Credential access remains a primary goal for adversaries once they establish initial foothold. Detecting these attempts requires understanding of both legitimate authentication patterns and malicious anomalies.</p>

<h3 class="tech-section-title">MITRE ATT&CK Techniques</h3>
<p>This hunt focuses on <strong>T1110 (Brute Force)</strong> and <strong>T1078 (Valid Accounts)</strong> across hybrid environments.</p>

<h3 class="tech-section-title">Hypothesis & Analysis</h3>
<p>Hypothesis: Analysts can identify brute-force or credential stuffing by monitoring for rapid-successive failed logins followed by a single successful login from the same source but different accounts.</p>

<ul class="step-list">
    <li>Analyzed authentication logs for spikes in Event ID 4625 (Failed Logon).</li>
    <li>Correlated source IP addresses with known geolocation anomalies and VPN exit nodes.</li>
    <li>Executed SIEM queries to isolate outliers in "Failure Count vs Time Bucket".</li>
    <li>Validated findings against user behavior baselines (UEBA).</li>
</ul>

<div class="callout callout-lessons">
    <div class="callout-title">💡 Key Lessons Learned</div>
    <p>Log diversity is critical. Without visibility into both domain controller and application-level logs, high-fidelity credential hunting is significantly hampered.</p>
</div>
