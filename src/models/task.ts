export enum TaskState {
	Creating = "creating",
	Created = "created",
}

export interface Task {
	id: number;
	title: string;
	concluded?: boolean;
	state?: TaskState;
}
