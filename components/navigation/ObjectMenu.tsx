import React from "react";
import Link from "next/link";
import { Box, NavLink } from "@mantine/core";
import { IconDatabase, IconGridDots } from "@tabler/icons-react";

const ObjectMenu = () => {
  return (
    <Box w={240}>
      <Link href="/" passHref legacyBehavior>
        <NavLink
          label="Dashboard"
          icon={<IconGridDots size="1rem" stroke={1.5} />}
        />
      </Link>
      <NavLink
        label="資料庫物件"
        icon={<IconGridDots size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <Link href="/schema/tables" passHref legacyBehavior>
          <NavLink
            label="Table"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link href="/schema/views" passHref legacyBehavior>
          <NavLink
            label="View"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link href="/schema/functions" passHref legacyBehavior>
          <NavLink
            label="Function"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link href="/schema/triggers" passHref legacyBehavior>
          <NavLink
            label="Trigger"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link href="/schema/procedures" passHref legacyBehavior>
          <NavLink
            label="Procedure"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
      </NavLink>

      <Link href="/demo" passHref legacyBehavior>
        <NavLink
          label="Mantine Demo"
          icon={<IconGridDots size="1rem" stroke={1.5} />}
        />
      </Link>
    </Box>
  );
};

export default ObjectMenu;
