import React from "react";
import AllTables from "./all-tables";
import { Flex } from "@mantine/core";
import { useRouter } from "next/router";
import TableColumns from "./[table_id]";

const TableWrapper = () => {
  const router = useRouter();
  const { table_id } = router.query;
  return (
    <Flex>
      <AllTables />
      {table_id && <TableColumns />}
    </Flex>
  );
};

export default TableWrapper;
