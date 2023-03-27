import useApi, { ApiResult } from "@/hooks/useAxios";

interface DbTable {
  id: number;
  table_name: string;
  tablespace_name: string;
  comments: string;
}

const AllTables = () => {
  const { data, isLoading, error }: ApiResult<DbTable[]> =
    useApi<DbTable[]>("/db-schema/tables");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data &&
        data.map((item: DbTable) => (
          <div key={item.id}>
            <p>
              {item.table_name} - {item.comments}
            </p>
          </div>
        ))}
    </div>
  );
};

export default AllTables;
