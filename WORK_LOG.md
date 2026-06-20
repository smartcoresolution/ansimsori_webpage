# ANSIMSORI AI Webpage Work Log

## Project

- Brand: 안심소리 AI / ANSIMSORI AI
- Main domain: https://www.ansimsori.ai
- Company: SmartCore Solution Co., Ltd.
- Server document root during setup: `/home/webdev`

## Implemented Files

- `index.html`: responsive homepage
- `styles.css`: desktop, tablet, mobile styling
- `script.js`: mobile menu and FAQ interactions
- `services/memory-care.html`: 안심소리 기억케어 detail page
- `services/memora.html`: 안심소리 회상노트 detail page
- `services/voice-shield.html`: 안심소리 보이스쉴드 detail page
- `services/voice-lock.html`: 안심소리 보이스락 detail page
- `services/family-call.html`: 안심소리 가족콜 detail page
- `nginx_ansimsori.conf`: initial Nginx HTTP config
- `nginx_ansimsori_canonical.conf`: canonical-domain HTTPS redirect config
- `start_ansimsori_preview.sh`: local preview server helper

## Web Spec Applied

Source folder: `web_spec/`

- `00_ansimsori_brand_overview.md`
- `01_ansimsori_memory_care.md`
- `02_ansimsori_memora.md`
- `03_ansimsori_voice_shield.md`
- `04_ansimsori_voice_lock.md`
- `05_ansimsori_family_call.md`
- `brand_rename_mapping.md`

Applied items:

- Final brand naming: 안심소리 AI / ANSIMSORI AI
- Main slogan: 진짜 목소리는 확인하고, 가짜 목소리는 막습니다.
- Secondary slogan: 목소리로 돌보고, 기억하고, 보호합니다.
- Services:
  - 안심소리 기억케어 / ANSIMSORI MemoryCare
  - 안심소리 회상노트 / ANSIMSORI MemoraVoice
  - 안심소리 보이스쉴드 / ANSIMSORI VoiceShield
  - 안심소리 보이스락 / ANSIMSORI VoiceLock
  - 안심소리 가족콜 / ANSIMSORI FamilyCall
- Senior-friendly UI principles:
  - Large text
  - Large buttons
  - Short, clear text
  - High contrast
  - Deep blue, mint, white-centered palette
- Detail pages include:
  - Service overview
  - Main users
  - Core features
  - Screen structure
  - URL routes
  - API examples
  - Component suggestions
  - Data model examples
  - Safety notices

## Deployment Notes

DNS provider: Cafe24 name servers

Recommended DNS:

- `ansimsori.ai` A record -> server public IP
- `www.ansimsori.ai` CNAME -> `ansimsori.ai`
- Optional domains:
  - `ansimsori.com`
  - `ansimsori.co.kr`
  - `ansimsori.kr`

Nginx and HTTPS:

- Nginx is installed on Ubuntu 22.04.
- Certbot successfully issued HTTPS certificates for:
  - `ansimsori.ai`
  - `www.ansimsori.ai`
  - `ansimsori.com`
  - `www.ansimsori.com`
  - `ansimsori.co.kr`
  - `www.ansimsori.co.kr`
  - `ansimsori.kr`
  - `www.ansimsori.kr`
- `403 Forbidden` was resolved by allowing Nginx to traverse/read `/home/webdev`.

Useful commands:

```bash
nginx -t
systemctl reload nginx
curl -I https://www.ansimsori.ai
```

Canonical-domain config:

- Use `/home/webdev/nginx_ansimsori_canonical.conf`
- Intended canonical URL: `https://www.ansimsori.ai`

## Validation

- HTML parse check passed for:
  - `index.html`
  - all 5 service detail pages
- Production domain access was confirmed by the user.

## Backup

Backup archives are stored in `/home/webdev/backups/`.

## 2026-06-20 Follow-up Revisions

- Unified homepage, service detail page, and footer page menu labels to `플랫폼`, `서비스`, `앱다운로드`, `도입문의`.
- Added dedicated footer pages for company, privacy policy, terms, support, and admin access.
- Removed unneeded homepage hero buttons, trust chips, flow cards, feature cards, and app-screen section.
- Updated service detail page CTAs based on review:
  - Memory Care bottom CTA changed to `도입문의`.
  - Memora top `도입문의` removed; bottom `도입문의` restored.
  - VoiceShield top `도입문의` removed; bottom `도입문의` restored.
  - VoiceLock top `서비스 목록` removed while keeping bottom `서비스 목록`.
  - FamilyCall top `지자체 도입 문의` removed.
- Removed `URL 라우트` and `API 예시` cards from Memora and VoiceShield detail pages.
- Full follow-up log: `WORK_LOG_20260620_SERVICE_PAGE_REVISIONS.md`.
