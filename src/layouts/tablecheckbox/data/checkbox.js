import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import Checkbox from "@mui/material/Checkbox";

export default function Check() {
  return (
    <MDBox display="flex" alignItems="center" ml={-1}>
      <Checkbox />
      <MDTypography
        variant="button"
        fontWeight="regular"
        color="text"
        sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
      ></MDTypography>
    </MDBox>
  );
}
