const mapping: Record<string, string> = {
  activities: 'activity',
  companies: 'company',
  interests: 'interest',
  matches: 'match',
  profiles: 'profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
