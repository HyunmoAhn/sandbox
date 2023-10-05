'use client';
import { useState, useEffect } from 'react';
import { Blob } from 'next/dist/compiled/@edge-runtime/primitives/blob';

const Page = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [fileType, setFileType] = useState('');
  const [base64Data, setBase64Data] = useState('');
  const [textData, setTextData] = useState('');
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(e.target.files?.[0]);
    if (!file) return;

    setFileType(file.type);
    const url = URL.createObjectURL(file);
    setFileUrl(url);

    const blob = new Blob([file], { type: file.type });

    console.log(blob);

    const reader = new FileReader();

    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setBase64Data(event.target?.result);
      }
    };

    reader.readAsDataURL(file);

    const textReader = new FileReader();
    textReader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setTextData(event.target?.result);
      }
    };
    textReader.readAsText(file);
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(fileUrl);
  }, [fileUrl]);

  useEffect(() => {
    console.log();
  }, [textData]);

  return (
    <>
      <input type="file" onChange={handleUploadFile} />
      {fileUrl && (
        <>
          <p>{fileType}</p>
          <a href={fileUrl} target="_blank">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fileUrl} alt="" />
          </a>
        </>
      )}
      {base64Data && (
        <>
          <p>base64</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={base64Data} alt="" />
        </>
      )}
      {textData && (
        <>
          <p>textData</p>
          <p>{textData}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:${fileType};base64,${window.btoa(
              unescape(encodeURIComponent(textData))
            )}`}
            alt=""
          />
        </>
      )}
    </>
  );
};

export default Page;
