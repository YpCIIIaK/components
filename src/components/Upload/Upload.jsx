import React, { useState } from "react";

const UploadField = () => {
    const [files, setFiles] = useState([]);

    const handleFiles = (event) => {
        const uploadedFiles = event.target.files;
        setFiles([...files, ...Array.from(uploadedFiles)]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        setFiles([...files, ...Array.from(droppedFiles)]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="max-w-lg mx-auto my-7 bg-sliderBgColor-500">
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md text-gray-600 bg-white cursor-pointer hover:border-blue-500"
            >
                <p className="mb-2">Click or drag file to this area to upload</p>
                <p className="text-xs text-gray-500">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
                </p>
                <input
                    type="file"
                    multiple
                    onChange={handleFiles}
                    className="hidden"
                />
            </div>

            {files.length > 0 && (
                <div className="mt-4">
                    <h4 className="font-medium text-gray-700">Uploaded Files:</h4>
                    <ul className="mt-2 list-disc list-inside">
                        {files.map((file, index) => (
                            <li key={index} className="text-sm text-gray-600">
                                {file.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UploadField;
