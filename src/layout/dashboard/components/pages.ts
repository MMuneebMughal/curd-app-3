import { Link } from "react-router-dom";
export const pages = [
    {
        title: 'Dashboard',
        path: '/',
        component: Link,
        icon: 'Dashboard'
    },
    {
        title: 'Orders',
        path: '/orders',
        component: Link,
        icon: 'ShoppingCart'
    },
    {
        title: 'Customers',
        path: '/customers',
        component: Link,
        icon: 'People'
    },
    {
        title: 'Products',
        path: '/products',
        component: Link,
        icon: 'Inventory2'
    },
    {
        title: 'Reports',
        path: '/reports',
        component: Link,
        icon: 'BarChart'
    },
    {
        title: 'Integrations',
        path: '/integrations',
        component: Link,
        icon: 'Layers'
    },
    {
        title: 'Users',
        path: '/users',
        component: Link,
        icon: 'People'
    },
]