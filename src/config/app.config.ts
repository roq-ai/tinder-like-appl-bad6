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
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Tinder like application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal profile',
    'Manage personal interests',
    'View match information',
    'View activity information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage interest data', 'Manage match data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/23a43eab-ffd2-458d-a9aa-fb37b7d03e94',
};
