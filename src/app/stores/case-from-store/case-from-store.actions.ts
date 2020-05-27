import {createAction, props} from '@ngrx/store';
import {
  AppCaseFromGroupType, AppCaseFromItemType,
  AppCaseFromProducerType,
  AppCaseFromProviderType,
  AppCaseFromSearchType,
  OtherInfoJson
} from './case-from-store.reducer';
import {MemberResultJson} from '../../models/data/member-result';
import {ProviderResultJson} from '../../models/data/provider-result';
import {ProducerResultJson} from '../../models/data/producer-result';
import {GroupResultJson} from '../../models/data/group-result';
import {PlanToPlanJson} from '../../models/data/plan-to-plan';

export const CaseFromStoreKey = 'CaseFromStore';

/**
 * set case from search type to case from store
 */
export const setCaseFromSearchType = createAction(
  `${CaseFromStoreKey}:setCaseFromSearchType`,
  props<{ searchType: AppCaseFromSearchType }>(),
);

/**
 * set case from item type to case from store
 */
export const setCaseFromItemType = createAction(
  `${CaseFromStoreKey}:setCaseFromItemType`,
  props<{ caseFromItemType: AppCaseFromItemType }>(),
);

/**
 * set case from search fields to case from store
 */
export const setCaseFromSearchFields = createAction(
  `${CaseFromStoreKey}:setCaseFromSearchFields`,
  props<{ fields: {[key: string]: string} }>(),
);

/**
 * set case from selected member to case from store
 */
export const setCaseFromSelectedMember = createAction(
  `${CaseFromStoreKey}:setCaseFromSelectedMember`,
  props<{ selectedMember: MemberResultJson }>(),
);

/**
 * set case from selected provider to case from store
 */
export const setCaseFromSelectedProvider = createAction(
  `${CaseFromStoreKey}:setCaseFromSelectedProvider`,
  props<{ selectedProvider: ProviderResultJson }>(),
);

/**
 * set case from selected producer to case from store
 */
export const setCaseFromSelectedProducer = createAction(
  `${CaseFromStoreKey}:setCaseFromSelectedProducer`,
  props<{ selectedProducer: ProducerResultJson }>(),
);

/**
 * set case from selected plan to case from store
 */
export const setCaseFromSelectedPlan = createAction(
  `${CaseFromStoreKey}:setCaseFromSelectedPlan`,
  props<{ selectedPlan: PlanToPlanJson }>(),
);

/**
 * set case from selected group to case from store
 */
export const setCaseFromSelectedGroup = createAction(
  `${CaseFromStoreKey}:setCaseFromSelectedGroup`,
  props<{ selectedGroup: GroupResultJson }>(),
);

/**
 * set case from selected other to case from store
 */
export const setCaseFromSelectedOther = createAction(
  `${CaseFromStoreKey}:setCaseFromSelectedOther`,
  props<{ selectedOther: OtherInfoJson }>(),
);

/**
 * set case from provider type
 */
export const setCaseFromProviderType = createAction(
  `${CaseFromStoreKey}:setCaseFromProviderType`,
  props<{ providerType: AppCaseFromProviderType }>(),
);

/**
 * set case from producer type
 */
export const setCaseFromProducerType = createAction(
  `${CaseFromStoreKey}:setCaseFromProducerType`,
  props<{ producerType: AppCaseFromProducerType }>(),
);

/**
 * set case from group type
 */
export const setCaseFromGroupType = createAction(
  `${CaseFromStoreKey}:setCaseFromGroupType`,
  props<{ groupType: AppCaseFromGroupType }>(),
);

/**
 * set case from paging information
 */
export const setCaseFromPaging = createAction(
  `${CaseFromStoreKey}:setCaseFromPaging`,
  props<{ page: number, size: number }>(),
);
