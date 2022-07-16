import { BillespaceDomain } from '../store';

export const getStage = ({
  officeManagementReducer: { stage },
}: BillespaceDomain) => stage;
