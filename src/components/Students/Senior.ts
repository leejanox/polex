//2024
export interface SeniorCardProps {
    data: {
        title: string;
        category: string;
        team: string;
        skill: string[];
        date: string;
        remaining: string;
        introduction: string;
        description: string;
        imageUrl: string[];
        videoUrl?: string;
    },
    style?: string;
}

export const SeniorData2024: SeniorCardProps[] = [
    {
        data: {
            title: "싸우자 법사야", 
            category: "2D Game",
            team: "전석일 홍석준",
            skill: ["Unity", "C#"],
            date: "August 2024 - December 2024",
            remaining: "146 days more",
            introduction: `유니티를 활용하여 개발한 2명이 함께 플레이 할 수 있는 안티 멀티플레이 고전 2D게임`,
            description: '유니티를 활용하여 개발한 2명이 함께 플레이 할 수 있는 안티 멀티플레이 고전 2D게임',
            imageUrl: ["/assets/photos/game.png"],
            videoUrl: "https://youtu.be/rSyCt6MuuZI"
        }
    },
    {
        data: {
            title: "Fit Grip", 
            category: "Predictive modelling",
            team: "최기현 강규상",
            skill: ["Python" , "JavaScript" , "TensorFlow" , "React"],
            date: "August 2024 - December 2024",
            remaining: "146 days more",
            introduction: `
                FitGrip 은 컴퓨터 주변기기 중 하나인 마우스를 위주로한 '컴퓨터 주변기기 전문 커뮤니티 사이트' 입니다.
                
                주요 기능으로는 개인의 손 크기와 마우스 그립 방식 데이터를 기반으로, AI가 사용자의 신체에 가장 잘 맞는 마우스를 추천해 주는 서비스가 있습니다.
            `,
            description: `
                손 크기 및 마우스 사용 습관 데이터를 입력하면, 사용자에게 최적화된 마우스를 AI가 자동으로 추천
                
                실제 사용중인 사람들의 설문 조사를 토대로 AI 딥러닝 훈련을 통해 높은 정확도의 맞춤 추천 서비스를 제공

                실제품 사용자들 간의 정보 공유가 가능
            `,
            imageUrl: ["/assets/photos/fitgrip.png"],
            videoUrl: "https://youtu.be/4_o0J-VmJ4Q?si=9Zsi1mg1rz5395ll"
        }
    },
    {
        data: {
            title: "Average 23", 
            category: "Predictive modelling",
            team: "김고은, 김민찬",
            skill: ["Python" , "JavaScript" , "TensorFlow" , "React"],
            date: "August 2024 - December 2024",
            remaining: "146 days more",
            introduction: `전령 사용량 예측모델 체험을 포함한 발표용 웹사이트입니다.
            
                발표용 슬라이드로 프로젝트를 소개하고 전력 사용량 예측모델을 체험해볼 수 있으며 다운로드 기능 및 로그인시 프로젝트 파일을 다운로드 할 수 있는 서비스를 제공합니다.
            `,
            description: `
                ppt 처럼 페이지를 넘기며 프로젝트를 소개하고
                
                전력 사용량을 예측 할 수 있는 머신러닝 모델을 체험해보고

                다운로드 기능 및 유저 피드백 기능을 포함한 웹사이트
            `,
            imageUrl: ["/assets/photos/average.png"],
            videoUrl: "https://youtu.be/Y4-JAoH4f08"
        }
    }
]

//2025
export interface SeniorCardProps2 {
    data: {
        title: string;
        category: string;
        team: string;
        date: string;
        remaining: string;
        skill: string[];
        imageUrl: string[];
        introduction: string;
        description?: string;
        links: string[];
    }
}
export const SeniorData2025: SeniorCardProps2[] = [
    {
        data: {
            title: `토리`,
            category: "Conversational AI ChatBot",
            team: "전석일 강규상",
            skill: ["Kotlin", "Python", "Java", "OpenAI API"],
            date: "March, 2025 - June, 2025",
            remaining: "146 days more",
            imageUrl: [
                "/assets/temi/Temi_Wait.gif",
                "/assets/temi/Temi_Loading.gif",
                "/assets/temi/Temi_Response.gif",
            ],
            introduction: `"Tory, Talk + Story"

                테미로봇은 코틀린과 자바로 개발된 안드로이드 앱을 통해 마이크 녹음 기능을 제공하며, 방문자의 음성 명령을 실시간으로 인식합니다. 

                이 혁신적인 시스템을 통해 방문자는 전시회 작품에 대해 더 깊이 있는 정보와 상호작용을 즐길 수 있습니다.`,
            links: ["https://github.com/praySI1070/program_language/tree/master/android/temi"],
        },
    },
    {
        data: {
            title: "VR",
            category: "VR simulation ",
            team: "홍석준",
            skill: ["Unity", "C#", "VR","AR"],
            date: "March, 2025 - June, 2025",
            remaining: "146 days more",
            imageUrl: [
                "/assets/temi/Temi_Loading.gif",
                "/assets/temi/Temi_Response.gif",
                "/assets/temi/Temi_Wait.gif"
            ],
            introduction: `
                구식 예비군 훈련장 처럼 노후되거나 거리가 먼 곳이 아닌 가까운 사무실식 훈련장에서 예비군 훈련이 가능할 수 있도록 
                
                전시 상황을 가정하여 만든 실전형 진지 구축 및 적 침투 대응 훈련 VR시뮬레이션
            `,
            links: ["https://github.com/praySI1070/program_language/tree/master/android/temi"],
        }
    },
    {
        data: {
            title: "안심링크",
            category: "인터넷 안전 브라우징 서비스",
            team: "최기현",
            skill: ["Python", "websocket"],
            date: "April, 2025 - May, 2025",
            remaining: "146 days more",
            imageUrl: [
                "/assets/photos/ansim2.png",
                "/assets/photos/ansim1.png",
                "/assets/photos/ansim1.png"
            ],
            introduction: `
                '안심링크' 는 컴퓨터에 익숙하지 않은 디지털 소외계층의 인터넷 거래 시 발생하는 사기를 미연에 방지할 수 있는 서비스를 제공합니다.

                누구나 간편하게 사용할 수 있도록 설계한 UI를 제공하며 불필요한 작업은 피하고 메시지만 있으면 바로 악성 사이트 탐지가 가능합니다.
            `,
            links: ["https://github.com/gihyeonchoi"],
        }
    },
    {
        data: {
            title: "손 영상인식 드로잉",
            category: "Motion Capture",
            team: "강규상",
            skill: ["Python", "TensorFlow"],
            date: "April, 2025 - May, 2025",
            remaining: "146 days more",
            imageUrl: [
                "/assets/temi/Temi_Loading.gif",
                "/assets/temi/Temi_Response.gif",
                "/assets/temi/Temi_Wait.gif"
            ],
            introduction: `
                안심링크 (AnsimLink)는 인터넷 상에서 이루어지는 개인과 개인간의 거래에서 발생할 수 있는 
                
                피싱 사이트를 미리 탐지해 사기를 예방할 수 있는 서비스입니다.
            `,
            links: ["https://github.com/praySI1070/program_language/tree/master/android/temi"],
        }
    },
    {
        data: {
            title: "태양열 자동추적기",
            category: "Arduino",
            team: "유선일",
            skill: ["Arduino"],
            date: "March, 2025 - June, 2025",
            remaining: "146 days more",
            imageUrl: [
                "/assets/temi/Temi_Loading.gif",
                "/assets/temi/Temi_Response.gif",
                "/assets/temi/Temi_Wait.gif"
            ],
            introduction: `
                태양열에 따라다니며 에너지를 측정하는 추적기
            `,
            links: ["https://github.com/praySI1070/program_language/tree/master/android/temi"],
        }
    }
]

//테미

export interface DetailCardProps {
    data: {
        id: string;
        people: {
            name: string;
            role: string;
            link: string;
        }[],
        title: string;
        subtitle: string;
        category: string;
        team: string;
        skill: string[];
        date: string;
        introduction: string;
        youtube: string;
        src: string[];
        next:string;
    },   
}

export type DetailCard_list = DetailCardProps[]

export const DetailCard_list: DetailCard_list = [
    {
        data: {
            id: "1",
            title: "토리",
            subtitle: "Tory, Talk + Story",
            category: "Conversational AI ChatBot",
            team: "전석일 강규상",
            skill: ["Kotlin", "Python", "Java", "OpenAI API"],
            date: "March, 2025 - June, 2025",
            youtube:'https://youtu.be/MJIkinJAzVI?si=GwBgLvCSllkhiIYW',
            people: [
                {
                    name: `전석일 [팀장] `,
                    role: `시스템 아키텍처 설계

                        Temi 내장 리소스(마이크, 스피커, 센서 등) 접근 및 제어

                        하드웨어 기반 음성 입력 처리 구조 설계

                        Temi SDK 기반 기능 통합
                    `,
                    link: "https://github.com/praySI1070",
                },
                {
                    name: "강규상 [팀원]",
                    role: `파이썬 서버 설계 및 실시간 인터랙션 처리

                        STT 결과 기반 텍스트 처리 및 대화 흐름 분석 로직 구현

                        GPT API 연동을 통한 사용자 음성 내용 분석 및 응답 생성

                        TTS 출력 제어 및 표정 애니메이션 구현 및 연동
                    `,
                    link: "https://github.com/praySI1070",
                },
            ],
            introduction: `Temi는 자율 주행이 가능한 인공지능 로봇으로, 마이크, 스피커, 레이더 등 다양한 센서와 자원을 내장하고 있어 사용자와의 상호작용이 가능합니다. 그러나 현재의 Temi는 제한된 반응 패턴과 정해진 동작만을 반복하기 때문에, 사용자에게 단조로운 인상을 줄 수 있습니다. 

                본 프로젝트는 이러한 한계를 보완하고자 Temi의 하드웨어와 소프트웨어 기능을 확장해, 실시간 대화 속에서 사용자 음성 내용을 분석하고 상황에 맞는 다양한 답변을 생성하는 챗봇 시스템을 개발했습니다. Tory는 사용자의 음성을 인식하고, 반복적인 반응이 아닌 대화의 흐름과 맥락에 맞는 자연스러운 답변을 제공함으로써 매번 새로운 대화 경험을 제공하는 것을 목표했습니다.

                관람객이 Tory를 호출하거나 말을 건네면, 저희가 개발한 백그라운드 어플리케이션이 자동으로 실행됩니다. 이 어플리케이션은 Temi의 내장 마이크를 통해 음성을 인식하고 녹음하는 기능을 수행합니다. 수집된 음성은 STT(Speech to Text) 기술을 통해 실시간으로 텍스트로 변환되고, 파이썬 기반의 서버로 전송됩니다. 이후 GPT API를 활용해 사용자 음성 내용을 분석하고, 상황에 맞는 응답을 생성합니다.

                응답은 TTS(Text to Speech) 기술을 통해 음성으로 변환되어 Temi의 스피커로 전달되며, 동시에 사전에 정의된 표정 애니메이션이 함께 출력되어 시각적인 반응을 보입니다. Tory는 대화의 맥락에 따라 다양한 애니메이션을 조합해 보다 자연스럽고 생동감 있는 상호작용을 제공합니다.

                이 챗봇 시스템은 ‘미래 도시’를 주제로 한 전시 환경에서, 인공지능 기술이 사람과 어떤 방식으로 상호작용할 수 있는지를 관람객이 직접 경험할 수 있도록 설계되었습니다.
            `,
            next:'안심링크',
            src: [
                "/assets/temi/Temi_Response.gif",
                "/assets/temi/Temi_Loading.gif",
                "/assets/temi/Temi_Response.gif",
            ]
        }
    },
    {
        data: {
            id: "2",
            title: "안심링크",
            subtitle: "AnsimLink",
            category: "인터넷 안전 브라우징 서비스",
            team: "최기현",
            skill: ["Python", "websocket"],
            date: "2025년 4월 - 2025년 5월",
            youtube:'https://youtu.be/MJIkinJAzVI?si=GwBgLvCSllkhiIYW',
            people: [
                {
                    name: `최기현 [팀장] `,
                    role: `시스템 구조 설계


                        내부 알고리즘 설계 및 제작


                    외부 위협 데이터 수집 및 분석 로직 구축


                        웹 화면 표시 등 전반적 디자인 제작
                    `,
                    link: "https://github.com/gihyeonchoi",
                }
            ],
            introduction: `안심링크 (AnsimLink)는 인터넷 상에서 이루어지는 개인과 개인간의 거래에서 발생할 수 있는 피싱 사이트를 미리 탐지해 사기를 예방할 수 있는 서비스입니다.
                컴퓨터와 모바일과 같은 디지털 기기에 익숙하지 않은 인터넷 취약 계층도 쉽게 사용할 수 있고 판별할 수 있는 시스템을 목표로 개발되었습니다.

                인터넷 상에서의 거래 중 판매자가 연결해주는 이미 등록된 에스크로 사이트가 아닌 피싱 사이트일 가능성이 있습니다. 이러한 사이트들은 구매자를 속여 개인정보를 탈취하거나, 결제 정보를 가로채는 등의 악의적인 목적을 가지고 있을 가능성이 높습니다.
                외형상 안전하게 처리할 수 있도록 돕는 서비스처럼 보이지만, 실제로는 사용자에게 피해를 입힐 위험이 큽니다.

                본 프로젝트는 주요 거래 사이트의 정보들을 취합하여 인증된 사이트들만을 저장하고, 사용자가 메시지나 사이트 URL을 입력시 서버에 저장된 데이터들을 조회하고 사이트를 분석하여 악성 사이트인지 아닌지 판별합니다.

                이를 통해 사용자는 인터넷 거래 시 악성 사이트를 빠르고 정확하게 식별할 수 있으며, 거래의 안전성을 높이며 사이버 범죄의 피해를 줄일 수 있을것으로 예상됩니다.
            `,
            next:'스마트 진지구축 훈련',
            src: [
                "/assets/photos/ansim1.png",
                "/assets/photos/ansim1.png",
                "/assets/photos/ansim1.png"
            ]
        }
    },
    {
        data: {
            id: "3",
            title: "스마트 진지구축 훈련",
            subtitle: "Smart Reserve Army",
            category: "쾌적한 환경에서의 훈련",
            team: "홍석준",
            skill: ["Unity", "VR","C++"],
            date: "2025년 4월 - 2025년 6월",
            youtube:'https://youtu.be/MJIkinJAzVI?si=GwBgLvCSllkhiIYW',
            people: [
                {
                    name: `홍석준  [팀장] `,
                    role: `VR 진지 구축 시뮬레이션 시스템 아키텍처 설계 및 구현


                        Unity 기반 3D 환경과 인터랙티브 VR 요소 개발


                    적 침투 및 위협 감지 알고리즘 설계와 최적화


                        사용자 경험 향상을 위한 인터페이스 적용
                    `,
                    link: "https://github.com/luckjun0910/Unity",
                }
            ],
            introduction: `스마트 진지구축 훈련(Smart Reserve Army)은 기존의 낙후된 예비군 훈련장 환경을 변화시키기 위해 개발하게된 VR 기반 시뮬레이션 훈련입니다.

                예비군 훈련은 현재 아직 전쟁이 진행중인 우리나라에서 전쟁 및 비상 상황에서 국민의 안전과 조국을 지키기위해 필수적인 과정이지만 실제 훈련장은 접근성도 떨어지고 날씨 같은 외부 환경에 영향을 크게 받는 문제가 있습니다.
                이 프로젝트는 이런 외부 영향을 극복하고자 쾌적한 사무실형 공간에서 실제 전시 상황느낌을 가상으로 체험하고 훈련할 수 있는 몰입형 VR 훈련시스템을 개발해 보았습니다.
                사용자는 무더운 여름철 혹은 폭설이나 폭우에도 훈련을 중단하지 않고 안전하고 재미있게 참여할 수 있으며 거리의 제약없이 어디서든 가능한 훈련을 생각해 보았습니다.

                특히, 학업이나 직장 개인 사정으로 인해 본인 관할의 훈련장 방문을 해야하는 과정을 생략할 수 있고 가까운 거리에 위치한 정부기관 사무실에서 훈련 공간을 제공할 수 있어
                훈련 참여율을 높일 수 있다고 생각합니다. 훈련 내용은 단순한 이론이 아닌 실제 전장과 비슷한 환경에서 적의 침투를 대응하는 과정으로 실전 감각을 높이는데 중점을 맞췄습니다.
                시스템은 유니티엔진 기반의 정밀한 3D 와 C++코드로 구현된 효율적인 알고리즘을 사용하여 성능과 안정성을 둘다 챙겼습니다. 또 나중에는 저의 침투, 위협감지를 현실적이게 만들어 많은 변수들을 집어넣어 더 몰입할 수 있는 훈련이 가능할것으로 기대됩니다.

                아직 부족한게 많지만 정말 훈련과정이 채택되어서 전국적으로 늘어난다면 편안한 환경에서 고품질 훈련을 받을 수 있을 것으로 예상됩니다.
            `,
            next:'에어드로잉',
            src: [
                "/assets/photos/ansim2.png",
                "/assets/photos/ansim1.png",
                "/assets/photos/ansim1.png"
            ]
        }
    },
    {
        data: {
            id: "4",
            title: "에어드로잉",
            subtitle: "Air Drawing",
            category: "제스처 인식 기반 드로잉 시스템",
            team: "강규상",
            skill: ["Python", "Mediapipe", "OpenCV"],
            date: "2025년 4월 - 2025년 5월",
            youtube:'https://youtu.be/MJIkinJAzVI?si=GwBgLvCSllkhiIYW',
            people: [
                {
                    name: `강규상 [팀장] `,
                    role: `제스처 인식 기반 드로잉 시스템 개발


                        Mediapipe 기반 오른손 판별 및 입력 필터링 로직 구현


                    제스처 인식 및 모드 분류 기능 설계


                        OpenCV를 활용한 실시간 손 좌표 추적 및 드로잉 기능 구현
                    `,
                    link: "https://github.com/Dev-Sxxngii",
                }
            ],
            introduction: `에어 드로잉(Air Drawing)은 웹캠 영상 속 손의 움직임을 인식해, 사용자가 공중에서 손짓만으로 그림을 그릴 수 있게 해주는 드로잉 인터페이스입니다.
                Mediapipe와 OpenCV를 활용하여 손의 좌표를 추적하고, 손가락의 펼침 상태에 따라 다양한 모드를 전환하여 사용자와의 상호작용을 구현했습니다.

                많은 사람들이 AI라고 하면 대화형 인공지능을 먼저 떠올리지만, 이 프로젝트는 손 인식과 같은 시각 기반 AI 기술이 어떻게 실생활 속 인터페이스로 확장될 수 있는지를 보여줍니다.
                이러한 기술은 복잡한 장비나 입력 없이도 사용자와 컴퓨터가 자연스럽게 상호작용할 수 있는 환경을 만들 수 있으며, 더 직관적이고 접근성 높은 시스템을 가능하게 합니다.

                에어 드로잉은 기술 시연을 넘어, AI 기술이 일상 속에서 어떻게 유용하게 쓰일 수 있을지를 고민하며 개발된 프로젝트입니다.
            `,
            next:'토리',
            src: [
                "/assets/photos/ansim2.png",
                "/assets/photos/ansim1.png",
                "/assets/photos/ansim1.png"
            ]
        }
    }
]
