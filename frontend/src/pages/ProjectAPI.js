import { ProjectRouteContext } from "../routes/ProjectRoute";
import { useContext } from "react";
import OpenAPI from "../components/openapi/OpenAPI";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LoadingButton from "@mui/lab/LoadingButton";

const apiPath = "http://localhost:8080/api/values";

const ProjectAPI = () => {
  const { project } = useContext(ProjectRouteContext);

  return (
    <Container sx={{ mt: 3, pb: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          API
        </Typography>
      </Box>
      <Typography variant="h7" sx={{ pb: 10 }}>
        Below is your API key which you can use to access your project's data
        using the API. Keep this key safe in a secret place.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            maxWidth: "fit-content",
            p: 2,
            mt: 1.5,
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          {project.apiKey}
        </Box>

        <Typography variant="caption" sx={{ mt: 1, mb: 2, color: "gray" }}>
          If you feel your key has been compromised, click <b>Reset API Key</b>{" "}
          to reset your API key.
        </Typography>
      </Box>
      <LoadingButton variant="outlined" disableElevation>
        Reset API Key
      </LoadingButton>

      <Divider sx={{ mb: 3, mt: 4 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 3,
          mb: 1,
        }}
      >
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Endpoints
        </Typography>
      </Box>

      <Typography variant="h7">
        The API provides you with a set of endpoints that allow you to read and
        write data to a field in a project of your choice. The API can be called
        just with any HTTP Client, like Postman, Insomnia, or even right here in
        the browser.
      </Typography>
      <Box sx={{ my: 3 }} />

      <OpenAPI />
    </Container>
  );
};

export default ProjectAPI;
