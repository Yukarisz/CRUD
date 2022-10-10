import { Get, Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-user.dto';
import { UpdateClientDto } from '../dto/update-user.dto';
import { Client } from '../entities/client.entity';
import {Repository} from 'typeorm'


@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private ClientRepository: Repository<Client>,
  ) {}
  create(createClientDto: CreateClientDto) {
    return this.ClientRepository.save(createClientDto)
  }

  findAll() {
    return this.ClientRepository.find();
  }
  
  findOne(id: number): Promise<Client> {
    return this.ClientRepository.findOneBy({ id });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.ClientRepository.update;
  }

  async remove(id: string): Promise<void> {
    await this.ClientRepository.delete(id);
  }
}
