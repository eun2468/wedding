/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김중헌",
    nameEn: "Groom",
    father: "김동열",
    mother: "김숙재",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김은실",
    nameEn: "Bride",
    father: "김용배",
    mother: "이유진",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "11:00",
    venue: "해그리다",
    hall: "해그리다 3층",
    address: "부산시 수영구 민락수변로 239번길 14",
    tel: "051-757-4222",
    mapLinks: {
      kakao: "https://place.map.kakao.com/56344753",
      naver: "https://naver.me/FUhsaFKM"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "새로운 시작을 알리는 날\n소중한 분들과 함께하고 싶습니다.\n\n함께해 주셔서 사랑과 행복을 나눠주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "아버지", name: "김동열", bank: "하나은행", number: "297-890012-46407" }
    ],
    bride: [
      { role: "어머니", name: "이유진", bank: "농협", number: "913-12-227856" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김중헌 ♥ 김은실 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }
};
