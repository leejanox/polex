import { MainHeader } from '@components/commons/Headers';
import { MainFooter } from '@components/commons/Footers';
import styles from '@styles/D_introduction.module.scss';
import { photos, ProfileCard, Introduction, type ProfileCardProps, type TextData } from '@components/D_introduction';
import { Professor, Text, Photo } from '@components/D_introduction';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import { ArrowRight, Download, MailQuestion } from 'lucide-react';
import { U_Button } from '@components/commons/Buttons';
import clsx from 'clsx';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from 'src/firebase';


interface FormData {
    name: string;
    phone: string;
    message: string;
}

export const D_introduction = () => {

    const data: ProfileCardProps[] = Professor;
    const text: TextData[] = Text;

    const [currIdx, setCurrIdx] = useState(0);
    const [active, setActive] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const [form , setForm] = useState<FormData>({
        name: '',
        phone: '',
        message: ''
    });
    const modalRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(!form.name || !form.phone || !form.message){
            alert('모든 항목을 입력해주세요.');
            return;
        }
    
        try {
            await addDoc(collection(db,'inquire'),{
                ...form,
                date: Timestamp.now(),
            });
            alert('문의가 저장되었습니다. 확인 후 연락 드리겠습니다.');
            setForm({
                name: '',
                phone: '',
                message: '',
            });
        } catch (error){
            console.error('문의 저장 오류:', error);
            alert('다시 시도해주세요');
            setForm({
                name: '',
                phone: '',
                message: '',
            });        
        }
    }
    

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles.D_introduction}>
            <header>
                <MainHeader/>   
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <h1>인공지능 SW 융합과</h1>
                        <span>Artificial Intelligence Software Convergence</span>
                    </div>
                    <div className={styles.info}>
                        <h2>한국폴리텍대학 춘천캠퍼스 본관 2층</h2>
                    </div>
                    
                </div>
            </header>
            <div className={styles.container}>
                <section id="section1">
                    <div className={styles.videoContainer}>
                        <ReactPlayer url={'https://youtu.be/j-dK5VcTJIo'} 
                            width={'100%'} height={'100%'}
                            loop={true} muted={true} controls={false} playing={true}
                        />
                    </div>
                </section>
                <section id="section2">
                    <h1>교수진 소개</h1>
                    <div className={styles.profileContainer}>
                        {data.map((v,i)=>(
                            <ProfileCard key={i} data={v}/>
                        ))}
                    </div>
                </section>

                <section id="section3">
                    <h1>학과소개</h1>
                    <div className={styles.labelContainer}>
                        {text.map((v,i)=>(
                            <div key={i} className={clsx(styles.label, active === v.id && styles.active)}>
                                <a href={`#${v.id}`} onClick={(e)=>{e.preventDefault(); document.getElementById(v.id.toString())?.scrollIntoView({behavior: 'smooth'})}}>
                                    <span>{v.title}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div id={text.find(v=>v.id === active)?.id.toString()} className={styles.introductionContainer}>
                        {active !== 0 ? text.map((v,i)=>(
                            <Introduction key={i} data={v} setActive={setActive}/>
                        )) : 
                        <div className={styles.introductionContainer}>
                            <Introduction data={text[0]} setActive={setActive}/>
                        </div>
                        }
                    </div>
                    <div className={styles.linkContainer}>
                        <U_Button>
                            <a href="https://www.kpu.ac.kr/kpu/index.do" target="_blank" rel="noreferrer noopener">
                                <span>학과 홈페이지</span>
                                <ArrowRight/>
                            </a>
                        </U_Button>
                        <U_Button>
                            <a href='/assets/deDown.pdf' download>
                                <span>학과소개서 다운로드</span>
                                <Download/>
                            </a>
                        </U_Button>
                        <U_Button onClick={()=>setIsOpen(true)}>
                            <span>입학문의</span>
                            <MailQuestion/>
                        </U_Button>
                    </div>
                </section>

                <section id="section4">
                    <h1>학과사진</h1>
                    <Photo photos={photos} currIdx={currIdx} setCurrIdx={setCurrIdx}/>
                </section>
            </div>
            <footer>
                <MainFooter/>
            </footer>
            {isOpen && (
                <div className={styles.modal__background}>
                    <div className={styles.modal} ref={modalRef}>
                        <div className={styles.modal__content}>
                            <div className={styles.modal__content__title}>
                                <h2>입학문의</h2>   
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.modal__content__form}>
                                    <div className={styles.modal__content__form__row}>
                                        <div className={styles.modal__content__form__row__group}>
                                            <label htmlFor="name">이름</label>
                                            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder='이름을 입력해주세요' required/>
                                        </div>
                                        <div className={styles.modal__content__form__row__group}>
                                            <label htmlFor="phone">전화번호</label>
                                            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder='전화번호를 입력해주세요' required/>
                                        </div>
                                    </div>
                                    <div className={styles.modal__content__form__textarea}>
                                        <label htmlFor="message">문의 내용</label>
                                        <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder='문의 내용을 입력해주세요' required/>
                                    </div>
                                    <div className={styles.modal__content__form__btn}>
                                        <button type="submit">제출하기</button>
                                        <button onClick={handleClose}>닫기</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
