import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box, Button } from "@mui/material";

export const ButtonDarkMode = ({ darkMode, darkStyle, handleDarkMode }) => {
  return (
    <>
      <Button onClick={handleDarkMode}>
        {darkMode ? (
          <Box sx={{ darkStyle }}>
            <LightModeIcon sx={darkStyle} />
          </Box>
        ) : (
          <Box sx={{ darkStyle }}>
            <DarkModeIcon sx={darkStyle} />
          </Box>
        )}
      </Button>
    </>
  );
};
