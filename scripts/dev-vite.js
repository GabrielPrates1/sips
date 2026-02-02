import { spawn } from "child_process";

async function start() {
  console.log("🚀 Iniciando servidor Vite em modo debug...\n");

  const vite = spawn("node", ["--inspect", "./node_modules/vite/bin/vite.js"], {
    cwd: process.cwd(),
    stdio: "inherit",
    env: process.env,
  });

  process.on("SIGINT", () => {
    console.log("\n⛔ Encerrando Vite...");
    vite.kill("SIGINT");
    process.exit(0);
  });
}

start();
