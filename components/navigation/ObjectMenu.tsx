import React from "react";
import Link from "next/link";
import { Box, NavLink, ThemeIcon } from "@mantine/core";
import {
  IconDatabase,
  IconPoint,
  IconLayoutDashboard,
  IconFileDatabase,
  IconBrandReact,
} from "@tabler/icons-react";

const ObjectMenu = () => {
  return (
    <Box w={240}>
      <Link href="/" passHref legacyBehavior>
        <NavLink
          label="Dashboard"
          icon={
            <ThemeIcon>
              <IconLayoutDashboard size="1rem" />
            </ThemeIcon>
          }
        />
      </Link>
      <NavLink
        label="資料庫物件"
        icon={
          <ThemeIcon>
            <IconDatabase size="1rem" />
          </ThemeIcon>
        }
        childrenOffset={28}
        defaultOpened
      >
        <Link href="/schema/tables" passHref legacyBehavior>
          <NavLink label="Table" icon={<IconPoint size="1rem" />} />
        </Link>
        <Link href="/schema/views" passHref legacyBehavior>
          <NavLink label="View" icon={<IconPoint size="1rem" />} />
        </Link>
        <Link href="/schema/functions" passHref legacyBehavior>
          <NavLink label="Function" icon={<IconPoint size="1rem" />} />
        </Link>
        <Link href="/schema/triggers" passHref legacyBehavior>
          <NavLink label="Trigger" icon={<IconPoint size="1rem" />} />
        </Link>
        <Link href="/schema/procedures" passHref legacyBehavior>
          <NavLink label="Procedure" icon={<IconPoint size="1rem" />} />
        </Link>
      </NavLink>
      <NavLink
        label="FORM 物件"
        icon={
          <ThemeIcon>
            <IconFileDatabase size="1rem" />
          </ThemeIcon>
        }
        childrenOffset={28}
        defaultOpened
      >
        <Link href="/schema/functions" passHref legacyBehavior>
          <NavLink label="Function" icon={<IconPoint size="1rem" />} />
        </Link>
        <Link href="/schema/triggers" passHref legacyBehavior>
          <NavLink label="Trigger" icon={<IconPoint size="1rem" />} />
        </Link>
        <Link href="/schema/procedures" passHref legacyBehavior>
          <NavLink label="Procedure" icon={<IconPoint size="1rem" />} />
        </Link>
      </NavLink>
      <NavLink
        label="UI components"
        icon={
          <ThemeIcon>
            <IconBrandReact size="1rem" />
          </ThemeIcon>
        }
        childrenOffset={28}
      >
        <Link href="/demo/tables" passHref legacyBehavior>
          <NavLink label="Tables" icon={<IconPoint size="1rem" />} />
        </Link>
      </NavLink>
    </Box>
  );
};

export default ObjectMenu;
