# Deepa Gupta — Comprehensive Activity & Impact Analysis

**Senior Engineering Manager, Abridge | January 2025 – March 2026**

---

## Executive Summary

Deepa Gupta joined Abridge on January 6, 2025 and in the span of ~14 months has become a central engineering leader across the company's most strategic and high-stakes initiatives. Her work spans **seven major workstreams**: international expansion ("Abroad"/PureHealth), VA (Veterans Affairs) deployment, accessibility/WCAG compliance, FedRAMP certification, AWS cloud migration assessment, production load testing, and ongoing operational leadership (support dev, deployment coordination, escalation management, hiring). She consistently operates as a force multiplier — standing up new programs from scratch, driving cross-functional coordination, and personally responding to production incidents at all hours.

---

## I. Enterprise Government Partnership Leadership

### VA AI Scribe Pilot — Abridge's Largest Federal Deployment

- **Spearheaded the Department of Veterans Affairs AI Scribe pilot** — Abridge's first and largest federal government deployment — managing an AI-powered clinical documentation platform across multiple VA Medical Centers. Participated directly in the **July 9, 2025 San Francisco VA site visit**, where she demonstrated Abridge's capabilities to VA healthcare leadership and documented comprehensive meeting notes covering key features (real-time transcription, ICD-10/HCC extraction, 20+ language support), integration possibilities (medication orders, lab orders, VA-specific service connection status), and workflow considerations for complex VA patients.
  - **Example:** Authored and distributed detailed meeting notes the same evening to Jeremy von Halle (CEO) — *"Did not want you to wait overnight"* — covering demo outcomes, VA-specific implementation needs, and key personnel met (OCTO, Informatics, CAC teams).
  - **Impact:** Established Abridge's credibility with VA clinical leadership through hands-on demo and meticulous follow-up documentation.

- Led **cross-functional coordination spanning engineering, product, operations, legal, security, and field operations** to deliver against aggressive government contract timelines. Active across `#shared-va-abridge` (the shared channel with VA counterparts), `#va-team`, `#va-builders`, `#va-pilot`, `#xfn-va`, `#pod-va`, and multiple DMs/group DMs with VA stakeholders.

- Drove **expansion planning and hosting strategy assessment** by systematically identifying bottlenecks: *"In our expansion planning, we're assuming that moving into VAEC will resolve many of the data access issues... Is it that the Thoughtworks team isn't delivering the required APIs? Or that the Lighthouse team isn't approving APIs that are already built? This distinction matters because if it's the former, we could still host in GovCloud and staff resources to work within VAEC."* This analysis was critical for informing the hosting decision (VAEC vs. GovCloud).

- Authored the **"ATO beyond hosted Infrastructure"** Notion document mapping out exactly what Abridge gets from VAEC hosting vs. what it still needs independently for FedRAMP, escalating to Steve Magoun: *"Unless someone tells us clearly that we can bypass FedRAMP we should assume we need this will need to be done."*

### VA Site Rollout & Pilot Readiness

- Ensured pilot scope clarity by flagging scope boundaries to the broader team: *"Our nursing product is currently out of scope for the pilot. This will be a Note type / template for them."*
- Provided observability feedback on VA metrics reporting deck, noting workflow nuances: *"Slide 3 assumes that the whole session, and all its tasks happen in one go. That is not necessarily true. Example: A doctor might choose to review, edit and submit all their different notes at the end of the day."*
- Surfaced VA contract-level usage reporting requirements in `#shared-va-abridge`: *"Usage reports shall include, but are not limited to: the number of times an end user uses the system... reports of license holders who have not logged in by week... data on the number of edits and time spent editing notes..."*
- Provided screenshot assets and product details directly to VA stakeholders (Itamar Hassin, Richard, Jackeline), updating patient names and images on request for VA-facing materials.
- Announced VA-side 508 compliance readiness to the team: *"We will be 508 compliant and can confidently write this in RFP."*

---

## II. Technical Strategy & Architecture

### Integration Architecture for Dual-EHR Environments (VistA + Cerner)

- Led **integration architecture planning** for the VA's dual-EHR environment by providing detailed engineering timeline estimates across four progressive integration tiers to inform contract negotiations with the VA (January 6, 2026):
  - **Path A:** Non-integrated, EntraID login only — *"Usually any integrations with the VA have taken us 2-3 weeks. Also we might have to tweak minor changes within our app to say if this login show this, if that login path show that."*
  - **Path B:** Half-Integrated with FHIR APIs — *"Integration at organizer menu level (provider-specific, not patient-specific). Would enable access to appointment list via FHIR APIs (needs both VA auth - EntraID and Cerner Instance Auth). Still requires copy/paste for note content."*
  - **Path C:** Fully Integrated — *"Full CDS console integration with both read and write capabilities... Approximately 3 months of VA work on console side, approximately 25 weeks."*
  - **Path D:** Full integration including NoteTitle complications, AppendAPI, and finding the right previous notes.
  - **Impact:** These estimates became the basis for the written timeline response sent back to VA's Itamar Hassin, directly informing contract negotiation scope and delivery expectations.

### Hands-On Technical Leadership

- **Diagnosed site-specific production configurations** by investigating LaunchDarkly feature flags for VA environments: questioned naming conventions (*"why does it say 'va' and not 'veterans-affairs'?"*) and examined the `use-client-api-firestore-socket` flag targeting configuration, investigating the "Phone Auth Org Progressive Rollout" segment that affected VA orgs.
- Published **weekly tech buildout updates** to the shared VA channel tracking integration progress: *"David is setting up the vista-webview.abridge.cafe endpoint EOD today so that Rich (Thoughtworks) can wire it up as the CDS launch point by Monday... Blocker: Abridge needs a way to trigger the launch from CDS and has requested developer access to CDS."*
- Investigated **VistA data architecture** issues with VA counterparts, probing appointment accuracy: *"What does this mean? What are the scenarios this can happen? '(The reason I'm asking is, it's not clear if we will be able to get a 100% accurate list of appointments for a given provider)'"* — leading to deeper understanding of VistA's historical data quality issues.
- Identified **API note formatting** requirements: *"How is the API note sent back written today to the Notes section on the GUI? How does it get its formatting? Can you get us some details, so that we can then think through the formatting of our return Notes."*
- Validated **consent workflow** requirements with VA product team, explaining Abridge's current model: *"Today we don't capture this consent. Because if a recording is started, it means that the consent has been provided."*
- Flagged **data architecture risks** to prevent VA data from splitting across multiple organizations: *"We should not do this. Our data for 'VA' then will live in 2 orgs."*

### VistA-Specific Technical Work

- Created the `#va-apso-vs-soap` channel (Sep 2025) to drive discussion on APSO vs. SOAP note format standards specific to VA requirements and their impact on readability across specialties.
- Monitored VA-specific note quality: forwarded VA clinician feedback — *"I AM OVERLY ENTHUSIASTIC BUT THE PROGRAM FINALLY GAVE ME THE DATES I DICTATED... unfortunately what it did do was TOO SLOW TO USE BEFORE VETERAN WAS OUT OF THE HALLWAY AGAIN"* — to drive prioritization of note generation speed improvements.

---

## III. Contract & Revenue Operations

- Raised critical **license counting methodology** questions that led to efforts to formalize terms on an **8,500 user/month license contract**: *"At what point do we start counting as the user license start? Provisioned? First login?"* — protecting against future billing disputes.
- Queried **provisioning and billing system architecture** within her first week at Abridge (Jan 8, 2025), probing Annie Shao and Alex Haigh on how licensing, provisioning, and billing work: *"If it is our own, then have you given any thoughts to how will this provisioner have a complete view for Abridge, if the organizations & users information is not replicated region to region?"* — uncovering that the system was largely manual spreadsheets.
- Reviewed **RFP language** for accuracy and risk: *"We are saying 'Our team is prepared to deploy at the proposed five pilot VA Medical Centers with full implementation within the required timelines.' This sounds a little definitive."* — ensuring Abridge didn't over-commit in federal contract language.
- Investigated **FedRAMP Moderate vs. High level requirements** for the VA: *"In the questions doc - do we want to ask what level of Fedramp they expect us to achieve. The VA decides this on a case to case basis. Previously we were told we might be targeting HIGH, but looks like Nuance has Moderate."*
- Managed **contract scope for accessibility vendor** (LevelAccess) — negotiated proposals from 5 vendors, worked with finance to finalize pricing, and signed the contract through Frank Manda.
- Sourced and onboarded **accessibility contractor** (Vageesh Hegde at $100/hr through NexusTek) — handled MSA, SOW, onboarding, background check coordination, and Ramp PO submission. Drove urgency: *"I want this candidate to hopefully start by 12/8. Maybe start with a 2 month contract... This contract needs to be like Test Double.. fail fast. we should be able to fire people if they don't work out."*

---

## IV. VA RFP Strategy & Federal Compliance

### Multiple RFP Responses

- Led or contributed to **multiple VA RFP submissions** (May 2025, and ongoing). Created and maintained the **VA RFP Notion page** with links to Google Drive folders, response documents, and historical RFPs.
- Authored RFP technical sections alongside Ankit Prasad, including detailed responses on FedRAMP compliance, hosting strategy, and timeline deliverables.
- Arranged meetings with **Google (Josh Dries)** to understand GCP's path into VAEC and ATO acceleration options: *"Let's also see what GCP was offering. They mentioned getting ATO - and that usually includes SSP, SAP, and SAR. Maybe they have a partner like Coalfire they were working closely with."*
- Evaluated **ATO acceleration partners** (Palantir FedStart, Second Front, StackArmor) based on Google's suggestion for a 3-6 month ATO timeline.
- Validated FedRAMP timeline realism with Coalfire: *"Just got out of a meeting with Coalfire who has supported companies get FedRamp approval before and when I shared the timeline language with them, they said it is very aspirational, cut/paste as well as fungible on the dates."* — citing specific examples of unrealistic timelines in the RFP (SAP to SAR in 15 days vs. the typical 2 months).
- Referenced **NIST SP 800-53 Rev. 4** requirements from contract attachments when assessing compliance scope.
- Inquired about **VISN 9 RFP** readiness to ensure no opportunities were missed.

---

## V. Stakeholder Management & Incident Response

### Key VA Liaison

- Served as **primary engineering liaison in the `#shared-va-abridge` channel**, the joint Abridge-VA Slack channel, interfacing directly with VA counterparts including Itamar Hassin (OCTO), Filip Fafara, Shane Elliott, Sarah Cnota, Kaeli Yuen, Jackeline Gonzalez Rodriguez, and Richard (Thoughtworks).
- Responded to **urgent VA requests in real-time**: when Itamar Hassin requested immediate timeline estimates for Cerner authentication paths, Deepa provided detailed technical breakdowns within hours despite being pulled from other meetings.
- Drove **urgency on critical operational gaps**: *"Let's ask as soon as you can and not wait for next week. We don't know when we might need to debug something"* — pushing for immediate VA technical POC outreach rather than waiting for scheduled meetings.
- Analyzed **Thoughtworks contractor transition risks**: identified that the bottleneck was primarily Thoughtworks not delivering APIs, not Lighthouse approval delays — a critical distinction for hosting and staffing strategy.

### PIV Card Credentialing Management

- Managed **PIV card credentialing** for the entire Abridge team requiring VA facility access, maintaining status tracking and roster coordination with VA security. Published status updates to `#va-team`:
  - **Received:** Deepa, Maria
  - **Waiting on fingerprints:** Brianne, Trey, Nathan
  - **Unblocked:** Chuck, Ben, Drew
  - **Blocked:** Dave (Self-Certification form), Varoon (email reactivation needed)
  - Created and maintained the **PIV Process Notion page** as the single source of truth.

### Production Escalation Response

- Active in **15+ production escalation channels** spanning audio chunk transcription errors, SOAP note queue thresholds, Temporal APS violations, VA API 504 errors, and GCP outages.
- Responded at all hours: 5:31 AM PDT for login failures (Jul 2, 2025), 5:18 AM for transcription errors (Dec 2, 2025), 12:26 AM for Temporal alerts (Jan 24, 2026).
- Coordinated cross-team incident response: *"Can someone on your team start looking into this while I try to reach the folks on the west coast?"* and *"Hey, just tell me if I should start calling and waking people up here."*
- Provided critical triage during incidents: identified when load tests were vs. were not the cause of production issues, checked ArgoCD, GitHub Actions, and Datadog dashboards proactively.

---

## VI. Accessibility Program — Built from Zero to Enterprise Compliance

### Vendor Selection & Contract Execution (Feb–Mar 2025)

- Created the `#accessibility` Slack channel (Feb 12, 2025) to centralize all company-wide accessibility work.
- Evaluated **5 accessibility audit vendors**, running product demos for each:
  - **Fable** — rejected (*"their work is more for 1-10 on maintaining accessibility, rather than for a 0-1 stage where we are in finding our gaps"*)
  - **DigitalA11Y**
  - **LevelAccess** (selected)
  - **Deque**
  - **TPGi**
- Negotiated pricing with finance, managed legal redlines, and signed the LevelAccess contract.

### Contractor Sourcing & Onboarding (Nov 2025)

- Sourced dedicated accessibility engineer (Vageesh Hegde) through NexusTek at $100/hr, managing MSA/SOW/NDA process across legal, finance, and people teams simultaneously.
- Drove the onboarding timeline aggressively, coordinating with Alex Rodriguez (Legal), Kjerstin Greene (People), Jonathan Lydon, and Dan Kador.

### VA Section 508 Crisis Response (Mar 13–16, 2026)

- When VA scored Abridge **5 out of 100** on Section 508 compliance:
  - Organized a **company-wide Accessibility Bug Bash** within 72 hours
  - Created comprehensive Notion documentation (setup instructions, testing tools, issue logging templates)
  - Created the `#accessibilty-bug-bash-mar-16` Slack channel for coordination
  - Mobilized **~40 participants across teams** on short notice
  - Uncovered **160 accessibility issues** in a single hour
  - Analyzed patterns: ~120 issues related to screen reader support and keyboard navigability — the exact patterns flagged by VA
  - Engaged **LevelAccess for expert second opinion** on VA's scoring methodology; received favorable assessment: *"Had I been reviewing this on the VA's behalf, the score would be 54"*
  - Proposed prioritized remediation plan by surface area with issue counts:
    1. Login (12) and Settings (18)
    2. Notes (36), Worklist (12)
    3. Recorder (6) and Evidence Panel (21)
    4. Enterprise Portal (18) and Mobile (24)
    5. Support page (assigned to Jim Nestell)
  - Identified specific technical fixes: color contrast issues (4.38:1 vs. required 4.5:1 ratio for brand-secondary on bg-tertiary), hardcoded hex values in vista-webview (~15 instances across SmartLaunchCapture, OidcCallbackCapture, AuthTest) needing semantic token adoption
  - Proposed two remediation approaches and escalated to eng-managers for staffing:
    - **Centralized:** Assign 2–3 dedicated engineers
    - **Distributed:** File tickets to respective teams (recommended as faster and more accurate)
  - Pushed broader organizational awareness: *"Starting April 2026 Accessibility is a law for all our customers"* — driving accessibility investment beyond just the VA
  - Coordinated across multiple stakeholders: Ali Faiz, Nadine Vish, Varun Sekar, Claire Woods, Hamza Erbay, Vageesh Hegde, Danica Shei

---

## VII. International Expansion — Abridge Abroad & PureHealth UAE

### Program Build-Out (Jan–Mar 2025)

- Created the **Abroad Hub** (Notion) within her first week as a cross-departmental knowledge base, immediately sharing it in `#xfn-abridge-abroad`: *"This will eventually become a full hub. But just starting to collect all the information I have so far together here."*
- Created structured **Decision Log**, **Questions tracker**, and **Task List** in Notion within the first 2 weeks.
- Developed a **6-point localization strategy** covering:
  1. Localize and translate all interfaces (web and mobile, including errors) using Unicode CLDR and Intl
  2. Flexible UI to accommodate different text sizes
  3. Ability to choose localization settings
  4. AI translation of static content
  5. External vendor for local-context testing
  6. AI translation of live-generated notes
- Built **VA/GDPR common compliance controls matrix** to maximize cross-market engineering ROI: *"Created a list of common controls both the VA and GDPR so that we can start figuring out what the work is. These are broken down by categories."*
- Led the **"Start a new instance"** crowdsourcing initiative (Jan 28, 2025) to identify hardcoded configs, single-instance assumptions, shared secrets, and deployment dependencies across all of engineering.
- Coordinated multi-team **instance startup planning** with platform engineering timeline alignment.
- Investigated third-party integration inventory, GAE-to-K8s migration needs, and clinician app codebase dependencies.

### PureHealth UAE Pilot (Apr–Aug 2025)

- Drove the **PureHealth UAE pilot from proposal to execution**:
  - Read through **Abu Dhabi Healthcare Information and Cyber Security Standard** compliance docs
  - Led GRC conversations directly with PureHealth: *"Had a good GRC conversation with the customer. They seem to be very helpful and are eager to help."*
  - Submitted technical proposal after GRC discussions
  - Secured go-ahead for pilot (Apr 28, 2025)
  - Laid out a **4-point internal execution plan** in `#opp-pure-health`: paperwork/legal, test org setup with expiration, code for audio-to-note generation, and rev cycle scoping
  - Architected **SFTP audio ingestion pipeline** — directed Kyle Libby on implementation (Linear ABR-4212: "PureHealth: ability to take an audio file and return the generated note")
  - Coordinated processing of **2,500 audio scripts** with timeline targeting June 9, 2025
  - Explored **Falcon LLM for Arabic** based on PureHealth's recommendation: *"Purehealth had mentioned that Falcon performs well for Arabic"*
  - Continued managing the pilot timeline while on leave in India
  - Coordinated **Urdu ML transcription** improvement by working with Urdu speakers to record test data
- Expanded pipeline: identified **Cleveland Health and Johns Hopkins Aramco** as additional international prospects needing multi-cloud architecture discussions.
- Led recurring meetings: PureHealth internal syncs, Pilot Design meetings, brainstorm sessions with engineering (Rob, Kyle).

---

## VIII. FedRAMP Certification & Cloud Strategy

### FedRAMP Moderate Audit (Ongoing)

- Runs **weekly ABridge | Coalfire sync** ("Weekly Sync & Engineering Topics") — tracking project status, audit actions, and engineering deliverables.
- Runs **weekly FedRAMP XFN Sync** — cross-functional coordination meeting hosted by Deepa on her Zoom.
- Coordinated platform team's full engagement during FedRAMP audit week, managing competing priorities across accessibility, VA, and AWS assessment work: *"The networking and K8s thing is a bit slow as we are going through our Fedramp audit this week and the platform team is wholly engaged there."*
- Evaluated FedRAMP service compliance: *"We understand we are not permitted to go off of what OIT has - we must check each service against the fedramp listings themselves (i.e. to see if they have an ATO, what type and scope, what level, etc.)"*
- Identified FedRAMP-compliant alternatives: noted Confluent Cloud as FedRAMP Moderate authorized.
- Provided detailed feedback on FedRAMP-related RFP language: *"I think we should combine these 2 into one paragraph... instead add one for security. About 80% of Fedramp compliance is basically security."*

### FedRAMP High Planning for VA

- Driving conversations about path from Moderate to High: *"This is all to get to a solution that could work for fedramp high."*
- Evaluated whether Basten (internal tool) would be available in a gov instance for FedRAMP High.
- Reviewed infrastructure drift, CAB (Change Advisory Board), and PR management implications for maintaining a separate FedRAMP environment.
- Provided pricing analysis input: *"Same price irrespective of fedramp levels?"*

### AWS Cloud Migration Assessment (Feb–Mar 2026)

- Led the **CloudKeeper/AWS engagement** to evaluate a potential GCP-to-AWS migration:
  - **Kickoff (Feb 19, 2026):** Personally onboarded multiple engineering leaders to the assessment process with clear scope framing:
    - Ali Faiz → Eventing & Workflow Deep Dive
    - Sisil Mehta → ML / Inference Deep Dive
    - Konstantin Pozin → Authentication / Identity
    - Drew Davis & Payam → Networking / Platform
  - Scoped estimated effort per domain: ~6–8 hours questionnaire + 1 hour live Q&A
  - Managed a comprehensive **model inventory** request from CloudKeeper covering: model name, business use case, provider/hosting location, environment applicability, input type, average and peak QPS, p50/p95/p99 latency targets, timeout budget, GPU profile, VA/FedRAMP applicability, fallback target, runtime type, PHI/data classification, region pinning, execution path owner, and self-hosting potential
  - Shared CloudKeeper's **proposed Target AWS Network Architecture** with platform engineering for review (Mar 5, 2026)
  - Maintained clear scope communication: *"This engagement is focused on defining a potential path to AWS. The immediate goal is for CloudKeeper to fully understand our current-state architecture... This is strictly a discovery and design phase — we are not committing to execute the migration unless the company decides to move forward with AWS."*
  - Established **weekly Abridge & AWS Assessment cadence** meetings running through March 2026
  - Active in `#ext-cloudkeeper-abridge-aws`, the shared channel with AWS/CloudKeeper
  - Active in `#va-enterprise-cloud-wtf` for VA-specific cloud hosting discussions

---

## IX. Production Reliability — Load Testing Program

- **Built and ran the load testing program from scratch** (Mar 2025 – ongoing):
  - Coordinated across EP, ML, Haiku, and Platform teams for multi-system load tests
  - Personally ran tests on **weekends** (Saturdays), working with Rob, Clayton, Melda, and Aleksi (who stayed late despite being off)
  - First successful clean load test (Apr 28, 2025): *"Was able to run 2 load tests on the weekend... we were able to run tests without any issues. This has been a long time coming and we have had to make a lot of changes in EP, ML and Platform to get till here."*
  - Discovered **Temporal silently changed APS/RPS limits** in prod and staging without notification — a critical finding before it hit production at scale
  - Ran **2X production load tests** with 950 concurrent instances in staging (Nov 2025): *"Will it be ok for me to run load tests in staging this weekend for 2X load? chunkedAudioPipeline... --workers 20 --duration 80min --rampUpDuration 20min"*
  - Improved load test infrastructure: helped Rob move from one-person VM setup to Kubernetes + GitHub Actions
  - Identified load-test-caused production impact and intervened: *"This is affecting prod user wait times across the board, not just for load test"*
  - Created **Load Test State of the Union** Notion document shared with Dan Kador (Jan 2026)
  - Documented load test findings and analysis in dedicated Notion pages with specific Grafana dashboard links for EP CPU usage, cloud functions metrics, and encounter processor insights
  - Verified incident causes during escalations by checking ArgoCD, GitHub Actions workflows, and Datadog dashboards: *"Checked there is no load test running"*

---

## X. Support Dev Operations — Process Transformation

- **Took over support dev management** from Dan Kador (May 2025) and systematically transformed the program:
  - Created **Support Resolution tracking** field in Linear with granular categories:
    - Resolved - Encounter Reprocessed
    - Resolved - Manual Fix
    - Unresolved: Epic Issue
    - (and others at closest granularity)
  - Purpose: *"These will help us try to fix the support burden. Example: Even if a ticket was resolved but it was done via Epic, it will go into Unresolved: Epic Issue."*
  - Onboarded **6+ engineers** to support dev rotations (Savannah, Claire Woods, Alex Vacharat, Aditya Palacharla, Kyle Libby, and others) with standardized welcome messages, Linear view links, and clear expectations: *"You are expected to work your working hours. This is not a 24/7 support."*
  - Published **weekly support dev summaries** to `#eng-managers` covering:
    - Major issues (GCP outages, KP stuck notes — 1.5% of encounters/8,437 out of 573,037)
    - Mobile app issues (recording stopping on sleep, upload failures, SSO auth problems)
    - Epic/Haiku integration issues (failed audio chunks, canary restarts)
    - Note processing issues (SOAP Note Queue thresholds, UNHANDLED_COMBINE_TRANSCRIPTS_STUCK errors)
    - Process improvements needed
  - Identified **systemic ticket reduction** opportunities: *"We get a bunch of support tickets with 'No uploaded audio chunks were found'... The engineers can't do anything with these. We can get support to tell us the number of these without invoking tickets to supportdev"* — reducing unnecessary ticket volume.
  - **Impact:** Turned an ad-hoc, reactive process into a data-driven operation with resolution tracking, trend analysis, and systematic burden reduction.

---

## XI. Deployment Coordination & Release Management

- **Took over deployment coordination** for both Cloud Functions and Encounter Processor (Apr 2025), consolidating two separate processes: *"Taking over the deployment coordinator role for both cloud functions and EP. The processes are similar enough and will give back time to EP engineers."*
- Improved deployment processes that weren't production-ready: *"The process was not ready and we had to make changes. Ready for it this week."*
- Completed multiple scheduled releases and hotfixes per week.
- Executed releases with detailed changelog communication in `#deprecated-deployments-coordination`: documented version numbers, rollback versions, PR lists with authors, and pinged relevant engineers for testing confirmation. Example: *"Deploying ehr-and-interop to staging now. New Version: v1.17.0. Rollback Version: v1.15.0."*
- Continued deployment coordination through October 2025 when the process was handed off.

---

## XII. Engineering Culture & Talent Development

### Hiring & Interviewing

- Conducted **50+ interviews** over 14 months, starting with shadowing (Ali Faiz for mobile, Annie Shao for full-stack) and ramping to solo interviews by late February 2025.
- Covered full-stack, mobile, and QA interview loops plus debriefs.
- Peak weeks included 4–5 interviews plus debriefs: *"Did 5 interviews last week. This was a bit much. I would like to keep this to 2-3."*
- Advocated for process improvements: *"We really need to shorten interview cycles. I am forgetting the people I spoke to by the time we get to debriefs."*

### Knowledge Sharing & Learning

- **Organized and ran engineering brown bag sessions** starting February 2025: *"Started the Brown bags sessions - Feb 26 for the first one!"*
- Systematically learned the entire Abridge stack during onboarding by meeting with engineers across every team:
  - Temporal (ML Ops)
  - DeID (from Yev Chuba)
  - Encounter Processing
  - Events Processing (from Cansin)
  - InterOps (from Alex)
  - Data Warehousing (from DrBen and Yan)
  - ML Ops
  - Data Repatriation
  - Account Harmonization
- Created a **page with all repos and where to find their latest release versions** as a company resource.
- Questioned existing systems constructively: asked about org provisioning (*"the process of getting a new org and creating them is manual??? (with a checklist that someone has?)"*) and staging environment data dependencies.
- Helped onboard new team member Peren with VistA context and integration background.

### BYOK (Bring Your Own Key) Encryption

- Led **data flow mapping** for per-customer encryption keys (Apr–May 2025) across:
  - EP (Encounter Processor)
  - EYEs
  - ML Temporal
  - Data Governance
  - Identity Management
  - Athena
  - Appointment notes, Pre-charting, Verbatim
  - Data warehousing
- Evaluated external encryption solutions (Skyflow) when internal options proved insufficient: *"Met Skyflow to evaluate if that encryption solution is something we could use."*
- Investigated GCP customer-managed encryption keys as a potential solution path.
- Created and maintained the **BYOK Notion hub** for all related documents: *"Please add all documents (even if a link) to the Notion page. Very hard to keep track otherwise."*

---

## XIII. Key Relationships & Cross-Functional Impact

| Domain | Key Collaborators |
|--------|------------------|
| **VA Engineering** | Ali Faiz, Nadine Vish, David Sorensen, Ben Chodoroff, Peren Nachbaur, Melanie, Mitch P |
| **VA Stakeholders (External)** | Itamar Hassin (OCTO), Filip Fafara, Shane Elliott, Sarah Cnota, Kaeli Yuen, Jackeline Gonzalez Rodriguez, Richard (Thoughtworks) |
| **Executive** | Jeremy von Halle (CEO), Dan Kador, Steve Magoun |
| **Platform** | Payam Azadi, Drew Davis, Aleksi Asikainen, Rob, Clayton |
| **ML** | Sisil Mehta, Aakash Pydi, Davis Liang, Mrigank Raman |
| **Product** | Nadine Vish, Varoon Mathur, Taylor Myers |
| **Business/Sales** | Ankit Prasad, Aamir, Michelle Marr, Jake Stoll, Sarah Green, Casey |
| **External Partners** | LevelAccess (Grant), Coalfire, CloudKeeper/AWS (Madison Gress, Ravi Rana), PureHealth (Dr. Qasim), NexusTek (Rajive Leo) |
| **Support/CS** | Dawna Blocher, Kimberly Kutt, Rachel Hope, Meghan Sims, Libby Craig |
| **Legal/People/Finance** | Alex Rodriguez, Kjerstin Greene, Jonathan Lydon, Frank Manda, Francisco |
| **Engineering ICs** | Varun Sekar, Cansin Yildiz, Kyle Libby, Annie Shao, Aditya Palacharla, Robin Lim, Claire Woods, Vageesh Hegde, Markan Patel, Ben Jacobs, Zeke Nierenberg, Savannah, Justin Bravo |

---

## XIV. Channels Created/Founded

| Channel | Purpose | Date |
|---------|---------|------|
| `#accessibility` | Company-wide accessibility program | Feb 12, 2025 |
| `#va-apso-vs-soap` | VA-specific note format standards (APSO vs SOAP) | Sep 3, 2025 |
| `#accessibilty-bug-bash-mar-16` | Accessibility bug bash coordination | Mar 16, 2026 |

---

## XV. Notion Documentation Created

| Document | Purpose |
|----------|---------|
| Abroad Hub | Cross-departmental international expansion knowledge base |
| Decision Log | Structured tracking of Abroad architectural decisions |
| Abroad Questions | Compliance and technical questions tracker |
| Task List | Abroad engineering task tracking |
| Abridge Abroad (Eng-specific) | Engineering-focused Abroad planning |
| Engineering Weekly Sync | Abroad meeting notes |
| Start a new instance | Multi-instance crowdsourced knowledge |
| Preliminary Abroad Projects | Identified strategic projects for Abroad |
| App things to do for staging startup | High-level test plan for app startup |
| ATO beyond hosted Infrastructure | FedRAMP requirements beyond VAEC hosting |
| VA RFP | Links to all VA RFP materials and response documents |
| Load Test / Load-Soak Test | Test results, analysis, and Grafana links |
| Load Test State of the Union | Comprehensive testing status overview |
| Bring your own Key | BYOK encryption project hub |
| PIV Process | VA facility access credential tracking |
| Networking Deep Dive | AWS migration networking assessment questionnaire |
| Authentication/Identity | AWS migration auth assessment |
| Target AWS Network Architecture Proposal | CloudKeeper proposal for review |
| Accessibility Bug Bash | Setup instructions, testing tools, and issue logging |
| Deepa On leave document (5/23 - 6/7) | Coverage plan during leave |
| All repos and release versions | Company resource for finding repo release versions |

---

## XVI. Summary of Impact by Quarter

| Quarter | Key Outcomes |
|---------|-------------|
| **Q1 2025** | Built Abroad program from scratch (Hub, Decision Log, Task List, localization strategy, common controls matrix); stood up accessibility vendor pipeline (evaluated 5 vendors); led first load tests (coordinated across EP, ML, Platform); completed onboarding across entire Abridge stack; initiated brown bag sessions; ramped to solo interviewing |
| **Q2 2025** | Secured PureHealth pilot go-ahead; submitted multiple VA RFPs (authored technical sections, met Google for ATO path, validated timelines with Coalfire); took over support dev and deployment coordination; mapped BYOK encryption flows across 8+ systems; attended GCP Next conference for VA public sector contacts; evaluated Skyflow; managed PureHealth SFTP pipeline development |
| **Q3 2025** | Executed PureHealth pilot (2,500 audio scripts); participated in SF VA site visit demo (Jul 9); managed VA shared channel integration work (tech buildout updates, VistA data architecture, consent workflows); scaled support dev operations (created resolution tracking, weekly summaries); ran production load tests; explored Falcon LLM for Arabic; coordinated Urdu ML transcription improvement |
| **Q4 2025** | Led VA heuristics rollout (5 changes ready in days); sourced and hired accessibility contractor; managed 15+ production incidents at all hours; continued load testing at 2X with 950 instances; maintained support dev program; coordinated ehr-and-interop deployments |
| **Q1 2026** | Led FedRAMP audit coordination (Coalfire weekly syncs); drove AWS migration assessment with CloudKeeper (networking, ML, auth, eventing deep dives); managed VA accessibility crisis (5/100 → 160-issue fix plan, 40-person bug bash); organized LevelAccess second opinion; drove PIV card credentialing for VA facility access; ran FedRAMP XFN syncs; managed VA integration timeline estimates for Cerner/VistA dual-EHR; pushed company-wide accessibility compliance for April 2026 deadline |

---

## XVII. Key Impact Metrics

| Metric | Value |
|--------|-------|
| Programs built from zero | Abroad Hub, Accessibility Program, Load Testing Cadence, Support Dev Process, AWS Migration Assessment |
| Bug bash participants mobilized | ~40 across teams |
| Accessibility issues identified | 160 in 1 hour |
| External partnerships managed | LevelAccess, Coalfire, CloudKeeper/AWS, PureHealth, NexusTek, Google (GCP) |
| Interviews conducted | 50+ over 14 months |
| Escalation channels active in | 15+ |
| Notion pages/hubs created | 20+ |
| Slack channels created/led | 3 |
| Engineers onboarded to support dev | 6+ |
| VA RFPs contributed to | Multiple (May 2025+) |
| Load tests executed | 10+ (including 2X production at 950 instances) |
| Accessibility vendors evaluated | 5 |
| ATO acceleration partners evaluated | 3 (Palantir FedStart, Second Front, StackArmor) |
| AWS deep dive domains coordinated | 4 (Networking, ML/Inference, Auth/Identity, Eventing/Workflow) |
| Integration tiers defined for VA | 4 (Paths A through D for VistA + Cerner) |
