import React from "react";

const ExtraTwo = ({ freeClass, totalFree }) => {
  return (
    <div className="md:w-2/3 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th>Premium Add-Ons</th>
              <th>Price</th>
              <th>Education</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {freeClass.map((item, i) => (
              <tr key={i} className="bg-indigo-300 text-white">
                <td>{item?.title.slice(0, 40)}...</td>
                <td>$ {item.price}</td>
                <td>Free</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-indigo-500 text-white">
            <tr>
              <th>TOTAL</th>
              <th>$ {totalFree}</th>
              <th className="bg-gradient-to-r from-violet-900 to-purple-500">
                ALL IN EDUCATION <br />
                Save up to 99%. No monthly cost
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ExtraTwo;
