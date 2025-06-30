interface TagInterface {
    text: string;
}

export interface NoticesInterface {
    paragraph: string;
    chipText: string;
    aspect: "primary",
    link: string,
    tags: TagInterface[];
    target: string;
}