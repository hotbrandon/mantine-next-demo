import React from "react";
import { Button, NavLink, Box, Paper } from "@mantine/core";
import { IconDatabase, IconGridDots } from "@tabler/icons-react";
import Link from "next/link";

const DemoIndex = () => {
  return (
    <Paper ml={16}>
      <h3>Demo</h3>
      <Button
        leftIcon={<IconDatabase />}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
      >
        connect to database
      </Button>
      <Box w={240}>
        <Link href="/" passHref legacyBehavior>
          <NavLink
            label="Home"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link href="/demo/card-demo" passHref legacyBehavior>
          <NavLink
            label="Cards"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link href="/demo/data-tables" passHref legacyBehavior>
          <NavLink
            label="DataTables"
            icon={<IconGridDots size="1rem" stroke={1.5} />}
          />
        </Link>
        <NavLink
          label="First parent link"
          icon={<IconGridDots size="1rem" stroke={1.5} />}
          childrenOffset={28}
        >
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Nested parent link" childrenOffset={28}>
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Third child link" />
          </NavLink>
        </NavLink>

        <NavLink
          label="Second parent link"
          icon={<IconGridDots size="1rem" stroke={1.5} />}
          childrenOffset={28}
          defaultOpened
        >
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </Box>
    </Paper>
  );
};

export default DemoIndex;
