# VWO Login Test Plan Bundle

This folder contains the final VWO login feature test plan and supporting deliverables created from the supplied source documents:

- Product Requirements Document (PRD) VWO.com.pdf
- App VWO Login - API Documention - Requirment.docx

## Files

- [login_test_plan.md](./login_test_plan.md) – main markdown test plan based on the provided PRD and login API documentation
- [test_data.md](./test_data.md) – reusable test datasets and edge cases
- [playwright_login_example.js](./playwright_login_example.js) – sample Playwright automation outline
- [test_summary.html](./test_summary.html) – HTML summary report template
- [vwo_prd_clean.txt](./vwo_prd_clean.txt) – cleaned PRD text extracted for reference
- [vwo_login_api_clean.txt](./vwo_login_api_clean.txt) – cleaned login API text extracted for reference
- [extract_vwo_docs.py](./extract_vwo_docs.py) – utility script used to extract the requirement text from the supplied documents

## Notes

- The plan follows the prompt requirements and the confirmed product login contract in the supplied VWO documents.
- Any UI locator details or final validation copy remain marked as unresolved because the exact production page structure and messages were not included in the provided docs.
