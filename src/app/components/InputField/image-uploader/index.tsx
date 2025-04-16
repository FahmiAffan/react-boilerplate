import React, { useState } from 'react';

interface ImageUploaderProps {
    onUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onUpload(file);
        }
    };

    return (
        <div>
            <label
                htmlFor="image-uploader"
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Upload Image
            </label>
            <input
                id="image-uploader"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {preview && (
                <div style={{ marginTop: '10px' }}>
                    <img
                        src={preview}
                        alt="Preview"
                        style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '5px' }}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;