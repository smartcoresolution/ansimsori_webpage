# 2026-06-24 APK Download and Navigation Cleanup

## Summary

Updated the ANSIMSORI AI static website so SoriMemo download status lives on the SoriMemo detail page instead of a duplicated homepage download-center section.

## Changes

- Removed the homepage `앱 다운로드 센터` section.
- Changed the top navigation `앱다운로드` link to open:
  - `services/memory-care.html`
- Updated SoriMemo detail hero:
  - Android APK is shown as available.
  - iPhone guide is marked `출시 준비중`.
  - User guide is marked `출시 준비중`.
- Added external APK installation notice:
  - 설치 중 “안전하지 않은 앱” 안내가 보이면, Play 스토어 외부에서 직접 배포되는 테스트용 앱이기 때문입니다. 설치를 계속하려면 “무시하고 설치”를 선택해 주세요.
- Unified unavailable service CTAs to:
  - `출시 준비중`
- Updated shared styling for the installation warning box.

## Validation

- Checked local internal links for the static site:
  - `ansimsori_webpage_git_sync files 11 missing 0`

## Deployment Notes

Copy updated files to `/home/webdev`:

```bash
cp /home/scs_dev/velora/webdev_download_center_update/index.html /home/webdev/index.html
cp /home/scs_dev/velora/webdev_download_center_update/styles.css /home/webdev/styles.css
cp /home/scs_dev/velora/webdev_download_center_update/script.js /home/webdev/script.js
cp /home/scs_dev/velora/webdev_download_center_update/services/*.html /home/webdev/services/
cp /home/scs_dev/velora/webdev_download_center_update/pages/*.html /home/webdev/pages/
```

Latest APK should be placed at:

```bash
/home/webdev/downloads/sorimemo.apk
```
