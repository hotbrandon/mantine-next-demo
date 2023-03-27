import useApi, { ApiResult } from "@/hooks/useAxios";
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  th: {
    padding: "0 !important",
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },
}));

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
