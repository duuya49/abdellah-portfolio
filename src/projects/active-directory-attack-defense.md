---
title: Active Directory Attack & Defense Lab
category: Red Teaming + Detection Validation
description: A hands-on CRTP lab project focused on mapping and validating Active Directory attack paths in a controlled enterprise environment.
environment: Multi-domain Active Directory Lab
tools: BloodHound, PowerView, PowerShell
framework: MITRE ATT&CK
outcome: Strengthened practical understanding of AD attack paths and defensive telemetry
date: 2026-08-13
layout: layouts/project.njk
tags: projects
---

<h3 class="tech-section-title">What I did</h3>
<p>Completed a hands-on Active Directory attack-and-defense lab to understand how identity misconfigurations and trusted Windows functionality can be chained into realistic attack paths.</p>

<h3 class="tech-section-title">Execution Steps</h3>
<ul class="step-list">
    <li>Enumerated users, groups, computers, trusts, access-control relationships, and administrative paths.</li>
    <li>Mapped privilege relationships with BloodHound and validated findings manually with PowerView and PowerShell.</li>
    <li>Practiced Kerberos-focused attacks, local and domain privilege escalation, and controlled lateral movement.</li>
    <li>Documented persistence opportunities and correlated the activity with telemetry defenders can use for detection.</li>
    <li>Produced a structured assessment report covering evidence, risk, mitigation, and detection recommendations.</li>
</ul>

<div class="callout callout-impact">
    <div class="callout-title">→ Outcome & Impact</div>
    <p>Improved my ability to reason about Active Directory attack paths from both offensive and defensive perspectives, translating adversary activity into practical monitoring and hardening recommendations.</p>
</div>

<p class="project-reference">Reference: <a href="https://primusinterp.com/posts/CRTP/" target="_blank" rel="noopener noreferrer">Independent CRTP review</a> and <a href="https://www.alteredsecurity.com/adlab" target="_blank" rel="noopener noreferrer">official Altered Security lab overview</a>.</p>
