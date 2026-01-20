// src/utils/sheetParser.ts

/** Remove emojis/control chars and collapse spaces */
export function cleanText(text: string): string {
  return text
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2600-\u26FF]|\u200D|\uFE0F|\u2069|\u2066|\u2068|\u2067)/g,
      ""
    )
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** RFC4180-ish CSV parser (handles quotes & commas inside quotes) */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let cell = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cell += '"'; // escaped "
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      row.push(cleanText(cell));
      cell = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && next === "\n") i++; // handle CRLF
      row.push(cleanText(cell));
      cell = "";
      if (row.some((c) => c.length)) rows.push(row); // keep only non-empty rows
      row = [];
    } else {
      cell += ch;
    }
  }

  if (cell.length || row.length) {
    row.push(cleanText(cell));
    if (row.some((c) => c.length)) rows.push(row);
  }

  return rows;
}
