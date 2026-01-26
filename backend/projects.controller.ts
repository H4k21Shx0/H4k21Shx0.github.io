// This is the NestJS Controller for retrieving projects
// Place this in your NestJS project, e.g., src/projects/projects.controller.ts

import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assuming you have a Prisma module
import { Project } from '@prisma/client';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany({
      orderBy: {
        createdAt: 'desc', // Or custom order field
      },
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });
    
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    return project;
  }
}