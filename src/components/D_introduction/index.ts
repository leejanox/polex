export { ProfileCard } from './ProfileCard';
export { Photo, Slide, Thumbnail } from './Photo';
export { Introduction } from './Introduction';

export const photos = [
    '/assets/photos/school1.png',
    '/assets/photos/school2.png',
    '/assets/photos/school3.jpg',
    '/assets/photos/school4.jpg',
    '/assets/photos/school5.jpg',
    '/assets/photos/school6.jpg',
    '/assets/photos/school7.jpg',
    '/assets/photos/school8.jpg',
    '/assets/photos/school9.jpg',
    '/assets/photos/school10.jpg',
]

export interface TextData {
    id: number;
    title: string;
    slogan: string;
    description: string;
    example: string;
}

export const Text: TextData[] = [
    {
        id: 1,
        title: '메인 슬로건',
        slogan: 'ACADEMIC INSIGHT',
        description: `AI 필수 시대! 
            쉽고 재미있게 AI & SW 개발을 배우고 
            취업의 꿈을 이루세요
        `,
        example: '응용 소프트웨어 개발자, 인공지능 전문가 양성'
    },
    {
        id: 2,
        title: '학과 소개',
        slogan: 'About Department',
        description: `인공지능 SW 융합과
            2023년 신설 학과 – 한국폴리텍대학 춘천캠퍼스

            "앞으로 한국이 집중해야 할 것은
            첫째도 AI, 둘째도 AI, 셋째도 AI"
            – 손정의 (소프트뱅크 회장)
        `,
        example:`학과 특징
            - 인공지능 핵심기술 + 소프트웨어 실무 능력 배양
            - AI 언어처리, AI 코딩, 머신러닝 실습, 빅데이터 관리
            - 산업 연계 프로젝트 운영 (AI + X 융합 실습 가능)
        `
    },
    {
        id: 3,
        title: '차별점',
        slogan: 'What Makes Us Different',
        description: `한국폴리텍대학 춘천캠퍼스 평균 취업률 82.6%

            - AI 기초부터 Chat-GPT까지 활용
            - 실전 SW 개발 기술로 취업 성공
            - 자율주행 · 메타버스 등 융합 실무 교육
            - 공모전, 프로젝트, 기업 맞춤형 실무 중심 수업
        `,
        example: '산업연계 융합교육'
    },
    {
        id: 4,
        title: '재학생 인터뷰',
        slogan: 'Student Interview',
        description: `Q. 컴퓨터 기초를 몰라도 괜찮을까요?
            - “걱정했지만 교수님들의 친절한 설명 덕분에 쉽게 배울 수 있었어요.”
            – 송OO

            Q. 졸업 후 취업은 어떤가요?
            - “AI 기반 제조업, SI 기업, 소프트웨어 개발, 의료 데이터 분야 등으로 진출할 수 있어요.”
            – 최OO
        `,
        example: '컴퓨터 기초를 몰라도 괜찮아요'
    },
    {
        id: 5,
        title: '1학년 커리큘럼',
        slogan: 'Junior Curriculum',
        description: `- 프로그래밍언어실습, 머신러닝기초실습, 인공지능모델
            - AI와미래사회, 블록코딩을 활용한 AI기초, IoT융합프로그래밍
            - 데이터베이스실무, 영상처리실습, 컴퓨터네트워크
            - 파이썬, 자료구조, 알고리즘 등 기본기부터 실무까지
        `,
        example: '튼튼한 기본기를 다질 수 있어요.'
    },
    {
        id: 6,
        title: '2학년 커리큘럼',
        slogan: 'Senior Curriculum',
        description: `- 융합프로젝트실습 1·2, 서버구축실습, 딥러닝모델구현
            - 빅데이터 수집 및 처리, AI엣지컴퓨팅실습, 웹프로그래밍
            - VR/AR콘텐츠제작, 메타버스콘텐츠실무
            - AI머신비전검사, 클라우드활용실습 등 실무 중심 교육
        `,
        example: '여러 프로젝트를 통해 실무 능력을 배양할 수 있어요.'
    },
    {
        id: 7,
        title: '진로',
        slogan: 'Career',
        description: `- 자율주행 시뮬레이션, 웹/앱 개발, 영상처리 프로젝트 등 실무 기반 작품 다수
            - 공모전 및 현장실습을 통해 실제 기업 협업 프로젝트 경험

            취업 데이터:
            - 2년제 학위과정 취업률: 82.9%
            - 취업 유지율: 89%
        `,
        example: `경제적 부담 완화: 연 등록금 250만 원, 장학금 144만 원, 기숙사비 월 10만 원
            문의: 033-260-7644, 7645
        `
    }
];

export interface ProfileCardProps {
    width?: string
    Name: string
    Image: string
    Email: string
    Phone: string
    Position: string
    TeachingFocus: string[]
    Education: string
    Majorcareer: string[]
    Keyachievements: {
        thesis?: string[]
        writing?: string | string[]
        any?: string
        patent?: string | string[]
        projects?: string[]
    }
}

export const Professor: ProfileCardProps[] = [
    {
        Name:'조혜정',
        Image:'/assets/pro/jhj.png',
        Email:'nxlab@kopo.ac.kr',
        Phone:'033-260-7647',
        Position:'교수 / 인공지능SW융합학과장', //보직
        TeachingFocus:['메타버스 콘텐츠', 'AI영상처리'], //주요 과목
        Education:'서울과학기술대학교 정보통신미디어공학 박사', //학력
        Majorcareer:[
            '경기대학교 스포츠건강과학 겸임교수',
            '한양여자대학교 영상콘텐츠과 겸임교수',
            '서울사이버대학교 컴퓨터공학과 겸임교수'
        ], //주요 경력
        Keyachievements:{ //주요 실적
            'thesis':[
                '페이스메이커를 활용한 AR런닝 어플리케이션 콘텐츠에 관한 융합 연구',
                '증강현실을 이용한 스포츠 관함 플랫폼에 관한 연구',
                '스마트 글래스를 활용한 AR골프 어드바이저 어플리케이션 구현'
            ],//논문,
            'writing':'AR 증강기술 SDK(API)및 기술개발 사례 조사',//저서,
            'any':'KOCCA,IITP 외부 평가위원'//기타
        }
    },
    {
        Name: '김용중',
        Image: '/assets/pro/kyj.png',
        Email: 'ky1111@kopo.ac.kr',
        Phone: '033-262-7644',
        Position: '교수',
        TeachingFocus: ['프로그래밍 언어실습', '컴퓨터 네트워크'],
        Education: '인하대학교 전자공학 박사',
        Majorcareer: ['㈜한진정보통신 연구원(SI사업부)', '한림대학교 정보통신공학부 전임강사'],
        Keyachievements: {
            thesis: [
                '(SCI) Decoding intravesical pressure from local field potentials in rat lumbosacral spinal cord',
                '(SCI) Development of Wireless Neural Interface System',
                '(SCI) Neuromodulation methods for animal locomotion control',
                '(KCI) 딥러닝을 이용한 열영상 기반 마스크 검출 시스템 설계',
                '(국내학술대회) 대중교통을 이용한 도심의 환경 모니터링 시스템 설계 등 85편'
            ],
            writing: [
                '유헬스 ICT 기초',
                '유헬스 착용형 장치개론(introduction of Wearable Devices for U-Health)',
                'ICT 의료기기 제작 실무 응용 - 실제를 중심으로',
            ],
            patent:[
                '(1023015420000) 이식물 삽입 수술에서 이식물 및 대상체를 고정하기 위한 장치',
                '(1018462260000) 행동 제어 장치 및 방법 등 16건 등록'
            ],
            projects:[
                '착용자 이상감지 및 알람이 가능한 감염병 방지용 전동식 호흡 보호구 시스템 개발 (2020 바이오의료 기술사업화 지원사업, 서울시)',
                '딥러닝 기반 발열자 능동 감지기 사업화 (지역특화산업육성+(R&D), 중소벤처기업부)'
            ]
        }
    },
    {
        Name: '김정래',
        Image: '/assets/pro/kjr.png',
        Email: 'ceright@kopo.ac.kr',
        Phone: '033-260-7645',
        Position: '교수',
        TeachingFocus: ['프로그래밍 언어실습', 'AI 딥러닝 모델 기초'],
        Education: '서울시립대학교 전자전기기컴퓨터공학 박사',
        Majorcareer: ['한국과학기술연구원(KIST): 딥러닝을 활용한 신소재 개발 연구', 'AI 스타트업: 데이터 분석, 인공지능 모델개발'],
        Keyachievements: {
            thesis: [
                'Inverse design for materials discovery from the multidimensional electronic zdensity of states (Journal of Materials Chemistry A)',
                'Deep Learning-Based Prediction of Material Properties Using Chemical Compositions and Diffraction Patterns as Experimentally Accessible Inputs (J. Phys. Chem. Lett.)',
                'Identification of Crystal Symmetry from Noisy Diffraction Patterns by A Shape Analysis and Deep Learning (npj Computational Materials)',
                'Fraud Detection for Job Placement using Hierarchical Clusters-based Deep Neural Networks (Applied Intelligence)',
                'T-EBOW를 이용한 취업알선 챗봇용 단문 분류 연구 (한국 인터넷 정보학회)',
                '전화통화 빅데이터 분석에 관한 연구 (정보기술아키텍처연구)',
            ],
            writing:[
                '빅데이터 프로젝트 수행방법(지식과 감성)',
                '데이터 분석을 중심으로 한 빅데이터 입문(정익사)',
            ],
            patent:'챗봇 통신을 기반으로 한 사용자 맞춤형 공공지식 정보 제공방법 및 그 시스템 (10-2018-0168689)' //특허
        }
    },
    {
        Name: '김대웅',
        Image: '/assets/pro/kdw.png',
        Email: 'answer@kopo.ac.kr',
        Phone: '033-260-7646',
        Position: '교수',
        TeachingFocus: ['컴퓨터비전', '임베디드 시스템', '인공지능사물인터넷(AIoT)'],
        Education: '숭실대학교 전자공학 석사',
        Majorcareer:[
            '대한상공회의소 인력개발사업단 서울기술교육센터',
            '디지털선도기업아카데미 인공지능 분야 과정 개발',
            'K-DIGITAL TRAINING IOT 분야 과정 개발',
            '국가인적자원개발컨소시엄 임베디드 분야 과정 개발'
        ],
        Keyachievements: {
            thesis: [
                '실루엣 기반의 관계그래프 이용한 강인한 3차원 물체인식',
                '대형영상에서 효율적인 관심영역 검출을 위한 계층적 스네이크 알고리즘'
            ],
        }
    },
]