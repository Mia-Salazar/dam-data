interface TagInterface {
    text: string;
}

export interface NoticeResponseInterface {
    paragraph: string;
    chipText: string;
    aspect: string;
    link: string;
    tags: TagInterface[];
    target: string;
}

export interface NoticePropsInterface {
    paragraph: string;
    chipText: string;
    tags: TagInterface[];
    onClick: (tag: string) => void
}