type ObjectId = string;

export interface Comment {
    _id: ObjectId;
    postId: ObjectId;
    authorId: ObjectId;
    content: string;
    likes?: number;
    parentId?: ObjectId;
    createdAt?: ObjectId;
    updatedAt?: ObjectId;
}