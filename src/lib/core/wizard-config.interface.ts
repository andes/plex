import { WizardConfig } from './wizard-config.interface';
export interface WizardConfig {
    id: string,
    steps: {
        title: string,
        content: string,
        imageClass?: string,
    }[],
    forceShow?: boolean,
}
