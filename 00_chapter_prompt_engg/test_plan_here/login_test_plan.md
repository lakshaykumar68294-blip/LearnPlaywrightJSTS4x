# VWO Login Test Plan (Based on PRD and Login API Documentation)

## 1. Test Plan Overview

### Project Name
VWO – Digital Experience Optimization Platform

### Feature
Login

### Objective
Validate that the VWO login flow works as expected for valid and invalid users, supports the required request payload, and enforces secure and usable authentication behavior for the web application at `https://app.vwo.com/#/login`.

The test plan is based on the supplied documents:
- Product Requirements Document (PRD) VWO.com.pdf
- App VWO Login - API Documention - Requirment.docx

### Scope
In scope:
- Login page access and authentication flow
- Valid login with username/email and password
- Invalid login with wrong credentials
- Empty and malformed input validation
- `remember` field behavior in the login payload
- Response validation for successful authentication
- Session handling after successful login
- Basic role/policy validation from the API response

Out of scope:
- Social login (Google/GitHub)
- Two-factor authentication (2FA)
- Account lockout policy beyond the validation required by the login flow
- Performance/load testing
- Non-login modules such as experimentation, personalization, or analytics setup

### Test Environment Details
- Product URL: `https://app.vwo.com/#/login`
- Login API: `POST https://app.vwo.com/login`
- Content-Type: `application/json`
- Browser coverage: Chrome and Firefox
- Device coverage: Desktop
- OS coverage: Windows 10+, macOS 11+, iOS 14+, Android 10+
- Automation stack: Playwright Test v1.40+, JavaScript (ES6), Node.js v18.0+, npm v9.0+

## 2. Confirmed Facts from the Supplied Documents

### PRD-confirmed product context
The PRD states that VWO is a Digital Experience Optimization (DXO) and Conversion Rate Optimization (CRO) platform that helps teams understand user behavior, test experiences, personalize interactions, and improve conversion outcomes across web and mobile properties.

Relevant PRD requirement IDs:
- FR 1: A/B, Split & Multivariate Testing
- FR 2: SmartStats Engine
- FR 3: Visual & Code Editor
- FR 4: Heatmaps & Session Recordings
- FR 5: Audience Targeting
- FR 6: Real-time Reporting & Dashboards
- FR 7: Personalization Engine
- FR 8: Integration Connectors
- FR 9: Collaboration & Workflow Management
- NFR: Security with 2FA, role-based access control, activity logs
- NFR: Performance target of 2 seconds for editing workflows

### Login API-confirmed contract
The supplied API documentation includes the login request and response details below.

Request URL:
- `https://app.vwo.com/login`

HTTP method:
- `POST`

Request body:
```json
{
  "username": "7x@wingify.com",
  "password": "Wingify@4321",
  "remember": false,
  "recaptcha_response_field": ""
}
```

Headers:
- `Content-Type: application/json`
- `Auth: NO` (as listed in the documentation)

Example successful response fields include:
- `id`
- `name`
- `email`
- `accountId`
- `isDemoAccount`
- `isActive`
- `policy`
- `currentAccount`
- `appVersion`
- `locale`

### Confirmed assumptions
- The login flow is a standard form-based workflow that submits credentials to `POST /login`.
- The API response contains account-level metadata and role/policy rules used in the authenticated session.
- The login operation should support a `remember` option that is passed as a Boolean.

### Unresolved questions / missing inputs
- Exact UI selectors for the production login page are not included in the provided docs.
- Exact server-side error messages for invalid credentials are not included.
- The actual production credentials for QA execution were not supplied.
- The PRD and API doc do not include the button labels or accessibility strings for the login page beyond the login endpoint contract.

## 3. Scope and Test Strategy

### In Scope
- Login page renders correctly and accepts username/email + password
- Valid login request is accepted
- Invalid username or password is rejected without creating an authenticated session
- Empty/required field validation works
- `remember` parameter is accepted and processed correctly
- Successful login response includes expected account metadata and policy details
- Role-based access information in the response is consistent with the authenticated user
- Basic logout/session termination behavior is verified when the app exposes it

### Out of Scope
- Social login flows
- 2FA setup and verification
- Account lockout behavioral model beyond validation checks
- Performance and load testing
- Experimentation and campaign setup workflows outside login

## 4. Requirement Traceability

| Requirement ID | Requirement Summary | Test Coverage |
|---|---|---|
| FR 1 | A/B and multivariate experimentation | Covered indirectly by ensuring user access to VWO application is available after login |
| FR 2 | SmartStats analytics engine | Covered indirectly by login session and access validation |
| FR 3 | Visual/code editor | Not directly applicable to login; covered by access validation after sign-in |
| FR 4 | Heatmaps and recordings | Not directly applicable to login; covered by access validation after sign-in |
| FR 5 | Audience targeting | Not directly applicable to login; covered by access validation after sign-in |
| FR 6 | Real-time reporting and dashboards | Covered indirectly through successful authentication/session creation |
| FR 7 | Personalization engine | Not directly applicable to login; covered by access validation after sign-in |
| FR 8 | Integration connectors | Not directly applicable to login; covered by access validation after sign-in |
| FR 9 | Collaboration and workflow management | Not directly applicable to login; covered by access validation after sign-in |
| NFR-Security | 2FA, RBAC, activity logs | Verified in login flow through role and policy data and secure request expectations |
| NFR-Performance | Response under 2 seconds for editing workflows | Login must respond within acceptable thresholds for plain login operations |
| API-Login | `POST /login` contract | Directly covered by all login API and UI scenarios |

## 5. Test Cases

### Test Case Summary

| TC_ID | Test Case Name | Priority | Preconditions |
|---|---|---|---|
| TC-LOGIN-01 | Successful login with valid credentials | P0 | Valid username/email and password available |
| TC-LOGIN-02 | Login fails with invalid password | P0 | Valid username/email available |
| TC-LOGIN-03 | Login fails with unknown username/email | P0 | Unknown credential set available |
| TC-LOGIN-04 | Empty username/password values are rejected | P1 | Login page open |
| TC-LOGIN-05 | Maximum length validation for username/password | P1 | Login page open |
| TC-LOGIN-06 | `remember` flag is accepted and processed | P1 | Login page and API test environment available |
| TC-LOGIN-07 | Successful response contains expected account and policy data | P1 | Valid credentials available |
| TC-LOGIN-08 | Session management and logout behavior | P1 | Valid user session established |

### TC-LOGIN-01: Successful login with valid credentials
- Priority: P0
- Preconditions:
  - User account is active and valid
  - Login page is available
- Test Steps:
  1. Open `https://app.vwo.com/#/login`.
  2. Enter valid username/email and correct password.
  3. Submit the login request.
  4. Validate the redirect or transition to the authenticated experience.
- Expected Results:
  - Request succeeds without validation errors.
  - User is redirected to the authenticated application.
  - Response contains user details and account information.
  - The session is created successfully.

### TC-LOGIN-02: Login fails with invalid password
- Priority: P0
- Preconditions:
  - Valid username/email is available
- Test Steps:
  1. Enter a valid username/email with an incorrect password.
  2. Submit the form.
  3. Observe the UI or API response.
- Expected Results:
  - Authentication fails.
  - No active session is created.
  - User remains on the login page or receives a clear failure message.

### TC-LOGIN-03: Login fails with unknown username/email
- Priority: P0
- Preconditions:
  - Unknown username/email is available for testing
- Test Steps:
  1. Enter an unregistered or incorrect email/username.
  2. Submit the form.
- Expected Results:
  - Authentication fails.
  - No authenticated navigation occurs.
  - User receives a clear invalid-credentials message or equivalent validation feedback.

### TC-LOGIN-04: Empty username/password values are rejected
- Priority: P1
- Preconditions:
  - Login page is open
- Test Steps:
  1. Leave username blank and click login.
  2. Leave password blank and click login.
  3. Submit the form with both fields empty.
- Expected Results:
  - The form is rejected.
  - Validation messaging appears.
  - No request is accepted as a successful login.

### TC-LOGIN-05: Maximum length validation for username and password
- Priority: P1
- Preconditions:
  - Login page is open
- Test Steps:
  1. Enter a username longer than 100 characters.
  2. Enter a password longer than 128 characters.
  3. Submit the form.
- Expected Results:
  - The application rejects or truncates data as per the product rule.
  - Validation feedback is shown.
  - No incorrect login is accepted.

### TC-LOGIN-06: `remember` flag is accepted and processed
- Priority: P1
- Preconditions:
  - Login page or API test harness is available
- Test Steps:
  1. Submit login with `remember: true`.
  2. Submit login with `remember: false`.
- Expected Results:
  - Both payloads are accepted if credentials are valid.
  - The `remember` field is passed with the expected Boolean value.
  - The resulting session behavior matches the product decision for persistent sessions.

### TC-LOGIN-07: Successful response contains expected account and policy data
- Priority: P1
- Preconditions:
  - Valid credentials available
- Test Steps:
  1. Perform a successful login request.
  2. Inspect the response body.
- Expected Results:
  - Response returns user metadata, account metadata, and policy details.
  - Fields such as `id`, `name`, `email`, `accountId`, `isActive`, and `currentAccount` are present and consistent.

### TC-LOGIN-08: Session management and logout behavior
- Priority: P1
- Preconditions:
  - Valid login completed
- Test Steps:
  1. Log in successfully.
  2. Navigate to the authenticated area.
  3. Log out or terminate the session (if supported by the UI).
- Expected Results:
  - Session is terminated correctly.
  - User no longer has access to authenticated content.
  - The application routes back to the login or unauthenticated state.

## 6. Test Data

### Valid credentials
| Dataset ID | Username / Email | Password | Use |
|---|---|---|---|
| VALID-01 | `7x@wingify.com` | `Wingify@4321` | Example valid credentials from supplied API document |

### Invalid credentials
| Dataset ID | Username / Email | Password | Expected Result |
|---|---|---|---|
| INVALID-01 | `7x@wingify.com` | `WrongPassword@123` | Login fails |
| INVALID-02 | `unknown_user@example.com` | `ValidPass123!` | Login fails |
| INVALID-03 | empty | `ValidPass123!` | Validation error |
| INVALID-04 | `7x@wingify.com` | empty | Validation error |

### Boundary and special-character data
| Dataset ID | Input | Purpose |
|---|---|---|
| EDGE-01 | Username length > 100 | Maximum length validation |
| EDGE-02 | Password length > 128 | Maximum length validation |
| EDGE-03 | `user+test@example.com` | Email variation validation |
| EDGE-04 | `P@ssword!123` | Symbol-rich password |
| EDGE-05 | `user@example.com ` | Leading/trailing spaces |

## 7. Automation Scripts

### Setup Instructions
1. Install Node.js v18.0+ and npm v9.0+.
2. Install Playwright Test:
   ```bash
   npm init -y
   npm install -D @playwright/test
   ```
3. Add a test file under the project folder.
4. Set environment variables for login URL and approved credentials.
5. Execute tests with `npx playwright test`.

### Example Playwright Script
```js
const { test, expect } = require('@playwright/test');

const LOGIN_URL = process.env.LOGIN_URL || 'https://app.vwo.com/#/login';
const VALID_USERNAME = process.env.VALID_USERNAME || '7x@wingify.com';
const VALID_PASSWORD = process.env.VALID_PASSWORD || 'Wingify@4321';

// Replace selectors below with exact UI locators from the live application under test
// before running in the real environment.

test.describe('VWO login flow', () => {
  test('TC-LOGIN-01 successful login', async ({ page }) => {
    await page.goto(LOGIN_URL);

    await page.locator('input[type="text"], input[type="email"]').fill(VALID_USERNAME);
    await page.locator('input[type="password"]').fill(VALID_PASSWORD);
    await page.locator('button[type="submit"]').click();

    await expect(page).not.toHaveURL(/\/login/i);
  });

  test('TC-LOGIN-02 invalid password', async ({ page }) => {
    await page.goto(LOGIN_URL);

    await page.locator('input[type="text"], input[type="email"]').fill(VALID_USERNAME);
    await page.locator('input[type="password"]').fill('WrongPassword@123');
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL(/\/login/i);
  });
});
```

### API validation examples
```json
POST https://app.vwo.com/login
{
  "username": "7x@wingify.com",
  "password": "Wingify@4321",
  "remember": false,
  "recaptcha_response_field": ""
}
```

This request format is taken directly from the supplied login API documentation. It should be verified in the execution environment before final automation adoption.

## 8. Reporting

### Test Summary Template
| Metric | Value |
|---|---|
| Total planned login tests | 8 |
| P0 tests | 3 |
| P1 tests | 5 |
| Passed | To be executed |
| Failed | To be executed |
| Blocked | To be executed |

### Bug Reporting Rules
- Report with steps, expected result, actual result, and severity.
- Confirm whether the issue is UI-side, API-side, or configuration-related.
- Include the request/response payload when login failures occur.

## 9. Entry and Exit Criteria

### Entry Criteria
- Login page is reachable.
- Approved test data is available.
- Target browsers are installed and usable.
- The environment is stable.

### Exit Criteria
- Planned login tests are executed successfully.
- Critical login scenarios pass.
- No open P1/P2 login defects remain.
- Results are recorded and signed off.

## 10. Risks and Open Items

### Risks
- UI locators and exact validation text are not available in the documentation; automation must align to the current app build.
- The PRD and API document provide product-level and API-level insight, but not the final UX wording for validation states.
- The documentation does not specify a formal lockout policy or session timeout value for the login flow beyond the prompt-specified QA constraints.

### Open Items
- Final UI selectors for the live login page
- Final error messages and validation copy
- Production or QA valid credentials
- Logout/session timeout verification in the actual deployed build

## 11. Final Outcome

The VWO login flow should be validated for successful authentication, invalid credential handling, required-field validation, payload correctness, response validation, and authenticated session behavior using the actual supplied PRD and API documentation as the baseline requirements.
