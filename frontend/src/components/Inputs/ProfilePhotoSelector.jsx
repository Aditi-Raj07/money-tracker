import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
        if (inputRef.current) {
            inputRef.current.value = ''; // Clear the file input
        }
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div className="flex flex-col items-center gap-4 mb-6">
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            {/* Profile Photo Display */}
            <div className="relative w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
                {previewUrl ? (
                    <img 
                        src={previewUrl} 
                        alt="Profile preview" 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <LuUser className="w-16 h-16 text-gray-500" />
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <button
                    type="button"
                    onClick={onChooseFile}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-800 text-white rounded-lg hover:bg-violet-500 transition-colors cursor-pointer"
                >
                    <LuUpload />
                    <span>{image ? 'Change' : 'Upload'}</span>
                </button>

                {image && (
                    <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                        <LuTrash />
                        <span>Remove</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfilePhotoSelector;