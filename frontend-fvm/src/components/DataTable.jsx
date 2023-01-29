import React from "react";

const DataTable = () => {
  return (
    <div className="table-container bg-black">
      <div className="table-header">
        <h3 className="text-white font-bold text-2xl">My Space</h3>
        <input
          type="text"
          placeholder="Search Name/ CID"
          className="border border-white rounded px-4 py-2"
        />
      </div>
      <table className="w-full text-white">
        <thead>
          <tr className="border-b">
            <th className="p-3">Name</th>
            <th className="p-3">CID</th>
            <th className="p-3">Size</th>
            <th className="p-3">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">File 1</td>
            <td className="p-3">123456789</td>
            <td className="p-3">5 MB</td>
            <td className="p-3">01/01/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 2</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 3</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 4</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 5</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 6</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 7</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 8</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 9</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">File 10</td>
            <td className="p-3">987654321</td>
            <td className="p-3">10 MB</td>
            <td className="p-3">01/02/2022</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
