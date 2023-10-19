import { Bugsnag } from '@bugsnag/js';
import {ModuleMetadata} from "@nestjs/common/interfaces";

export interface BugsnagClientInterface extends Bugsnag.Client {}

export type BugsnagModuleOptions = string | Bugsnag.IConfig;

export interface BugsnagModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => Promise<BugsnagModuleOptions> | BugsnagModuleOptions;
  inject?: any[];
}
