import React from "react";
import { useRouter } from "next/router";

const TableColumns = () => {
  const router = useRouter();
  const { table_id } = router.query;
  return <div>columns for table id {table_id}</div>;
};

export default TableColumns;
