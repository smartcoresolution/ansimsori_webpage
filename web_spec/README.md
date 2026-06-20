# 안심소리 AI Codex 명세 파일

이 폴더는 기존 소리온/SORION 기준 자료를 **안심소리 AI / ANSIMSORI AI** 기준으로 전면 변경한 Codex용 Markdown 명세 패키지입니다.

## 최종 브랜드

| 구분 | 내용 |
|---|---|
| 한글 브랜드 | 안심소리 AI |
| 영문 브랜드 | ANSIMSORI AI |
| 회사명 | SmartCore Solution Co., Ltd. |
| 메인 도메인 | ansimsori.ai |
| 보조 도메인 | ansimsori.com, ansimsori.co.kr, ansimsori.kr |
| 핵심 슬로건 | 진짜 목소리는 확인하고, 가짜 목소리는 막습니다. |
| 보조 슬로건 | 목소리로 돌보고, 기억하고, 보호합니다. |

## 파일 목록

1. `00_ansimsori_brand_overview.md`
   - 전체 브랜드·도메인·홈페이지 구조

2. `01_ansimsori_memory_care.md`
   - 안심소리 기억케어
   - ANSIMSORI MemoryCare

3. `02_ansimsori_memora.md`
   - 안심소리 회상노트
   - ANSIMSORI MemoraVoice

4. `03_ansimsori_voice_shield.md`
   - 안심소리 보이스쉴드
   - ANSIMSORI VoiceShield

5. `04_ansimsori_voice_lock.md`
   - 안심소리 보이스락
   - ANSIMSORI VoiceLock

6. `05_ansimsori_family_call.md`
   - 안심소리 가족콜
   - ANSIMSORI FamilyCall

## 권장 프로젝트 구조

```txt
src/
├─ pages/
│  ├─ HomePage.tsx
│  ├─ ServicesPage.tsx
│  ├─ MemoryCarePage.tsx
│  ├─ MemoraPage.tsx
│  ├─ VoiceShieldPage.tsx
│  ├─ VoiceLockPage.tsx
│  └─ FamilyCallPage.tsx
├─ components/
│  ├─ common/
│  ├─ service-cards/
│  ├─ download/
│  └─ admin/
└─ data/
   └─ services.ts
```

## Codex 사용 예시

```txt
첨부한 00_ansimsori_brand_overview.md와 5개 서비스 명세서를 기준으로
Vite + React + Tailwind 프로젝트에서
안심소리 AI 홈페이지와 서비스 상세 페이지를 구현해 주세요.
```

## 공통 UI 원칙

- 시니어 친화형 UI
- 큰 글씨와 큰 버튼
- 짧고 쉬운 문장
- 명확한 경고/안내 색상
- 딥 블루, 민트, 화이트 중심
- 보호·안심·가족·목소리 이미지를 강조
