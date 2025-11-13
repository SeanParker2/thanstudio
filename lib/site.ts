export function getBaseOrigin(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function getBaseUrl(): string {
  return `${getBaseOrigin()}${getBasePath()}`.replace(/\/$/, '');
}

export function withBasePath(path: string): string {
  const bp = getBasePath();
  const p = path.startsWith('/') ? path : `/${path}`;
  return bp ? `${bp}${p}` : p;
}
