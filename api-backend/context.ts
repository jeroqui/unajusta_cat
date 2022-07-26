import { PrismaClient } from "@prisma/client";
import { ExpressContext } from "apollo-server-express";
import { Request, Response } from 'express';
import { prisma } from "./clients/prisma";

export interface Context {
    request: Request,
    response: Response,
    prisma: PrismaClient
}

export async function createContext(
    request: ExpressContext
): Promise<Partial<Context>> {
    return {
        ...request,
        response: request.res,
        request: request.req,
        prisma: prisma
    }
}