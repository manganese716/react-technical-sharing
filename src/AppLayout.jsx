import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useSection } from "./SectionContext";

export const AppLayout = () => {
  const navigate = useNavigate();
  const section = useSection();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "10vw 90vw",
        backgroundColor: "#2e2e2e",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: 140,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 140,
            boxSizing: "border-box",
            backgroundColor: "#333",
          },
        }}
      >
        <List>
          {section.map((item) => (
            <ListItem
              sx={{
                margin: "0",
                padding: "0",
                color: "white",
              }}
              key={item.id}
            >
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemText
                  primary={item.text}
                  sx={{ "& .MuiTypography-root": { fontSize: "18px" } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingTop: "20px",
          paddingX: "10px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
