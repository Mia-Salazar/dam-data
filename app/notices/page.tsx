import { getNoticesList } from "@/application/NoticesService";


const Notices =  async() => {
    const notices = await getNoticesList()
    console.log(notices, 'aa')
    return (
        <section className="">
    avisos
        </section>
    );
}

export default Notices