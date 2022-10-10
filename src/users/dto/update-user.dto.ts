import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-user.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {}
