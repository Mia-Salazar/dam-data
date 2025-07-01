import Image from "next/image";

import { getNoticesList } from "@/application/NoticesService";
import { NoticeItem, Title } from "@/components";

const Notices =  async() => {
    const notices = await getNoticesList()

    return (
        <section>
            <Title>Avisos</Title>
                <figure className="mt-8 w-full h-100 object-cover">
                    <Image 
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt=""
                        src="/notice.jpg" 
                        className="max-w-full max-h-full"
                    />
                </figure>
            <h3 className="mt-6 text-xl">Actualmente hay <span className="bg-teal-500 text-white px-2">{notices.length}</span> avisos</h3>
            <ul className="mt-6">
                {notices.map(notice => <NoticeItem key={notice.link} paragraph={notice.paragraph} chipText={notice.chipText} tags={notice.tags} />)}
            </ul>
        </section>
    );
}

export default Notices