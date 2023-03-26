import { Container } from "@mantine/core";
import Head from "next/head";
import ToggleThemesButton from "@/components/ToggleThemesButton";

const MasterLayout = ({ children }) => {
  return (
    <Container fluid>
      <Head>
        <title>Next.js with Mantine and TypeScript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToggleThemesButton />
      {children}
    </Container>
  );
};

export default MasterLayout;
