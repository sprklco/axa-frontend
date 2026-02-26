/**
 * Type definitions for ProductsSection
 */

export interface Product {
    id: string;
    title: string;
    image: string;
    description: string;
    subtext: string;
}

export interface ProductsSectionData {
    eyebrow: string;
    title: string;
    products: Product[];
}
