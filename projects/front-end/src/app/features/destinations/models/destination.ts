import { Step } from "./step";

export interface Destination {
    id: number;
    title: string;
    steps: Step[];
}