import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0494F5",
    },
    secondary: {
      main: "#7B7B7B",
    },
  },
  typography: {
    fontFamily: "SF Pro Display",
    h1: {
      fontSize: 24,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
    },
    overline: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "0em",
      textAlign: "left",
      color: "#7B7B7B",
      textTransform: "none",
      marginBottom: 8,
      lineHeight: "19.6px",
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "25px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          width: "100%",
          borderRadius: 8,
          borderWidth: 1,
          gap: 8,
          padding: 16,
          textTransform: "none",
          boxShadow: "none",
          transition: "background-color 0.3s ease",
          fontSize: 16,
          fontWeight: 600,
        },
        outlined: {
          borderWidth: 1,
        },
        containedPrimary: {
          backgroundColor: "#0494F5",
          color: "#FFFFFF",
          border: "none",
          borderColor: " #BDC7CB",
          "&:hover": {
            backgroundColor: "#5fadfc",
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: "#5fadfc",
            boxShadow: "none",
          },
          "&:disabled": {
            backgroundColor: "#AEB7CE",
            color: "#FFFFFF",
            boxShadow: "none",
          },
        },
        containedSecondary: {
          backgroundColor: "#F0F9FF",
          color: "#0494F5",
          border: "none",
          borderColor: " #BDC7CB",
          "&:hover": {
            backgroundColor: "#F0F9FF",
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: "#F0F9FF",
            boxShadow: "none",
          },
          "&:disabled": {
            backgroundColor: "#AEB7CE",
            color: "#FFFFFF",
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#BDC7CB",
          fontWeight: 400,
          "& .MuiInputLabel-root": {
            color: "#BDC7CB",
          },
          "&:active": {
            borderColor: "#BDC7CB",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#0494F5",
          "&.Mui-checked": {
            color: "#0494F5",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#0494F5",
          backgroundColor: "#F0F9FF",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
