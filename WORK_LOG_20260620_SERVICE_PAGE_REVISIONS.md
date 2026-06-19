# 2026-06-20 Ansimsori AI Service Page Revision Log

## Scope

This log records the homepage, service detail page, footer page, backup, and GitHub sync work completed on 2026-06-20.

## Homepage Updates

- Unified the main navigation labels:
  - `플랫폼`
  - `서비스`
  - `앱다운로드`
  - `도입문의`
- Removed the separate header consultation button.
- Removed unnecessary hero CTA button groups, trust badges, flow cards, and extra feature cards from the homepage hero.
- Removed the large app-screen section for seniors, guardians, and institution managers.
- Removed standalone section labels and helper text that were no longer needed.
- Updated footer links to point to dedicated internal pages.

## Footer Pages Added

- `pages/company.html`
- `pages/privacy.html`
- `pages/terms.html`
- `pages/support.html`
- `pages/admin.html`

Each footer page includes the unified navigation and a home-return action.

## Service Detail Navigation

The following service detail pages were updated to use the same top navigation as `index.html`:

- `services/memory-care.html`
- `services/memora.html`
- `services/voice-shield.html`
- `services/voice-lock.html`
- `services/family-call.html`

Old navigation labels such as `플랫폼 소개`, `홍보센터`, `고객지원`, `제휴문의`, and separate header `도입 문의` buttons were removed.

## Service Page CTA Adjustments

- `memory-care.html`
  - Changed the bottom CTA text to `도입문의`.
- `memora.html`
  - Removed the top `도입문의` CTA.
  - Restored the bottom `도입문의` CTA next to `서비스 목록`.
  - Removed `URL 라우트` and `API 예시` cards.
- `voice-shield.html`
  - Removed the top `도입문의` CTA.
  - Restored the bottom `도입문의` CTA next to `서비스 목록`.
  - Removed `URL 라우트` and `API 예시` cards.
- `voice-lock.html`
  - Removed only the top `서비스 목록` CTA.
  - Kept the bottom `서비스 목록` CTA.
- `family-call.html`
  - Removed the top `지자체 도입 문의` CTA.
  - Kept the bottom navigation area.

## Terminology Cleanup

- Replaced `기관도입문의` and `기관 도입 문의` with `도입문의` across the homepage, service pages, and footer pages.
- Standardized service-page bottom buttons around `서비스 목록` and `도입문의`.

## Validation

HTML parsing was checked successfully for:

- `index.html`
- all files in `services/`
- all files in `pages/`

## Backup

The current site backup is stored under:

```text
/home/webdev/backups/
```

The active backup archive for this work is:

```text
ansimsori_webpage_20260620.tar.gz
```

