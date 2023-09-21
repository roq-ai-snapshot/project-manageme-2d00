interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Project Manager', 'Team Member', 'Stakeholder', 'Client'],
  tenantName: 'Company',
  applicationName: 'project management tool',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own user data', 'View company information', 'View project details', 'View task details'],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage projects', 'Manage tasks'],
  getQuoteUrl: 'https://app.roq.ai/proposal/6a20a62e-5895-46a1-9a8c-c5d2d4a5e734',
};
