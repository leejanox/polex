import styles from '@styles/E_introduction.module.scss';
import { Heart } from 'lucide-react';
import { collection, Timestamp, getDocs, doc, addDoc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { db } from 'src/firebase';

interface Message {
    id: string;
    name: string;
    message: string;
    date: Timestamp;
    like: number;
}

export const GuestBook = () => {

    const [active, setActive] = useState<boolean>(false);
    const [message, setMessage] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<Message>({
        id: '',
        name: '',
        message: '',
        date: Timestamp.now(),
        like: 0,
    });

    const fetchMessage = async () => {
        const snapshot = await getDocs(collection(db, 'guestbook'));
        const fetched = snapshot.docs.map((doc)=>({
            ...doc.data() as Omit<Message, 'id'>,
            id: doc.id,
        }));
        setMessage(fetched);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!newMessage.name || !newMessage.message) {
            alert('모든 항목을 입력해주세요.');
            return;
        }
        
        setActive(true);
        await addDoc(collection(db, 'guestbook'), newMessage);
        setNewMessage({
            id: '',
            name: '',
            message: '',
            date: Timestamp.now(),
            like: 0,
        });
        fetchMessage();
        setActive(false);
    }

    const handleLike = async (id: string) => {
        const docRef = doc(db, 'guestbook', id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const message = docSnap.data() as Message;
            await updateDoc(docRef, {
                like: message.like + 1,
            });
            fetchMessage();
        }
    }
    
    useEffect(()=>{
        fetchMessage();
    },[]);

    return (
        <div className={styles.guestBook}>
            <div className={styles.title}>
                <h1>Guest Book</h1>
                <p>방명록을 남겨주세요</p>
            </div>
            <table className={styles.list}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th><Heart/></th>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <th>메시지</th>
                        <th>날짜</th>
                        <th>추천</th>
                    </tr>
                </thead>
                <tbody>
                    {message.map((v,i)=>(
                        <tr key={i} id={v.id}>
                            <td>{v.name}</td>
                            <td>{v.message}</td>
                            <td>{v.date.toDate().toLocaleString('ko-KR',{
                                year: '2-digit',
                                month: 'numeric',
                                day: 'numeric'
                            })}
                            </td>
                            <td><Heart onClick={()=>handleLike(v.id)}/><span>{v.like}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.form_input}>
                    <input id='name' type="name" placeholder="이름" 
                        value={newMessage.name} onChange={(e)=>setNewMessage({...newMessage, name: e.target.value})}
                    />
                    <input id='message' placeholder="메시지" 
                        value={newMessage.message} onChange={(e)=>setNewMessage({...newMessage, message: e.target.value})}
                    />
                </div>
                <button type="submit"
                    className={clsx({
                        [styles.active]: active,
                    })}
                >작성</button>
            </form>
        </div>
    );
}