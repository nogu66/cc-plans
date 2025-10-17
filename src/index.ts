export interface CLIContext {
  /**
   * Base working directory where the CLI is executed.
   */
  cwd: string;
  /**
   * Directory that stores distributable templates.
   */
  templatesDir: string;
  /**
   * Directory that stores documentation assets.
   */
  docsDir: string;
}

export interface PlanBlueprint {
  /**
   * Unique identifier for the plan blueprint.
   */
  id: string;
  /**
   * Short description shown to users when selecting a blueprint.
   */
  description: string;
  /**
   * Where in the repository the blueprint resources live.
   */
  relativePath: string;
}

export interface PlanRegistry {
  blueprints: PlanBlueprint[];
}

/**
 * Create the default CLI context using conventional directory layout.
 */
export function createDefaultContext(cwd: string = process.cwd()): CLIContext {
  return {
    cwd,
    templatesDir: `${cwd}/templates`,
    docsDir: `${cwd}/docs`,
  };
}

/**
 * Returns a placeholder registry. Populate this with real plan blueprints later.
 */
export function loadPlanRegistry(): PlanRegistry {
  return {
    blueprints: [
      {
        id: "sample-agent",
        description: "Example agent plan. Replace with actual content.",
        relativePath: "templates/agents/sample-agent",
      },
    ],
  };
}

export { runCli } from "./cli";
