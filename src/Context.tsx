import { createContext } from 'react';
import { SubscriptionPlans } from './types/subscription';
import { AiModels } from './types/aiModel';

export const SubscriptionPlanContext = createContext(SubscriptionPlans.FREE);
export const AiModelContext = createContext(AiModels.CHATGPT);