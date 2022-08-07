import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { openInNewTab } from "../lib/utils";
import { Tooltip, useTheme } from "@mui/material";

const actions = [
  {
    icon: <TwitterIcon />,
    name: "Twitter",
    function: () => {
      openInNewTab(
        "https://twitter.com/intent/tweet?text=This%20is%20some%20%23text%20on%20%40twitter%20www.twitter.com%20pic.twitter.com/n8gZ1tNCcp"
      );
    },
  },
  {
    icon: <WhatsAppIcon />,
    name: "Whatsapp",
    function: () => {
      openInNewTab(
        "https://wa.me/?text=I'm%20inquiring%20about%20the%20apartment%20listing"
      );
    },
  },
  {
    icon: <TelegramIcon />,
    name: "Telegram",
    function: () => {
      openInNewTab("https://t.me/share/url?url=https://google.com&text=Google");
    },
  },
  {
    icon: <FileCopyIcon />,
    name: "Copy",
    function: () => {
      console.log("copy share");

      navigator.clipboard.writeText("copied story link");
    },
  },
];

export default function ShareButton() {
  const theme = useTheme();

  const actionStyles = {
    margin: 0,
    padding: 0,
    boxShadow: "none",
  };

  const ShareButtonStyles = {
    "& .MuiFab-primary": {
      backgroundColor:
        theme.palette.mode === "dark" ? "transparent" : "transparent",
      color: theme.palette.mode === "dark" ? "white" : "black",
      boxShadow: "none",
      width: 40,
      height: 40,
      margin: 0,
      marginLeft: 0,
      padding: 0,
      "& .MuiSpeedDialIcon-icon": { fontSize: 12 },
      "&:hover": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 0.2)",
      },
    },
  };
  return (
    <Tooltip title="Share story" placement="left">
      <SpeedDial
        ariaLabel="Share"
        icon={<ShareIcon />}
        direction={"right"}
        sx={ShareButtonStyles}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.function}
            sx={actionStyles}
          />
        ))}
      </SpeedDial>
    </Tooltip>
  );
}
