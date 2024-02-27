import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, Somethingnewnew } from "@gadget-client/asfgasgasdfg";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultSomethingnewnewServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly something: true;
};
/** All the data passed to an effect or precondition within the `create` action on the `somethingnewnew` model. */
export interface CreateSomethingnewnewActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `somethingnewnew` record this action is operating on.
    */
    record: GadgetRecord<Select<Somethingnewnew, DefaultSomethingnewnewServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    /**
    * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
    */
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: CreateSomethingnewnewActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `somethingnewnew` model. */
export interface UpdateSomethingnewnewActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `somethingnewnew` record this action is operating on.
    */
    record: GadgetRecord<Select<Somethingnewnew, DefaultSomethingnewnewServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    /**
    * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
    */
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: UpdateSomethingnewnewActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `somethingnewnew` model. */
export interface DeleteSomethingnewnewActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `somethingnewnew` record this action is operating on.
    */
    record: GadgetRecord<Select<Somethingnewnew, DefaultSomethingnewnewServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    /**
    * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
    */
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: DeleteSomethingnewnewActionContext;
}
/** All the data passed to an effect or precondition within the `asd` action on the `somethingnewnew` model. */
export interface AsdSomethingnewnewActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `somethingnewnew` record this action is operating on.
    */
    record: GadgetRecord<Select<Somethingnewnew, DefaultSomethingnewnewServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    /**
    * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
    */
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: AsdSomethingnewnewActionContext;
}
