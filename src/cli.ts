#!/usr/bin/env node
import { createDefaultContext, loadPlanRegistry } from "./index";

interface ParsedArgs {
  help: boolean;
  version: boolean;
  list: boolean;
}

function parseArgs(argv: string[]): ParsedArgs {
  const [, , ...rest] = argv;
  return {
    help: rest.includes("--help") || rest.includes("-h"),
    version: rest.includes("--version") || rest.includes("-v"),
    list: rest.includes("--list") || rest.includes("-l"),
  };
}

function printHelp(): void {
  const helpText = `
cc-plans ─ plan scaffolding CLI

Usage:
  npx cc-plans [options]

Options:
  -h, --help      Show this help message
  -v, --version   Show package version
  -l, --list      List available plan blueprints
`;
  process.stdout.write(helpText);
}

function printVersion(): void {
  const pkg = require("../package.json") as { version?: string };
  process.stdout.write(`cc-plans v${pkg.version ?? "0.0.0"}\n`);
}

function listBlueprints(): void {
  const registry = loadPlanRegistry();

  if (registry.blueprints.length === 0) {
    process.stdout.write("No plan blueprints registered yet.\n");
    return;
  }

  const lines = registry.blueprints.map(
    (blueprint) => `- ${blueprint.id}: ${blueprint.description}`
  );
  process.stdout.write(`Available blueprints:\n${lines.join("\n")}\n`);
}

export async function runCli(argv: string[] = process.argv): Promise<void> {
  const args = parseArgs(argv);

  if (args.help) {
    printHelp();
    return;
  }

  if (args.version) {
    printVersion();
    return;
  }

  const context = createDefaultContext();
  process.stdout.write(
    `cc-plans is ready. Working directory: ${context.cwd}\n`
  );

  if (args.list) {
    listBlueprints();
  } else {
    process.stdout.write("Use --help to explore available commands.\n");
  }
}

if (require.main === module) {
  runCli().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
