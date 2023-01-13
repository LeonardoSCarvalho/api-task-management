import { Request, Response } from "express"

export interface Controller {
  execute: (input: ControllerInput) => Promise<ControllerOutput>
}

export type ControllerInput = { request: Request; response: Response }
export type ControllerOutput = Response
