# 안심소리 보이스락 서비스 명세서

## 1. 서비스 개요

| 항목 | 내용 |
|---|---|
| 한글 서비스명 | 안심소리 보이스락 |
| 영문 서비스명 | ANSIMSORI VoiceLock |
| 한 줄 소개 | 복제된 목소리로는 열 수 없습니다. |
| 서비스 유형 | 로봇·키오스크·도어락·스마트홈 음성 보안 솔루션 |
| 상위 브랜드 | 안심소리 AI |
| 메인 도메인 | ansimsori.ai |
| 서브도메인 제안 | lock.ansimsori.ai |

안심소리 보이스락은 로봇, 키오스크, 도어락, 스마트홈, 가전제품에서 AI로 복제된 목소리나 녹음 재생 음성으로 무단 명령이 실행되는 것을 차단하는 음성 보안 솔루션입니다.

단순히 “주인 목소리와 비슷한가”만 판단하지 않고, 보이스 클로닝 탐지, 화자 인증, 랜덤 챌린지, 기기 근접 인증, 위험 명령 분류를 결합하여 안전한 음성 명령 환경을 제공합니다.

---

## 2. 주요 사용자

| 사용자 | 설명 |
|---|---|
| 도어락 제조사 | 음성 위조 기반 출입 차단 |
| 로봇 기업 | 관리자·주인 음성 명령 보호 |
| 키오스크 업체 | 관리자 메뉴·환불·결제 승인 보호 |
| 스마트홈 기업 | 보안모드 해제, 문 열기 등 고위험 명령 보호 |
| 공공·기업 시설 | 출입통제·장비 제어 보안 강화 |

---

## 3. 핵심 기능

### 3.1 마스터 음성 등록

- 주인 또는 관리자 음성 등록
- 여러 문장 녹음
- 화자 임베딩 생성
- 원본 음성 최소 저장 또는 암호화 저장
- 등록 철회 기능 제공

### 3.2 보이스 클로닝 탐지

탐지 대상:

- 실제 사람 음성
- TTS 합성음
- Voice Conversion 음성
- 녹음 재생 음성
- 스피커 재생 공격
- 전화기 너머 재생 공격

### 3.3 화자 인증

- 등록된 마스터 음성과 유사도 비교
- 임계값 기반 판단
- 복제 음성에 속지 않도록 클로닝 탐지와 결합

### 3.4 랜덤 챌린지

예시:

- “파란 구름 728”
- “안전 확인 391”
- “오늘의 인증 문장은 봄바람 482입니다.”

절차:

1. 기기가 랜덤 문장 제시
2. 사용자가 즉석 발화
3. 음성 인식으로 문장 일치 확인
4. 화자 인증과 클로닝 탐지 결합
5. 위험 점수 산출

### 3.5 위험 명령 분류

| 명령 | 위험도 |
|---|---|
| 불 켜기 | 낮음 |
| 음악 재생 | 낮음 |
| 로봇 이동 | 중간 |
| 관리자 모드 | 높음 |
| 문 열기 | 매우 높음 |
| 결제 승인 | 매우 높음 |
| 보안 해제 | 매우 높음 |

### 3.6 다중 인증

고위험 명령은 음성 단독 인증 금지.

추가 인증:

- 앱 확인
- PIN
- BLE/NFC 근접 확인
- QR
- OTP
- 관리자 승인

---

## 4. 화면 구성

| 화면 | 설명 |
|---|---|
| 홈 | 연결 기기와 보안 상태 |
| 마스터 음성 등록 | 관리자 음성 등록 |
| 기기 연동 | 도어락, 로봇, 키오스크, 가전 연결 |
| 인증 로그 | 성공·실패·차단 기록 |
| 위조 의심 알림 | 공격 의심 알림 |
| 보안 정책 | 위험 명령과 인증 단계 설정 |
| 긴급 차단 | 특정 기기 즉시 차단 |

---

## 5. URL 라우트

```txt
/services/voice-lock
/app/voice-lock
/app/voice-lock/devices
/app/voice-lock/register-master
/app/voice-lock/logs
/app/voice-lock/policies
/admin/voice-lock
/admin/voice-lock/devices
/admin/voice-lock/api-keys
```

---

## 6. 프론트엔드 컴포넌트

```txt
VoiceLockHome.tsx
DeviceSecurityCard.tsx
MasterVoiceRegister.tsx
RandomChallengePanel.tsx
VoiceAuthResult.tsx
RiskCommandPolicyTable.tsx
SecurityLogTimeline.tsx
DeviceIntegrationGuide.tsx
```

---

## 7. 데이터 모델 예시

```ts
type Device = {
  id: string;
  ownerUserId: string;
  name: string;
  type: "doorlock" | "robot" | "kiosk" | "smart_home" | "appliance";
  status: "active" | "inactive" | "blocked";
  lastSeenAt?: string;
  createdAt: string;
};

type VoiceSecurityEvent = {
  id: string;
  deviceId: string;
  command: string;
  speakerScore: number;
  spoofScore: number;
  livenessScore: number;
  challengeMatched: boolean;
  riskLevel: "low" | "medium" | "high" | "critical";
  decision: "allow" | "retry" | "block" | "require_mfa";
  reason: string;
  createdAt: string;
};
```

---

## 8. API 예시

```txt
POST /api/voice-lock/devices
POST /api/voice-lock/master-voice
POST /api/voice-lock/verify
GET  /api/voice-lock/events/:deviceId
POST /api/voice-lock/policies
GET  /api/admin/voice-lock/dashboard
```

---

## 9. 홈페이지 카드 문구

**안심소리 보이스락**  
복제된 목소리로는 열 수 없습니다.  
도어락·로봇·키오스크·가전의 음성 명령을 AI 위조 음성으로부터 보호합니다.

---

## 10. 보안 원칙

도어락, 결제, 관리자 모드, 보안 해제와 같은 고위험 명령은 음성 단독으로 허용하지 않습니다.  
반드시 앱, PIN, BLE/NFC, 랜덤 챌린지 등 추가 인증과 함께 사용해야 합니다.

---

## 11. Codex 구현 요청 예시

Vite + React + Tailwind 기반으로 안심소리 보이스락 서비스 상세 페이지와 기기 보안 대시보드를 구현해 주세요.

- 브랜드명: 안심소리 보이스락
- 영문명: ANSIMSORI VoiceLock
- 핵심 문구: 복제된 목소리로는 열 수 없습니다.
- 주요 섹션: 서비스 소개, 적용 대상, 인증 흐름, 랜덤 챌린지, 기기 연동, API 안내, 도입 문의
- 디자인: 딥블루/오렌지 포인트 컬러.
- 대시보드 UI: 기기 목록, 위험도, 인증 로그, 위조 의심 알림 포함.
