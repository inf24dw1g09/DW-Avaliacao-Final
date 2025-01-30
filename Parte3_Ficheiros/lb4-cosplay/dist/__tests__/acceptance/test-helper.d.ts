import { Lb4CosplayApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Lb4CosplayApplication;
    client: Client;
}
