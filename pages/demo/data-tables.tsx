import { useState, useEffect } from "react";
import { DataTable } from "mantine-datatable";
import useApi, { ApiResult } from "@/hooks/useAxios";

interface TableData {
  id: number;
  table_name: string;
  tablespace_name: string;
  comments: string;
}

const PAGE_SIZE = 20;

export default function DataTableDemo() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error }: ApiResult<TableData[]> =
    useApi<TableData[]>("/db-schema/tables");
  const [records, setRecords] = useState<TableData[]>([]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    if (data) {
      setRecords(data.slice(from, to));
    }
  }, [page, data]);

  return (
    <DataTable
      minHeight={150}
      noRecordsText="沒有資料"
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      // provide data
      records={records}
      totalRecords={data?.length || 0}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
      // define columns
      columns={[
        {
          accessor: "id",
          // this column has a custom title
          title: "#",
          // right-align column
          textAlignment: "right",
        },
        { accessor: "table_name" },

        { accessor: "comments" },
      ]}
      // execute this callback when a row is clicked
      onRowClick={({ id, table_name }) =>
        alert(`todo: 取得欄位 for table ${id}, ${table_name}`)
      }
    />
  );
}
