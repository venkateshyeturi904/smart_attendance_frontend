import React, { useMemo, useState } from 'react';
import { useTable, useRowSelect } from 'react-table';
import '../CSS/table.css';

const StudentTable = ({ row, col ,setData }) => {
  const columns = useMemo(() => col, [col]);
  const data=useMemo(()=>row,[row]);
  let func=()=>{};
  if(col[2]?.Header=='Present/Absent'){
    func=(hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: 'Checkbox',
          Cell: ({ row }) => {
            const handleCheck=()=>{
                const newData = data.map((d) =>
                  d=== row.original
                    ? { ...row.original,attendance: !row.original.attendance }
                    : d
                );
                setData([...newData]);
              // row.toggleRowSelected();
            }
            return (
              <input
                type="checkbox"
                checked={row.original.attendance == true}
                onChange={() =>handleCheck() }
              />
            );
          },
        },
        ...columns,
      ]);
    }
  }
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    func
  );

  return (
    <div className="table-container">
      <table {...getTableProps()} className="student-table">
        <thead className="fixed-header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table-body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
