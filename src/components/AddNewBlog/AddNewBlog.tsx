import React, { useState } from 'react';
import './AddNewBlog.css';

const AddNewBlog: React.FC = () => {
    const [formData, setFormData] = useState<{ title: string; content: string }>({
        title: '',
        content: '',
    });
    const [error , setError] = useState<{title: string; content: string}>({
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
        const validateErrors = validateForm();
        if(validateErrors.title === "Title is required" && validateErrors.content === "Content is required")
            {
            setError(validateErrors);
        }
        else{
            //Completed form submission
            alert("Form submitted successfully!");
            setFormData({
                title : '',
                content: ''
            });
            setError({
                title: '',
                content: '',
            });
        }
    };

    const validateForm = () => {
        let errors= {title:'',
            content: ''
        };
        if(!formData.title.trim()){
            errors.title = "Title is required";
        }
        if(!formData.content.trim()){
            errors.content = "Content is required";
        }
        return errors;
        }
    


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
                    />
                    {error.title && <span style={ {color :"red"}}> {error.title} </span>}
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name='content'
                        value={formData.content}
                        onChange={handleChange}
                    ></textarea>
                    {error.content && <span style={ {color :"red"}}> {error.content} </span>}

                </div>
               
                <button type="submit">Submit Blog</button>
            </form>
        </div>
    );
};

export default AddNewBlog;
