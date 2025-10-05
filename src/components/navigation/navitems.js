import 'primeicons/primeicons.css';

export const navitems = {
    pubNavItems: [
        {
            label: 'Home',
            icon: 'pi pi-home',
            to: "/",
            severity: 'info'
        },
        {
            label: 'Create Invoice',
            icon: 'pi pi-receipt',
            to: "/create-invoice",
            severity: 'success'
        },
        {
            label: 'Support',
            icon: 'pi pi-question',
            to: "/support",
            severity: 'help'
        }

    ],
    download: [
        {
            label: 'Download Invoice (Soon, Do not use)',
            icon: 'pi pi-receipt',
            to: "/download-invoice",
            severity:'info',
        }
    ]
};