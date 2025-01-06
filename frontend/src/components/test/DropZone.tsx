import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = () => {
  const [files, setFiles] = useState<any[]>([]);
  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file: Blob | MediaSource) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <div
        {...getRootProps()}
        className="p-10 border rounded-md text-slate-500"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <section className="mt-10">
        <ul className="grid grid-cols-5 gap-3">
          {files.map((file) => (
            <li key={file.name}>
              <img
                src={file.preview}
                alt=""
                className="aspect-square object-cover border rounded-lg shadow-sm"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DropZone;
