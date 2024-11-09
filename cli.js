#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// const { Command } = require("commander");
// import inquirer from "inquirer";
// const fs = require("fs-extra");
// const path = require("path");

// Configuração para __dirname com módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .version("1.0.0")
  .description("CLI para criar landing pages Next.js a partir de templates");

// Caminho para os templates
const templatesDir = path.join(__dirname, "./templates/");

// Comando para criar um novo projeto
program
  .command("create")
  .description("Cria um novo projeto de landing page")
  .action(async () => {
    try {
      // Perguntar o nome do projeto
      const { projectName } = await inquirer.prompt([
        {
          type: "input",
          name: "projectName",
          message: "Digite o nome do novo projeto:",
          validate: (input) =>
            input ? true : "O nome do projeto não pode estar vazio.",
        },
      ]);

      // Perguntar qual template usar
      const { chosenTemplate } = await inquirer.prompt([
        {
          type: "list",
          name: "chosenTemplate",
          message: "Escolha um template:",
          choices: [
            { name: "weddings", value: "weddings" },
            { name: "iphone", value: "iphone" },
            { name: "artists", value: "artists" },
          ],
        },
      ]);

      // Definir o caminho do template escolhido e do novo projeto
      const templatePath = path.join(templatesDir, chosenTemplate);
      const projectPath = path.join(process.cwd(), projectName);

      // Copiar o template para a pasta do novo projeto
      await fs.copy(templatePath, projectPath);
      console.log(
        `Projeto '${projectName}' criado com sucesso em ${projectPath}`,
      );
    } catch (error) {
      console.error("Erro ao criar o projeto:", error);
    }
  });

program.parse(process.argv);
