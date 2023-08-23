import { FunctionComponent, useState } from "react";
import { Container, Stack, Box } from "@mui/material";

import { LayoutManager } from "./LayoutManager";

import sidenav from "./layouts/sidenav";
import basic from "./layouts/basic";
import simple from "./layouts/simple";

export const Main: FunctionComponent = () => {
  const [layout, setLayout] = useState(sidenav);

  return (
    <Container sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
      <Stack direction="row" spacing={0.5}>
        <button onClick={() => setLayout(basic)}>basic</button>
        <button onClick={() => setLayout(simple)}>simple</button>
        <button onClick={() => setLayout(sidenav)}>sidenav</button>
      </Stack>
      <Box sx={{ height: "80vh" }}>
        <LayoutManager layout={layout} />
      </Box>
    </Container>
  );
};


export const App: FunctionComponent = () => {
  return <Main />;
};

