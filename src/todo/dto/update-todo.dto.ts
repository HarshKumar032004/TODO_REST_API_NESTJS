import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  status: TodoStatus
}

enum TodoStatus{
  ACTIVE = 'ACTIVE',
  DONE = 'DONE'
}
