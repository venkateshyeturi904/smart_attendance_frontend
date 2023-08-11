import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import './table.css'

const StudentTable = ({ row }) => {
  const COLUMNS = [
    {
      Header: 'Student ID',
      accessor: 'studentId',
    },
    {
      Header: 'Student Name',
      accessor: 'studentName',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];
  const columns=useMemo(()=>COLUMNS,[]);
  const data=useMemo(()=>row,[]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="student-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;
