import { useState } from 'react';
import {
  Button,
  FormControlLabel,
  Stack,
  Switch,
  Tooltip,
} from '@mui/material';
import ArticlesPage from './pages/ArticlesPage';
import { SubscriptionPlans } from './types/subscription';
import { SubscriptionPlanContext, AiModelContext } from './Context';
import JoyrideTour from './components/JoyrideTour';
import { AiModels } from './types/aiModel';
import AiModelsModal from './components/AiModelsModal';

function App() {
  const [subscriptionPlan, setSubscriptionPlan] = useState(
    SubscriptionPlans.FREE,
  );
  const [aiModel, setAiModel] = useState(AiModels.CHATGPT);
  const [open, setOpen] = useState(false);

  const onPlanChange = () => {
    setSubscriptionPlan((previousPlan) => {
      if (previousPlan === SubscriptionPlans.FREE) {
        return SubscriptionPlans.PAID;
      }
      return SubscriptionPlans.FREE;
    });
  };

  const onModelChange = (model: AiModels) => {
    setAiModel(model);
  };

  return (
    <>
      <SubscriptionPlanContext.Provider value={subscriptionPlan}>
        <AiModelContext.Provider value={aiModel}>
          <JoyrideTour />
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Tooltip title="Switching between models requires a paid subscription" placement="bottom">
              <div>
                <Button
                  disabled={subscriptionPlan === SubscriptionPlans.FREE}
                  color="secondary"
                  onClick={() => setOpen(true)}
                  id="change-models-button"
                >
                  Change AI Model
                </Button>
              </div>
            </Tooltip>
            <FormControlLabel
              control={
                <Switch
                  onChange={onPlanChange}
                  color="secondary"
                  id="subscription-plan-switch"
                />
              }
              label="Paid version"
            />
          </Stack>
          <ArticlesPage />
          <AiModelsModal
            open={open}
            setOpen={setOpen}
            setAiModel={onModelChange}
          />
        </AiModelContext.Provider>
      </SubscriptionPlanContext.Provider>
    </>
  );
}

export default App;
