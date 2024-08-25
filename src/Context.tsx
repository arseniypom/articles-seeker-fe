import { createContext } from 'react';
import { SubscriptionPlans } from './types/subscription';

export const SubscriptionPlanContext = createContext(SubscriptionPlans.FREE);