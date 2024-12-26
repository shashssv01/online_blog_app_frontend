type ObjectId = string;

export interface Like{
    _id: ObjectId;
    number?: number;
    userId: ObjectId;
    postId?: ObjectId;
    commentId?: ObjectId;
    createdAt?: ObjectId;
}