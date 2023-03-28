import useApi, { ApiResult } from "@/hooks/useAxios";
import { useRouter } from "next/router";
import { DataTable } from "mantine-datatable";

interface ApiResponse<T> {
  status: boolean;
  data: T;
}

interface ColumnData {
  id: number;
  column_name: string;
  data_type: string;
  comments: string;
}

const TableColumns = () => {
  const router = useRouter();
  const { table_id } = router.query;
  const { data, isLoading, error }: ApiResult<ColumnData[]> = useApi(
    `/db-schema/tables/${table_id}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <DataTable
      minHeight={200}
      noRecordsText="沒有資料"
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      columns={[
        { accessor: "id", title: "#" },
        { accessor: "column_name", title: "欄位名稱" },
        { accessor: "data_type", title: "型別" },
        { accessor: "comments", title: "說明" },
      ]}
      records={data}
    />
  );
};

export default TableColumns;
