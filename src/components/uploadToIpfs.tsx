import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import { useDropzone } from 'react-dropzone';

const PinataVideoUploader = () => {
  const [ipfsHash, setIpfsHash] = useState('');
  const [error, setError] = useState('');

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);

        const config = {
          maxBodyLength: 'Infinity',
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            'pinata_api_key': 'c0c33cc814ff03ddef9e',
            'pinata_secret_api_key': 'ac85825b067fc55af60cf29ca2aad02f5492c9e16ff9dcbf4a1075c30657fb25'
          }
        };

        const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, config);
        setIpfsHash(response.data.IpfsHash);
        console.log('Video uploaded to IPFS:', response.data.IpfsHash);
      } catch (error) {
        setError('Error uploading video to IPFS');
        console.error('Error uploading video to IPFS:', error);
      }
    }
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-100"
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">Drag and drop a video file here, or click to select a file</p>
      </div>
      {ipfsHash && (
        <div className="mt-4">
          <p className="text-gray-700">Video uploaded to IPFS with hash:</p>
          <a
            href={`https://ipfs.io/ipfs/${ipfsHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {ipfsHash}
          </a>
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-500">{error}</div>
      )}
    </div>
  );
};

export default PinataVideoUploader;