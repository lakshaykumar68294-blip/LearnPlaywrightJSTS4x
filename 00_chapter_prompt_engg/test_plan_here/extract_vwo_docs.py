from pathlib import Path
import re
from PyPDF2 import PdfReader
from docx import Document

pdf_path = Path(r"C:\Users\Lakshay\OneDrive\Desktop\Playwright_JS_TS notes\Product Requirements Document (PRD) VWO.com.pdf")
doc_path = Path(r"C:\Users\Lakshay\AppData\Local\Temp\App VWO Login - API Documention - Requirment.docx")
out_dir = Path(r"C:\Users\Lakshay\OneDrive\Desktop\LearnJSTSPlaywright4x\00_chapter_prompt_engg\test_plan_here")
out_dir.mkdir(exist_ok=True)

pdf_text = "\n".join(page.extract_text() or "" for page in PdfReader(str(pdf_path)).pages)
pdf_text = re.sub(r"\s+", " ", pdf_text)
pdf_text = re.sub(r"\s+([,.])", r"\1", pdf_text)
pdf_text = re.sub(r"\s{2,}", "\n\n", pdf_text)
(out_dir / "vwo_prd_clean.txt").write_text(pdf_text, encoding="utf-8")

doc = Document(str(doc_path))
paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
doc_text = "\n".join(paras)
doc_text = re.sub(r"\s+", " ", doc_text)
doc_text = re.sub(r"\s+([,.])", r"\1", doc_text)
doc_text = re.sub(r"\s{2,}", "\n\n", doc_text)
(out_dir / "vwo_login_api_clean.txt").write_text(doc_text, encoding="utf-8")

print("Extracted PRD and API documentation to:")
print(out_dir / "vwo_prd_clean.txt")
print(out_dir / "vwo_login_api_clean.txt")
