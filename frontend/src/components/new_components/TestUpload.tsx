import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const TestUpload = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setImages([...images, ...files]);

      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setPreviews([...previews, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    // Simulate an upload action
    alert(`${images.length} image(s) uploaded successfully!`);
    setImages([]);
    setPreviews([]);
  };

  return (
    <div className="flex flex-col items-center py-10 border mx-10 rounded-md mb-5 shadow-sm">
      <h1 className="text-xl font-bold mb-6">Upload Documents Here</h1>
      <div className="bg-white p-6 rounded-lg flex flex-col items-center">
        <input
          type="file"
          multiple
          accept="image/*"
          className="block w-50 text-sm py-2 px-3 text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
          onChange={handleImageChange}
        />
        {previews.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-center pb-2">
              Selected Images
            </h2>
            <ul className="mt-2 flex items-center justify-center gap-5 flex-wrap">
              {previews.map((preview, index) => (
                <li
                  key={index}
                  className="flex justify-evenly items-center bg-gray-50 px-2 h-20 rounded-lg shadow-sm border group duration-200"
                >
                  <img
                    src={preview}
                    alt={`Preview ${index}`}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span className="text-sm truncate w-3/4">
                    {images[index].name}
                  </span>
                  <button
                    className="bg-red-500 text-xl p-1 rounded-md text-white shadow-md shadow-red-500/50 mx-2 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 duration-200"
                    onClick={() => removeImage(index)}
                  >
                    <MdDeleteForever />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* <button
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handleUpload}
          disabled={images.length === 0}
        >
          Upload
        </button> */}
      </div>
    </div>
  );
};

export default TestUpload;
