import { fetchNotices } from "@/data/fetchNotices";
import { NoticeResponseInterface } from "@/domain/notices.types";

export const getNoticesList = async (): Promise<NoticeResponseInterface[]> => {
    const response = await fetchNotices();
    return response;
};