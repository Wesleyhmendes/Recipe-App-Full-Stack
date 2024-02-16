import mapStatusHTTP from "../utils/mapStatusHTTP";
import MealsService from "../services/MealsService";
import { Request, Response } from "express";

export default class MealsController {
  constructor(private mealsService = new MealsService()) {}

  async getAllMealsRecipe(req: Request, res: Response) {
    const {q} = req.query;
    if(q) {
      const {status, data} = await this.mealsService.getRecipeByName(q as string);
      return res.status(mapStatusHTTP(status)).json(data);
    }
    const {status, data} = await this.mealsService.getAllMealsRecipe();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getByFirstLetter(req: Request, res: Response) {
    const {q} = req.query;
    const {status, data} = await this.mealsService.getByFirstLetter(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}