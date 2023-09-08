type TodoInput = {
	title: string;
	description: string;
	completed: boolean;
	id: number;
};

// Making all the attributes optional:
type UpdateTodoInput = Partial<TodoInput>;
