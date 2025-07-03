'use client'

import { useState } from "react";

import NoticeItems from "../NoticeItem/NoticeItem";
import { NoticeResponseInterface } from "@/domain/notices.types";

const NoticeList = ({ notices }: {notices: NoticeResponseInterface[]}) => {
  const [filteredNotices, setFilteredNotices] = useState<NoticeResponseInterface[]>(notices)
  const [filterName, setFilterName] = useState("España")

  const handleChangeFilter = (filter: string) => {
    const newNotices = notices.filter(notice => notice.tags.find(tag => tag.text === filter))
    setFilteredNotices(newNotices)
    setFilterName(filter)

  }

    return (
        <>
            <h3 className="mt-6 text-xl">Actualmente hay 
                <span className="bg-teal-500 text-white px-2 mx-2">{filteredNotices.length}</span> 
                avisos
            </h3>
            <h4 className="mt-4">Actualmente se está filtrando por: 
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 ml-2 text-white px-1 rounded-md">{filterName}</span>
            </h4>
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