export const controller = `
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';

import { CreateStoreUseCase } from '../usecases/create-store.usecase';
import { DeleteStoreUseCase } from '../usecases/delete-store.usecase';
import { GetStoreByIdUseCase } from '../usecases/get-store-by-id.usecase';
import { ListStoresUseCase } from '../usecases/list-stores.usecase';
import { UpdateStoreUseCase } from '../usecases/update-store.usecase';

export class StoreController {
  public async create(req: Request, res: Response) {
    try {
      const { name, logoUrl, active, ownerId, password, address } = req.body;

      const result = await new CreateStoreUseCase().execute({ name, logoUrl, active, ownerId, password, address });

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const result = await new ListStoresUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new GetStoreByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const { name, logoUrl, active, ownerId, password, address } = req.body;

      const result = await new UpdateStoreUseCase().execute({ id, name, logoUrl, active, ownerId, password, address });

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new DeleteStoreUseCase().execute(id);
      
      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}`;
