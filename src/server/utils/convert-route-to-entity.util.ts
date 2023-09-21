const mapping: Record<string, string> = {
  companies: 'company',
  projects: 'project',
  tasks: 'task',
  teams: 'team',
  users: 'user',
  'user-tasks': 'user_task',
  'user-teams': 'user_team',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
