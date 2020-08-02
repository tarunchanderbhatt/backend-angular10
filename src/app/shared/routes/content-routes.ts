import { Routes } from '@angular/router';

export const contentroutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'products',
        loadChildren: () => import('../../components/products/products.module').then(m => m.ProductsModule)
    },
    {
        path: 'sales',
        loadChildren: () => import('../../components/sales/sales.module').then(m => m.SalesModule)
    },
    {
        path: 'master',
        loadChildren: () => import('../../components/masters/masters.module').then(m => m.MastersModule)
    },
    {
        path: 'users',
        loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'reports',
        loadChildren: () => import('../../components/reports/reports.module').then(m => m.ReportsModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('../../components/setting/setting.module').then(m => m.SettingModule)
    },
    {
        path: 'invoice',
        loadChildren: () => import('../../components/invoice/invoice.module').then(m => m.InvoiceModule)
    }
];
