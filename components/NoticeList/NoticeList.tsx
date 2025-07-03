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

    const handleReset = () => {
        setFilteredNotices(notices)
        setFilterName("España")
    }

    return (
        <>
            <h3 className="mt-6 text-xl">Actualmente hay 
                <span className="bg-teal-500 text-white px-2 mx-2 rounded-md">{filteredNotices.length}</span> 
                avisos
            </h3>
            <div className="flex justify-between">
                <h4 className="mt-4">Actualmente se está filtrando por: 
                    <span className="badge ml-2 p-2">{filterName}</span>
                </h4>
                <button className="badge px-3" onClick={handleReset}>Resetear filtros</button>
            </div>

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