# Partials

Partials in TypeScript are a powerful feature that allows you to create new types by making all properties of an existing type optional. This can be especially useful when working with complex data structures, such as objects with multiple properties, and you want to update them selectively without needing to provide values for all properties.

## Example

Consider a typical use case with a `TodoInput` type representing a to-do item:

```typescript
type TodoInput = {
	title: string;
	description: string;
	completed: boolean;
	id: number;
};
```

Now, let's say you want to update this to-do item, but you don't want to change all its properties. Instead, you only want to modify specific attributes. This is where Partial comes in handy

```typescript
type UpdateTodoInput = Partial<TodoInput>;
```

By using Partial<TodoInput>, you create a new type called UpdateTodoInput that has all the properties of TodoInput, but they are all optional. This means you can update the to-do item by providing only the properties you want to change, without touching the others.

### Practical Use Cases

1. **Partial Updates:** When you have a large object with many properties, and you want to apply partial updates without having to specify all the properties each time.

2. **Form Handling:** In web development, when handling forms, you can use Partial to represent the state of the form with all fields initially set to empty or default values, and then update them as the user interacts with the form.

3. **Database Updates:** When working with databases, you may want to update records by providing only the fields that need to change, leaving the rest unchanged.
