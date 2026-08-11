/**
 * Extract the payload from one Server-Sent Events data line.
 *
 * The SSE grammar allows both `data:value` and `data: value`. OpenAI emits the
 * latter, while Hetzner's OpenAI-compatible endpoint emits the former.
 */
export function parseSseDataLine(line: string): string | null {
  const trimmed = line.trim();
  if (!trimmed) return null;

  const match = /^data:\s*(.*)$/.exec(trimmed);
  return match?.[1] ?? null;
}
