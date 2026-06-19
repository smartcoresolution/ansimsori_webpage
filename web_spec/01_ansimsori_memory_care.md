# 안심소리 기억케어 서비스 명세서

## 1. 서비스 개요

| 항목 | 내용 |
|---|---|
| 한글 서비스명 | 안심소리 기억케어 |
| 영문 서비스명 | ANSIMSORI MemoryCare |
| 한 줄 소개 | 목소리로 살피는 기억 건강 |
| 서비스 유형 | 시니어 음성 기반 인지 건강·돌봄 서비스 |
| 상위 브랜드 | 안심소리 AI |
| 메인 도메인 | ansimsori.ai |
| 서브도메인 제안 | memory.ansimsori.ai |

안심소리 기억케어는 어르신의 일상 음성을 기반으로 인지기능 변화와 기억 건강의 위험 신호를 살피는 AI 돌봄 서비스입니다.

어르신의 말 속도, 단어 사용, 문장 구성, 기억 회상 표현, 대화 반응 등을 분석하여 보호자와 기관이 조기에 변화를 확인할 수 있도록 돕습니다.

> 이 서비스는 의료 진단 서비스가 아니며, 인지기능 변화 가능성을 관찰하고 보호자·전문가 상담을 연결하기 위한 참고 서비스입니다.

---

## 2. 주요 사용자

| 사용자 | 설명 |
|---|---|
| 어르신 | 일상 대화 또는 문답을 통해 기억 건강 상태 확인 |
| 보호자 | 부모님의 음성 변화와 생활 신호 확인 |
| 치매안심센터 | 고위험군 조기 관찰 보조 |
| 요양기관 | 입소자 음성 기반 상태 변화 모니터링 |
| 지자체 | 독거노인·고령자 돌봄 사업 연계 |

---

## 3. 핵심 기능

### 3.1 음성 기록

- 어르신이 앱에서 짧은 문답을 녹음한다.
- 보호자와의 통화 음성을 선택적으로 등록할 수 있다.
- 음성 파일은 사용자별로 저장된다.
- 녹음 전 개인정보·음성정보 이용 동의가 필요하다.

### 3.2 인지 건강 분석

분석 항목 예시:

- 말 속도
- 침묵 시간
- 단어 다양성
- 기억 회상 표현
- 문장 길이
- 반복 표현
- 대화 응답 지연
- 감정 변화 신호

### 3.3 결과 표시

| 단계 | 표시 문구 |
|---|---|
| 정상 범위 | 현재 특별한 변화 신호가 크지 않습니다. |
| 관심 필요 | 최근 음성 변화가 관찰되었습니다. |
| 상담 권장 | 전문가 상담 또는 기관 상담을 권장합니다. |

### 3.4 보호자 알림

- 관심 필요 이상 단계가 반복되면 보호자에게 알림을 보낸다.
- 알림에는 위험도, 최근 변화 요약, 상담 안내를 포함한다.

### 3.5 월간 리포트

- 월별 음성 기록 수
- 분석 결과 변화 추이
- 보호자 확인 이력
- 상담 권장 여부

---

## 4. 화면 구성

### 4.1 사용자 앱 화면

| 화면 | 설명 |
|---|---|
| 홈 | 오늘의 기억 건강 상태 표시 |
| 오늘의 기록 | 음성 문답 녹음 |
| 분석 결과 | 최근 분석 결과 표시 |
| 월간 리포트 | 기간별 변화 그래프 |
| 보호자 연결 | 보호자 초대 및 알림 설정 |
| 상담 안내 | 기관·전문가 상담 정보 |
| 설정 | 개인정보, 음성 데이터, 알림 설정 |

### 4.2 보호자 화면

| 화면 | 설명 |
|---|---|
| 부모님 현황 | 연결된 어르신 목록 |
| 최근 알림 | 위험 신호 알림 내역 |
| 결과 상세 | 음성 분석 결과와 변화 추이 |
| 리포트 | 주간·월간 리포트 |
| 상담 요청 | 기관 상담 신청 |

### 4.3 기관 관리자 화면

| 화면 | 설명 |
|---|---|
| 대시보드 | 전체 대상자 현황 |
| 대상자 관리 | 어르신 프로필 관리 |
| 위험군 목록 | 관심 필요·상담 권장 대상 |
| 리포트 관리 | 기관용 리포트 다운로드 |
| 상담 이력 | 상담 및 후속 조치 기록 |

---

## 5. URL 라우트

```txt
/services/memory-care
/app/memory-care
/app/memory-care/record
/app/memory-care/result
/app/memory-care/report
/admin/memory-care
/admin/memory-care/users
/admin/memory-care/reports
```

---

## 6. 프론트엔드 컴포넌트

```txt
MemoryCareHome.tsx
VoiceRecordCard.tsx
CognitiveResultBadge.tsx
RiskTrendChart.tsx
GuardianAlertList.tsx
MonthlyReportCard.tsx
ConsultationGuide.tsx
```

---

## 7. 데이터 모델 예시

```ts
type VoiceRecord = {
  id: string;
  userId: string;
  audioUrl: string;
  durationSec: number;
  transcript?: string;
  createdAt: string;
  consentId: string;
};

type CognitiveAnalysis = {
  id: string;
  voiceRecordId: string;
  userId: string;
  riskLevel: "normal" | "attention" | "consultation_recommended";
  speechRateScore: number;
  pauseScore: number;
  vocabularyScore: number;
  memoryRecallScore: number;
  summary: string;
  createdAt: string;
};
```

---

## 8. API 예시

```txt
POST /api/memory-care/voice-records
GET  /api/memory-care/results/:userId
GET  /api/memory-care/reports/:userId?month=YYYY-MM
POST /api/memory-care/guardian-alerts
GET  /api/admin/memory-care/dashboard
```

---

## 9. 홈페이지 카드 문구

**안심소리 기억케어**  
목소리로 살피는 기억 건강  
어르신의 음성 변화를 기반으로 인지기능 위험 신호를 조기에 확인합니다.

---

## 10. 안전 고지

안심소리 기억케어는 의료 진단을 대체하지 않습니다.  
분석 결과는 인지기능 변화 가능성을 살피기 위한 참고 정보이며, 정확한 진단은 전문 의료기관 상담이 필요합니다.

---

## 11. Codex 구현 요청 예시

Vite + React + Tailwind 기반으로 안심소리 기억케어 서비스 상세 페이지와 앱 다운로드 카드 컴포넌트를 구현해 주세요.

- 브랜드명: 안심소리 기억케어
- 영문명: ANSIMSORI MemoryCare
- 핵심 문구: 목소리로 살피는 기억 건강
- 주요 섹션: 서비스 소개, 주요 기능, 이용 방법, 결과 예시, 보호자 알림, 기관 도입 안내, 앱 다운로드
- 디자인: 안심소리 AI 공통 스타일. 민트/그린 포인트 컬러.
- 접근성: 큰 글씨, 명확한 버튼, 고령자 친화 UI.
