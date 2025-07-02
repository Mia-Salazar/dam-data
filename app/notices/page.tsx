import Image from "next/image";

import { NoticeList, Title } from "@/components";
import { getNoticesList } from "@/application/NoticesService";

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
                        className="max-w-full max-h-full object-cover"
                    />
                </figure>
            <NoticeList notices={notices} />
        </section>
    );
}

export default Notices