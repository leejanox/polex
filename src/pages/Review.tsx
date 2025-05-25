import { db } from '../firebase';
import styles from '@styles/Review.module.scss';
import { collection, getDocs, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { useState, useEffect } from 'react';

interface ReviewProps {
    id: string;
    name: string;
    content: string;
    createdAt: Timestamp;
    rating: number;
}

export const Review = () => {

    const [reviews, setReviews] = useState<ReviewProps[]>([]);
    const [newReview, setNewReview] = useState<ReviewProps>({
        id: '',
        name: '',
        content: '',
        createdAt: Timestamp.now(),
        rating: 0,
    });
    const [name, setName] = useState('');
    
    const fetchReviews = async () => {
        const snapshot = await getDocs(collection(db, 'guestbook'));
        const fetched = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data() as Omit<ReviewProps, 'id'>,
        }));
        setReviews(fetched);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!newReview || !name) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        await addDoc(collection(db, 'guestbook'), {
            name: name,
            content: newReview.content,
            createdAt: Timestamp.now(),
            rating: newReview.rating,
        });
        setNewReview({
            id: '',
            name: '',
            content: '',
            createdAt: Timestamp.now(),
            rating: 0,
        });
        setName('');
        fetchReviews();
    };
    
    const handleRatingChange = async (id:string) => {
        const docRef = doc(db, 'guestbook', id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            const { rating } = docSnap.data() as ReviewProps;
            await updateDoc(docRef, {
                rating: rating + 1,
            });

            fetchReviews();
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <></>
    )
}
