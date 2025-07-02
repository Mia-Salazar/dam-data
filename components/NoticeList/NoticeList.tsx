'use client'

import { useState } from "react";

import NoticeItems from "../NoticeItem/NoticeItem";
import { NoticeResponseInterface } from "@/domain/notices.types";

const NoticeList = ({ notices }: {notices: NoticeResponseInterface[]}) => {
  const [filteredNotices, setFilteredNotices] = useState<NoticeResponseInterface[]>(notices)

  const handleChangeFilter = (filter: string) => {
    const newNotices = notices.filter(notice => notice.tags.find(tag => tag.text === filter))
    setFilteredNotices(newNotices)
  }

    return (
        <>
            <h3 className="mt-6 text-xl">Actualmente hay 
                <span className="bg-teal-500 text-white px-2 mx-2">{filteredNotices.length}</span> 
                avisos
            </h3>
            <ul className="mt-6">
                {filteredNotices.map(notice => 
                    <NoticeItems 
                        chipText={notice.chipText}
                        key={notice.link}
                        onClick={handleChangeFilter}
                        paragraph={notice.paragraph}
                        tags={notice.tags} 
                    />
                )}
            </ul>
        </>

    );
}

export default NoticeList