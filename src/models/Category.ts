type ObjectId = string;

export interface Category{
    _id: ObjectId;
    name: string;
    description?: string;
    createdAt?: ObjectId;
    updatedAt?: ObjectId
};