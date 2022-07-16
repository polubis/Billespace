/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '../abstraction';

export const OFFICE_MANAGEMENT_STAGES = [
  'OFFICE_DETAILS',
  'OFFICE_ZONES',
  'DESKS_SETUP',
  'PARKING_ZONES',
  'PARKING_SPACES',
  'OFFICE_MAP',
  'SUMMARY',
] as const;
export const OFFICE_MANAGEMENT_STATUSES = [
  'IDLE',
  'PENDING',
  'DONE',
  'FAIL',
] as const;

export type OfficeManagementStage = typeof OFFICE_MANAGEMENT_STAGES[number];
export type OfficeManagementStatus = typeof OFFICE_MANAGEMENT_STATUSES[number];

export interface OfficeManagementState {
  stage: OfficeManagementStage;
  status: OfficeManagementStatus;
}

const STATE: OfficeManagementState = {
  stage: OFFICE_MANAGEMENT_STAGES[0],
  status: OFFICE_MANAGEMENT_STATUSES[0],
};

const getCurrentStageIdx = (stage: OfficeManagementStage): number => {
  return OFFICE_MANAGEMENT_STAGES.findIndex((currStage) => currStage === stage);
};

export const [officeManagementReducer, officeManagementActions] = createSlice(
  'officeManagement',
  STATE,
  {
    next: (state) => {
      const idx = getCurrentStageIdx(state.stage) + 1;

      if (idx >= OFFICE_MANAGEMENT_STAGES.length) {
        return;
      }

      state.stage = OFFICE_MANAGEMENT_STAGES[idx];
    },
    previous: () => {
      return;
    },
  }
);
