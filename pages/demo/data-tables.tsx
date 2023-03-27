import { useState, useEffect } from "react";
import { DataTable } from "mantine-datatable";
import { useDebouncedValue } from "@mantine/hooks";
import { Flex, Button, Grid, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import useApi, { ApiResult } from "@/hooks/useAxios";

interface TableData {
  id: number;
  table_name: string;
  tablespace_name: string;
  comments: string;
}

const PAGE_SIZE = 20;

export default function DataTableDemo() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading, error }: ApiResult<TableData[]> =
    useApi<TableData[]>("/db-schema/tables");
  const [filteredData, setFilteredData] = useState<TableData[]>([]);
  const [records, setRecords] = useState<TableData[]>([]);
  const [debouncedQuery] = useDebouncedValue(query, 200);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(({ table_name }) => {
        if (
          debouncedQuery !== "" &&
          !`${table_name}`.includes(debouncedQuery.trim().toUpperCase())
        ) {
          return false;
        }
        return true;
      });
      setFilteredData(filteredData);
    }
  }, [data, debouncedQuery]);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    if (filteredData) {
      setRecords(filteredData.slice(from, to));
    }
  }, [page, filteredData]);

  return (
    <Flex
      gap="md"
      justify="flex-start"
      align="center"
      direction="column"
      wrap="nowrap"
    >
      <Flex mb="md">
        <TextInput
          sx={{ flexGrow: 1, marginRight: "10px" }}
          placeholder="Object name includes ..."
          icon={<IconSearch size={16} />}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />

        <Button onClick={() => setQuery("")}>Clear</Button>
      </Flex>
      <DataTable
        minHeight={200}
        noRecordsText="沒有資料"
        withBorder
        borderRadius="sm"
        withColumnBorders
        striped
        highlightOnHover
        // provide data
        records={records}
        totalRecords={filteredData.length || 0}
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
    </Flex>
  );
}
