# 2026-06-23 Download Center Revision

## Summary

Updated the ANSIMSORI AI homepage download center and SoriMemo detail page so the current release state is clearer:

- SoriMemo is the only active service card.
- Other service apps remain marked as preparing.
- Download-ready language was moved from the homepage card into the SoriMemo detail page.
- The SoriMemo detail page was simplified by removing dense app-flow/specification sections.

## Homepage

Files:

- `index.html`
- `styles.css`

Changes:

- Simplified the `앱 다운로드 센터` section.
- SoriMemo card now links to `서비스 소개 보기`.
- Removed crowded per-platform preparing rows from the homepage SoriMemo card.
- Added cleaner disabled-button styles and status badges.

## SoriMemo Detail Page

File:

- `services/memory-care.html`

Changes:

- Replaced the top CTA group with compact app download 안내:
  - `Android 앱 다운로드`
  - `iPhone 안내 준비 중`
  - `사용 설명서 준비 중`
- Android download points to:
  - `downloads/sorimemo.apk`
- Removed the duplicated lower app download card.
- Removed the three action-card block:
  - `부모님 목소리 안심확인`
  - `내 기억 목소리 건강 확인`
  - `이전 결과 보기`
- Removed the `화면별 구성` screen-map block.

## Other Service Detail Pages

Files:

- `services/memora.html`
- `services/family-call.html`
- `services/voice-shield.html`

Changes:

- Changed download-like CTAs for unavailable services to disabled/preparing states.

## Deployment Notes

Copy the prepared files into `/home/webdev`, then hard refresh the browser.

When the Android APK is ready, place it at:

```text
/home/webdev/downloads/sorimemo.apk
```

## GitHub Sync Note

Local commit prepared:

```text
2b3873b Update download center and SoriMemo detail page
```

Direct push from this server was not completed because GitHub HTTPS credentials are not configured and the connected GitHub app has `pull: true`, `push: false` permission for `smartcoresolution/ansimsori_webpage`.

