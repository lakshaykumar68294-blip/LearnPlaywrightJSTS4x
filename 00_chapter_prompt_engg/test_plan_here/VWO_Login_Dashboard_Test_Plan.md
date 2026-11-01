# VWO Login Dashboard — Test Plan

| Document control | Details |
|---|---|
| Product | VWO Login Dashboard |
| Source baseline | *Product Requirements Document: VWO Login Dashboard* |
| Product URL stated in PRD | `https://app.vwo.com/` |
| Document version | 1.0 |
| Status | Draft for review |
| Prepared on | 1 November 2026 |
| Owner | QA |

> **Source-of-truth note:** This plan is based on the supplied VWO Login Dashboard PRD. It does not treat the separate VWO platform PRD, login API notes, or example credentials as requirements for this feature. Requirements that the PRD does not define are listed as open items and must be agreed before their tests are baselined.

## 1. Test Plan

This plan defines the approach, coverage, environments, entry and exit criteria, and release evidence for testing the VWO login dashboard. Testing is risk-based and covers the login journey from page arrival through authentication, recovery, and transition into the VWO dashboard.

## 2. Objective

Verify that users can securely and reliably access VWO through a clear, responsive, accessible login experience; that invalid or risky access is handled safely; and that the experience meets the PRD's measurable performance, availability, and business targets.

The plan is intended to:

- Confirm functional behavior against the login, validation, password recovery, session, MFA, SSO, and user-journey requirements.
- Identify regressions in usability, accessibility, security, privacy, and performance.
- Provide auditable test results and release risks for QA, Product, Engineering, Security, and Support stakeholders.

## 3. Product Context and Scope

The login dashboard is the entry point to VWO's experimentation, personalization, and analytics platform. Its users include digital marketers, product managers, UX designers, developers, CRO specialists, analysts, and enterprise teams.

### 3.1 In scope

1. Login page availability, branding, layout, and loading behavior.
2. Email/password authentication, input validation, error feedback, and loading states.
3. Remember Me behavior and secure session creation, persistence, expiration, and termination.
4. Forgot-password and email-based password recovery, including token behavior once the policy is supplied.
5. Optional 2FA, enterprise SSO (including SAML/OAuth as applicable), and social identity providers only where enabled for the test release.
6. Successful transition to the correct VWO dashboard and handling of login success/failure analytics.
7. New-user registration/free-trial link and support-assistance paths.
8. Responsive behavior, light/dark theme, keyboard access, screen-reader support, high contrast, and WCAG 2.1 AA verification.
9. Security and privacy controls, including HTTPS, rate limiting, session protections, GDPR/CCPA handling, and enterprise audit requirements.
10. Performance and reliability checks against the explicit PRD targets.

### 3.2 Out of scope

- Functional testing of the VWO experimentation, personalization, analytics, or other authenticated product modules, except verifying the login-to-dashboard handoff.
- Full onboarding, subscription, billing, or trial-to-paid workflows beyond confirming the registration entry point.
- Implementation of biometric authentication, adaptive authentication, PWA behavior, or future login personalization unless explicitly included in the release scope.
- Penetration testing against production or third-party identity providers. Security testing must use approved non-production environments and authorization.
- Verifying a specific API schema, UI selector, exact error copy, or password policy not specified by the PRD.

## 4. Requirements Traceability

The identifiers below are QA tracking IDs assigned for this plan; the PRD itself does not provide requirement IDs.

| QA ID | PRD requirement | Planned verification |
|---|---|---|
| LGN-01 | Email/password authentication | Valid, invalid, inactive, and malformed account scenarios; authentication outcome and dashboard handoff |
| LGN-02 | Secure session management with configurable timeout | Session creation, Remember Me, expiry, logout/termination, and protected-page access |
| LGN-03 | Optional 2FA | Challenge, valid/invalid/expired verification, and recovery behavior when 2FA is enabled |
| LGN-04 | Enterprise SSO; SAML/OAuth and other supported protocols | Redirect, successful/failed identity-provider response, cancellation, and return-to-app behavior when configured |
| LGN-05 | Real-time validation on blur and email format verification | Valid/invalid email, blur timing, focus, and clear recovery from validation errors |
| LGN-06 | Password strength feedback and password requirements | Feedback and enforcement against the approved password policy |
| LGN-07 | Clear, actionable authentication error handling | Invalid credentials, service failure, throttling, and non-disclosing error behavior |
| LGN-08 | Forgot password and email-based recovery with secure token generation | Request, delivery, valid/invalid/expired/reused token, completion, and follow-up login |
| LGN-09 | Responsive, mobile-optimized, touch-friendly interface | Supported viewport/device matrix and orientation/zoom behavior |
| LGN-10 | Autofocus, clickable labels, and loading states | Initial focus, label activation, visible/busy state, and duplicate-submit prevention |
| LGN-11 | Screen-reader support, ARIA, keyboard navigation, high contrast | WCAG 2.1 AA-oriented keyboard, assistive-technology, focus, contrast, and semantics checks |
| LGN-12 | VWO branding and light/dark theme | Logo, typography, visual consistency, and theme rendering/state |
| LGN-13 | Encryption, secure password storage, secure session tokens, HTTPS | Transport/security configuration review and approved security verification; password storage requires backend evidence |
| LGN-14 | GDPR/CCPA and enterprise policy/audit requirements | Data minimization, privacy-policy alignment, retention/deletion evidence, and audit events against approved policy |
| LGN-15 | Rate limiting and brute-force protection | Threshold, response, recovery, and monitoring behavior against agreed security policy |
| LGN-16 | Login page loads within 2 seconds on standard connections | Repeatable page-load measurement in a defined standard-connection test environment |
| LGN-17 | 99.9% availability and thousands of concurrent login attempts | Availability evidence and authorized load testing at an agreed concurrency profile |
| LGN-18 | CDN, asset optimization, and global performance | Asset delivery, caching, and regional measurements in approved environments |
| LGN-19 | Seamless dashboard transition and recent activity/context | Correct destination, user/account context, and session restoration per product behavior |
| LGN-20 | Success/failure analytics and support integration | Event correctness, no credential leakage, and functional support entry point |
| LGN-21 | Registration/free-trial entry and new-user discovery | Correct link/destination and basic navigation from the login page |
| LGN-22 | Success metrics: 95% login success, 90% satisfaction, 20% fewer support tickets | Define instrumentation/population and baseline; report measurable outcomes without treating a single test as proof of the KPI |

## 5. Inclusions and Test Scenarios

Priorities: **P0** = release-blocking core/security risk; **P1** = high-value required coverage; **P2** = supporting, compatibility, or metric coverage. Phase 1/2/3 follow the development phases in the PRD; they are not claims that a capability is currently implemented.

| Scenario ID | Scenario | Expected result | Priority / phase |
|---|---|---|---|
| VWO-LGN-001 | Open login page over HTTPS on a supported environment | Page renders without certificate/security warnings and all required controls are available | P0 / 1 |
| VWO-LGN-002 | Sign in with an active account and valid credentials | Authentication succeeds once, a secure session is established, and the user reaches the correct dashboard/account | P0 / 1 |
| VWO-LGN-003 | Submit incorrect password or unknown email | Access is denied; feedback is actionable but does not disclose whether an account exists | P0 / 1 |
| VWO-LGN-004 | Submit with empty, malformed, boundary-length, or whitespace-containing email/password | Validation matches approved rules, identifies recoverable input errors, and does not create a session | P0 / 1 |
| VWO-LGN-005 | Trigger email validation on blur and use the clickable field label | Validation timing and label activation work without disrupting keyboard/screen-reader use | P1 / 1 |
| VWO-LGN-006 | Test password-strength feedback and password policy boundaries | Feedback and server-side enforcement agree with the approved policy; password is never exposed in logs or UI | P1 / 1 |
| VWO-LGN-007 | Submit repeatedly or double-click while authentication is pending | A clear loading/busy state appears; accidental duplicate submissions do not create inconsistent sessions | P1 / 1 |
| VWO-LGN-008 | Use Forgot Password with registered, unregistered, malformed, and blank addresses | Flow follows the agreed privacy-safe response; only eligible users receive recovery instructions | P0 / 1 |
| VWO-LGN-009 | Complete reset with valid, invalid, expired, reused, and tampered recovery tokens | Only a valid, unexpired, unused token accepted under policy can complete reset; token lifecycle is enforced | P0 / 1 |
| VWO-LGN-010 | Sign in using the newly reset password and attempt the prior password | New credential works; prior credential is invalidated as required by approved policy | P0 / 1 |
| VWO-LGN-011 | Toggle Remember Me on and off across browser restart | Persistence and expiry match the documented choice; sensitive credentials are not stored in plaintext | P1 / 1 |
| VWO-LGN-012 | Let a session expire, log out, or revisit a protected URL after termination | Protected access is denied and the user is directed to authentication without exposing private content | P0 / 1 |
| VWO-LGN-013 | Complete, fail, cancel, and retry 2FA when enabled | Only a valid challenge grants access; failures/expiry/recovery follow configured policy | P0 / 1 |
| VWO-LGN-014 | Complete, cancel, fail, and retry enterprise SSO for configured SAML/OAuth providers | State/return URL is handled safely, errors are recoverable, and only the expected identity is authenticated | P0 / 3 |
| VWO-LGN-015 | Use configured Google/Microsoft or other social login option | Provider redirect/callback, cancellation, denied consent, and error cases are handled safely | P1 / when enabled |
| VWO-LGN-016 | Navigate all login and recovery controls using keyboard only | Logical focus order, visible focus, operable controls, and no keyboard trap | P0 / 2 |
| VWO-LGN-017 | Verify screen-reader names, roles, states, validation messages, and live status | Controls and dynamic feedback are announced accurately and meaningfully | P0 / 2 |
| VWO-LGN-018 | Verify contrast/high-contrast mode, zoom, and text resizing | Content and controls remain perceivable and operable against the approved WCAG 2.1 AA criteria | P1 / 2 |
| VWO-LGN-019 | Render supported desktop/mobile widths, orientations, and touch targets | No clipped/overlapping controls; content reflows and touch controls remain usable | P0 / 2 |
| VWO-LGN-020 | Switch light/dark theme and reload/navigate | Theme assets and contrast remain correct; persistence matches the specified behavior | P1 / 2 |
| VWO-LGN-021 | Verify VWO logo, colors, typography, links, and page states | Login dashboard is consistent with the approved VWO design system and current approved UI | P1 / 1 |
| VWO-LGN-022 | Verify login success/failure analytics and support handoff | Correct events and safe metadata are emitted; credentials, tokens, and sensitive personal data are not included | P1 / 3 |
| VWO-LGN-023 | Follow the free-trial/registration and support links | Each link reaches the approved destination and preserves a usable return path when defined | P2 / 1 |
| VWO-LGN-024 | Measure login page load on standard connection | Agreed page-load metric is within the PRD's 2-second target; assets are served as designed | P0 / 1 |
| VWO-LGN-025 | Exercise concurrent authentication and availability under approved load | Service remains stable and secure at agreed thousands-of-users profile; latency/error thresholds are agreed before execution | P0 / 3 |
| VWO-LGN-026 | Review login service availability and regional/CDN behavior | Evidence supports the 99.9% availability target and expected global delivery; failures are observable | P1 / 3 |
| VWO-LGN-027 | Check privacy and enterprise audit behavior | Data handling, consent/notice, retention, and audit trail align with approved GDPR/CCPA and enterprise policies | P0 / 3 |
| VWO-LGN-028 | Verify password and session security controls | HTTPS, secure token handling, no credential leakage, and approved password-storage controls are demonstrated | P0 / 1 |
| VWO-LGN-029 | Exercise rate limits and recovery after repeated failures | Throttling/mitigation follows approved policy, does not enable account enumeration, and legitimate users can recover | P0 / 1 |
| VWO-LGN-030 | Validate 95% login success and user/support KPIs | Instrumentation, numerator/denominator, sampling window, and baseline are agreed; results are reported with context | P2 / ongoing |

### 5.1 Critical end-to-end flows

**Returning user:** Open login page → enter valid credentials → submit → complete 2FA/SSO if configured → reach the expected VWO dashboard → verify account context → terminate session → confirm protected content is no longer accessible.

**Recovery:** Open Forgot Password → submit account identifier → receive privacy-safe response → use valid reset link/token → set a compliant password → sign in with the new password → confirm token reuse and the prior password are rejected as policy requires.

**Accessible mobile login:** Open supported mobile viewport → navigate and submit with keyboard/assistive technology → receive accessible validation/loading feedback → complete authentication → verify no content or controls are obscured.

## 6. Test Environments

The PRD identifies `https://app.vwo.com/` but does not identify a QA or staging URL. Testing must use a designated non-production environment for functional, security, and load tests. Production smoke checks, if required, must be explicitly authorized, read-only, and use approved accounts.

| Environment dimension | Planned coverage / decision needed |
|---|---|
| Application | QA/staging URL and release/build identifier: **TBD**; production URL only for approved low-risk checks |
| Identity/data | Seeded synthetic users: active, inactive, MFA-enabled, SSO-enabled, and recovery-capable accounts; no real customer credentials |
| Browsers | Current supported Chrome, Edge, Firefox, and Safari versions: **confirm support matrix** |
| Devices | Desktop and representative iOS/Android phones/tablets: **confirm device/OS support matrix** |
| Network | Standard connection for the 2-second target; throttled/mobile and regional/CDN profiles for resilience checks |
| Accessibility | Keyboard-only, screen-reader/browser combinations, zoom/high contrast, and automated accessibility checks |
| Load | Isolated authorized environment, controlled test accounts, agreed concurrent-user profile, monitoring, and stop conditions |
| Security | Approved test scope, test accounts, logging access, rate-limit policy, and security sign-off |

## 7. Test Strategy

1. **Requirement analysis:** Review PRD, designs, security/privacy policies, supported environment matrix, and release scope. Resolve open items before assigning final pass/fail criteria.
2. **Test design:** Use equivalence partitioning and boundary analysis for inputs; decision tables for Remember Me, MFA, SSO, and account states; state-transition testing for login/recovery/session/token flows; use-case testing for end-to-end journeys; and risk-based exploratory testing.
3. **Shift-left reviews:** Review form validation, error copy, accessibility semantics, security controls, telemetry, and API contracts as they are defined, before UI freeze.
4. **Build verification:** Run smoke tests for page availability, successful/failed authentication, reset entry point, and dashboard transition. Reject the build for a P0 smoke failure.
5. **Functional and integration testing:** Execute UI and service-level tests in QA/staging. Verify provider integrations only with approved sandbox tenants.
6. **Cross-browser/device and accessibility:** Run the agreed matrix. Combine automated checks with manual keyboard and assistive-technology review; automated scans alone do not establish WCAG conformance.
7. **Security and privacy:** Verify controls against approved policy and conduct authorized security testing. Do not send secrets to logs or execute destructive tests on production.
8. **Performance/reliability:** Measure the login-page 2-second target under a recorded standard network profile. Run concurrency, regional, and availability tests in an approved environment with agreed thresholds and monitoring.
9. **Regression and retest:** Retest fixes and run login/recovery/session regression on every release candidate; expand to the full matrix for changes to shared authentication, UI, or identity integrations.
10. **Exploratory testing:** Investigate browser navigation, refresh/back behavior, network interruption, slow responses, repeated submissions, localization/long text if supported, and error recovery.

### 7.1 Automation approach

Use the repository's Playwright JavaScript/TypeScript setup if the team elects to automate these scenarios. Automate stable, high-value paths first: successful/failed login, required-field validation, recovery entry, dashboard handoff, Remember Me, session expiry, and key viewport checks. Use test IDs or accessible role/name locators agreed with Engineering; avoid brittle selectors. Keep credentials and tokens in approved secret storage/environment variables, never in source control or test reports. Exact selectors, fixtures, and CI integration are implementation prerequisites, not assumptions of this plan.

## 8. Test Schedule

Dates, sprint length, staffing, and release milestones were not supplied. The following is a dependency-based sequence; the QA lead should add calendar dates after scope and environment are confirmed.

| Phase | Activities | Exit evidence |
|---|---|---|
| 0. Readiness | Resolve open items, confirm non-production environment, requirements, data, and approvals | Reviewed requirements and ready-to-test checklist |
| 1. Core authentication | Smoke, login, validation, password recovery, session, baseline security, and page-load checks | Core scenario results and P0 defect status |
| 2. UX and accessibility | Responsive/mobile, themes, keyboard, screen reader, contrast, and usability coverage | Compatibility and accessibility results |
| 3. Enterprise and NFR | MFA, SSO/social providers as released, privacy/audit, rate limits, concurrency, availability, and regional checks | Security/performance evidence and residual risks |
| 4. Regression and closure | Fix verification, regression, KPI/instrumentation review, summary, and sign-off | Final test summary and release recommendation |

## 9. Test Deliverables

- This reviewed test plan.
- Requirement-to-test traceability and scenario inventory.
- Approved test data/environment matrix and automation coverage, where applicable.
- Execution results with evidence and build/environment identifiers.
- Defect records with reproducible steps and severity/priority.
- Security, privacy, performance, accessibility, and compatibility evidence for the scope executed.
- Test summary, residual risks, open decisions, and release recommendation.

## 10. Defect Reporting Procedure

Record defects in the project-approved tracking system (**tool/project: TBD**). Each report should include:

- Unique ID, concise title, affected requirement/scenario, severity, priority, and build/environment.
- Preconditions, exact reproduction steps, expected and actual results, reproducibility, and timestamps.
- Redacted screenshots, sanitized console/network traces, and relevant correlation IDs.
- Impacted browser/device/account state and whether the issue blocks a core journey.
- No raw passwords, authentication tokens, reset links, session cookies, or unnecessary personal data.

Triage P0 security/authentication/data exposure issues immediately with QA, Engineering, Product, and Security. Retest the fix in the original environment and run focused regression before closure. Escalation contacts and service-level targets are **TBD**.

## 11. Entry and Exit Criteria

### 11.1 Requirement analysis

**Entry:** PRD and release scope are available to QA.  
**Exit:** Requirements are reviewed; testable acceptance criteria, traceability, unresolved decisions, and responsible owners are recorded.

### 11.2 Test design and readiness

**Entry:** Release scope and primary flows are identified.  
**Exit:** Scenarios are reviewed; supported browser/device matrix, non-production URL, test accounts, security authorization, and applicable pass/fail thresholds are confirmed.

### 11.3 Test execution

**Entry:**
- Build is deployed and accessible in the approved test environment.
- Smoke tests pass; test accounts/data and required identity-provider sandboxes are available.
- Designs, validation/error copy, password/session/rate-limit policies, and acceptance criteria needed for the planned tests are approved.
- Load/security test authorization and operating limits are documented before those tests begin.

**Exit:**
- Planned in-scope P0/P1 scenarios have results; failures and blocked tests have owners and disposition.
- All P0 tests pass, or any exception is explicitly accepted by accountable Product, Engineering, and Security owners.
- No unresolved critical/high defects remain unless formally risk-accepted.
- Fixes are retested and required regression has passed.
- Performance, accessibility, security/privacy, and compatibility evidence is attached for the executed scope.
- Residual risks, open requirements, and KPI measurement limitations are reported.

### 11.4 Test closure

**Entry:** Execution results and defect status are available.  
**Exit:** Test summary and recommendation are delivered; evidence is archived according to policy; stakeholders have recorded approval or accepted risk.

## 12. Test Closure and Reporting

The summary report should show planned/executed/passed/failed/blocked tests by priority and requirement, open defects by severity, test environment/build, and outstanding risks. Report performance measurements with network profile and percentile/aggregation method. Report login success, satisfaction, and support-volume KPIs only after the metric definitions, measurement window, sample, and baseline are agreed.

## 13. Tools

| Purpose | Proposed tool / status |
|---|---|
| UI end-to-end automation | Playwright (JavaScript/TypeScript), subject to repository and team approval |
| Defect management | Project-approved issue tracker: **TBD** |
| Browser/device coverage | Supported browser/device farm or approved local matrix: **TBD** |
| Accessibility | Automated accessibility scanner plus manual keyboard/screen-reader checks |
| Performance/load | Approved monitoring and load-testing tools: **TBD** |
| Evidence and reporting | Approved document, screenshot, and CI artifact storage |

## 14. Risks and Mitigations

| Risk / dependency | Impact | Mitigation |
|---|---|---|
| PRD does not define exact validation/error copy, input limits, or password rules | Inconsistent or subjective expected results | Product/Security approve field rules and message behavior before baseline |
| No QA URL, build, browser matrix, or test-account details are supplied | Tests may be unsafe, blocked, or non-representative | Provision non-production environment, synthetic accounts, and supported matrix before execution |
| Session timeout, Remember Me persistence, token lifetime, and logout behavior are unspecified | Session checks cannot have objective pass/fail outcomes | Security/Product publish session and recovery-token policies |
| MFA, SSO, and social login scope depends on release phase/provider setup | Integration scenarios may be unavailable | Mark each capability in/out per release; provide provider sandbox configuration and test identities |
| “Thousands” of concurrent users and 99.9% uptime lack workload/measurement definitions | Load/availability result may be misleading | Agree concurrency mix, duration, latency/error SLOs, observation period, and ownership before testing |
| GDPR/CCPA, enterprise audits, and telemetry details are high-level | Compliance coverage cannot be concluded from UI tests alone | Obtain approved data-flow, retention, consent, audit, and legal/security requirements |
| Production-directed security/load tests could affect users or data | Service disruption or privacy incident | Restrict invasive testing to authorized isolated environments; document approvals and stop conditions |
| Identity provider, email delivery, CDN, or network instability | False failures and delayed verification | Monitor dependencies, capture correlation IDs, and distinguish product defects from external outages |

## 15. Open Items and Assumptions

The items below are not defined by the supplied PRD and require confirmation. They are not silently assumed as product behavior.

1. Which capabilities are included in this release: 2FA, SAML/OAuth SSO, social login, support integration, and account recovery options?
2. What are the exact field constraints, password complexity rules, validation timing, and user-facing error messages?
3. What is the approved account-enumeration policy for login and password-reset responses?
4. What are the session timeout, Remember Me duration, token expiry/reuse, logout, and concurrent-session rules?
5. Which browsers, OS versions, devices, locales, and assistive technologies are officially supported?
6. Which QA/staging URL, seeded accounts, identity-provider sandbox, email test inbox, and build pipeline are available?
7. What standard-network profile and page-load measurement definition determine the 2-second target?
8. What workload, duration, geographic regions, and latency/error thresholds define “thousands” of concurrent attempts and 99.9% availability?
9. Which privacy notices, consent rules, retention/deletion periods, audit events, and data residency rules apply?
10. What event names/fields define login success/failure analytics, and how are the 95% success, 90% satisfaction, and 20% support-ticket reduction KPIs measured?
11. What issue tracker, severity definitions, escalation path, and approval roles should be used?

## 16. Approvals

| Role | Name | Approval / date |
|---|---|---|
| Product Owner | TBD | Pending |
| Engineering Lead | TBD | Pending |
| QA Lead | TBD | Pending |
| Security / Privacy | TBD | Pending |

Testing beyond the agreed scope or against production may begin only with the relevant explicit approval.
