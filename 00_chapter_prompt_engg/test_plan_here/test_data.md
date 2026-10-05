# Test Data – VWO Login Feature

## Purpose
This document stores the reusable login test datasets for the VWO login feature. The data below is intentionally marked as sample values because the prompt does not include actual production or QA credentials.

## 1. Valid Credentials

| Dataset ID | Username / Email | Password | Usage |
|---|---|---|---|
| DATA-VALID-01 | `valid_user@example.com` | `ValidPass123!` | Successful login test |
| DATA-VALID-02 | `qa.tester@example.com` | `QATest@2024` | Alternate valid credential set |

Notes:
- Replace every sample value with approved test credentials from the environment before execution.
- Ensure each account is active and valid in the target environment.

## 2. Invalid Credentials

| Dataset ID | Username / Email | Password | Expected Result |
|---|---|---|---|
| DATA-INVALID-01 | `valid_user@example.com` | `WrongPass123!` | Login fails |
| DATA-INVALID-02 | `unknown_user@example.com` | `ValidPass123!` | Login fails |
| DATA-INVALID-03 | empty | `ValidPass123!` | Validation error |
| DATA-INVALID-04 | `valid_user@example.com` | empty | Validation error |
| DATA-INVALID-05 | `user@@example.com` | `ValidPass123!` | Validation error or reject |

## 3. Special Character and Boundary Inputs

| Dataset ID | Input | Purpose |
|---|---|---|
| DATA-SPECIAL-01 | `user+test@example.com` | Valid special-character email variant |
| DATA-SPECIAL-02 | ` user@example.com ` | Leading/trailing whitespace detection |
| DATA-SPECIAL-03 | `P@ssword!123` | Password with valid symbols |
| DATA-SPECIAL-04 | `Pássw0rd!` | Unicode password check |
| DATA-SPECIAL-05 | `A` repeated 101 times | Username max-length validation |
| DATA-SPECIAL-06 | `A` repeated 129 times | Password max-length validation |

## 4. Session and Recovery Data

| Dataset ID | Scenario | Expected Result |
|---|---|---|
| DATA-SESSION-01 | Login with remember-me enabled | Session persists across browser relaunch |
| DATA-SESSION-02 | Idle session for 5 minutes | Session expires and user is logged out |
| DATA-RESET-01 | Password reset link clicked | Redirect or reset page is shown |

## 5. Edge Cases
- Empty form submit
- Double-click on login button
- Browser refresh during login attempt
- Back button after successful login
- Long values beyond expected limits
- Login attempt with blocked or inactive account, if supported by environment

## 6. Data Governance Notes
- Do not use production credentials in QA automation.
- Keep all credentials in environment variables or secured test-management storage.
- Validate that the approval status of each dataset is documented before execution.
