import React from "react";

const RenderColumns = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          return <th key={index}>{column.columnName}</th>;
        })}
      </tr>
    </thead>
  );
};

const RenderRows = ({ rows, columns }) => {
  return (
    <tbody>
      {rows.map((row, index) => {
        return (
          <tr key={index}>
            {columns.map((column, index) => {
              return <td key={index}> {row[column.dataKey]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
const Table = ({ tableData, columns }) => {
  return (
    <table>
      <RenderColumns columns={columns} />
      <RenderRows rows={tableData} columns={columns} />
    </table>
  );
};

export default Table;
