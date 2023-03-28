import React from "react";
import { useRouter } from "next/router";

const TableColumns = () => {
  const router = useRouter();
  const { table_id } = router.query;
  return <div>Columns for Table id {table_id}</div>;
};

export default TableColumns;
