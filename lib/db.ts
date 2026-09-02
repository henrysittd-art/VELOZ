import fs from "node:fs/promises";
import path from "node:path";

/**
 * Adaptador de base de datos para leads del formulario.
 *
 * Etapa 1: escribe a un archivo JSON local en `data/leads.json`.
 * Etapa 2: reemplazar `db` por un adaptador Supabase (u otro) manteniendo
 *          la interfaz `DbAdapter`. Los consumidores (API routes) no cambian.
 */

export type Lead = {
  nombre: string;
  empresa: string;
  cargo?: string;
  telefono: string;
  correo: string;
  volumen: string;
  createdAt: string;
};

export interface DbAdapter {
  saveLead(lead: Lead): Promise<void>;
}

const jsonPath = path.join(process.cwd(), "data", "leads.json");

async function ensureFile() {
  await fs.mkdir(path.dirname(jsonPath), { recursive: true });
  try {
    await fs.access(jsonPath);
  } catch {
    await fs.writeFile(jsonPath, "[]", "utf-8");
  }
}

export const jsonDbAdapter: DbAdapter = {
  async saveLead(lead) {
    await ensureFile();
    const raw = await fs.readFile(jsonPath, "utf-8");
    const arr: Lead[] = raw.trim().length ? JSON.parse(raw) : [];
    arr.push(lead);
    await fs.writeFile(jsonPath, JSON.stringify(arr, null, 2), "utf-8");
  },
};

/**
 * Adaptador activo. Para migrar a Supabase:
 *   1. `npm install @supabase/supabase-js`
 *   2. Crear `supabaseDbAdapter` que implemente `DbAdapter`.
 *   3. Reemplazar la línea de abajo por `export const db = supabaseDbAdapter;`.
 * No hace falta tocar `app/api/leads/route.ts`.
 */
export const db: DbAdapter = jsonDbAdapter;
