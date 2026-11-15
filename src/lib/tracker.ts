// The layoffs tracker's published metrics (github.com/tanner-k/layoffs-tracker, data/latest.json).
// Fetched at build time; any problem fails the build so Pages keeps the last good deploy.

export const TRACKER_REPO = 'https://github.com/tanner-k/layoffs-tracker';
const DEFAULT_URL =
  'https://raw.githubusercontent.com/tanner-k/layoffs-tracker/main/data/latest.json';

export type Method = 'paper_audited' | 'jev';

export interface PeriodShare {
  method: Method;
  total: number;
  ai_true: number;
  unresolved: number;
  share_low: number | null;
  share_high: number | null;
}

export interface Tracker {
  schema_version: 1;
  generated_at: string; // ISO 8601, UTC
  data_through: string; // YYYY-MM, last complete month
  method_switch: string; // YYYY-MM, first month labeled by Jev alone
  sources: { jev_model: string; kadoa_sha: string; sec_phrases: string[]; warn_states: string[] };
  sec_monthly: { month: string; filings: number }[];
  ai_quarterly: (PeriodShare & { quarter: string })[];
  ai_yearly: (PeriodShare & { year: number })[];
  warn_monthly: { month: string; notices: number; workers: number; notices_missing_workers: number }[];
}

export async function loadTracker(url = import.meta.env.TRACKER_JSON_URL ?? DEFAULT_URL): Promise<Tracker> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`layoffs tracker: ${url} returned HTTP ${res.status}`);
  const data = (await res.json()) as Tracker;
  if (data.schema_version !== 1) {
    throw new Error(`layoffs tracker: schema_version ${data.schema_version}, expected 1`);
  }
  for (const key of ['sec_monthly', 'ai_quarterly', 'ai_yearly', 'warn_monthly'] as const) {
    if (!Array.isArray(data[key]) || data[key].length === 0) {
      throw new Error(`layoffs tracker: ${key} is missing or empty`);
    }
  }
  return data;
}

/** "2026-10" -> "October 2026" */
export function monthName(ym: string): string {
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** "2026-10" -> "2026Q4" */
export function quarterOf(ym: string): string {
  const [y, m] = ym.split('-').map(Number);
  return `${y}Q${Math.floor((m - 1) / 3) + 1}`;
}

/** Days from the end of month `ym` to `now`. */
export function daysSince(ym: string, now: Date): number {
  const [y, m] = ym.split('-').map(Number);
  const monthEnd = Date.UTC(y, m, 0, 23, 59, 59);
  return Math.floor((now.getTime() - monthEnd) / 86_400_000);
}

export const pct = (x: number | null) => (x === null ? '–' : `${Math.round(x * 100)}%`);
