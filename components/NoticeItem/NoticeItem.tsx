"use client"

import { NoticePropsInterface } from "@/domain/notices.types"

const NoticeItems = ({ paragraph, chipText, onClick, tags }:  NoticePropsInterface) => {
    return (
        <li className="mb-4 p-4 rounded-lg border border-teal-500">
            <p className="font-bold text-gray-500 uppercase text-xs mb-2">{chipText}</p>
            <h4>{paragraph}</h4>
            {tags.map(tag => 
                <button
                    key={tag.text}
                    className="mr-2 mt-2 px-2 py-1 badge"
                    onClick={() => onClick(tag.text)}
                >
                    {tag.text}
                </button>
            )}
        </li>
    )

}

export default NoticeItems