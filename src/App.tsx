import { useState } from 'react';
import { FormControlLabel, Stack, Switch } from '@mui/material';
import ArticlesPage from './pages/ArticlesPage';
import './App.css';
import { SubscriptionPlans } from './types/subscription';
import { SubscriptionPlanContext } from './Context';

function App() {
  const [subscriptionPlan, setSubscriptionPlan] = useState(
    SubscriptionPlans.FREE,
  );

  const onPlanChange = () => {
    setSubscriptionPlan((previousPlan) => {
      if (previousPlan === SubscriptionPlans.FREE) {
        return SubscriptionPlans.PAID;
      }
      return SubscriptionPlans.FREE;
    });
  };

  return (
    <>
      <SubscriptionPlanContext.Provider value={subscriptionPlan}>
        <Stack direction="row" justifyContent="flex-end" width="100%">
          <FormControlLabel
            control={<Switch onChange={onPlanChange} color="secondary" />}
            label="Paid version"
          />
        </Stack>
        <ArticlesPage />
      </SubscriptionPlanContext.Provider>
    </>
  );
}

export default App;
