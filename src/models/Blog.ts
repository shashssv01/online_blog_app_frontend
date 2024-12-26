type ObjectId = string;

export interface Blog {
    _id : ObjectId;
    title: string;
    content: string;
    date: string;
    author?: string;
    authorId?: ObjectId;
    categories?: string[];
    tags?: string[];
    coverImage?: string;
    published?: boolean;
    views?: number;
    likes?: number;
    publishedAt?: string;
    createdAt?: string;
    updatedAt?: string;
}

