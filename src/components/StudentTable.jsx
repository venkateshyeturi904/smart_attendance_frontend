import React, { useMemo } from 'react';
import { useTable ,usePagination } from 'react-table';
import './table.css'

// const StudentTable = ({ row }) => {
//   const COLUMNS = [
//     {
//       Header: 'Student ID',
//       accessor: 'studentId',
//     },
//     {
//       Header: 'Student Name',
//       accessor: 'studentName',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//     },
//   ];
//   const columns=useMemo(()=>COLUMNS,[]);
//   const data=useMemo(()=>row,[]);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     state: { pageIndex, pageSize },
//     gotoPage,
//     previousPage,
//     nextPage,
//     canPreviousPage,
//     canNextPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0, pageSize: 10 },
//     },
//     usePagination
//   );

//   return (
//     <div>
//       <table {...getTableProps()} className="student-table">
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           Previous
//         </button>
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
//           </strong>{' '}
//         </span>
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           Next
//         </button>
//         <span>
//           | Go to page:{' '}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={e => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: '30px' }}
//           />
//         </span>
//       </div>
//     </div>
//   );
// };

// export default StudentTable;
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
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
  });

  return (
    <div className='table-container'>
      <table {...getTableProps()} className="student-table">
        <thead className='fixed-header'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table-body">
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
    </div>
  );
};

export default StudentTable;


