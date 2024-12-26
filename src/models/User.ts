type ObjectId = string;

export interface User {
    _id?: ObjectId;
    name: string;
    email: string;
    password: string;
    bio?: string;
    profilePicture?: string; // Optional field
    createdAt?: ObjectId;
    updatedAt?: ObjectId;
}


// Number: Representing the timestamp as milliseconds since the Unix epoch (January 1, 1970).
// Date Object: Using JavaScript's Date object for full date and time handling.
// String: If the timestamp is in ISO 8601 or another serialized format.
// Commonly Used Types
// Unix Timestamp (Milliseconds):

// typescript
// Copy code
// type Timestamp = number; // Example: 1672531199000
// JavaScript Date Object:

// typescript
// Copy code
// type Timestamp = Date; // Example: new Date()
// ISO 8601 String:

// typescript
// Copy code
// type Timestamp = string; // Example: "2024-12-22T10:15:30Z"