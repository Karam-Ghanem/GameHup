export interface Platform {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}
export default interface PlatformParent {
    id: number;
    name: string;
    platforms: Platform[];
}
