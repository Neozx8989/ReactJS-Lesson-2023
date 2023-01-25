import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimerActionButton from "./TimerActionButton";
import { renderElapsedString, renderEllapsedString } from "./Helpers";

export default function Timer({
  id,
  title,
  project,
  elapsed,
  runningSince,
  onTrashClick,
  onStartClick,
  onStopClick,
}) {
  const timer = renderEllapsedString(elapsed, runningSince);

  function handleStopClick(){
    onStopClick(id)
  }

  function handleStartClick() {
    onStartClick(id);
  }

  function handleDelete() {
    onTrashClick(id);
  }
  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          maxWidth: 345,
          margin: '0 auto',
          padding: '15px',
          marginBottom: 5,
        }}
      >
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <DeleteIcon onClick={handleDelete} />
          <ModeEditIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={runningSince}
          onStartClick={handleStartClick}
          onStopClick={handleStopClick}
        />
      </Card>
    </Container>
  );
}
