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
/** Context of an `actionType: "create"` on the `somethingnewnew` model. */
export interface CreateSomethingnewnewActionContext extends AmbientContext {
    /**
    * model this action is operating on
    */
    model: somethingnewnew;

    /**
    * object specifying the trigger to this action (e.g. api call, webhook events etc.)
    */
    trigger: ActionTrigger;

    /**
    * object containing the incoming data(this models fields) passed by triggers or user inputs
    */
    params: {};

    /**
    * record object initiated
    */
    record: GadgetRecord<Select<Somethingnewnew, DefaultSomethingnewnewServerSelection>>;
    
    /**
    * @private
    */
    context: CreateSomethingnewnewActionContext;
}

/** Context of an `actionType: "update"` on the `somethingnewnew` model. */
export interface UpdateSomethingnewnewActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: somethingnewnew;
    
    /**
    * object specifying the trigger to this action (e.g. api call, webhook events etc.)
    */
    trigger: ActionTrigger;
    
    /**
    * object containing the incoming data(this models fields) and record ID passed by triggers or user inputs
    */
    params: {};
    
    /**
    * record object specified by ID to be updated
    */
    record: GadgetRecord<Select<Somethingnewnew, DefaultSomethingnewnewServerSelection>>;
    
    /**
    * @private
    */
    context: UpdateSomethingnewnewActionContext;
}

/** Context of an `actionType: "delete"` on the `somethingnewnew` model. */
export interface DeleteSomethingnewnewActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: somethingnewnew;
    
    /**
    * object specifying the trigger to this action (e.g. api call, webhook events etc.)
    */
    trigger: ActionTrigger;

    /**
    * record object specified by ID to be deleted
    */
    record: GadgetRecord<Select<Somethingnewnew, DefaultSomethingnewnewServerSelection>>;

    /**
    * @private
    */
    context: DeleteSomethingnewnewActionContext;
}