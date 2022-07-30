import React from "react";
import { useTheme } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "../lib/utils";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function ToggleColorMode() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            checked={theme.palette.mode === "dark" ? true : false}
            onChange={colorMode.toggleColorMode}
          />
        }
        label={undefined}
      />
    </FormGroup>
  );
}
