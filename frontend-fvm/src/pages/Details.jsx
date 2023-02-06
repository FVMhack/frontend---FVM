import React, { useState } from "react";

const Details = () => {
    const [dataList, setDataList] = useState([
      { id: 1, data: "", description: "" }
    ]);
  
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleDataChange = (idx, event) => {
      const updatedDataList = [...dataList];
      updatedDataList[idx][event.target.name] = event.target.value;
      setDataList(updatedDataList);
    };
  
    const handleAddData = () => {
      setDataList([
        ...dataList,
        { id: dataList.length + 1, data: "", description: "" }
      ]);
    };
  
    const handleRemoveData = idx => {
      setDataList([...dataList.slice(0, idx), ...dataList.slice(idx + 1)]);
    };
  
    const handleFileInputChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  

  return (
    <>
      <h2 className="text-2xl font-medium mb-4">List Data</h2>
      {dataList.map((data, idx) => (
        <div key={data.id} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Data {idx + 1}
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="data"
              value={data.data}
              onChange={e => handleDataChange(idx, e)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              value={data.description}
              onChange={e => handleDataChange(idx, e)}
            />
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fileInput">
            Upload a file:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            id="fileInput"
            onChange={handleFileInputChange}
          />
        </div>
        {selectedFile && (
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Selected file: {selectedFile.name}</p>
          </div>
        )}
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleRemoveData(idx)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleAddData}
      >
        Add Data
      </button>
    </>
  );
};

export default Details;
