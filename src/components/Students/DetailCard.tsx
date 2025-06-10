import { MainFooter } from "@components/commons/Footers"
import { Github } from "lucide-react"
//import { Link, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { U_Button } from "@components/commons/Buttons"
import { MainHeader } from "@components/commons/Headers"
import styles from "@styles/Detail.module.scss"
import { useEffect } from "react"
import type { DetailCardProps } from "./Senior"

export const DetailCard = ({data}: DetailCardProps) => {

    //const { id } = useParams();
    //const currentId = parseInt(id as string);
    //const previousId = currentId > 1? currentId - 1 : parseInt(data.id) - 1;
    //const nextId = currentId < parseInt(data.id)? currentId + 1 : parseInt(data.id) + 1;


    useEffect(()=>{
    },[])

    return (
        <div className={styles.DetailCard}>            
            <header>
                <MainHeader />
            </header>
            <div className={styles.container}>
                <section className={styles.left}>
                    <div className={styles.title}> 
                        <h2>{data.title}</h2>
                        <p>{data.subtitle}</p>
                    </div>
                    <div className={styles.introduction}>
                        {data.introduction.split('\n').map((v,i)=>(
                            <p key={i}>{v}<br /></p>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <Link to={`/senior/${data.next}`}>
                            <U_Button>
                                <p> 이전 작품 보기</p>
                            </U_Button>
                        </Link>
                        <U_Button>
                            <p> {`${data.title} 영상 보기`}</p>
                        </U_Button>
                        <Link to={`/senior/${data.next}`}>
                            <U_Button>
                                <p> 다음 작품 보기</p>
                            </U_Button>
                        </Link>
                    </div>
                </section>
                <aside className={styles.right}>
                    <div className={styles.image}>
                        <img src="/assets/posters/1.jpg" alt="Refik Anadol" />
                    </div>
                    <div className={styles.info}>
                        <h3>팀원 소개</h3>
                        {data.people.map((v,i)=>(
                            <div className={styles.person} key={i}>
                                <div className={styles.name}>
                                    <h4>{v.name.split(' ')[0]}</h4>
                                    <span>{v.name.split(' ')[1]}</span>
                                </div>
                                <p>{v.role}</p>
                            </div>
                        ))}
                        <div className={styles.tags}>
                            {data.skill.map((v,i)=>(
                                <li key={i}>{v}</li>
                            ))}
                        </div>
                    </div>
                    <div className={styles.links}>
                        <Github/>
                        {data.people.filter((v)=>v.link).map((v,i)=>(
                            <a key={i} href={v.link} target="_blank" rel="noopener noreferrer">
                                <span>{v.name.split(' ')[0]} :</span>
                                <p>GitHub</p>
                            </a>
                        ))}
                    </div>
                </aside>
            </div>
            <footer>
                <MainFooter />
            </footer>   
        </div>
    )
}
