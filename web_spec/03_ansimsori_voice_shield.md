# 안심소리 보이스쉴드 서비스 명세서

## 1. 서비스 개요

| 항목 | 내용 |
|---|---|
| 한글 서비스명 | 안심소리 보이스쉴드 |
| 영문 서비스명 | ANSIMSORI VoiceShield |
| 한 줄 소개 | 내 목소리를 AI 복제로부터 보호합니다. |
| 서비스 유형 | 공개 음성 클로닝 방어·음성권 보호 서비스 |
| 상위 브랜드 | 안심소리 AI |
| 메인 도메인 | ansimsori.ai |
| 서브도메인 제안 | shield.ansimsori.ai |

안심소리 보이스쉴드는 강의, 유튜브, 인터뷰, 방송, 발표 영상 속 목소리가 AI에 의해 무단 복제되지 않도록 보호하는 음성 보안 서비스입니다.

공개 음성에 미세한 방어 신호를 적용하고, 음성 워터마크와 음성지문을 등록하여 무단 복제 가능성을 낮추고, 의심 음성을 탐지·추적·증거화할 수 있도록 지원합니다.

> 모든 음성 복제를 100% 차단한다고 보장하지 않습니다. AI 음성 클로닝 위험을 낮추고, 탐지·추적·증거화를 지원하는 서비스입니다.

---

## 2. 주요 사용자

| 사용자 | 설명 |
|---|---|
| 교수·강사 | 온라인 강의 음성 무단 복제 방지 |
| 유튜버·크리에이터 | 영상 속 목소리 도용 방지 |
| 연예인·성우 | 음성권·퍼블리시티권 보호 |
| 기업 대표·임원 | 대표자 목소리 사칭 방지 |
| 방송사·기획사 | 출연자 음성 무단 사용 탐지 |

---

## 3. 핵심 기능

### 3.1 파일 업로드

지원 파일:

- MP4
- MOV
- WAV
- MP3
- M4A

처리 과정:

- 파일 메타데이터 확인
- 오디오 추출
- 화자 구간 분리
- 음질 검사

### 3.2 Anti-Cloning 보호 처리

- 공개 음성에 미세한 방어 신호 삽입
- 사람이 듣기에는 자연스럽게 유지
- AI 화자 임베딩 추출을 어렵게 설계
- YouTube, MP3, AAC 등 압축 환경 테스트 필요

### 3.3 워터마크·음성지문

| 기능 | 설명 |
|---|---|
| 워터마크 | 콘텐츠별 식별 정보 삽입 |
| 동적 워터마크 | 배포 채널별 다른 워터마크 적용 |
| 음성지문 | 화자의 음성 특징 등록 |
| 출처 증명 | 보호 처리 파일의 배포 이력 관리 |

### 3.4 무단 복제 탐지

- 화자 유사도
- AI 생성 가능성
- 워터마크 검출 여부
- 원본 콘텐츠와 유사 구간
- 의심 URL
- 조치 권고

### 3.5 증거 리포트

- 의심 콘텐츠 URL
- 분석 일시
- 유사도 점수
- AI 생성 가능성
- 의심 구간
- 워터마크 검출 결과
- 권고 조치

---

## 4. 화면 구성

| 화면 | 설명 |
|---|---|
| 홈 | 서비스 개요와 보호 현황 |
| 파일 업로드 | 영상·음성 파일 업로드 |
| 보호 처리 | AI 클로닝 방어 처리 진행 |
| 결과 다운로드 | 보호된 파일 다운로드 |
| 음성지문 관리 | 화자별 음성지문 관리 |
| 모니터링 | 인터넷 무단 사용 탐지 결과 |
| 리포트 | 증거 리포트 생성 및 다운로드 |

---

## 5. URL 라우트

```txt
/services/voice-shield
/app/voice-shield
/app/voice-shield/upload
/app/voice-shield/protect
/app/voice-shield/monitoring
/app/voice-shield/reports
/admin/voice-shield
/admin/voice-shield/jobs
/admin/voice-shield/reports
```

---

## 6. 프론트엔드 컴포넌트

```txt
VoiceShieldHome.tsx
AudioUploadPanel.tsx
ProtectionProgress.tsx
WatermarkStatusCard.tsx
VoiceFingerprintTable.tsx
CloneDetectionResult.tsx
EvidenceReportCard.tsx
RightsConsentPanel.tsx
```

---

## 7. 데이터 모델 예시

```ts
type SpeakerProfile = {
  id: string;
  ownerUserId: string;
  displayName: string;
  category: "teacher" | "creator" | "celebrity" | "executive" | "other";
  consentStatus: "pending" | "approved" | "revoked";
  createdAt: string;
};

type ProtectedAsset = {
  id: string;
  speakerProfileId: string;
  originalFileUrl: string;
  protectedFileUrl?: string;
  fileType: "audio" | "video";
  protectionStatus: "uploaded" | "processing" | "completed" | "failed";
  watermarkId?: string;
  createdAt: string;
};
```

---

## 8. API 예시

```txt
POST /api/voice-shield/assets
POST /api/voice-shield/assets/:id/protect
GET  /api/voice-shield/assets/:id/status
POST /api/voice-shield/detect
GET  /api/voice-shield/reports/:speakerProfileId
POST /api/admin/voice-shield/evidence-report
```

---

## 9. 홈페이지 카드 문구

**안심소리 보이스쉴드**  
내 목소리를 AI 복제로부터 보호합니다.  
강의·방송·영상 속 목소리의 무단 복제와 음성 도용을 방어합니다.

---

## 10. 주의 고지

안심소리 보이스쉴드는 AI 음성 복제 위험을 낮추고 탐지·추적·증거화를 지원하는 서비스입니다.  
모든 복제 시도를 완전히 차단한다고 보장하지 않습니다.

---

## 11. Codex 구현 요청 예시

Vite + React + Tailwind 기반으로 안심소리 보이스쉴드 서비스 상세 페이지와 파일 업로드 UI를 구현해 주세요.

- 브랜드명: 안심소리 보이스쉴드
- 영문명: ANSIMSORI VoiceShield
- 핵심 문구: 내 목소리를 AI 복제로부터 보호합니다.
- 주요 섹션: 서비스 소개, 음성 클로닝 위험, 보호 처리, 워터마크, 탐지 리포트, 도입 문의
- 디자인: 네이비/블루 포인트 컬러.
- 파일 업로드 UI: 드래그앤드롭, 처리 상태, 결과 다운로드 카드 포함.
