import { SidebarContainer, SidebarButton } from "./ShopSidebar.styled";

export default function ShopSidebar() {
    const shops = ["Mc Donny", "CFK", "ATB", "Epicentr"];
    return (
        <SidebarContainer>
            <p>Shops:</p>
            {shops.map(shop => {
                return <SidebarButton key={shop}>{shop}</SidebarButton>;
            })}
        </SidebarContainer>
    );
}
