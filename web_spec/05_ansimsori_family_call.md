# 안심소리 가족콜 서비스 명세서

## 1. 서비스 개요

| 항목 | 내용 |
|---|---|
| 한글 서비스명 | 안심소리 가족콜 |
| 영문 서비스명 | ANSIMSORI FamilyCall |
| 기능 설명명 | AI 가족사칭 보이스피싱 차단 앱 |
| 한 줄 소개 | 가족 목소리도 한 번 더 확인하세요. |
| 서비스 유형 | 시니어 통화 보호·보이스피싱 차단 앱 |
| 상위 브랜드 | 안심소리 AI |
| 메인 도메인 | ansimsori.ai |
| 서브도메인 제안 | call.ansimsori.ai |

안심소리 가족콜은 가족의 목소리를 사칭한 보이스피싱 전화를 탐지하고, 어르신과 보호자에게 위험을 알려주는 AI 통화 보호 앱입니다.

자녀, 배우자, 손자녀 등 가족 음성을 미리 등록해 두고, 통화 중 가족 사칭이 의심되는 음성이 감지되면 어르신 화면과 보호자 앱에 경고를 제공합니다.

> 기존 “안심콜” 기능을 유지하되, 통합 브랜드와 결합했을 때 반복을 줄이기 위해 앱명은 “안심소리 가족콜”로 정리합니다.

---

## 2. 주요 사용자

| 사용자 | 설명 |
|---|---|
| 어르신 | 가족 사칭 전화로부터 보호 |
| 보호자 | 부모님의 의심 통화 알림 수신 |
| 지자체 | 고령자 보이스피싱 예방 사업 |
| 금융기관 | 고위험 고객 통화 보호 |
| 통신사 | AI 통화 보안 부가서비스 연계 |

---

## 3. 핵심 기능

### 3.1 가족 음성 등록

- 자녀, 배우자, 손자녀 등 가족 음성 등록
- 가족별 이름, 관계, 연락처 저장
- 등록 음성 동의 확인
- 가족 음성 재등록 기능 제공

### 3.2 통화 중 위험 감지

분석 항목:

- 가족 등록 음성과의 유사도
- 합성음 가능성
- 보이스피싱 위험 표현
- 금전 요구 문장
- 긴급 상황 조작 문장
- 통화 패턴 이상 여부

### 3.3 사칭 의심 경고

어르신 화면 경고 예시:

- “잠깐만요. 가족 목소리인지 다시 확인이 필요합니다.”
- “돈을 보내기 전, 가족에게 다시 전화해 주세요.”
- “보호자에게 알림을 보냈습니다.”

### 3.4 보호자 알림

보호자 알림 예시:

- “부모님에게 가족 사칭 의심 전화가 감지되었습니다.”
- “금전 요구 가능성이 있는 통화가 감지되었습니다.”
- “지금 부모님께 확인 전화를 해 주세요.”

### 3.5 긴급 연결

- 보호자 바로 전화
- 가족 단체 알림
- 경찰 신고 안내
- 금융기관 지급정지 안내
- 통화 후 리포트 제공

### 3.6 어르신 모드

UI 원칙:

- 큰 글씨
- 큰 버튼
- 짧은 문장
- 음성 안내
- 빨강/노랑/초록 위험 표시
- 보호자 원격 도움

---

## 4. 화면 구성

### 어르신 앱 화면

| 화면 | 설명 |
|---|---|
| 홈 | 오늘의 통화 안전 상태 |
| 전화 보호 상태 | 실시간 보호 기능 ON/OFF |
| 가족 목록 | 등록된 가족 음성 목록 |
| 의심 전화 알림 | 위험 통화 내역 |
| 긴급 도움 | 가족, 경찰, 금융기관 연결 |
| 쉬운 설정 | 큰 글씨, 음성 안내, 알림 설정 |

### 보호자 앱 화면

| 화면 | 설명 |
|---|---|
| 부모님 현황 | 연결된 어르신 통화 안전 상태 |
| 위험 알림 | 의심 전화 알림 목록 |
| 가족 음성 관리 | 가족별 음성 등록 상태 |
| 통화 리포트 | 의심 통화 요약 |
| 원격 설정 | 부모님 앱 설정 지원 |
| 신고 안내 | 보이스피싱 대응 안내 |

### 기관 관리자 화면

| 화면 | 설명 |
|---|---|
| 대상자 관리 | 어르신 계정 관리 |
| 위험 통계 | 의심 전화 발생 현황 |
| 알림 이력 | 보호자 알림 발송 이력 |
| 캠페인 관리 | 지자체 안내문, 홍보자료 관리 |
| 상담 기록 | 보이스피싱 상담 이력 |

---

## 5. URL 라우트

```txt
/services/family-call
/app/family-call
/app/family-call/family-voices
/app/family-call/alerts
/app/family-call/emergency
/app/family-call/settings
/admin/family-call
/admin/family-call/users
/admin/family-call/statistics
```

---

## 6. 프론트엔드 컴포넌트

```txt
FamilyCallHome.tsx
FamilyVoiceRegister.tsx
CallRiskAlert.tsx
SeniorModePanel.tsx
GuardianNotificationList.tsx
EmergencyContactCard.tsx
PhishingGuide.tsx
CallReportCard.tsx
```

---

## 7. 데이터 모델 예시

```ts
type FamilyVoice = {
  id: string;
  seniorUserId: string;
  familyUserId: string;
  name: string;
  relation: "son" | "daughter" | "spouse" | "grandchild" | "other";
  voiceEmbeddingId: string;
  consentStatus: "pending" | "approved" | "revoked";
  createdAt: string;
};

type CallRiskEvent = {
  id: string;
  seniorUserId: string;
  phoneNumber?: string;
  matchedFamilyVoiceId?: string;
  voiceSimilarity: number;
  syntheticVoiceProbability: number;
  phishingKeywordScore: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  alertSentToGuardian: boolean;
  summary: string;
  createdAt: string;
};
```

---

## 8. API 예시

```txt
POST /api/family-call/family-voices
GET  /api/family-call/family-voices/:seniorUserId
POST /api/family-call/analyze-call
GET  /api/family-call/alerts/:seniorUserId
POST /api/family-call/guardian-notifications
GET  /api/admin/family-call/statistics
```

---

## 9. 홈페이지 카드 문구

**안심소리 가족콜**  
가족 목소리도 한 번 더 확인하세요.  
가족을 사칭한 보이스피싱 전화를 탐지하고 보호자에게 알려줍니다.

---

## 10. 어르신 화면 안내 문구

- 잠깐만요. 가족 목소리인지 다시 확인이 필요합니다.
- 돈을 보내기 전, 가족에게 다시 전화해 주세요.
- 보호자에게 알림을 보냈습니다.
- 모르는 사람이 돈을 요구하면 바로 끊고 가족에게 확인하세요.

---

## 11. 개인정보·음성정보 안내

안심소리 가족콜은 가족 음성 등록과 통화 위험 감지를 위해 음성정보를 처리합니다.  
사용자는 음성 등록 목적, 이용 범위, 보관 기간, 삭제 방법을 확인하고 동의해야 합니다.  
가족 음성은 동의 없이 등록하거나 제3자에게 제공해서는 안 됩니다.

---

## 12. Codex 구현 요청 예시

Vite + React + Tailwind 기반으로 안심소리 가족콜 서비스 상세 페이지와 어르신용 앱 화면을 구현해 주세요.

- 브랜드명: 안심소리 가족콜
- 영문명: ANSIMSORI FamilyCall
- 핵심 문구: 가족 목소리도 한 번 더 확인하세요.
- 주요 섹션: 서비스 소개, 가족 음성 등록, 통화 위험 감지, 보호자 알림, 긴급 도움, 앱 다운로드
- 디자인: 민트/오렌지 포인트 컬러. 어르신 친화형 UI.
- 접근성: 큰 글씨, 큰 버튼, 짧은 문장, 높은 대비.
- 필수 화면: 위험 경고 화면, 보호자 알림 화면, 가족 음성 등록 화면.
