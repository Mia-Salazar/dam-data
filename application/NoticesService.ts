import { fetchNotices } from "@/data/fetchNotices";
import { NoticesInterface } from "@/domain/notices.types";

export const getNoticesList = async (): Promise<NoticesInterface[]> => {
    const response = await fetchNotices();
    return response;
};