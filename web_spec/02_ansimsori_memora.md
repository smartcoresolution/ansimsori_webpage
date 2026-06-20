# 안심소리 회상노트 서비스 명세서

## 1. 서비스 개요

| 항목 | 내용 |
|---|---|
| 한글 서비스명 | 안심소리 회상노트 |
| 영문 서비스명 | ANSIMSORI MemoraVoice |
| 한 줄 소개 | 그리운 기억을 목소리로 전합니다. |
| 서비스 유형 | AI 추모 음성편지 서비스 |
| 상위 브랜드 | 안심소리 AI |
| 메인 도메인 | ansimsori.ai |
| 서브도메인 제안 | memora.ansimsori.ai |

안심소리 회상노트는 소중한 사람의 기억, 말투, 이야기, 생전 자료를 바탕으로 AI 추모 음성편지를 제공하는 서비스입니다.

사용자가 고인에게 편지를 쓰듯 메시지를 남기면, AI가 등록된 기억 자료와 가족이 제공한 내용을 바탕으로 따뜻한 추모형 답장을 생성하고 음성으로 전달합니다.

> 이 서비스는 고인을 실제로 재현하거나 현재 의사를 표현하는 서비스가 아닙니다. 모든 음성은 AI가 생성한 추모형 메시지임을 명확히 고지해야 합니다.

---

## 2. 주요 사용자

| 사용자 | 설명 |
|---|---|
| 유가족 | 고인을 기억하고 추모하는 음성편지 보관 |
| 장례기관 | 프리미엄 추모 서비스 제공 |
| 추모공원 | 디지털 추모관 연계 |
| 종교기관 | 추모 예배·기념일 메시지 보관 |
| 시니어 가족 | 생전 목소리·인생 이야기 기록 |

---

## 3. 핵심 기능

### 3.1 고인 프로필 등록

- 이름
- 생년월일
- 사망일
- 가족관계
- 성격
- 자주 하던 말
- 금지 주제
- AI 생성 고지 동의

### 3.2 기억 자료 등록

등록 가능한 자료:

- 생전 음성
- 문자
- 편지
- 이메일
- 사진
- 가족 인터뷰
- 생애사 메모
- 자주 하던 표현

### 3.3 추모 편지 작성

- 사용자가 고인에게 편지를 작성한다.
- 감정 표현, 추억, 질문 등을 입력할 수 있다.
- 위험 문장 또는 심리적 위기 표현을 감지한다.

### 3.4 AI 추모 답장 생성

생성 원칙:

- 따뜻하고 짧은 위로 중심
- 고인의 실제 현재 발언처럼 표현 금지
- 사후세계, 예언, 지시, 재산·의료·법률 조언 금지
- 사용자가 현실 가족·전문가와 연결되도록 안내

### 3.5 음성편지 생성

- 일반 TTS 또는 승인된 추모형 음성으로 낭독
- 고인 음성 기반 TTS는 별도 동의와 안전장치 필요
- 음성 시작 또는 끝에 AI 생성 고지 삽입

---

## 4. 화면 구성

| 화면 | 설명 |
|---|---|
| 홈 | 추모 공간 목록 |
| 편지 쓰기 | 고인에게 편지 작성 |
| 음성편지함 | 생성된 음성편지 목록 |
| 기억 보관함 | 사진, 편지, 이야기, 음성 자료 관리 |
| 가족 초대 | 가족 구성원 초대 및 권한 설정 |
| 기념일 | 생일, 기일, 추모일 설정 |
| 안전 안내 | AI 생성 고지, 심리 안전 안내 |

---

## 5. URL 라우트

```txt
/services/memora
/app/memora
/app/memora/write
/app/memora/letters
/app/memora/memories
/app/memora/family
/admin/memora
/admin/memora/requests
/admin/memora/consents
```

---

## 6. 프론트엔드 컴포넌트

```txt
MemoraHome.tsx
MemorialProfileCard.tsx
MemoryUploadForm.tsx
LetterEditor.tsx
GeneratedVoiceLetter.tsx
FamilyPermissionPanel.tsx
AiDisclosureNotice.tsx
GriefSafetyNotice.tsx
```

---

## 7. 데이터 모델 예시

```ts
type DeceasedProfile = {
  id: string;
  familyId: string;
  name: string;
  birthDate?: string;
  deathDate?: string;
  relation: string;
  personalitySummary?: string;
  frequentPhrases: string[];
  restrictedTopics: string[];
  createdAt: string;
};

type MemorialLetter = {
  id: string;
  userId: string;
  deceasedProfileId: string;
  userMessage: string;
  generatedText: string;
  audioUrl?: string;
  aiDisclosureShown: boolean;
  safetyStatus: "safe" | "needs_review" | "blocked";
  createdAt: string;
};
```

---

## 8. API 예시

```txt
POST /api/memora/profiles
GET  /api/memora/profiles/:familyId
POST /api/memora/memories
POST /api/memora/letters/generate
GET  /api/memora/letters/:profileId
POST /api/admin/memora/review
```

---

## 9. 홈페이지 카드 문구

**안심소리 회상노트**  
그리운 기억을 목소리로 전합니다.  
소중한 사람의 이야기와 추억을 AI 음성편지로 따뜻하게 이어갑니다.

---

## 10. 필수 고지 문구

이 음성은 생전 자료를 바탕으로 AI가 생성한 추모형 음성 메시지입니다.  
실제 고인의 현재 의사나 발언이 아닙니다.

---

## 11. 금지 표현 정책

다음 표현을 생성하지 않도록 해야 합니다.

- “나는 지금 천국에서 너를 보고 있다.”
- “내가 시키는 대로 해라.”
- “집을 팔아라.”
- “병원에 가지 않아도 된다.”
- “매일 나에게 편지해라.”
- “나는 실제로 네 곁에 있다.”

---

## 12. Codex 구현 요청 예시

Vite + React + Tailwind 기반으로 안심소리 회상노트 서비스 상세 페이지와 추모 편지 작성 화면을 구현해 주세요.

- 브랜드명: 안심소리 회상노트
- 영문명: ANSIMSORI MemoraVoice
- 핵심 문구: 그리운 기억을 목소리로 전합니다.
- 주요 섹션: 서비스 소개, 이용 절차, 기억 자료 등록, 음성편지함, 안전 고지, 가족 초대, 신청하기
- 디자인: 따뜻한 라벤더/베이지 포인트 컬러.
- 필수 고지: AI 생성 음성임을 모든 주요 화면에 표시.
