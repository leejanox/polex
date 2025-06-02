import { DetailCard_list } from "@components/Students";
import { DetailCard } from "@components/Students/DetailCard";

interface SeniorDetailProps {
    title: string;
}

export const SeniorDetail = ({title}: SeniorDetailProps) => {

    const datas = DetailCard_list.find(v => v.data.title === title);

    return (
        <>
            {datas && <DetailCard data={datas.data} />}
        </>
    )
}
