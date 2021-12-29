import { Button, Grid, Slider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import Board from "../components/Board";
import Modal from "../components/Modal";
import { useAppDispatch, useAppSelector } from "../hooks";
import useGameWebSocket from "../hooks/useGameWebSocket";
import { updateLevel } from "../redux/gameSlice";

import { LEVELS } from "../utils/constants";

function Home() {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const currentLevel = useAppSelector((store) => store.game.level);
  const verifyStatus = useAppSelector((store) => store.game.verifyStatus);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    pipes,
    columns,
    pipeCanvasSize,
    newLevel,
    getPipesMap,
    rotatePipe,
    verifyPipe,
  } = useGameWebSocket();

  const startGame = () => {
    newLevel(selectedLevel);
    getPipesMap();
    dispatch(updateLevel(selectedLevel));
  };

  const handleVerifyClick = () => {
    verifyPipe();
    setIsVerifyModalOpen(true);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" align="center">
        Pipes Game! - {pipes.length > 0 && "Level " + currentLevel}
      </Typography>
      <Box
        sx={{
          bgcolor: "primary",
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          alignItems: "center",
          p: 1,
          m: 1,
        }}
      >
        <Box style={{ minWidth: "360px" }}>
          <Typography variant="h6" align="center">
            Select Level
          </Typography>
          <Grid container justifyContent={"center"}>
            <Slider
              style={{ width: "300px" }}
              aria-label="Custom marks"
              defaultValue={1}
              step={1}
              min={1}
              max={6}
              valueLabelDisplay="auto"
              marks={LEVELS}
              value={selectedLevel}
              onChange={(event, newValue) => {
                if (newValue < 4) setSelectedLevel(newValue as number);
              }}
            />
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            style={{ marginTop: "1rem" }}
          >
            <Button variant="outlined" onClick={() => startGame()}>
              {pipes.length > 0 ? "New Game" : "Start Game"}
            </Button>
            <Button
              disabled={!(pipes.length > 0)}
              variant="outlined"
              onClick={() => handleVerifyClick()}
            >
              Verify
            </Button>
          </Grid>
        </Box>
        <Box>
          <Board
            pipes={pipes}
            columns={columns}
            rotatePipe={rotatePipe}
            pipeCanvasSize={pipeCanvasSize}
          />
        </Box>
      </Box>

      <Modal
        open={isVerifyModalOpen}
        title="Game Status"
        handleClose={() => setIsVerifyModalOpen(false)}
      >
        <Typography variant="h5" align="center">
          Status {verifyStatus}
        </Typography>
      </Modal>
    </div>
  );
}

export default Home;
