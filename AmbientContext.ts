import { Client } from "@gadget-client/qedgesrhaegrf";
import { FastifyBaseLogger } from "fastify";
import { AppConfiguration } from "./AppConfiguration";
import { AppConnections } from "./AppConnections";
import { Session } from "./Session";
import { GadgetMailer, RequestData } from "./types";


export type Logger = FastifyBaseLogger;

/** Represents context present in both actions and routes */
export interface AmbientContext {

    /** 
     * The current request's session, if it has one. Requests made by browsers are given sessions, but requests made using Gadget API Keys are not. 
     */
    session?: Session;
    
    /** 
     * The current request's session ID, if it has one. Requests made by browsers are given sessions, but requests made using Gadget API Keys are not. 
     */
    sessionID?: string;

    /** 
     * An object of all the environment variables created on Gadget 
     */
    config: AppConfiguration;

    /** 
     * An object containing client objects for all connections 
     */
    connections: AppConnections;

    /** 
     * Structured logger for the Gadget logs Viewer, supporting log levels via .info, .debug, and .error 
     */    
    logger: Logger;

    /**
     * A connected, authorized instance of the generated API client for the current Gadget app 
     */
    api: Client;

    /** 
     * An object describing the incoming HTTP request 
     */
    request?: RequestData;
    
    /** 
     * The current URL for your app 
     */
    currentAppUrl: string;
    
    /** 
     * An instance of the GadgetMailer, responsible for handling email sending 
     */ 
    emails: GadgetMailer;
}

