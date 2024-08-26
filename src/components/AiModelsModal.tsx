import {
  Box,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Dispatch, useContext } from 'react';
import { AiModelContext } from '../Context';
import { AiModels } from '../types/aiModel';

interface AiModelsModalProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
  setAiModel: Dispatch<AiModels>;
}

function AiModelsModal({ open, setOpen, setAiModel }: AiModelsModalProps) {
  const aiModel = useContext(AiModelContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAiModel(event.target.value as AiModels);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Change AI Model
        </Typography>
        <Typography id="modal-modal-description" sx={{ my: 2 }}>
          Here you can choose which model to use:
          <br />
          GPT 4o or GigaChat
        </Typography>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={aiModel}
          onChange={handleChange}
        >
          <FormControlLabel
            value={AiModels.CHATGPT}
            control={<Radio />}
            label="GPT 4o"
          />
          <FormControlLabel
            value={AiModels.GIGACHAT}
            control={<Radio />}
            label="GigaChat"
          />
        </RadioGroup>
      </Box>
    </Modal>
  );
}

export default AiModelsModal;
