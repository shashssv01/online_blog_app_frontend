import React, { useState } from 'react';
import './AddNewBlog.css';

const AddNewBlog: React.FC = () => {
    const [formData, setFormData] = useState<{ title: string; content: string }>({
        title: '',
        content: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { title, content } = formData;
        if (title && content) {
            handleBlogSubmit(title, content);
            setFormData({ title: '', content: '' });
        } else {
            alert('Both title and content are required!');
        }
    };

    const handleBlogSubmit = (title: string, content: string) => {
        console.log('New Blog Added:', { title, content });
    };

    return (
        <div className="add-blog-container">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Add Blog</button>
            </form>
        </div>
    );
};

export default AddNewBlog;
