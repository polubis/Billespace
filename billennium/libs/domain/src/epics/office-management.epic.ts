import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { filter, of, switchMap, tap } from 'rxjs';
import { officeManagementActions } from '../slices';
import { BillespaceDomain } from '../store';

const { next, previous } = officeManagementActions;

export const nextEpic: Epic<AnyAction, AnyAction, BillespaceDomain> = (
  action$
) =>
  action$.pipe(
    filter(next.match),
    switchMap(() =>
      of(previous()).pipe(
        tap(() => {
          console.log('Test');
        })
      )
    )
  );
